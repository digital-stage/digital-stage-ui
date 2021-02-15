import React from 'react';
import Box from '../../ui/Layout/Box';
import Flex from '../../ui/Layout/Flex';
import Prism from 'prismjs';
import { PrimaryIconButton } from '../Inputs/IconButton';
import { FiCopy } from 'react-icons/fi';
import { FcCheckmark } from 'react-icons/fc';

const Code = (props: { children: string; language: string }) => {
  const { children, language } = props;
  const [copied, setCopied] = React.useState<boolean>(false);

  React.useEffect(() => {
    Prism.highlightAll();
  }, []);

  React.useEffect(() => {
    if (copied)
      setTimeout(() => {
        setCopied(false);
      }, 2000);
  }, [copied]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(children);
    setCopied(true);
  };

  return (
    <Flex sx={{ width: '100%', justifyContent: 'center' }}>
      <Box>
        <Box sx={{ width: '100%', textAlign: 'right' }}>
          <PrimaryIconButton onClick={copyToClipboard}>
            {!copied ? <FiCopy /> : <FcCheckmark />}
          </PrimaryIconButton>
        </Box>

        <pre style={{ width: '60vw', borderRadius: '16px' }}>
          <code className={language}>{children}</code>
        </pre>
      </Box>
    </Flex>
  );
};

export default Code;

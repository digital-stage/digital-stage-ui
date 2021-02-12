import React from 'react';
import { FiEdit2 } from 'react-icons/fi';
import { Box } from 'theme-ui';
import Code from '../../ui/Components/Code';
import Frame from '../../ui/Components/Frame';
import { PrimaryIconButton, TertiaryIconButton } from '../../ui/Inputs/IconButton';
import { H3 } from '../../ui/Typography/Heading';

const Icon = () => {
  return (
    <Frame>
      <Box sx={{ minWidth: '100%', width: '100%', bg: 'gray.4', py: 5 }}>
        <H3>Inline icon button</H3>
        <Box ml={7}>
          <PrimaryIconButton>
            <FiEdit2 />
          </PrimaryIconButton>
          <TertiaryIconButton>
            <FiEdit2 />
          </TertiaryIconButton>
        </Box>
        <Code language="language-html">{`<PrimaryIconButton>
    <FiEdit2 />
</PrimaryIconButton>
<TertiaryIconButton>
    <FiEdit2 />
</TertiaryIconButton>`}</Code>
      </Box>
      <Box sx={{ minWidth: '100%', width: '100%', bg: 'text', py: 5 }}>
        <H3 variant="dark">Inline icon button</H3>
        <Box ml={7}>
          <PrimaryIconButton>
            <FiEdit2 />
          </PrimaryIconButton>
          <TertiaryIconButton>
            <FiEdit2 />
          </TertiaryIconButton>
        </Box>
        <Code language="language-html">{`<PrimaryIconButton>
    <FiEdit2 />
</PrimaryIconButton>
<TertiaryIconButton>
    <FiEdit2 />
</TertiaryIconButton>`}</Code>
      </Box>
    </Frame>
  );
};

export default Icon;

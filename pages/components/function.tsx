import React from 'react';
import { ImPhoneHangUp } from 'react-icons/im';
import Box from '../../ui/Layout/Box';
import Code from '../../ui/Components/Code';
import Frame from '../../ui/Components/Frame';
import {
  DangerFunctionIconButton,
  PrimaryFunctionIconButton,
} from '../../ui/Inputs/FunctionIconButton';
import { H3, H4 } from '../../ui/Typography/Heading';

const Function = () => {
  return (
    <Frame>
      <Box sx={{ minWidth: '100%', width: '100%', bg: 'gray.4', py: 5 }}>
        <H3>Function button</H3>
        <H4 sx={{ mt: 4 }}>Primary function</H4>
        <Box ml={7}>
          <PrimaryFunctionIconButton>
            <ImPhoneHangUp size="24px" />
          </PrimaryFunctionIconButton>
          <PrimaryFunctionIconButton disabled sx={{ ml: 4 }}>
            <ImPhoneHangUp size="24px" />
          </PrimaryFunctionIconButton>
        </Box>
        <Code language="language-html">{`<PrimaryFunctionIconButton>
    <ImPhoneHangUp size="24px" />
</PrimaryFunctionIconButton>
<PrimaryFunctionIconButton disabled>
    <ImPhoneHangUp size="24px" />
</PrimaryFunctionIconButton>`}</Code>
        <H4 sx={{ mt: 4 }}>Danger function</H4>
        <Box ml={7}>
          <DangerFunctionIconButton>
            <ImPhoneHangUp size="24px" />
          </DangerFunctionIconButton>
          <DangerFunctionIconButton disabled sx={{ ml: 4 }}>
            <ImPhoneHangUp size="24px" />
          </DangerFunctionIconButton>
        </Box>
        <Code language="language-html">{`<DangerFunctionIconButton>
    <ImPhoneHangUp size="24px" />
</DangerFunctionIconButton>
<DangerFunctionIconButton disabled>
    <ImPhoneHangUp size="24px" />
</DangerFunctionIconButton>`}</Code>
      </Box>
      <Box sx={{ minWidth: '100%', width: '100%', bg: 'text', py: 5 }}>
        <H3 darkMode>Toggle button</H3>
        <H4 sx={{ mt: 4 }} darkMode>
          Primary toggle
        </H4>
        <Box ml={7}>
          <PrimaryFunctionIconButton>
            <ImPhoneHangUp size="24px" />
          </PrimaryFunctionIconButton>
          <PrimaryFunctionIconButton disabled sx={{ ml: 4 }}>
            <ImPhoneHangUp size="24px" />
          </PrimaryFunctionIconButton>
        </Box>
        <Code language="language-html">{`<PrimaryFunctionIconButton>
    <ImPhoneHangUp size="24px" />
</PrimaryFunctionIconButton>
<PrimaryFunctionIconButton disabled>
    <ImPhoneHangUp size="24px" />
</PrimaryFunctionIconButton>`}</Code>
        <H4 sx={{ mt: 4 }} darkMode>
          Danger toggle
        </H4>
        <Box ml={7}>
          <DangerFunctionIconButton>
            <ImPhoneHangUp size="24px" />
          </DangerFunctionIconButton>
          <DangerFunctionIconButton disabled sx={{ ml: 4 }}>
            <ImPhoneHangUp size="24px" />
          </DangerFunctionIconButton>
        </Box>
        <Code language="language-html">{`<DangerFunctionIconButton>
    <ImPhoneHangUp size="24px" />
</DangerFunctionIconButton>
<DangerFunctionIconButton disabled>
    <ImPhoneHangUp size="24px" />
</DangerFunctionIconButton>`}</Code>
      </Box>
    </Frame>
  );
};

export default Function;

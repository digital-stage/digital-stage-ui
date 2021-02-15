import React from 'react';
import { BiPlus } from 'react-icons/bi';
import Box from '../../ui/Layout/Box';
import Code from '../../ui/Components/Code';
import Frame from '../../ui/Components/Frame';
import {
  DangerButton,
  PrimaryButton,
  SecondaryButton,
  TertiaryButton,
} from '../../ui/Inputs/Button';
import { H3, H4 } from '../../ui/Typography/Heading';

const Button = () => {
  return (
    <Frame>
      <Box sx={{ minWidth: '100%', width: '100%', bg: 'gray.4', py: 5 }}>
        <H3>Text buttons</H3>
        <H4 sx={{ mt: 4 }}>Primary</H4>
        <Box ml={7}>
          <PrimaryButton>Button level 1</PrimaryButton>
          <PrimaryButton disabled>Disabled level 1</PrimaryButton>
          <PrimaryButton>
            <BiPlus size="16px" style={{ verticalAlign: 'middle' }} /> Icon level 1
          </PrimaryButton>
        </Box>
        <Code language="language-html">
          {`<PrimaryButton>Button level 1</PrimaryButton>
<PrimaryButton disabled>Disabled level 1</PrimaryButton>
<PrimaryButton>
    <BiPlus size="16px" style={{ verticalAlign: 'middle' }} /> Icon level 1
</PrimaryButton>`}
        </Code>
        <H4 sx={{ mt: 4 }}>Secondary</H4>
        <Box ml={7}>
          <SecondaryButton>Button level 2</SecondaryButton>
          <SecondaryButton disabled>Disabled level 2</SecondaryButton>
          <SecondaryButton>
            <BiPlus size="16px" style={{ verticalAlign: 'middle' }} /> Icon level 2
          </SecondaryButton>
        </Box>
        <Code language="language-html">
          {`<SecondaryButton>Button level 2</SecondaryButton>
<SecondaryButton disabled>Disabled level 2</SecondaryButton>
<SecondaryButton>
    <BiPlus size="16px" style={{ verticalAlign: 'middle' }} /> Icon level 2
</SecondaryButton>`}
        </Code>
        <H4 sx={{ mt: 4 }}>Tertiary</H4>
        <Box ml={7}>
          <TertiaryButton>Button level 3</TertiaryButton>
          <TertiaryButton disabled>Disabled level 3</TertiaryButton>
          <TertiaryButton>
            <BiPlus size="16px" style={{ verticalAlign: 'middle' }} /> Icon level 3
          </TertiaryButton>
        </Box>
        <Code language="language-html">
          {`<TertiaryButton>Button level 3</TertiaryButton>
<TertiaryButton disabled>Disabled level 3</TertiaryButton>
<TertiaryButton>
    <BiPlus size="16px" style={{ verticalAlign: 'middle' }} /> Icon level 3
</TertiaryButton>`}
        </Code>
        <H4 sx={{ mt: 4 }}>Danger</H4>
        <Box ml={7}>
          <DangerButton>Danger button</DangerButton>
          <DangerButton disabled>Disabled button</DangerButton>
          <DangerButton>
            <BiPlus size="16px" style={{ verticalAlign: 'middle' }} />
            Icon button
          </DangerButton>
        </Box>
        <Code language="language-html">
          {`<DangerButton>Danger button</DangerButton>
<DangerButton disabled>Disabled button</DangerButton>
<DangerButton>
    <BiPlus size="16px" style={{ verticalAlign: 'middle' }} /> Icon button
</DangerButton>`}
        </Code>
      </Box>
      {/* light version */}
      <Box sx={{ minWidth: '100%', width: '100%', bg: 'text', py: 5 }}>
        <H3 darkMode>Text buttons</H3>
        <H4 sx={{ mt: 4 }} darkMode>
          Primary
        </H4>
        <Box ml={7}>
          <PrimaryButton>Button level 1</PrimaryButton>
          <PrimaryButton disabled>Disabled level 1</PrimaryButton>
          <PrimaryButton>
            <BiPlus size="16px" style={{ verticalAlign: 'middle' }} /> Icon level 1
          </PrimaryButton>
        </Box>
        <Code language="language-html">
          {`<PrimaryButton>Button level 1</PrimaryButton>
<PrimaryButton disabled>Disabled level 1</PrimaryButton>
<PrimaryButton>
    <BiPlus size="16px" style={{ verticalAlign: 'middle' }} /> Icon level 1
</PrimaryButton>`}
        </Code>
        <H4 sx={{ mt: 4 }} darkMode>
          Secondary
        </H4>
        <Box ml={7}>
          <SecondaryButton darkMode>Button level 2</SecondaryButton>
          <SecondaryButton darkMode disabled>
            Disabled level 2
          </SecondaryButton>
          <SecondaryButton darkMode>
            <BiPlus size="16px" style={{ verticalAlign: 'middle' }} /> Icon level 2
          </SecondaryButton>
        </Box>
        <Code language="language-html">
          {`<SecondaryButton darkMode>Button level 2</SecondaryButton>
<SecondaryButton darkMode disabled>Disabled level 2</SecondaryButton>
<SecondaryButton darkMode>
    <BiPlus size="16px" style={{ verticalAlign: 'middle' }} /> Icon level 2
</SecondaryButton>`}
        </Code>
        <H4 sx={{ mt: 4 }} darkMode>
          Tertiary
        </H4>
        <Box ml={7}>
          <TertiaryButton darkMode>Button level 3</TertiaryButton>
          <TertiaryButton disabled darkMode>
            Disabled level 3
          </TertiaryButton>
          <TertiaryButton darkMode>
            <BiPlus size="16px" style={{ verticalAlign: 'middle' }} /> Icon level 3
          </TertiaryButton>
        </Box>
        <Code language="language-html">
          {`<TertiaryButton darkMode>Button level 3</TertiaryButton>
<TertiaryButton disabled darkMode> Disabled level 3 </TertiaryButton>
<TertiaryButton darkMode>
    <BiPlus size="16px" style={{ verticalAlign: 'middle' }} /> Icon level 3
</TertiaryButton>`}
        </Code>
        <H4 sx={{ mt: 4 }} darkMode>
          Danger
        </H4>
        <Box ml={7}>
          <DangerButton>Danger button</DangerButton>
          <DangerButton disabled>Disabled button</DangerButton>
          <DangerButton>
            <BiPlus size="16px" style={{ verticalAlign: 'middle' }} />
            Icon button
          </DangerButton>
        </Box>
        <Code language="language-html">
          {`<DangerButton>Danger button</DangerButton>
<DangerButton disabled>Disabled button</DangerButton>
<DangerButton>
    <BiPlus size="16px" style={{ verticalAlign: 'middle' }} /> Icon button
</DangerButton>`}
        </Code>
      </Box>
    </Frame>
  );
};

export default Button;

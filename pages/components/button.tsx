import React from 'react';
import { BiPlus } from 'react-icons/bi';
import { Box } from 'theme-ui';
import Code from '../../ui/Components/Code';
import Frame from '../../ui/Components/Frame';
import {
  DangerButton,
  PrimaryButton,
  SecondaryButton,
  TertiaryButton,
} from '../../ui/Inputs/Button';
import { Micro, Regular } from '../../ui/Typography/Body';
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
        <H3 variant="dark">Text buttons</H3>
        <H4 sx={{ mt: 4 }} variant="dark">
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
        <H4 sx={{ mt: 4 }} variant="dark">
          Secondary
        </H4>
        <Box ml={7}>
          <SecondaryButton text="dark">Button level 2</SecondaryButton>
          <SecondaryButton text="dark" disabled>
            Disabled level 2
          </SecondaryButton>
          <SecondaryButton text="dark">
            <BiPlus size="16px" style={{ verticalAlign: 'middle' }} /> Icon level 2
          </SecondaryButton>
        </Box>
        <Code language="language-html">
          {`<SecondaryButton text="dark">Button level 2</SecondaryButton>
<SecondaryButton text="dark" disabled>Disabled level 2</SecondaryButton>
<SecondaryButton text="dark">
    <BiPlus size="16px" style={{ verticalAlign: 'middle' }} /> Icon level 2
</SecondaryButton>`}
        </Code>
        <H4 sx={{ mt: 4 }} variant="dark">
          Tertiary
        </H4>
        <Box ml={7}>
          <TertiaryButton text="dark">Button level 3</TertiaryButton>
          <TertiaryButton disabled text="dark">
            Disabled level 3
          </TertiaryButton>
          <TertiaryButton text="dark">
            <BiPlus size="16px" style={{ verticalAlign: 'middle' }} /> Icon level 3
          </TertiaryButton>
        </Box>
        <Code language="language-html">
          {`<TertiaryButton text="dark">Button level 3</TertiaryButton>
<TertiaryButton disabled text="dark"> Disabled level 3 </TertiaryButton>
<TertiaryButton text="dark">
    <BiPlus size="16px" style={{ verticalAlign: 'middle' }} /> Icon level 3
</TertiaryButton>`}
        </Code>
        <H4 sx={{ mt: 4 }} variant="dark">
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

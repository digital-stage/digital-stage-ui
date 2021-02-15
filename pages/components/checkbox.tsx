import React from 'react';
import Box from '../../ui/Layout/Box';
import Code from '../../ui/Components/Code';
import Frame from '../../ui/Components/Frame';
import Checkbox from '../../ui/Inputs/Checkbox';
import { H3 } from '../../ui/Typography/Heading';

const check = () => {
  return (
    <Frame>
      <Box sx={{ minWidth: '100%', width: '100%', bg: 'gray.4', py: 5 }}>
        <H3>Checkbox</H3>
        <Box ml={7}>
          <Checkbox variant="checkboxPrimary" label="Label" />
          <Checkbox variant="checkboxTertiary" label="Label" />
          <Checkbox variant="checkboxPrimary" />
          <Checkbox variant="checkboxTertiary" />
          <Checkbox variant="checkboxPrimary" disabled />
          <Checkbox variant="checkboxTertiary" disabled />
        </Box>
        <Code language="language-html">{`<Checkbox variant="checkboxPrimary" label='Label' />
<Checkbox variant="checkboxTertiary" label='Label' />
<Checkbox variant="checkboxPrimary" />
<Checkbox variant="checkboxTertiary" />
<Checkbox variant="checkboxPrimary" disabled />
<Checkbox variant="checkboxTertiary" disabled />`}</Code>
      </Box>
      <Box sx={{ minWidth: '100%', width: '100%', bg: 'text', py: 5 }}>
        <H3 darkMode>Checkbox</H3>
        <Box ml={7}>
          <Checkbox variant="checkboxPrimary" label="Label" darkMode />
          <Checkbox variant="checkboxTertiaryDark" label="Label" darkMode />
          <Checkbox variant="checkboxPrimary" />
          <Checkbox variant="checkboxTertiaryDark" />
          <Checkbox variant="checkboxPrimary" disabled />
          <Checkbox variant="checkboxTertiaryDark" disabled />
        </Box>
        <Code language="language-html">{`<Checkbox variant="checkboxPrimary" label='Label' darkMode />
<Checkbox variant="checkboxTertiaryDark" label='Label' darkMode />
<Checkbox variant="checkboxPrimary" />
<Checkbox variant="checkboxTertiary" />
<Checkbox variant="checkboxPrimary" disabled />
<Checkbox variant="checkboxTertiary" disabled />`}</Code>
      </Box>
    </Frame>
  );
};

export default check;

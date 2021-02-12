import React from 'react';
import { Box } from 'theme-ui';
import Code from '../../ui/Components/Code';
import Frame from '../../ui/Components/Frame';
import Input from '../../ui/Inputs/Input';
import { H3 } from '../../ui/Typography/Heading';

const textField = () => {
  return (
    <Frame>
      <Box sx={{ minWidth: '100%', width: '100%', bg: 'gray.4', py: 5 }}>
        <H3>Input</H3>
        <Box ml={7}>
          <Input type="text" id="name" name="link" label="Link" sx={{ width: '80%' }} />
          <Input type="password" id="pass" name="link" label="Link" sx={{ width: '80%' }} />
        </Box>
        <Code language="language-html">{`<Input type="text" id="name" name="link" label="Link" sx={{ width: '80%' }} />
<Input type="password" id="pass" name="link" label="Link" sx={{ width: '80%' }} />`}</Code>
      </Box>
      <Box sx={{ minWidth: '100%', width: '100%', bg: 'text', py: 5 }}>
        <H3>Input</H3>
        <Box ml={7}>
          <Input
            type="text"
            id="lastname"
            name="link"
            label="Link"
            version="dark"
            sx={{ width: '80%' }}
          />
          <Input
            type="password"
            id="pass2"
            name="link"
            label="Link"
            version="dark"
            sx={{ width: '80%' }}
          />
        </Box>
        <Code language="language-html">{`<Input type="text" id="lastname" name="link" label="Link" version="dark" sx={{ width: '80%' }} />
<Input type="password" id="pass2" name="link" label="Link" version="dark" sx={{ width: '80%' }} />`}</Code>
      </Box>
    </Frame>
  );
};

export default textField;

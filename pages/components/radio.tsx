import React from 'react';
import { Box } from 'theme-ui';
import Code from '../../ui/Components/Code';
import Frame from '../../ui/Components/Frame';
import Radio from '../../ui/Inputs/Radio';
import { H3 } from '../../ui/Typography/Heading';

const radioButton = () => {
  return (
    <Frame>
      <Box sx={{ minWidth: '100%', width: '100%', bg: 'gray.4', py: 5 }}>
        <H3>Radio</H3>
        <Box ml={7}>
          <Radio value="vl1" name="light-mode" defaultChecked label="label1" />
          <Radio value="vl2" name="light-mode" label="label2" />
          <Radio value="vl3" name="light-mode" label="label3" />
        </Box>
        <Code language="language-html">{`<Radio value="vl1" name="light-mode" defaultChecked label="label1" />
<Radio value="vl2" name="light-mode" label="label2" />
<Radio value="vl3" name="light-mode" label="label3" />`}</Code>
      </Box>
      <Box sx={{ minWidth: '100%', width: '100%', bg: 'text', py: 5 }}>
        <H3>Radio</H3>
        <Box ml={7}>
          <Radio value="vl4" name="dark-mode" label="label4" defaultChecked labelVariant="dark" />
          <Radio value="vl5" name="dark-mode" label="label5" labelVariant="dark" />
          <Radio value="vl6" name="dark-mode" label="label6" labelVariant="dark" />
        </Box>
        <Code language="language-html">{`<Radio value="vl4" name="dark-mode" label="label4" defaultChecked labelVariant="dark"/>
<Radio value="vl5" name="dark-mode" label="label5" labelVariant="dark" />
<Radio value="vl6" name="dark-mode" label="label6" labelVariant="dark" />`}</Code>
      </Box>
    </Frame>
  );
};

export default radioButton;

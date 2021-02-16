import React from 'react';
import Box from '../../ui/Layout/Box';
import Code from '../../ui/Components/Code';
import Frame from '../../ui/Components/Frame';
import { H3 } from '../../ui/Typography/Heading';
import Textarea from '../../ui/Inputs/Textarea';

const textarea = () => {
  const [value, setValue] = React.useState<string>('');
  return (
    <Frame>
      <Box sx={{ minWidth: '100%', width: '100%', bg: 'gray.4', py: 5 }}>
        <H3>Textarea</H3>
        <Box ml={7}>
          <Textarea
            value={value}
            maxLength={20}
            sx={{ width: '90%' }}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setValue(e.target.value)}
            placeholder="Placeholder"
          />
        </Box>
        <Code language="language-javascript">{`...
const textarea = () => {
    const [value, setValue] = React.useState<string>('');
    return (
            <Textarea 
                value={value} 
                maxLength={20} 
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setValue(e.target.value)} 
                placeholder='Placeholder'
            />
    );
};
...`}</Code>
        <Box ml={7} mt={4}>
          <Textarea
            value={value}
            error
            maxLength={20}
            sx={{ width: '90%' }}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setValue(e.target.value)}
            placeholder="Placeholder"
          />
        </Box>
        <Code language="language-javascript">{`...
const textarea = () => {
    const [value, setValue] = React.useState<string>('');
    return (
            <Textarea 
                value={value} 
                maxLength={20} 
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setValue(e.target.value)} 
                placeholder='Placeholder'
                error
            />
    );
};
...`}</Code>
        <Box ml={7} mt={4}>
          <Textarea
            value={value}
            disabled
            maxLength={20}
            sx={{ width: '90%' }}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setValue(e.target.value)}
            placeholder="Placeholder"
          />
        </Box>
        <Code language="language-javascript">{`...
const textarea = () => {
    const [value, setValue] = React.useState<string>('');
    return (
            <Textarea 
                value={value} 
                maxLength={20} 
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setValue(e.target.value)} 
                placeholder='Placeholder'
                disabled
            />
    );
};
...`}</Code>
      </Box>
    </Frame>
  );
};

export default textarea;

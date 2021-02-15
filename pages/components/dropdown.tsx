import React from 'react';
import Box from '../../ui/Layout/Box';
import Code from '../../ui/Components/Code';
import Frame from '../../ui/Components/Frame';
import DropDown from '../../ui/Inputs/Dropdown';
import { H3 } from '../../ui/Typography/Heading';

const select = () => {
  return (
    <Frame>
      <Box sx={{ minWidth: '100%', width: '100%', bg: 'gray.4', py: 5 }}>
        <H3>Dropdown</H3>
        <Box ml={7}>
          <DropDown
            sx={{ width: '80%' }}
            options={[
              { id: '1', label: 'Option 1' },
              { id: '2', label: 'Option 2' },
            ]}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
              e.target.value;
            }}
          />
          <DropDown
            sx={{ width: '80%' }}
            options={[
              { id: '1', label: 'Option 1' },
              { id: '2', label: 'Option 2' },
            ]}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
              e.target.value;
            }}
            disabled
          />
          <DropDown
            sx={{ width: '80%' }}
            options={[
              { id: '1', label: 'Option 1' },
              { id: '2', label: 'Option 2' },
            ]}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
              e.target.value;
            }}
            error
          />
        </Box>
        <Code language="language-html">{`<DropDown
    options={[
        { id: '1', label: 'Option 1' },
        { id: '2', label: 'Option 2' },
    ]}
    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
        e.target.value;
    }}
/>
<DropDown
    options={[
        { id: '1', label: 'Option 1' },
        { id: '2', label: 'Option 2' },
    ]}
    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
        e.target.value;
    }}
    disabled
/>
<DropDown
    options={[
        { id: '1', label: 'Option 1' },
        { id: '2', label: 'Option 2' },
    ]}
    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
        e.target.value;
    }}
    error
/>`}</Code>
      </Box>
    </Frame>
  );
};

export default select;

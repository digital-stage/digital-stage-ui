import React from 'react';
import { ImPhoneHangUp } from 'react-icons/im';
import Box from '../../ui/Layout/Box';
import Code from '../../ui/Components/Code';
import Frame from '../../ui/Components/Frame';
import {
  PrimaryToggleIconButton,
  TertiaryToggleIconButton,
} from '../../ui/Inputs/ToggleIconButton';
import { H3, H4 } from '../../ui/Typography/Heading';

const Toggle = () => {
  const [togglePrimary, setTogglePrimary] = React.useState(false);
  const [toggleTertiary, setToggleTertiary] = React.useState(false);

  const handleTogglePrimary = () => {
    setTogglePrimary(!togglePrimary);
  };

  const handleToggleTertiary = () => {
    setToggleTertiary(!toggleTertiary);
  };

  return (
    <Frame>
      <Box sx={{ minWidth: '100%', width: '100%', bg: 'gray.4', py: 5 }}>
        <H3>Toggle button</H3>
        <H4 sx={{ mt: 4 }}>Primary toggle</H4>
        <Box ml={7}>
          <PrimaryToggleIconButton toggled={togglePrimary} onClick={handleTogglePrimary}>
            <ImPhoneHangUp size="24px" />
          </PrimaryToggleIconButton>
          <PrimaryToggleIconButton disabled sx={{ ml: 4 }}>
            <ImPhoneHangUp size="24px" />
          </PrimaryToggleIconButton>
        </Box>
        <Code language="language-javascript">
          {`... 
const [togglePrimary, setTogglePrimary] = React.useState(false);
const handleTogglePrimary = () => {
    setTogglePrimary(!togglePrimary);
};
...`}
        </Code>
        <Code language="language-html">{`
<PrimaryToggleIconButton toggled={togglePrimary} onClick={handleTogglePrimary}>
    <ImPhoneHangUp size="24px" />
</PrimaryToggleIconButton>

<PrimaryToggleIconButton disabled>
    <ImPhoneHangUp size="24px" />
</PrimaryToggleIconButton>`}</Code>
        <H4 sx={{ mt: 4 }}>Tertiary toggle</H4>
        <Box ml={7}>
          <TertiaryToggleIconButton
            toggled={toggleTertiary}
            onClick={handleToggleTertiary}
            color="light"
            sx={{ mr: 4 }}
          >
            <ImPhoneHangUp size="24px" color={!toggleTertiary ? '#121212' : '#f4f4f4'} />
          </TertiaryToggleIconButton>
          <TertiaryToggleIconButton disabled>
            <ImPhoneHangUp size="24px" color="#f4f4f4" />
          </TertiaryToggleIconButton>
        </Box>
        <Code language="language-javascript">
          {`... 
const [toggleTertiary, setToggleTertiary] = React.useState(false);
const handleToggleTertiary = () => {
    setToggleTertiary(!toggleTertiary);
};
...`}
        </Code>
        <Code language="language-html">{`<TertiaryToggleIconButton toggled={toggleTertiary} onClick={handleToggleTertiary}>
    <ImPhoneHangUp size="24px" />
</TertiaryToggleIconButton>

<TertiaryToggleIconButton disabled>
    <ImPhoneHangUp size="24px" />
</TertiaryToggleIconButton>`}</Code>
      </Box>
      <Box sx={{ minWidth: '100%', width: '100%', bg: 'text', py: 5 }}>
        <H3 darkMode>Toggle button</H3>
        <H4 sx={{ mt: 4 }} darkMode>
          Primary toggle
        </H4>
        <Box ml={7}>
          <PrimaryToggleIconButton toggled={togglePrimary} onClick={handleTogglePrimary}>
            <ImPhoneHangUp size="24px" />
          </PrimaryToggleIconButton>
          <PrimaryToggleIconButton disabled sx={{ ml: 4 }}>
            <ImPhoneHangUp size="24px" />
          </PrimaryToggleIconButton>
        </Box>
        <Code language="language-html">{`<PrimaryToggleIconButton toggled={togglePrimary} onClick={handleTogglePrimary}>
    <ImPhoneHangUp size="24px" />
</PrimaryToggleIconButton>
<PrimaryToggleIconButton disabled>
    <ImPhoneHangUp size="24px" />
</PrimaryToggleIconButton>`}</Code>
        <H4 sx={{ mt: 4 }} darkMode>
          Tertiary toggle
        </H4>
        <Box ml={7}>
          <TertiaryToggleIconButton
            toggled={toggleTertiary}
            onClick={handleToggleTertiary}
            darkMode
          >
            <ImPhoneHangUp size="24px" color="#f4f4f4" />
          </TertiaryToggleIconButton>
          <TertiaryToggleIconButton disabled darkMode sx={{ ml: 4 }}>
            <ImPhoneHangUp size="24px" color="#f4f4f4" />
          </TertiaryToggleIconButton>
        </Box>
        <Code language="language-html">{`<TertiaryToggleIconButton toggled={toggleTertiary} onClick={handleToggleTertiary} darkMode>
    <ImPhoneHangUp size="24px" color="#f4f4f4" />
</TertiaryToggleIconButton>
<TertiaryToggleIconButton disabled darkMode>
    <ImPhoneHangUp size="24px" color="#f4f4f4" />
</TertiaryToggleIconButton>`}</Code>
      </Box>
    </Frame>
  );
};

export default Toggle;

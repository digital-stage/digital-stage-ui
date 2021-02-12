import React from 'react';
import Flex from '../ui/Layout/Flex';
import Box from '../ui/Layout/Box';
import Frame from '../ui/Components/Frame';
import { H3 } from '../ui/Typography/Heading';
import { Image } from 'theme-ui';

export default function Home(): JSX.Element {
  const [toggled, setToggled] = React.useState(false);

  const handleToggle = () => {
    setToggled(!toggled);
  };

  return (
    <Frame>
      <Flex
        sx={{
          width: '100%',
          height: '100%',
          justifyContent: 'space-around',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <Image src="./text-logo.png" width="300px" />
        <H3> The design system for digital-stage</H3>
      </Flex>
    </Frame>
  );
}

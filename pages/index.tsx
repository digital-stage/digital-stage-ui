import React from 'react';
import Flex from '../ui/Layout/Flex';
import Frame from '../ui/Components/Frame';
import { H4 } from '../ui/Typography/Heading';
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
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          bg: '#000000',
        }}
      >
        <Image src="./text-logo.png" width="200px" />
        <H4> The design system for digital-stage</H4>
      </Flex>
    </Frame>
  );
}

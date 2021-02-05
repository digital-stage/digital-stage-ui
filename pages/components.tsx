import React from 'react';
import { Box } from 'theme-ui';
import Sidebar from '../ui/Components/Sidebar';
import { H3 } from '../ui/Typography/Heading';
import { CenteredNavItems, LowerNavItems } from '../utils/Navbar';
import DigitalStageLogo from '../ui/DigitalStageLogo';
import Modal from '../ui/Components/Modal';

const Components = () => {
  return (
    <Box>
      <Box sx={{ bg: 'text' }}>
        <H3 variant="dark">Sidebar</H3>
        <Sidebar
          centeredNavItems={CenteredNavItems}
          lowerNavItems={LowerNavItems}
          logo={<DigitalStageLogo single icon width={30} />}
          logoHref="https://www.digital-stage.org"
        />
      </Box>
      <Box>
        <H3>Modal</H3>
        <Modal />
      </Box>
    </Box>
  );
};

export default Components;

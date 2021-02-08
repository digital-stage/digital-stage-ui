import React from 'react';
import { Box, Button } from 'theme-ui';
import Sidebar from '../ui/Components/Sidebar';
import { H3 } from '../ui/Typography/Heading';
import { CenteredNavItems, LowerNavItems } from '../utils/Navbar';
import DigitalStageLogo from '../ui/DigitalStageLogo';
import Modal, { ModalBody, ModalFooter, ModalHeader } from '../ui/Components/Modal';
import { Regular } from '../ui/Typography/Body';
import { TertiaryButton, PrimaryButton } from '../ui/Inputs/Button';
import { BiPlus } from 'react-icons/bi';

const Components = () => {
  const [backDrop, setBackDrop] = React.useState<boolean>(true);
  const [open, setOpen] = React.useState<boolean>(false);

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
        <Modal backDrop={backDrop} isOpen={open} onClose={() => setOpen(!open)}>
          <ModalHeader onClick={() => setOpen(false)}>Title</ModalHeader>
          <ModalBody>
            <Regular sx={{ ml: 0 }} variant="dark">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae autem esse quaerat id
              adipisci repellat saepe optio repellendus nisi doloribus, libero, obcaecati velit
              repudiandae cumque magni corporis nulla rerum nihil. Eligendi in atque incidunt,
              maxime laboriosam cupiditate laborum.
            </Regular>
          </ModalBody>
          <ModalFooter>
            <TertiaryButton text="dark" onClick={() => setOpen(false)}>
              Close
            </TertiaryButton>
            <PrimaryButton>
              <BiPlus size="16px" style={{ verticalAlign: 'middle' }} /> Icon level 2
            </PrimaryButton>
          </ModalFooter>
        </Modal>
        <Button onClick={() => setOpen(true)}>Open modal</Button>
      </Box>
    </Box>
  );
};

export default Components;

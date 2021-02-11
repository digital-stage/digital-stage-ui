import React from 'react';
import { Box, Button, Flex } from 'theme-ui';
import Sidebar from '../ui/Components/Sidebar';
import { H3, H4 } from '../ui/Typography/Heading';
import { CenteredNavItems, LowerNavItems } from '../utils/Navbar';
import DigitalStageLogo from '../ui/DigitalStageLogo';
import Modal, { ModalBody, ModalFooter, ModalHeader } from '../ui/Components/Modal';
import { Regular } from '../ui/Typography/Body';
import { TertiaryButton, PrimaryButton, SecondaryButton } from '../ui/Inputs/Button';
import { BiPlus } from 'react-icons/bi';
import Collapse, { CollapseBody, CollapseHeader } from '../ui/Components/Collapse';
import { FiEdit2 } from 'react-icons/fi';
import { MdDelete } from 'react-icons/md';
import { TertiaryIconButton } from '../ui/Inputs/IconButton';
import StageDetails from '../ui/Components/StageDetails';
import GroupDetails from '../ui/Components/GroupDetails';

const Components = () => {
  const [backDrop, setBackDrop] = React.useState<boolean>(true);
  const [open, setOpen] = React.useState<boolean>(false);
  const [isCollapseOpen, setIsCollapseOpen] = React.useState<boolean>(false);
  const [isCollapseOpen1, setIsCollapseOpen1] = React.useState<boolean>(false);

  return (
    <Box sx={{ minWidth: 'calc(100% - 20vw)' }}>
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
      <Box sx={{ py: 9, bg: 'gray.4' }}>
        <H3>Accordion</H3>
        <Flex sx={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
          <Collapse sx={{ width: '70%' }}>
            <CollapseHeader
              isOpen={isCollapseOpen}
              onClick={() => setIsCollapseOpen(!isCollapseOpen)}
            >
              <StageDetails name="Stage name" isMeOwner={true} />
              <Box>
                <TertiaryIconButton>
                  <FiEdit2 />
                </TertiaryIconButton>
                <TertiaryIconButton>
                  <MdDelete />
                </TertiaryIconButton>
              </Box>
            </CollapseHeader>
            <CollapseBody isOpen={isCollapseOpen}>
              <Regular sx={{ ml: 0 }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium fugit dolorem
                aliquam ea pariatur perferendis non illum quasi provident libero!
              </Regular>
              <Flex sx={{ justifyContent: 'space-between' }}>
                <GroupDetails name="Group name" />
                <Flex sx={{ justifyContent: 'flex-end' }}>
                  <TertiaryIconButton>
                    <FiEdit2 />
                  </TertiaryIconButton>
                  <TertiaryIconButton>
                    <MdDelete />
                  </TertiaryIconButton>
                  <SecondaryButton>Invite</SecondaryButton>
                  <PrimaryButton>Enter</PrimaryButton>
                </Flex>
              </Flex>
            </CollapseBody>
          </Collapse>
          <Collapse sx={{ width: '70%' }}>
            <CollapseHeader
              isOpen={isCollapseOpen1}
              onClick={() => setIsCollapseOpen1(!isCollapseOpen1)}
            >
              <H4 sx={{ ml: 0 }}>Accordion title</H4>
            </CollapseHeader>
            <CollapseBody isOpen={isCollapseOpen1}>
              <Regular sx={{ ml: 0 }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium fugit dolorem
                aliquam ea pariatur perferendis non illum quasi provident libero!
              </Regular>
            </CollapseBody>
          </Collapse>
        </Flex>
      </Box>
    </Box>
  );
};

export default Components;

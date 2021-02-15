import React from 'react';
import { BiPlus } from 'react-icons/bi';
import Box from '../../ui/Layout/Box';
import Code from '../../ui/Components/Code';
import Frame from '../../ui/Components/Frame';
import Modal, { ModalBody, ModalFooter, ModalHeader } from '../../ui/Components/Modal';
import { PrimaryButton, TertiaryButton } from '../../ui/Inputs/Button';
import { Regular } from '../../ui/Typography/Body';
import { H3 } from '../../ui/Typography/Heading';

const dialog = () => {
  const [backDrop, setBackDrop] = React.useState<boolean>(true);
  const [open, setOpen] = React.useState<boolean>(false);
  const [openLarge, setOpenLarge] = React.useState<boolean>(false);

  return (
    <Frame>
      <Box sx={{ minWidth: '100%', width: '100%', bg: 'gray.4', py: 5 }}>
        <H3>Modal</H3>
        <Box ml={7}>
          <Modal backDrop={backDrop} isOpen={open} onClose={() => setOpen(!open)}>
            <ModalHeader onClick={() => setOpen(false)}>Title</ModalHeader>
            <ModalBody>
              <Regular sx={{ ml: 0 }} darkMode>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae autem esse quaerat id
                adipisci repellat saepe optio repellendus nisi doloribus, libero, obcaecati velit
                repudiandae cumque magni corporis nulla rerum nihil. Eligendi in atque incidunt,
                maxime laboriosam cupiditate laborum.
              </Regular>
            </ModalBody>
            <ModalFooter>
              <TertiaryButton darkMode onClick={() => setOpen(false)}>
                Close
              </TertiaryButton>
              <PrimaryButton>
                <BiPlus size="16px" style={{ verticalAlign: 'middle' }} /> Icon level 2
              </PrimaryButton>
            </ModalFooter>
          </Modal>
          <PrimaryButton onClick={() => setOpen(true)}>Open modal</PrimaryButton>
        </Box>
        <Code language="language-javascript">{`... 
const Dialog = () => {
    const [backDrop, setBackDrop] = React.useState<boolean>(true);
    const [open, setOpen] = React.useState<boolean>(false);

    return (
        <Modal backDrop={backDrop} isOpen={open} onClose={() => setOpen(!open)}>
            <ModalHeader onClick={() => setOpen(false)}>Title</ModalHeader>
            <ModalBody>
                <Regular sx={{ ml: 0 }} darkMode>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae autem esse quaerat id
                    adipisci repellat saepe optio repellendus nisi doloribus, libero, obcaecati velit
                    repudiandae cumque magni corporis nulla rerum nihil. Eligendi in atque incidunt,
                    maxime laboriosam cupiditate laborum.
                </Regular>
            </ModalBody>
            <ModalFooter>
                <TertiaryButton darkMode onClick={() => setOpen(false)}>
                    Close
                </TertiaryButton>
                <PrimaryButton>
                    <BiPlus size="16px" style={{ verticalAlign: 'middle' }} /> Icon level 2
                </PrimaryButton>
            </ModalFooter>
        </Modal>
        <PrimaryButton onClick={() => setOpen(true)}>Open modal</PrimaryButton>
    );
};

export default Dialog;

...`}</Code>
        <Box ml={7} mt={7}>
          <Modal
            backDrop={backDrop}
            isOpen={openLarge}
            onClose={() => setOpenLarge(!openLarge)}
            large={true}
          >
            <ModalHeader onClick={() => setOpenLarge(false)}>Large modal</ModalHeader>
            <ModalBody>
              <Regular sx={{ ml: 0 }} darkMode>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae autem esse quaerat id
                adipisci repellat saepe optio repellendus nisi doloribus, libero, obcaecati velit
                repudiandae cumque magni corporis nulla rerum nihil. Eligendi in atque incidunt,
                maxime laboriosam cupiditate laborum.
              </Regular>
            </ModalBody>
            <ModalFooter>
              <TertiaryButton darkMode onClick={() => setOpenLarge(false)}>
                Close
              </TertiaryButton>
              <PrimaryButton>
                <BiPlus size="16px" style={{ verticalAlign: 'middle' }} /> Icon level 2
              </PrimaryButton>
            </ModalFooter>
          </Modal>
          <PrimaryButton onClick={() => setOpenLarge(true)}>Open large modal</PrimaryButton>
        </Box>
        <Code language="language-javascript">{`... 
<Modal ... large={true}>
    ...
</Modal>
...`}</Code>
      </Box>
    </Frame>
  );
};

export default dialog;

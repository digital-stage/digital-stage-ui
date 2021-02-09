import React from 'react';
import Flex from '../ui/Layout/Flex';
import { DarkPanel, GrayPanel, LightPanel } from '../ui/Layout/Panel';
import { H1, H2, H3, H4, H5, H6 } from '../ui/Typography/Heading';
import { Micro, Regular } from '../ui/Typography/Body';
import Box, { RedBox, GrayBox } from '../ui/Layout/Box';
import { DangerButton, PrimaryButton, SecondaryButton, TertiaryButton } from '../ui/Inputs/Button';
import { BiPlus } from 'react-icons/bi';
import { ImPhoneHangUp } from 'react-icons/im';
import {
  DangerFunctionIconButton,
  PrimaryFunctionIconButton,
} from '../ui/Inputs/FunctionIconButton';
import { PrimaryToggleIconButton, TertiaryToggleIconButton } from '../ui/Inputs/ToggleIconButton';
import CloseButton from '../ui/Inputs/CloseButton';
import { PrimaryIconButton, TertiaryIconButton } from '../ui/Inputs/IconButton';
import { FiEdit2 } from 'react-icons/fi';
import DropDown from '../ui/Inputs/Dropdown';
import Input from '../ui/Inputs/Input';
import Checkbox from '../ui/Inputs/Checkbox';
import Radio from '../ui/Inputs/Radio';
import Tab from '../ui/Inputs/Tab';
import Link from 'next/link';

export default function Home(): JSX.Element {
  const [toggled, setToggled] = React.useState(false);

  const handleToggle = () => {
    setToggled(!toggled);
  };

  return (
    <Box>
      <Flex>
        <Box sx={{ width: '50%', bg: 'gray.4', py: 6 }}>
          <H3>Typography Headings</H3>
          <H1>Heading h1</H1>
          <H2>Heading h2</H2>
          <H3>Heading h3</H3>
          <H4>Heading h4</H4>
          <H5>Heading h5</H5>
          <H6>Heading h6</H6>
        </Box>
        <Box sx={{ width: '50%', bg: 'text', py: 6 }}>
          <H3>Typography Heading</H3>
          <H1 variant="dark">Heading h1</H1>
          <H2 variant="dark">Heading h2</H2>
          <H3 variant="dark">Heading h3</H3>
          <H4 variant="dark">Heading h4</H4>
          <H5 variant="dark">Heading h5</H5>
          <H6 variant="dark">Heading h6</H6>
        </Box>
      </Flex>
      <Flex>
        <Box sx={{ width: '50%', bg: 'gray.4', py: 6 }}>
          <H3>Typography body</H3>
          <Regular>Regular copy</Regular>
          <Micro>Micro copy</Micro>
        </Box>
        <Box sx={{ width: '50%', bg: 'text', py: 6 }}>
          <H3>Typography body</H3>
          <Regular variant="dark">Regular copy</Regular>
          <Micro variant="dark">Micro copy</Micro>
        </Box>
      </Flex>
      <Flex>
        <RedBox sx={{ width: '50%', bg: 'gray.4', py: 6 }}>
          <Flex sx={{ justifyContent: 'center' }}>
            <LightPanel />
            <DarkPanel />
            <GrayPanel />
          </Flex>
        </RedBox>
        <GrayBox sx={{ width: '50%', bg: 'gray.4', py: 6 }}>
          <Flex sx={{ justifyContent: 'center' }}>
            <LightPanel />
            <DarkPanel />
            <GrayPanel />
          </Flex>
        </GrayBox>
      </Flex>
      <Flex>
        <Box sx={{ width: '50%', bg: 'gray.4', py: 6 }}>
          <H3>Text buttons</H3>
          <PrimaryButton>Button level 1</PrimaryButton>
          <PrimaryButton disabled>Disabled level 1</PrimaryButton>
          <PrimaryButton>
            <BiPlus size="16px" style={{ verticalAlign: 'middle' }} /> Icon level 1
          </PrimaryButton>

          <SecondaryButton>Button level 2</SecondaryButton>
          <SecondaryButton disabled>Disabled level 2</SecondaryButton>
          <SecondaryButton>
            <BiPlus size="16px" style={{ verticalAlign: 'middle' }} /> Icon level 2
          </SecondaryButton>

          <TertiaryButton>Button level 3</TertiaryButton>
          <TertiaryButton disabled>Disabled level 3</TertiaryButton>
          <TertiaryButton>
            <BiPlus size="16px" style={{ verticalAlign: 'middle' }} /> Icon level 3
          </TertiaryButton>

          <DangerButton>Danger button</DangerButton>
          <DangerButton disabled>Disabled button</DangerButton>
          <DangerButton>
            <BiPlus size="16px" style={{ verticalAlign: 'middle' }} />
            Icon button
          </DangerButton>
        </Box>
        <Box sx={{ width: '50%', bg: 'text', py: 6 }}>
          <H3 sx={{ px: 0 }}>Text buttons</H3>
          <PrimaryButton>Button level 1</PrimaryButton>
          <PrimaryButton disabled>Disabled level 1</PrimaryButton>
          <PrimaryButton>
            <BiPlus size="16px" style={{ verticalAlign: 'middle' }} /> Icon level 1
          </PrimaryButton>

          <SecondaryButton text="dark">Button level 2</SecondaryButton>
          <SecondaryButton text="dark" disabled>
            Disabled level 2
          </SecondaryButton>
          <SecondaryButton text="dark">
            <BiPlus size="16px" style={{ verticalAlign: 'middle' }} /> Icon level 2
          </SecondaryButton>

          <TertiaryButton text="dark">Button level 3</TertiaryButton>
          <TertiaryButton disabled text="dark">
            Disabled level 3
          </TertiaryButton>
          <TertiaryButton text="dark">
            <BiPlus size="16px" style={{ verticalAlign: 'middle' }} /> Icon level 3
          </TertiaryButton>

          <DangerButton>Danger button</DangerButton>
          <DangerButton disabled>Disabled button</DangerButton>
          <DangerButton>
            <BiPlus size="16px" style={{ verticalAlign: 'middle' }} /> Icon button
          </DangerButton>
        </Box>
      </Flex>
      <Flex>
        <Box sx={{ width: '50%', bg: 'gray.4', py: 6 }}>
          <H3 sx={{ px: 0 }}>Function icon button</H3>
          <PrimaryFunctionIconButton>
            <ImPhoneHangUp size="24px" />
          </PrimaryFunctionIconButton>
          <PrimaryFunctionIconButton disabled>
            <ImPhoneHangUp size="24px" />
          </PrimaryFunctionIconButton>
          <DangerFunctionIconButton>
            <ImPhoneHangUp size="24px" />
          </DangerFunctionIconButton>
          <DangerFunctionIconButton disabled>
            <ImPhoneHangUp size="24px" />
          </DangerFunctionIconButton>
        </Box>
        <Box sx={{ width: '50%', bg: 'text', py: 6 }}>
          <H3 sx={{ px: 0 }}>Function icon button</H3>
          <PrimaryFunctionIconButton>
            <ImPhoneHangUp size="24px" />
          </PrimaryFunctionIconButton>
          <PrimaryFunctionIconButton disabled>
            <ImPhoneHangUp size="24px" />
          </PrimaryFunctionIconButton>
          <DangerFunctionIconButton>
            <ImPhoneHangUp size="24px" />
          </DangerFunctionIconButton>
          <DangerFunctionIconButton disabled>
            <ImPhoneHangUp size="24px" />
          </DangerFunctionIconButton>
        </Box>
      </Flex>
      <Flex>
        <Box sx={{ width: '50%', bg: 'gray.4', py: 6 }}>
          <H3 sx={{ px: 0 }}>Toggle icon button</H3>
          <PrimaryToggleIconButton toggled={toggled} onClick={handleToggle}>
            <ImPhoneHangUp size="24px" />
          </PrimaryToggleIconButton>
          <PrimaryToggleIconButton disabled>
            <ImPhoneHangUp size="24px" />
          </PrimaryToggleIconButton>
          <TertiaryToggleIconButton toggled={toggled} onClick={handleToggle} color="light">
            <ImPhoneHangUp size="24px" color={!toggled ? '#121212' : '#f4f4f4'} />
          </TertiaryToggleIconButton>
          <TertiaryToggleIconButton disabled>
            <ImPhoneHangUp size="24px" color="#f4f4f4" />
          </TertiaryToggleIconButton>
        </Box>
        <Box sx={{ width: '50%', bg: 'text', py: 6 }}>
          <H3 sx={{ px: 0 }}>Toggle icon button</H3>
          <PrimaryToggleIconButton toggled={toggled} onClick={handleToggle}>
            <ImPhoneHangUp size="24px" />
          </PrimaryToggleIconButton>
          <PrimaryToggleIconButton disabled>
            <ImPhoneHangUp size="24px" />
          </PrimaryToggleIconButton>
          <TertiaryToggleIconButton toggled={toggled} onClick={handleToggle} color="dark">
            <ImPhoneHangUp size="24px" color="#f4f4f4" />
          </TertiaryToggleIconButton>
          <TertiaryToggleIconButton disabled color="dark">
            <ImPhoneHangUp size="24px" color="#f4f4f4" />
          </TertiaryToggleIconButton>
        </Box>
      </Flex>
      <Flex>
        <Box sx={{ width: '50%', bg: 'gray.4', py: 6 }}>
          <H3 sx={{ px: 0 }}>Inline icon button</H3>
          <CloseButton />
          <PrimaryIconButton>
            <FiEdit2 />
          </PrimaryIconButton>
          <TertiaryIconButton>
            <FiEdit2 />
          </TertiaryIconButton>
        </Box>
        <Box sx={{ width: '50%', bg: 'text', py: 6, px: 6 }}>
          <H3 sx={{ px: 0 }}>Inline icon button</H3>
          <CloseButton />
          <PrimaryIconButton>
            <FiEdit2 />
          </PrimaryIconButton>
          <TertiaryIconButton>
            <FiEdit2 />
          </TertiaryIconButton>
        </Box>
      </Flex>
      <Flex>
        <Box sx={{ width: '50%', bg: 'gray.4', py: 6, px: 2 }}>
          <H3>Select dropdowm</H3>
          <Flex sx={{ justifyContent: 'center', flexDirection: 'column', px: 6 }}>
            <DropDown
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
            />
          </Flex>
        </Box>
        <Box sx={{ width: '50%', bg: 'text', py: 6, px: 6 }}></Box>
      </Flex>
      <Flex>
        <Box sx={{ width: '50%', bg: 'gray.4', py: 6, px: 6 }}>
          <Input type="text" id="name" name="link" label="Link" />
          <Input type="password" id="pass" name="link" label="Link" />
        </Box>
        <Box sx={{ width: '50%', bg: 'text', py: 6, px: 6 }}>
          <Input type="text" id="lastname" name="link" label="Link" version="dark" />
          <Input type="password" id="pass2" name="link" label="Link" version="dark" />
        </Box>
      </Flex>
      <Flex>
        <Box sx={{ width: '50%', bg: 'gray.4', py: 6, px: 6 }}>
          <H3>Checkbox</H3>
          <Checkbox variant="checkboxPrimary" />
          <Checkbox variant="checkboxTertiary" />
          <Checkbox variant="checkboxPrimary" disabled />
          <Checkbox variant="checkboxTertiary" disabled />
        </Box>
        <Box sx={{ width: '50%', bg: 'text', py: 6, px: 6 }}>
          <H3>Checkbox</H3>
          <Checkbox variant="checkboxPrimary" />
          <Checkbox variant="checkboxTertiaryDark" />
          <Checkbox variant="checkboxPrimary" disabled />
          <Checkbox variant="checkboxTertiaryDark" disabled />
        </Box>
      </Flex>
      <Flex>
        <Box sx={{ width: '50%', bg: 'gray.4', py: 6, px: 6 }}>
          <H3>Radio</H3>
          <Radio value="vl1" name="dark-mode" defaultChecked label="label1" labelVariant="dark" />
          <Radio value="vl2" name="dark-mode" label="label2" labelVariant="dark" />
          <Radio value="vl3" name="dark-mode" label="label3" labelVariant="dark" />
        </Box>
        <Box sx={{ width: '50%', bg: 'text', py: 6, px: 6 }}>
          <H3>Radio</H3>
          <Radio value="vl1" name="dark-mode" defaultChecked label="label1" />
          <Radio value="vl2" name="dark-mode" label="label2" />
          <Radio value="vl3" name="dark-mode" label="label3" />
        </Box>
      </Flex>
      <Flex>
        <Box sx={{ width: '50%', bg: 'gray.4', py: 6, px: 6 }}>
          <H3>Tabs</H3>
          <Box sx={{ width: 'fit-content' }}>
            <Tab disabled>Disabled</Tab>
            <Tab sx={{ ml: 4 }}>Global</Tab>
          </Box>
          <Box>
            <Link href="/components">Components</Link>
          </Box>
        </Box>
        <Box sx={{ width: '50%', bg: 'text', py: 6, px: 6 }}></Box>
      </Flex>
    </Box>
  );
}

import React from 'react';
import Flex from '../ui/Layout/Flex';
import { DarkPanel, GrayPanel, LightPanel } from '../ui/Layout/Panel';
import { H1, H2, H3, H4, H5, H6 } from '../ui/Typography/Heading';
import { Micro, Regular } from '../ui/Typography/Body';
import Box, { RedBox, GrayBox } from '../ui/Layout/Box';
import { DangerButton, PrimaryButton, SecondaryButton, TertiaryButton } from '../ui/Inputs/Button';
import { BiPlus } from 'react-icons/bi';
import { PrimaryIconButton } from '../ui/Inputs/IconButton';
import { MdCallEnd } from 'react-icons/md';

export default function Home(): JSX.Element {
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
          <PrimaryIconButton>
            <MdCallEnd size="24px" />
          </PrimaryIconButton>
        </Box>
        <Box sx={{ width: '50%', bg: 'text', py: 6 }}>
          <PrimaryIconButton>
            <MdCallEnd size="24px" />
          </PrimaryIconButton>
        </Box>
      </Flex>
    </Box>
  );
}

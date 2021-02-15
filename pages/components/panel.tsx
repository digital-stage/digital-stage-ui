import React from 'react';
import Code from '../../ui/Components/Code';
import Frame from '../../ui/Components/Frame';
import { GrayBox, RedBox } from '../../ui/Layout/Box';
import { DarkPanel, GrayPanel, LightPanel } from '../../ui/Layout/Panel';
import { H3 } from '../../ui/Typography/Heading';
import Flex from '../../ui/Layout/Flex';

const panel = () => {
  return (
    <Frame>
      <RedBox sx={{ py: 5 }}>
        <H3>Panels</H3>
        <Flex sx={{ justifyContent: 'center' }}>
          <LightPanel />
          <DarkPanel />
          <GrayPanel />
        </Flex>
        <Code language="language-html">{`<LightPanel />
<DarkPanel />
<GrayPanel />`}</Code>
      </RedBox>
      <GrayBox sx={{ py: 5 }}>
        <H3>Panels</H3>
        <Flex sx={{ justifyContent: 'center' }}>
          <LightPanel />
          <DarkPanel />
          <GrayPanel />
        </Flex>
        <Code language="language-html">{`<LightPanel />
<DarkPanel />
<GrayPanel />`}</Code>
      </GrayBox>
    </Frame>
  );
};

export default panel;

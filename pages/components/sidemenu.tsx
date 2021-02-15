import React from 'react';
import Box from '../../ui/Layout/Box';
import Code from '../../ui/Components/Code';
import Frame from '../../ui/Components/Frame';
import { H3 } from '../../ui/Typography/Heading';
import { CenteredNavItems, LowerNavItems } from '../../utils/Navbar';
import DigitalStageLogo from '../../ui/DigitalStageLogo';
import Sidebar from '../../ui/Components/Sidebar';

const SideMenu = () => {
  return (
    <Frame>
      <Box sx={{ minWidth: '100%', width: '100%', bg: 'gray.4', py: 5 }}>
        <H3>Sidebar</H3>
        <Box ml={7}>
          <Sidebar
            centeredNavItems={CenteredNavItems}
            lowerNavItems={LowerNavItems}
            logo={<DigitalStageLogo single icon width={30} />}
            logoHref="https://www.digital-stage.org"
          />
        </Box>
        <Code language="language-html">{`<Sidebar
    centeredNavItems={CenteredNavItems}
    lowerNavItems={LowerNavItems}
    logoHref="https://www.digital-stage.org"
    logo={<DigitalStageLogo single icon width={30} />}
/>`}</Code>
        <Code language="language-javascript">{`export const NavItems: NavItem[] = [
...
  {
    label: 'Item label',
    icon: <IconName />,
    href: 'link',
  },
...
];`}</Code>
        <Code language="language-javascript">{`interface NavItem {
    label: string;
    icon?: React.ReactNode;
    href?: string;
}`}</Code>
      </Box>
    </Frame>
  );
};

export default SideMenu;

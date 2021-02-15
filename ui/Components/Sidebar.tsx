import React from 'react';
import { Link, SxStyleProp } from 'theme-ui';
import Box from '../../ui/Layout/Box';
import Flex from '../../ui/Layout/Flex';
import NavItem from '../../utils/NavItem';
import { H6 } from '../Typography/Heading';

type Props = {
  children?: React.ReactNode;
  sx?: SxStyleProp;
  centeredNavItems: NavItem[];
  lowerNavItems: NavItem[];
  logo: React.ReactNode;
  logoHref: string;
};

const Sidebar = (props: React.ComponentPropsWithRef<'div'> & Props): JSX.Element => {
  const { centeredNavItems, lowerNavItems, logo, logoHref } = props;
  const [selected, setSelected] = React.useState<string>('');

  const flexStyle: SxStyleProp = {
    flexDirection: 'column',
    alignContent: 'center',
    textAlign: 'center',
    my: 4,
    cursor: 'pointer',
    color: 'gray.1',
    ':hover': {
      color: 'text',
    },
  };
  const h6Style: SxStyleProp = {
    ml: 0,
    mb: 0,
    fontWeight: 'normal',
  };

  return (
    <Box sx={{ height: '100vh', width: '72px', bg: 'background' }}>
      <Flex
        sx={{
          justifyContent: 'space-between',
          flexDirection: 'column',
          height: '100%',
          py: 5,
          px: 2,
          textAlign: 'center',
        }}
      >
        <Box>
          <Link
            sx={{
              color: 'text',
            }}
            href={logoHref}
            target="_blank"
          >
            {logo}
          </Link>
        </Box>
        <Box>
          {centeredNavItems.map((item) => (
            <Flex
              onClick={() => {
                setSelected(item.label);
              }}
              key={item.label}
              sx={{ ...flexStyle, color: selected === item.label ? 'text' : 'gray.1' }}
            >
              <Box>{item.icon}</Box>
              <H6 sx={{ ...h6Style, color: 'inherit' }}>{item.label}</H6>
            </Flex>
          ))}
        </Box>
        <Box>
          {lowerNavItems.map((item) => (
            <Flex
              onClick={() => {
                setSelected(item.label);
              }}
              key={item.label}
              sx={{ ...flexStyle, color: selected === item.label ? 'text' : 'gray.1' }}
            >
              <Box>{item.icon}</Box>
              <H6 sx={{ ...h6Style, color: 'inherit' }}>{item.label}</H6>
            </Flex>
          ))}
        </Box>
      </Flex>
    </Box>
  );
};

export default Sidebar;

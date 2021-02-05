import React from 'react';
import { Link, SxStyleProp } from 'theme-ui';

type Props = {
  sx?: SxStyleProp;
  disabled?: boolean;
};

const Tab = (props: React.ComponentPropsWithRef<'a'> & Props) => {
  const { children, disabled, href } = props;
  return (
    <Link
      sx={{
        ...props.sx,
        color: disabled ? 'gray.3' : 'text',
        textDecoration: 'none',
        borderBottom: disabled ? 0 : '2px solid',
        borderColor: 'primary',
        ':hover': {
          borderColor: 'primaryHover',
          color: 'primaryHover',
        },
        ':active': {
          borderColor: 'primaryActive',
          color: 'primaryActive',
        },
        ':focus': {
          borderBottom: disabled && '2px solid',
          borderColor: 'primaryFocus',
          color: disabled ? 'gray.3' : 'text',
        },
      }}
      variant="nav"
      href={href ? href : '#!'}
      {...props}
    >
      {children}
    </Link>
  );
};

export default Tab;

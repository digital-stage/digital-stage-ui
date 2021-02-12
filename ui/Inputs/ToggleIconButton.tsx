import { Button, SxStyleProp } from 'theme-ui';

type Props = {
  children?: React.ReactNode;
  color?: 'light' | 'dark';
  sx?: SxStyleProp;
  toggled?: boolean;
};

const PrimaryToggleIconButton = (
  props: React.ComponentPropsWithRef<'button'> & Props
): JSX.Element => {
  const { children, toggled } = props;
  return (
    <Button variant={toggled ? 'toggleOfPrimaryIcon' : 'toggleOnPrimaryIcon'} {...props}>
      {children}
    </Button>
  );
};

const TertiaryToggleIconButton = (
  props: React.ComponentPropsWithRef<'button'> & Props
): JSX.Element => {
  const { children, color, sx, toggled } = props;
  return (
    <Button
      variant={toggled ? 'toggleOnTertiaryIcon' : 'toggleOfPrimaryIcon'}
      {...props}
      sx={{
        bg: !toggled ? (color === 'dark' ? 'background' : 'text') : 'tertiary',
        border: 0,
        ...sx,
      }}
    >
      {children}
    </Button>
  );
};

export { PrimaryToggleIconButton, TertiaryToggleIconButton };

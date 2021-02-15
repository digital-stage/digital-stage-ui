import { Button, SxStyleProp } from 'theme-ui';

type Props = {
  children?: React.ReactNode;
  darkMode?: boolean;
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
  const { children, darkMode, sx, toggled } = props;
  return (
    <Button
      variant={toggled ? 'toggleOnTertiaryIcon' : 'toggleOfPrimaryIcon'}
      {...props}
      sx={{
        bg: !toggled ? (darkMode ? 'background' : 'text') : 'tertiary',
        border: 0,
        ...sx,
      }}
    >
      {children}
    </Button>
  );
};

export { PrimaryToggleIconButton, TertiaryToggleIconButton };

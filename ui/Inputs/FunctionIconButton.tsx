import { Button, SxStyleProp } from 'theme-ui';

type Props = {
  children?: React.ReactNode;
  darkMode?: boolean;
  sx?: SxStyleProp;
};

const PrimaryFunctionIconButton = (
  props: React.ComponentPropsWithRef<'button'> & Props
): JSX.Element => {
  const { children, darkMode, sx } = props;
  return (
    <Button
      variant="functionPrimaryIcon"
      {...props}
      sx={{ color: darkMode ? 'background' : 'text', ...sx }}
    >
      {children}
    </Button>
  );
};

const DangerFunctionIconButton = (
  props: React.ComponentPropsWithRef<'button'> & Props
): JSX.Element => {
  const { children, darkMode, sx } = props;
  return (
    <Button
      variant="functionDangerIcon"
      {...props}
      sx={{ color: darkMode ? 'background' : 'text', ...sx }}
    >
      {children}
    </Button>
  );
};

export { PrimaryFunctionIconButton, DangerFunctionIconButton };

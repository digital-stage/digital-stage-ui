import { Button, SxStyleProp } from 'theme-ui';

type Props = {
  children?: React.ReactNode;
  text?: 'light' | 'dark';
  sx?: SxStyleProp;
};

const PrimaryFunctionIconButton = (
  props: React.ComponentPropsWithRef<'button'> & Props
): JSX.Element => {
  const { children, text, sx } = props;
  return (
    <Button
      variant="functionPrimaryIcon"
      {...props}
      sx={{ color: text === 'dark' ? 'background' : 'text', ...sx }}
    >
      {children}
    </Button>
  );
};

const DangerFunctionIconButton = (
  props: React.ComponentPropsWithRef<'button'> & Props
): JSX.Element => {
  const { children, text, sx } = props;
  return (
    <Button
      variant="functionDangerIcon"
      {...props}
      sx={{ color: text === 'dark' ? 'background' : 'text', ...sx }}
    >
      {children}
    </Button>
  );
};

export { PrimaryFunctionIconButton, DangerFunctionIconButton };

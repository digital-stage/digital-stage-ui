import { Button, SxStyleProp } from 'theme-ui';

type Props = {
  children?: React.ReactNode;
  text?: 'light' | 'dark';
  sx?: SxStyleProp;
};

const PrimaryIconButton = (props: React.ComponentPropsWithRef<'button'> & Props): JSX.Element => {
  const { children, sx } = props;
  return (
    <Button variant="icon" {...props} sx={{ pt: '3px', ...sx }}>
      {children}
    </Button>
  );
};

const TertiaryIconButton = (props: React.ComponentPropsWithRef<'button'> & Props): JSX.Element => {
  const { children, sx } = props;
  return (
    <Button variant="tertiaryIcon" {...props} sx={{ pt: '3px', ...sx }}>
      {children}
    </Button>
  );
};

export { PrimaryIconButton, TertiaryIconButton };

export default Button;

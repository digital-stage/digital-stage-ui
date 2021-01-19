import { Button, SxStyleProp } from 'theme-ui';

type Props = {
  children?: React.ReactNode;
  text?: 'light' | 'dark';
  sx?: SxStyleProp;
};

const PrimaryIconButton = (props: React.ComponentPropsWithRef<'button'> & Props): JSX.Element => {
  const { children, text } = props;
  return (
    <Button
      variant="primaryIcon"
      {...props}
      sx={{ color: text === 'dark' ? 'background' : 'text' }}
    >
      {children}
    </Button>
  );
};

const SecondaryIconButton = (props: React.ComponentPropsWithRef<'button'> & Props): JSX.Element => {
  const { children, text } = props;
  return (
    <Button variant="secondary" {...props} sx={{ color: text === 'dark' ? 'background' : 'text' }}>
      {children}
    </Button>
  );
};

const TertiaryIconButton = (props: React.ComponentPropsWithRef<'button'> & Props): JSX.Element => {
  const { children, text } = props;
  return (
    <Button variant="tertiary" {...props} sx={{ color: text === 'dark' ? 'background' : 'text' }}>
      {children}
    </Button>
  );
};

const DangerIconButton = (props: React.ComponentPropsWithRef<'button'> & Props): JSX.Element => {
  const { children, text } = props;
  return (
    <Button variant="danger" {...props} sx={{ color: text === 'dark' ? 'background' : 'text' }}>
      {children}
    </Button>
  );
};

export { PrimaryIconButton, SecondaryIconButton, TertiaryIconButton, DangerIconButton };

export default Button;

import { Button, SxStyleProp } from 'theme-ui';

type Props = {
  children?: React.ReactNode;
  text?: 'light' | 'dark';
  sx?: SxStyleProp;
};

const PrimaryButton = (props: React.ComponentPropsWithRef<'button'> & Props): JSX.Element => {
  const { children, text } = props;
  return (
    <Button variant="primary" {...props} sx={{ color: text === 'dark' ? 'background' : 'text' }}>
      {children}
    </Button>
  );
};

const SecondaryButton = (props: React.ComponentPropsWithRef<'button'> & Props): JSX.Element => {
  const { children, text } = props;
  return (
    <Button variant="secondary" {...props} sx={{ color: text === 'dark' ? 'background' : 'text' }}>
      {children}
    </Button>
  );
};

const TertiaryButton = (props: React.ComponentPropsWithRef<'button'> & Props): JSX.Element => {
  const { children, text } = props;
  return (
    <Button variant="tertiary" {...props} sx={{ color: text === 'dark' ? 'background' : 'text' }}>
      {children}
    </Button>
  );
};

const DangerButton = (props: React.ComponentPropsWithRef<'button'> & Props): JSX.Element => {
  const { children, text } = props;
  return (
    <Button variant="danger" {...props} sx={{ color: text === 'dark' ? 'background' : 'text' }}>
      {children}
    </Button>
  );
};

export { PrimaryButton, SecondaryButton, TertiaryButton, DangerButton };

export default Button;

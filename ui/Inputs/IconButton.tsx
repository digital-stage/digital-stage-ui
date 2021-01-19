import { Button, SxStyleProp } from 'theme-ui';

type Props = {
  children?: React.ReactNode;
  text?: 'light' | 'dark';
  sx?: SxStyleProp;
};

const PrimaryIconButton = (props: React.ComponentPropsWithRef<'button'> & Props): JSX.Element => {
  const { children, text } = props;
  return (
    <Button variant="icon" {...props}>
      {children}
    </Button>
  );
};

const TertiaryIconButton = (props: React.ComponentPropsWithRef<'button'> & Props): JSX.Element => {
  const { children, text } = props;
  return (
    <Button variant="tertiaryIcon" {...props}>
      {children}
    </Button>
  );
};

export { PrimaryIconButton, TertiaryIconButton };

export default Button;

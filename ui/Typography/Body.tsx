import { SxStyleProp, Text } from 'theme-ui';

type Props = {
  children?: React.ReactNode;
  variant?: 'light' | 'dark';
  sx?: SxStyleProp;
};

const Regular = (props: Props): JSX.Element => {
  return (
    <Text
      variant="regular"
      sx={{ color: props.variant === 'dark' ? 'background' : 'text', ml: 6, mb: 2, ...props.sx }}
    >
      {props.children}
    </Text>
  );
};

const Micro = (props: Props): JSX.Element => {
  return (
    <Text
      variant="micro"
      sx={{
        ...props.sx,
        color: props.variant === 'dark' ? 'background' : 'text',
        ml: 6,
        mb: 5,
        ...props.sx,
      }}
    >
      {props.children}
    </Text>
  );
};

export { Regular, Micro };

export default Text;

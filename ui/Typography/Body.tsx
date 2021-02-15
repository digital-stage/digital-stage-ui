import { SxStyleProp, Text } from 'theme-ui';

type Props = {
  children?: React.ReactNode;
  darkMode?: boolean;
  sx?: SxStyleProp;
};

const Regular = (props: Props): JSX.Element => {
  const { darkMode } = props;
  return (
    <Text
      variant="regular"
      sx={{ color: darkMode ? 'background' : 'text', ml: 6, mb: 2, ...props.sx }}
    >
      {props.children}
    </Text>
  );
};

const Micro = (props: Props): JSX.Element => {
  const { darkMode } = props;
  return (
    <Text
      variant="micro"
      sx={{
        ...props.sx,
        color: darkMode ? 'background' : 'text',
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

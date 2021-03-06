import { Heading, SxStyleProp } from 'theme-ui';

type Props = {
  children?: React.ReactNode;
  darkMode?: boolean;
  sx?: SxStyleProp;
};

const H1 = (props: Props): JSX.Element => {
  const { darkMode } = props;
  return (
    <Heading
      variant="h1"
      sx={{ color: darkMode ? 'background' : 'text', ml: 6, mb: 5, ...props.sx }}
    >
      {props.children}
    </Heading>
  );
};

const H2 = (props: Props): JSX.Element => {
  const { darkMode } = props;
  return (
    <Heading
      variant="h2"
      sx={{ color: darkMode ? 'background' : 'text', ml: 6, mb: 2, ...props.sx }}
    >
      {props.children}
    </Heading>
  );
};

const H3 = (props: Props): JSX.Element => {
  const { darkMode } = props;
  return (
    <Heading
      variant="h3"
      sx={{ color: darkMode ? 'background' : 'text', ml: 6, mb: 6, ...props.sx }}
    >
      {props.children}
    </Heading>
  );
};

const H4 = (props: Props): JSX.Element => {
  const { darkMode } = props;
  return (
    <Heading
      variant="h4"
      sx={{ color: darkMode ? 'background' : 'text', ml: 6, mb: 5, ...props.sx }}
    >
      {props.children}
    </Heading>
  );
};

const H5 = (props: Props): JSX.Element => {
  const { darkMode } = props;
  return (
    <Heading
      variant="h5"
      sx={{ color: darkMode ? 'background' : 'text', ml: 6, mb: 2, ...props.sx }}
    >
      {props.children}
    </Heading>
  );
};

const H6 = (props: Props): JSX.Element => {
  const { darkMode } = props;
  return (
    <Heading
      variant="h6"
      sx={{ color: darkMode ? 'background' : 'text', ml: 6, mb: 5, ...props.sx }}
    >
      {props.children}
    </Heading>
  );
};

export { H1, H2, H3, H4, H5, H6 };

export default Heading;

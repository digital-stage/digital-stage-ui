import { Heading, SxStyleProp } from 'theme-ui';

type Props = {
  children?: React.ReactNode;
  variant?: 'light' | 'dark';
  sx?: SxStyleProp;
};

const H1 = (props: Props): JSX.Element => {
  return (
    <Heading
      variant="h1"
      sx={{ ...props.sx, color: props.variant === 'dark' ? 'background' : 'text', ml: 6, mb: 5 }}
    >
      {props.children}
    </Heading>
  );
};

const H2 = (props: Props): JSX.Element => {
  return (
    <Heading
      variant="h2"
      sx={{ ...props.sx, color: props.variant === 'dark' ? 'background' : 'text', ml: 6, mb: 2 }}
    >
      {props.children}
    </Heading>
  );
};

const H3 = (props: Props): JSX.Element => {
  return (
    <Heading
      variant="h3"
      sx={{ ...props.sx, color: props.variant === 'dark' ? 'background' : 'text', ml: 6, mb: 6 }}
    >
      {props.children}
    </Heading>
  );
};

const H4 = (props: Props): JSX.Element => {
  return (
    <Heading
      variant="h4"
      sx={{ ...props.sx, color: props.variant === 'dark' ? 'background' : 'text', ml: 6, mb: 5 }}
    >
      {props.children}
    </Heading>
  );
};

const H5 = (props: Props): JSX.Element => {
  return (
    <Heading
      variant="h5"
      sx={{ ...props.sx, color: props.variant === 'dark' ? 'background' : 'text', ml: 6, mb: 2 }}
    >
      {props.children}
    </Heading>
  );
};

const H6 = (props: Props): JSX.Element => {
  return (
    <Heading
      variant="h6"
      sx={{ ...props.sx, color: props.variant === 'dark' ? 'background' : 'text', ml: 6, mb: 5 }}
    >
      {props.children}
    </Heading>
  );
};

export { H1, H2, H3, H4, H5, H6 };

export default Heading;

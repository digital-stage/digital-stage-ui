import { Box, SxStyleProp } from 'theme-ui';

type Props = {
  children?: React.ReactNode;
  sx?: SxStyleProp;
};

const GrayBox = (props: Props): JSX.Element => {
  return (
    <Box
      sx={{
        ...props.sx,
        bg: 'gray.4',
      }}
    >
      {props.children}
    </Box>
  );
};

const RedBox = (props: Props): JSX.Element => {
  return (
    <Box
      sx={{
        ...props.sx,
        background:
          'transparent linear-gradient(221deg, #F20544 0%, #F00544 2%, #F20544 2%, #F20544 10%, #721542 50%, #012340 100%) 0% 0% no-repeat padding-box',
      }}
    >
      {props.children}
    </Box>
  );
};

export { GrayBox, RedBox };

export default Box;

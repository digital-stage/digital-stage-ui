import React from 'react';
import { SxStyleProp, Textarea as ThemeUiTextarea } from 'theme-ui';
import Flex from '../Layout/Flex';
import { Micro } from '../Typography/Body';

type Props = {
  sx?: SxStyleProp;
  maxLength: number;
  value?: string;
  error?: boolean;
  errorMessage?: string;
};

const Textarea = (props: React.ComponentPropsWithRef<'textarea'> & Props) => {
  const { maxLength, value, sx, error, errorMessage } = props;

  return (
    <Flex sx={{ flexDirection: 'column', ...sx }}>
      <ThemeUiTextarea
        {...props}
        sx={{ bg: error && '#9D13134D', borderColor: error && '#A41318' }}
      />
      <Micro sx={{ ml: 0, textAlign: 'right' }}>
        {error
          ? errorMessage
            ? errorMessage
            : 'Oups, something went wrong!'
          : `${value.length} / ${maxLength}`}
      </Micro>
    </Flex>
  );
};

export default Textarea;

import React from 'react';
import { Label, SxStyleProp, Radio as MaterialUiRadio } from 'theme-ui';

type Props = {
  label: string;
  labelVariant?: 'dark' | 'light';
  sx?: SxStyleProp;
};

const Radio = (props: React.ComponentPropsWithRef<'input'> & Props): JSX.Element => {
  const { label, labelVariant } = props;

  return (
    <Label sx={{ color: labelVariant === 'dark' ? 'text' : 'background' }}>
      <MaterialUiRadio {...props} />
      {label}
    </Label>
  );
};

export default Radio;

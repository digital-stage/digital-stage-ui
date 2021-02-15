import React from 'react';
import { Label, SxStyleProp, Radio as MaterialUiRadio } from 'theme-ui';

type Props = {
  label: string;
  darkMode?: boolean;
  sx?: SxStyleProp;
};

const Radio = (props: React.ComponentPropsWithRef<'input'> & Props): JSX.Element => {
  const { label, darkMode } = props;

  return (
    <Label sx={{ color: darkMode ? 'background' : 'text' }}>
      <MaterialUiRadio {...props} />
      {label}
    </Label>
  );
};

export default Radio;

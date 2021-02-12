import React, { useEffect } from 'react';
import { Flex, Input, SxStyleProp, Heading } from 'theme-ui';
import { BiCheck } from 'react-icons/bi';

type Props = {
  label?: string;
  variant: 'checkboxPrimary' | 'checkboxTertiary' | 'checkboxTertiaryDark';
  sx?: SxStyleProp;
  labelDark?: boolean;
};

const Checkbox = (props: React.ComponentPropsWithRef<'input'> & Props): JSX.Element => {
  const [checked, setChecked] = React.useState(true);
  const { label, variant, disabled, labelDark } = props;

  const handleCheckbox = () => {
    !props.disabled && setChecked(!checked);
  };

  return (
    <Flex sx={{ position: 'relative', m: 3 }} variant={variant}>
      <Input {...props} type="checkbox" checked={checked} onChange={handleCheckbox} />
      {checked && (
        <BiCheck
          style={{ position: 'absolute', top: 0 }}
          color={
            variant === 'checkboxTertiary'
              ? disabled
                ? '#12121280'
                : '#121212'
              : variant === 'checkboxTertiaryDark'
              ? disabled
                ? '#12121280'
                : '#121212'
              : disabled
              ? '#f4f4f480'
              : '#f4f4f4'
          }
          onClick={handleCheckbox}
        />
      )}
      <Heading
        variant="micro"
        sx={{ display: 'inline-block', pl: 3, color: labelDark && 'background' }}
      >
        {label}
      </Heading>
    </Flex>
  );
};

export default Checkbox;

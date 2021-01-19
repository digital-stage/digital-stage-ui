import React from 'react';
import { Select, SxStyleProp } from 'theme-ui';

const DropDown = (
  props: React.ComponentPropsWithRef<'select'> & {
    options?: {
      id: string;
      label: string;
    }[];
    defaultValue?: string;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    sx?: SxStyleProp;
    error?: boolean;
  }
): JSX.Element => {
  const selected = props.options.filter((option) => option.id === props.defaultValue);
  const selectedValue = selected.length > 0 ? selected[0].label : null;
  return (
    <Select
      {...props}
      onChange={props.onChange}
      defaultValue={selectedValue}
      sx={{
        ...props.sx,
        bg: props.error ? '#9D131366' : 'gray.5',
        borderColor: props.error ? '#A41318' : 'text',
      }}
    >
      {props.options.length > 0
        ? props.options.map((option) => {
            return (
              <option key={option.id} value={option.id}>
                {option.label}
              </option>
            );
          })
        : 'No options'}
    </Select>
  );
};

export default DropDown;

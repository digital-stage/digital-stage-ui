import React from 'react';
import { Label, SxStyleProp, Radio as MaterialUiRadio } from 'theme-ui';

type Props = {
    label: string;
    variant?: 'dark' | 'light';
    sx?: SxStyleProp;
};

const Radio = (props: React.ComponentPropsWithRef<'input'> & Props): JSX.Element => {
    const { label, variant } = props;

    return (
        <Label sx={{ color: variant === 'dark' ? 'text' : 'background' }}>
            <MaterialUiRadio
                {...props}
            />
            { label}
        </Label >
    );
};

export default Radio;

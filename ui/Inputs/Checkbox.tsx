import React, { useEffect } from 'react';
import { Checkbox as ThemeUICheckbox, SxStyleProp } from 'theme-ui';

type Props = {
    children?: React.ReactNode;
    checked: boolean;
    variant: 'checkboxPrimary' | 'checkboxTertiary'
    sx?: SxStyleProp;
};

const Checkbox = (props: React.ComponentPropsWithRef<'input'> & Props): JSX.Element => {
    const { checked } = props;

    return (
        <ThemeUICheckbox
            {...props}
            checked={checked}
        />
    )
}

export default Checkbox;




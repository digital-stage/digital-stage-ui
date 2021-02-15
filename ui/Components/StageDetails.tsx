import React from 'react';
import { Image } from 'theme-ui';
import Flex from '../../ui/Layout/Flex';
import { H4 } from '../Typography/Heading';
import { Micro } from '../Typography/Body';

type Props = {
  name: string;
  isMeOwner: boolean;
  image?: string;
};

const StageDetails = (props: React.ComponentPropsWithRef<'div'> & Props): JSX.Element => {
  const { name, isMeOwner, image } = props;

  return (
    <Flex>
      <Image
        src={image ? image : '/stage.png'}
        sx={{ width: '48px', height: '48px', minWidth: '48px', minHeight: '48px' }}
      />
      <Flex sx={{ flexDirection: 'column', justifyContent: 'center' }}>
        <H4 sx={{ mb: 0 }}>{name}</H4>
        {isMeOwner && <Micro sx={{ mb: 0 }}>You own this stage</Micro>}
      </Flex>
    </Flex>
  );
};

export default StageDetails;

import React from 'react';
import { Image } from 'theme-ui';
import Flex from '../../ui/Layout/Flex';
import { H6 } from '../Typography/Heading';
import { BsMusicNoteBeamed } from 'react-icons/bs';

type Props = {
  name: string;
  image?: string;
};

const GroupDetails = (props: React.ComponentPropsWithRef<'div'> & Props): JSX.Element => {
  const { name, image } = props;

  return (
    <Flex sx={{ justifyContent: 'center', alignItems: 'center' }}>
      {!image ? (
        <Flex
          sx={{
            width: '32px',
            height: '32px',
            bg: '#ef49bd',
            borderRadius: '50%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <BsMusicNoteBeamed color="#f4f4f4" />
        </Flex>
      ) : (
        <Image
          src={image}
          sx={{ width: '32px', height: '32px', minWidth: '32px', minHeight: '32px', m: 5 }}
        />
      )}
      <Flex sx={{ flexDirection: 'column', justifyContent: 'center' }}>
        <H6 sx={{ mb: 0 }}>{name}</H6>
      </Flex>
    </Flex>
  );
};

export default GroupDetails;

import { Button } from 'theme-ui';
import { AiOutlineClose } from 'react-icons/ai';

const CloseButton = (props: React.ComponentPropsWithRef<'button'>): JSX.Element => {
  return (
    <Button variant="close" sx={{ pt: '6px' }} {...props}>
      <AiOutlineClose size="16px" />
    </Button>
  );
};

export default CloseButton;

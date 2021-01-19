import { Button } from 'theme-ui';
import { AiOutlineClose } from 'react-icons/ai';

const CloseButton = (props: React.ComponentPropsWithRef<'button'>): JSX.Element => {
  return (
    <Button variant="close" {...props}>
      <AiOutlineClose size="16px" />
    </Button>
  );
};

export default CloseButton;

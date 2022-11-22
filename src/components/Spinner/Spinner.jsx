import { RotatingLines } from 'react-loader-spinner';
import { SpinnerWrapper } from 'components/Spinner/Spinner.styled';

export const Spinner = () => {
  return (
    <SpinnerWrapper>
    
      <RotatingLines
  strokeColor="#2196f3"
  strokeWidth="5"
  animationDuration="0.75"
  width="96"
  visible={true}
/>
    </SpinnerWrapper>
  );
};

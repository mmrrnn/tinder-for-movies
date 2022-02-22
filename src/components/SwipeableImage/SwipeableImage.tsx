import { useSwipeable } from 'react-swipeable';

import { FullSizeImage } from './styles';

import { SwipeableImageProps } from './types';

const SwipeableImage = ({
  src,
  alt,
  onSwipedLeft = () => undefined,
  onSwipedRight = () => undefined,
  ...imgRestProps
}: SwipeableImageProps) => {
  const swipeHandlers = useSwipeable({ onSwipedLeft, onSwipedRight });

  return (
    <FullSizeImage
      src={src}
      alt={alt}
      {...swipeHandlers}
      {...imgRestProps}
    />
  )
}

export default SwipeableImage;

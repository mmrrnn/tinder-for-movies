import { useSwipeable } from 'react-swipeable';

import { FullSizeImage } from './styles';

import { SwipeableImageProps } from './types';

const SwipeableImage = ({
  src,
  alt,
  onSwiped = () => undefined,
  ...imgRestProps
}: SwipeableImageProps) => {
  const swipeHandlers = useSwipeable({ onSwiped });

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

export type SwipeableImageProps = {
  src: string;
  alt: string;
  onSwipedLeft?: VoidFunction;
  onSwipedRight?: VoidFunction;
} & React.ImgHTMLAttributes<HTMLImageElement>;

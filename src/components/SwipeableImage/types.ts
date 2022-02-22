export type SwipeableImageProps = {
  src: string;
  alt: string;
  onSwiped?: VoidFunction;
} & React.ImgHTMLAttributes<HTMLImageElement>;

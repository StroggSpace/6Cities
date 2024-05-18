interface Props {
  src: string;
  alt: string;
}

export const HotelImg = ({ src, alt }: Props) => (
  <div className='property__image-wrapper'>
    <img
      className='property__image'
      src={src}
      alt={alt}
    />
  </div>
);

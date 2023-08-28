import { imageItems } from '@/data/image-items';
import { ParallaxImage } from '@/features/parallax';

const ImageItems = () => {
  return (
    <section>
      {imageItems.map(({ id, ...props }) => (
        <ParallaxImage key={id} {...props} />
      ))}
    </section>
  );
};

export default ImageItems;

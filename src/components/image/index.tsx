import { IMAGE_URI } from "app-constants";
import NextImage from "next/image";

interface Props {
  src: string;
  alt?: string;
}

export const Image: React.FC<Props> = ({ src, alt }) => (
  <NextImage
    src={`${IMAGE_URI}/${src.replace(/^\//, "")}`}
    {...(alt ? { alt } : {})}
    layout="fill"
    objectFit="cover"
  />
);

export default Image;

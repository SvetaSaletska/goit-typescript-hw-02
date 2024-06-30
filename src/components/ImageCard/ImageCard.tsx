import css from '../ImageCard/ImageCard.module.css';

interface ImageCardProps {
  url: string;
  altName: string;
  likes: number;
}

export const ImageCard: React.FC<ImageCardProps> = ({
  url,
  altName,
  likes,
}) => {
  return (
    <div className={css.image_card}>
      <img src={url} alt={altName} className={css.image} />
      <p>Likes: {likes}</p>
    </div>
  );
};

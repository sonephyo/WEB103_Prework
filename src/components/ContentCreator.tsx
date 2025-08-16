import type { Creator } from "../types/creator";

const ContentCreator: React.FC<Creator> = ({
  name,
  url,
  description,
  imageURL,
}) => {
  return (
    <div className="card">
      {imageURL && <img src={imageURL} alt={name} />}
      <p className="name">{name}</p>
      <a href={url} className="url" target="_blank" rel="noopener noreferrer">
        {url}
      </a>
      <p className="description">{description}</p>
    </div>
  );
};

export default ContentCreator;

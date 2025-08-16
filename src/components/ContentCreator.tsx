import { Link } from "react-router";
import type { Creator } from "../types/creator";

const ContentCreator: React.FC<Creator> = ({
  id,
  name,
  url,
  description,
  imageURL,
}) => {
  return (
    <div className="card">
      <div style={{display: "flex", justifyContent: "right", gap: "1rem"}}>
        <Link to={`/edit/${id}`}>Edit</Link>
        <Link to={`/view/${id}`}>Details</Link>
      </div>
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

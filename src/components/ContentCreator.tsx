import { Link } from "react-router";
import type { Creator } from "../types/creator";
import { supabase } from "../client";

const ContentCreator: React.FC<Creator> = ({
  id,
  name,
  url,
  description,
  imageURL,
}) => {
  const handleDelete = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const { error } = await supabase.from("creators").delete().eq("id", id).select().single();
    if (error) {
      console.log("Error deleting creator: ", error)
    }

    window.location.reload();
  };
  return (
    <div className="card">
      <div style={{ display: "flex", justifyContent: "right", gap: "1rem" }}>
        <Link
          to={`/edit/${id}`}
          style={{
            color: "white",
            textDecoration: "none",
            padding: "6px 12px",
            backgroundColor: "#007bff",
            borderRadius: "4px",
            fontSize: "14px",
          }}
        >
          Edit
        </Link>
        <Link
          to={`/view/${id}`}
          style={{
            color: "white",
            textDecoration: "none",
            padding: "6px 12px",
            backgroundColor: "#007bff",
            borderRadius: "4px",
            fontSize: "14px",
          }}
        >
          Details
        </Link>
        <button
          style={{
            color: "white",
            textDecoration: "none",
            padding: "6px 12px",
            backgroundColor: "#007bff",
            borderRadius: "4px",
            fontSize: "14px",
          }}
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
      {imageURL && <img src={imageURL} alt={name} />}
      <p className="name">{name}</p>
      <a href={url} className="url" target="_blank" rel="noopener noreferrer">
        {url.length >= 20 ? url.substring(0, 20) + "..." : url}
      </a>
      <p className="description">
        {description.length >= 20
          ? description.substring(0, 20) + "..."
          : description}
      </p>
    </div>
  );
};

export default ContentCreator;

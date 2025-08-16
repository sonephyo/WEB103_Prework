import { useState } from "react";

const AddCreator = () => {
  const [name, setname] = useState<string>("");
  const [url, seturl] = useState<string>("");
  const [description, setdescription] = useState<string>("");
  const [imageURL, setimageURL] = useState<string>("");

  return (
    <div style={{ width: "50%", marginLeft: "auto", marginRight: "auto" }}>
      <div>
        <h2>Add a new Content Creator</h2>
      </div>
      <div>
        <form style={{ display: "flex", flexDirection: "column" }}>
          <label>
            CreatorName:
            <input
              type="text"
              value={name}
              onChange={(e) => setname(e.target.value)}
            />
          </label>
          <label>
            URL:
            <input
              type="text"
              value={url}
              onChange={(e) => seturl(e.target.value)}
            />
          </label>{" "}
          <label>
            Description:
            <textarea
              value={description}
              onChange={(e) => setdescription(e.target.value)}
            />
          </label>{" "}
          <label>
            Image URL:
            <input
              type="text"
              value={imageURL}
              onChange={(e) => setimageURL(e.target.value)}
            />
          </label>
          <button
            type="submit"
            onClick={() => {
              // TODO: Add submit function to supabase
            }}
            style={{
              width: "10rem",
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCreator;

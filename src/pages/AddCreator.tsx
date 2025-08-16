import { useState } from "react";
import { supabase } from "../client";

const AddCreator = () => {
  const [name, setname] = useState<string>("");
  const [url, seturl] = useState<string>("");
  const [description, setdescription] = useState<string>("");
  const [imageURL, setimageURL] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (name == "" || url == "" || description == "" || imageURL == "") {
      alert("Please fill out all the information before submitting");
      return;
    }

    const { data, error } = await supabase
      .from("creators")
      .insert([
        { name: name, url: url, description: description, imageURL: imageURL },
      ]);

    if (error) {
      console.error("Error inserting a new creator: ", error);
    } else {
      console.log("Creator added: ", data);
      alert("Creator added successfully");
    }
  };

  return (
    <div style={{ width: "50%", marginLeft: "auto", marginRight: "auto" }}>
      <div>
        <h2>Add a new Content Creator</h2>
      </div>
      <div>
        <form
          style={{ display: "flex", flexDirection: "column" }}
          onSubmit={handleSubmit}
        >
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

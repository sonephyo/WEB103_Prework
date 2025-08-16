import { useEffect, useState } from "react";
import { supabase } from "../client";
import { useNavigate, useParams } from "react-router";
import type { Creator } from "../types/creator";

const EditCreator = () => {
  const [name, setname] = useState<string>("");
  const [url, seturl] = useState<string>("");
  const [description, setdescription] = useState<string>("");
  const [imageURL, setimageURL] = useState<string>("");

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCreators = async () => {
      const { data, error } = await supabase
        .from("creators")
        .select("*")
        .eq("id", params.id)
        .single<Creator>();
      if (error) {
        console.log("Error Fetching creators:", error);
      } else {
        setname(data.name);
        seturl(data.url);
        setdescription(data.description);
        setimageURL(data.imageURL);
      }
    };
    fetchCreators();
  }, [params.id]);

  const updateChange = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { error } = await supabase.from("creators").update({
      name: name,
      url: url,
      description: description,
      imageURL: imageURL,
    })
    .eq("id", params.id)
    .select()
    .single();

    if (error) {
        console.error("Error updating creator: ", error)
    }

    alert("Successfully updated")
    
    navigate(`/view/${params.id}`)
  };

  return (
    <div style={{ width: "50%", marginLeft: "auto", marginRight: "auto" }}>
      <div>
        <form
          onSubmit={updateChange}
          style={{ display: "flex", flexDirection: "column", gap: "1rem"}}
        >
          <label>
            CreatorName:
            <input
              type="text"
              value={name}
              onChange={(e) => setname(e.target.value)}
              style={{width: "100%"}}
            />
          </label>
          <label>
            URL:
            <input
              type="text"
              value={url}
              onChange={(e) => seturl(e.target.value)}
              style={{width: "100%"}}
            />
          </label>{" "}
          <label>
            Description:
            <textarea
              value={description}
              onChange={(e) => setdescription(e.target.value)}
              style={{width: "100%"}}
            />
          </label>{" "}
          <label>
            Image URL:
            <input
              type="text"
              value={imageURL}
              onChange={(e) => setimageURL(e.target.value)}
              style={{width: "100%"}}
            />
          </label>
          <button
            type="submit"
            style={{
              width: "10rem",
            }}
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditCreator;

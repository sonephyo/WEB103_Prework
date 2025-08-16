import { useEffect, useState } from "react";
import { supabase } from "../client";
import ContentCreator from "../components/ContentCreator";
import type { Creator } from "../types/creator";

const ShowCreators = () => {
  const [creators, setcreators] = useState<Creator[]>([]);
  useEffect(() => {
    const fetchCreators = async () => {
      const { data, error } = await supabase.from("creators").select("*");
      if (error) console.log("Error Fetching creators:", error);
      else setcreators(data);
    };
    fetchCreators();
  }, []);

  return (
    <div>
      <h2 style={{
        margin: "16px auto"
      }}>All Creators</h2>
      {creators.length != 0 ? (
        <div>
          {creators.map((item, index) => (
            <div key={index}>
              <ContentCreator
                id={item.id}
                name={item.name}
                url={item.url}
                description={item.description}
                imageURL={item.imageURL}
              />
            </div>
          ))}
        </div>
      ) : (
        <div>
          <p>There is no creators yet.</p>
        </div>
      )}
    </div>
  );
};

export default ShowCreators;

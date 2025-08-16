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
      <p>All Creators</p>
      {creators.length != 0 ? (
        <div>
          {creators.map((item, index) => (
            <li key={index}>
              <ContentCreator
                name={item.name}
                url={item.url}
                description={item.description}
                imageURL={item.imageURL}
              />
            </li>
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

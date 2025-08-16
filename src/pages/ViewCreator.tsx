import { useEffect, useState } from "react";
import { supabase } from "../client";
import type { Creator } from "../types/creator";
import { useNavigate, useParams } from "react-router";

const ViewCreator = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [creator, setCreator] = useState<Creator | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCreator = async () => {
      if (!id) return;

      const { data, error } = await supabase
        .from("creators")
        .select("*")
        .eq("id", id)
        .single<Creator>();

      if (error) {
        console.error(error);
      } else {
        setCreator(data);
      }
      setLoading(false);
    };

    fetchCreator();
  }, [id]);

  if (loading) return <p className="text-gray-500">Loading...</p>;
  if (!creator) return <p className="text-red-500">Creator not found.</p>;

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "2rem auto",
        padding: "1.5rem",
        backgroundColor: "#fff",
        borderRadius: "10px",
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <button
        onClick={() => navigate("/all")}
        style={{
          marginBottom: "1rem",
          padding: "0.5rem 1rem",
          backgroundColor: "#e0e0e0",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        ← Home
      </button>

      <div style={{ textAlign: "center" }}>
        {creator.imageURL && (
          <img
            src={creator.imageURL}
            alt={creator.name}
            style={{
              width: "120px",
              height: "120px",
              objectFit: "cover",
              borderRadius: "50%",
              marginBottom: "1rem",
              boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
            }}
          />
        )}
        <h1 style={{ fontSize: "1.8rem", marginBottom: "0.5rem" }}>
          {creator.name}
        </h1>
        <p style={{ marginBottom: "1rem" }}>
          <a
            href={creator.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#1a73e8", textDecoration: "none" }}
          >
            {creator.url}
          </a>
        </p>
        <p style={{ color: "#444", lineHeight: "1.5" }}>
          {creator.description}
        </p>
      </div>
    </div>
  );
};

export default ViewCreator;

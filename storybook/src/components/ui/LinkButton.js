import React, { useState } from "react";
import { useRouter } from "next/navigation";

const LinkButton = ({ href, onClick, children, className, disabled }) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleClick = async (event) => {
    event.preventDefault(); // Prevent immediate navigation

    if (loading || disabled) return; // Prevent multiple clicks
    setLoading(true);

    try {
      const success = await onClick(); // Call the event handler
      if (success) {
        router.push(href);
      }
    } catch (error) {
      console.error("Error occurred in event:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
      <button
          onClick={handleClick}
          className={className}
          disabled={loading || disabled}
          /*
                style={{
                    padding: "10px 15px",
                    backgroundColor: loading || disabled ? "#ccc" : "#007bff",
                    color: "white",
                    border: "none",
                    cursor: loading || disabled ? "not-allowed" : "pointer",
                    borderRadius: "5px",
                    textDecoration: "none",
                    display: "inline-block"
                }}*/
      >
        {loading ? "Processing..." : children}
      </button>
  );
};

export default LinkButton;

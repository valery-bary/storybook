import React, { useState } from "react";

const Accordeon = ({ data, setSelectedGoal, multiplyChoice = false }) => {
  const [expandedIds, setExpandedIds] = useState(multiplyChoice ? [] : null);

  const handleAccordionClick = (id) => {
    if (multiplyChoice) {
      setExpandedIds((prevExpandedIds) => {
        if (prevExpandedIds.includes(id)) {
          return prevExpandedIds.filter((item) => item !== id);
        } else {
          return [...prevExpandedIds, id];
        }
      });
    } else {
      setExpandedIds((prevId) => {
        const newId = prevId === id ? null : id;
        setSelectedGoal(newId);
        return newId;
      });
    }
  };

  return (
    <div className="accordion">
      {data.map((item) => (
        <div key={item.id} className="accordion-item">
          <div style={{ color: "black" }}>
            <div
              className={`accordion-header ${multiplyChoice
                  ? expandedIds.includes(item.id)
                    ? "accordion-header.expanded"
                    : ""
                  : expandedIds === item.id
                    ? "accordion-header.expanded"
                    : ""
                }`}
              onClick={() => handleAccordionClick(item.id)}
            >
              <h3 className="accordion-title">{item.name}</h3>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordeon;
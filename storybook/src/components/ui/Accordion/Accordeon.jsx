import React, { useState } from "react";
import styles from "./Accordion.module.css";

const Accordion = ({ data, setSelectedGoal, multiplyChoice = false }) => {
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
    <div className={styles["accordion"]}>
      {data.map((item) => (
        <div key={item.id} className={styles["accordion-item"]}>
          <div style={{ color: "black" }}>
            <div
              className={`${styles["accordion-header"]} ${multiplyChoice
                  ? expandedIds.includes(item.id)
                    ? styles.expanded
                    : ""
                  : expandedIds === item.id
                    ? styles.expanded
                    : ""
                }`}
              onClick={() => handleAccordionClick(item.id)}
            >
              <h3 className={styles["accordion-title"]}>{item.name}</h3>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
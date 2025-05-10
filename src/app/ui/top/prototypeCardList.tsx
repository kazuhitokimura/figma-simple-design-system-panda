"use client";
import { css } from "../../../../styled-system/css";
import { Card } from "../card";

export const PrototypeCardList = () => {
  return (
    <div
      className={css({
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
        gap: "600", // 48px
        alignSelf: "stretch",
      })}
    >
      {[...Array(5)].map((_, i) => (
        <Card
          key={i}
          title={`Title ${i + 1}`}
          body="Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story."
          buttonLabel="Button"
          buttonSize="medium"
          buttonVariant="neutral"
          onButtonClick={() => {
            alert(`Card ${i + 1} clicked!`);
          }}
        />
      ))}
    </div>
  );
};

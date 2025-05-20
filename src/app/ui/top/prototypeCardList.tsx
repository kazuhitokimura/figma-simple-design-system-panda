"use client";
import { css } from "../../../../styled-system/css";
import { Card } from "../card";
import { useRouter } from "next/navigation";

export const PrototypeCardList = () => {
  const router = useRouter();

  const cardData = [
    {
      title: "コンポーネントの一覧",
      body: "MCP経由で取得したFigmaデータをもとに作成したコンポーネントの一覧です",
      buttonLabel: "見る",
      onButtonClick: () => router.push("/prototype/component-list"),
    },
    {
      title: "Window Confirm",
      body: "window confirmのデモです",
      buttonLabel: "見る",
      onButtonClick: () => router.push("/prototype/window-confirm"),
    },
    {
      title: "Title 3",
      body: "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.",
      buttonLabel: "Button",
      onButtonClick: () => alert("Card 1 clicked!"),
    },
  ];

  return (
    <div
      className={css({
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
        gap: "600", // 48px
        alignSelf: "stretch",
      })}
    >
      {cardData.map((card, i) => (
        <Card
          key={i}
          title={card.title}
          body={card.body}
          buttonLabel={card.buttonLabel}
          buttonSize="medium"
          buttonVariant="neutral"
          onButtonClick={card.onButtonClick}
        />
      ))}
    </div>
  );
};

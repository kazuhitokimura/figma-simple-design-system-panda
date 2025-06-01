import { css } from "../../../styled-system/css";
import { useState } from "react";
import { Icon } from "./icon";

type AccordionItemProps = {
  title: string;
  content: string;
  isOpen: boolean;
  onClick: () => void;
};

const AccordionItem = ({
  title,
  content,
  isOpen,
  onClick,
}: AccordionItemProps) => (
  <div
    className={css({
      display: "flex",
      flexDirection: "column",
      bg: isOpen ? "background.default" : "background.subtle", // fill_XDFJ7T / fill_N576GH
      borderRadius: "200", // 8px
      borderWidth: "border", // 1px
      borderColor: "border.default", // stroke_BVQTAQ
      borderStyle: "solid",
      p: "400", // 16px
      width: "100%", // 親で制御
      gap: "200", // 8px
    })}
  >
    <button
      type="button"
      className={css({
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "200", // 8px
        width: "100%",
        bg: "transparent",
        border: "none",
        cursor: "pointer",
        padding: 0,
      })}
      onClick={onClick}
      aria-expanded={isOpen}
    >
      <span
        className={css({
          textStyle: "body.strong", // style_1SIZ43
          color: "text.default", // fill_2P6K85
          flex: 1,
          textAlign: "left",
        })}
      >
        {title}
      </span>
      <span
        className={css({
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "icon.20",
          height: "icon.20",
        })}
      >
        {/* TODO: chevron up/down専用アイコンに差し替え */}
        <Icon
          name={isOpen ? "chevron-up" : "chevron-down"}
          size="icon.20"
          color="icon.default"
        />
      </span>
    </button>
    {isOpen && (
      <div
        className={css({
          display: "flex",
          flexDirection: "row",
          alignItems: "stretch",
          width: "100%",
          pt: "200", // 8px
        })}
      >
        <span
          className={css({
            textStyle: "body.base", // style_H7O6R0
            color: "text.default", // fill_2P6K85
          })}
        >
          {content}
        </span>
      </div>
    )}
  </div>
);

type AccordionProps = {
  items: { title: string; content: string }[];
  defaultOpenIndex?: number;
};

export const Accordion = ({ items, defaultOpenIndex = 0 }: AccordionProps) => {
  const [openIndex, setOpenIndex] = useState(defaultOpenIndex);
  return (
    <div
      className={css({
        display: "flex",
        flexDirection: "column",
        gap: "400", // 16px
        width: "100%",
      })}
    >
      {items.map((item, i) => (
        <AccordionItem
          key={i}
          title={item.title}
          content={item.content}
          isOpen={openIndex === i}
          onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
        />
      ))}
    </div>
  );
};

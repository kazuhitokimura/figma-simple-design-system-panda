import { css } from "../../styled-system/css";

export default function Home() {
  return (
    <div
      className={css({
        textStyle: "titlePage",
        color: "text.tertiary",
        margin: "400",
        desktop: { textStyle: "titleHero" },
        boxShadow: "drop-shadow-400",
      })}
    >
      Hello 🐼!
    </div>
  );
}

import { css } from "../../styled-system/css";

export default function Home() {
  return (
    <div
      className={css({
        fontSize: "scale06",
        fontWeight: "bold",
        color: "text.tertiary",
        margin: "400",
        desktop: { fontSize: "scale08" },
      })}
    >
      Hello 🐼!
    </div>
  );
}

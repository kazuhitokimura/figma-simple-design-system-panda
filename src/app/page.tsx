import { css } from "../../styled-system/css";

export default function Home() {
  return (
    <div
      className={css({
        fontSize: "2xl",
        fontWeight: "bold",
        color: "text.tertiary",
        margin: "400",
      })}
    >
      Hello 🐼!
    </div>
  );
}

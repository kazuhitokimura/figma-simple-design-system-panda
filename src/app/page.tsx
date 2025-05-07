import { css } from "../../styled-system/css";
import { Button } from "./ui/button";

export default function Home() {
  return (
    <div>
      <div
        className={css({
          textStyle: "titlePage",
          color: "text.tertiary",
          margin: "400",
          desktop: { textStyle: "titleHero" },
        })}
      >
        Hello 🐼
      </div>
      <Button variant="primary" size="medium">
        Click me
      </Button>
      <Button variant="neutral" size="medium">
        Click me
      </Button>
      <Button variant="subtle" size="medium">
        Click me
      </Button>
    </div>
  );
}

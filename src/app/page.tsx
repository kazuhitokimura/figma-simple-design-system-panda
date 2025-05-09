import { css } from "../../styled-system/css";
import { Button } from "./ui/button";
import { ButtonDanger } from "./ui/buttonDanger";
import { Icon } from "./ui/icon";
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
        Button
      </Button>
      <Button variant="neutral" size="medium">
        Button
      </Button>
      <Button variant="subtle" size="medium">
        Button
      </Button>
      <ButtonDanger size="medium">Button</ButtonDanger>
      <Icon name="airplay" size="48" />
    </div>
  );
}

import { css } from "../../styled-system/css";
import { Button } from "./ui/button";
import { ButtonDanger } from "./ui/buttonDanger";
import { Icon } from "./ui/icon";
import { Card } from "./ui/card";

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
      <Icon name="activity" size="48" />
      <Icon name="airplay" size="48" />
      <Icon name="alert-circle" size="48" />
      <Icon name="alert-octagon" size="48" />
      <Icon name="alert-triangle" size="48" />
      <Card
        title="タイトル"
        body="説明が入ります説明が入ります説明が入ります説明が入ります説明が入ります"
        buttonLabel="アクション"
        buttonSize="medium"
        buttonVariant="neutral"
      />
    </div>
  );
}

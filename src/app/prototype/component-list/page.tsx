"use client";
import { css } from "../../../../styled-system/css";

import { Button } from "../../ui/button";
import { ButtonDanger } from "../../ui/buttonDanger";
import { Card } from "../../ui/card";
import { Icon } from "../../ui/icon";
import { Accordion } from "@/app/ui/accordion";

export default function ComponentList() {
  return (
    <div className={css({ padding: "1200" })}>
      <div>
        <h1
          className={css({
            textStyle: "heading",
            color: "text.default",
            paddingBottom: "400",
          })}
        >
          Button
        </h1>
        <div
          className={css({
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            gap: "200",
          })}
        >
          <Button
            size="medium"
            variant="primary"
            onClick={() => {
              alert("click");
            }}
          >
            ボタン
          </Button>
          <Button
            size="medium"
            variant="neutral"
            onClick={() => {
              alert("click");
            }}
          >
            ボタン
          </Button>
          <Button
            size="medium"
            variant="subtle"
            onClick={() => {
              alert("click");
            }}
          >
            ボタン
          </Button>
          <Button size="medium" variant="primary" disabled>
            ボタン
          </Button>
          <Button size="medium" variant="neutral" disabled>
            ボタン
          </Button>
          <Button size="medium" variant="subtle" disabled>
            ボタン
          </Button>
          <Button
            size="small"
            variant="primary"
            onClick={() => {
              alert("click");
            }}
          >
            ボタン
          </Button>
          <Button
            size="small"
            variant="neutral"
            onClick={() => {
              alert("click");
            }}
          >
            ボタン
          </Button>
          <Button
            size="small"
            variant="subtle"
            onClick={() => {
              alert("click");
            }}
          >
            ボタン
          </Button>
          <Button size="small" variant="primary" disabled>
            ボタン
          </Button>
          <Button size="small" variant="neutral" disabled>
            ボタン
          </Button>
          <Button size="small" variant="subtle" disabled>
            ボタン
          </Button>
        </div>
      </div>
      <div>
        <h1
          className={css({
            textStyle: "heading",
            color: "text.default",
            paddingTop: "800",
            paddingBottom: "400",
          })}
        >
          ButtonDanger
        </h1>
        <div
          className={css({
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            gap: "200",
          })}
        >
          <ButtonDanger
            size="medium"
            variant="primary"
            onClick={() => {
              alert("click");
            }}
          >
            ボタン
          </ButtonDanger>
          <ButtonDanger
            size="medium"
            variant="subtle"
            onClick={() => {
              alert("click");
            }}
          >
            ボタン
          </ButtonDanger>
          <ButtonDanger size="medium" variant="primary" disabled>
            ボタン
          </ButtonDanger>
          <ButtonDanger size="medium" variant="subtle" disabled>
            ボタン
          </ButtonDanger>
          <ButtonDanger
            size="small"
            variant="primary"
            onClick={() => {
              alert("click");
            }}
          >
            ボタン
          </ButtonDanger>
          <ButtonDanger
            size="small"
            variant="subtle"
            onClick={() => {
              alert("click");
            }}
          >
            ボタン
          </ButtonDanger>
          <ButtonDanger size="small" variant="primary" disabled>
            ボタン
          </ButtonDanger>
          <ButtonDanger size="small" variant="subtle" disabled>
            ボタン
          </ButtonDanger>
        </div>
      </div>
      <div>
        <h1
          className={css({
            textStyle: "heading",
            color: "text.default",
            paddingTop: "800",
            paddingBottom: "400",
          })}
        >
          Card
        </h1>
        <div
          className={css({
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            gap: "200",
          })}
        >
          <Card
            title="タイトル"
            body="内容が入ります"
            iconName="chevron-right"
            buttonLabel="ボタン"
            buttonSize="medium"
            buttonVariant="primary"
            onButtonClick={() => {
              alert("click");
            }}
          />
        </div>
      </div>
      <div>
        <h1
          className={css({
            textStyle: "heading",
            color: "text.default",
            paddingTop: "800",
            paddingBottom: "400",
          })}
        >
          Icon
        </h1>
        <div
          className={css({
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            gap: "200",
          })}
        >
          <Icon name="chevron-left" size="icon.16" />
          <Icon name="chevron-left" size="icon.20" />
          <Icon name="chevron-left" size="icon.24" />
          <Icon name="chevron-left" size="icon.32" />
          <Icon name="chevron-left" size="icon.48" />
          <Icon name="chevron-left" color="icon.secondary" size="icon.16" />
          <Icon name="chevron-left" color="icon.secondary" size="icon.20" />
          <Icon name="chevron-left" color="icon.secondary" size="icon.24" />
          <Icon name="chevron-left" color="icon.secondary" size="icon.32" />
          <Icon name="chevron-left" color="icon.secondary" size="icon.40" />
          <Icon name="chevron-left" color="icon.secondary" size="icon.48" />
          <Icon name="chevron-left" color="icon.tertiary" size="icon.16" />
          <Icon name="chevron-left" color="icon.tertiary" size="icon.20" />
          <Icon name="chevron-left" color="icon.tertiary" size="icon.24" />
          <Icon name="chevron-left" color="icon.tertiary" size="icon.32" />
          <Icon name="chevron-left" color="icon.tertiary" size="icon.40" />
          <Icon name="chevron-left" color="icon.tertiary" size="icon.48" />
        </div>
        <div>
          <h1
            className={css({
              textStyle: "heading",
              color: "text.default",
              paddingTop: "800",
              paddingBottom: "400",
            })}
          >
            Accordion
          </h1>
          <Accordion
            items={[
              {
                title: "タイトル",
                content: "内容",
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
}

"use client";

import { css } from "../../../styled-system/css";
import { Icon } from "./icon";
import type { IconName } from "./icon";
import { Button } from "./button";

export type CardProps = {
  title: string;
  body: string;
  iconName?: IconName;
  buttonLabel?: string;
  buttonSize?: "medium" | "small";
  buttonVariant?: "primary" | "neutral" | "subtle";
  onButtonClick?: () => void; // ← これを追加
};

export const Card = ({
  title,
  body,
  iconName,
  buttonLabel,
  buttonSize = "medium",
  buttonVariant = "primary",
  onButtonClick,
}: CardProps) => {
  return (
    <div
      className={css({
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        gap: "600", // 24px
        width: "100%",
        bg: "background.default", // fill_5DPI2B: #FFFFFF → semantic token
        borderRadius: "200", // 8px
        borderWidth: "border", // panda.config.ts Token
        borderColor: "border.default", // #303030に最も近いsemantic token
        borderStyle: "solid",
        p: "400", // 16px padding
      })}
    >
      {iconName && <Icon name={iconName} size="32" color="icon.default" />}
      <div
        className={css({
          display: "flex",
          flexDirection: "column",
          gap: "400", // 16px
          flex: 1,
        })}
      >
        <div
          className={css({
            display: "flex",
            flexDirection: "column",
            gap: "200", // 8px
            alignSelf: "stretch",
          })}
        >
          <div className={css({ textStyle: "heading", color: "text.default" })}>
            {title}
          </div>
          <div
            className={css({ textStyle: "body.base", color: "text.secondary" })}
          >
            {body}
          </div>
        </div>
        {buttonLabel && (
          <div
            className={css({
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              alignSelf: "stretch",
            })}
          >
            <Button
              variant={buttonVariant}
              size={buttonSize}
              onClick={onButtonClick}
            >
              {buttonLabel}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

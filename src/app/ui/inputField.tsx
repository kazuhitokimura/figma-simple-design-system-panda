"use client";
import { css } from "../../../styled-system/css";

export type InputFieldProps = {
  label: string;
  value?: string;
  placeholder?: string;
  state?: "default" | "error" | "disabled";
  onChange?: (value: string) => void;
};

export const InputField = ({
  label,
  value = "",
  placeholder = "",
  state = "default",
  onChange,
}: InputFieldProps) => {
  const isError = state === "error";
  const isDisabled = state === "disabled";

  return (
    <div
      className={css({
        display: "flex",
        flexDirection: "column",
        gap: "200", // 8px
        width: "100%",
      })}
    >
      <label
        className={css({
          textStyle: "body.base", // Figma: style_FQX02D
          color: isDisabled ? "text.disabled" : "text.default", // Figma: fill_SU7XQW, fill_731WOB
        })}
      >
        {label}
      </label>
      <div
        className={css({
          display: "flex",
          flexDirection: "row",
          alignItems: "stretch",
          alignSelf: "stretch",
          paddingX: "400", // 12px (上下) 16px(左右)
          paddingY: "300",
          borderRadius: "200", // 8px
          bg: isDisabled ? "background.disabled" : "background.default", // Figma: fill_ECTZ8U, fill_1U72WY
          borderWidth: "border",
          borderStyle: "solid",
          borderColor: isError
            ? "border.danger.default"
            : isDisabled
              ? "border.disabled"
              : "border.default",
        })}
      >
        <input
          className={css({
            flex: 1,
            border: "none",
            outline: "none",
            bg: "transparent",
            color: isDisabled
              ? "text.disabled"
              : isError
                ? "text.danger.default"
                : "text.default",
            textStyle: "body.base",
            _placeholder: { color: "text.disabled.onDisabled" },
          })}
          type="text"
          value={value}
          placeholder={placeholder}
          disabled={isDisabled}
          onChange={(e) => onChange?.(e.target.value)}
        />
      </div>
    </div>
  );
};

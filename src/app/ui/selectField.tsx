"use client";
import { css } from "../../../styled-system/css";
import { Icons } from "./icon";
import { useState } from "react";

export type SelectFieldProps = {
  label: string;
  value?: string;
  placeholder?: string;
  options: { label: string; value: string }[];
  state?: "default" | "error" | "disabled";
  errorMessage?: string;
  onChange?: (value: string) => void;
};

export const SelectField = ({
  label,
  value = "",
  placeholder = "",
  options,
  state = "default",
  errorMessage = "",
  onChange,
}: SelectFieldProps) => {
  const isError = state === "error";
  const isDisabled = state === "disabled";
  const [isOpen, setIsOpen] = useState(false);

  // 選択肢のラベルを取得
  const selectedLabel = options.find((opt) => opt.value === value)?.label || "";

  return (
    <div
      className={css({
        display: "flex",
        flexDirection: "column",
        gap: "200", // 8px
        width: "100%",
      })}
    >
      {/* ラベル */}
      <label
        className={css({
          textStyle: "body.base",
          color: isDisabled ? "text.disabled" : "text.default",
        })}
      >
        {label}
      </label>
      {/* セレクトボックス本体 */}
      <div
        className={css({
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          alignSelf: "stretch",
          paddingY: "300", // 12px
          paddingX: "400", // 16px
          borderRadius: "200", // 8px
          bg: isDisabled ? "background.disabled" : "background.default",
          borderWidth: "border",
          borderStyle: "solid",
          borderColor: isError
            ? "border.danger.default"
            : isDisabled
              ? "border.disabled"
              : "border.default",
          gap: "200", // 8px
          cursor: isDisabled ? "not-allowed" : "pointer",
          position: "relative",
        })}
        tabIndex={isDisabled ? -1 : 0}
        onClick={() => {
          if (!isDisabled) setIsOpen((prev) => !prev);
        }}
        onBlur={() => setIsOpen(false)}
      >
        <span
          className={css({
            flex: 1,
            textStyle: "singleLine.body.base",
            color: isDisabled
              ? "text.disabled"
              : !value && placeholder
                ? "text.disabled.onDisabled"
                : isError
                  ? "text.danger.default"
                  : "text.default",
            userSelect: "none",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          })}
        >
          {value ? selectedLabel : placeholder}
        </span>
        <span
          className={css({
            display: "flex",
            alignItems: "center",
            color: isDisabled ? "icon.disabled" : "icon.default",
          })}
        >
          <Icons.chevronDown size="icon.16" />
        </span>
        {/* ドロップダウンリスト */}
        {isOpen && !isDisabled && (
          <ul
            className={css({
              position: "absolute",
              top: "calc(100% + 4px)",
              left: 0,
              right: 0,
              zIndex: 100,
              bg: "background.default",
              borderWidth: "border",
              borderStyle: "solid",
              borderColor: isError ? "border.danger.default" : "border.default",
              borderRadius: "200",
              boxShadow: "drop-shadow-200", // Tokenがなければコメント
              margin: 0,
              paddingY: "100", // 4px
              paddingX: 0,
              listStyle: "none",
              maxHeight: "2400", // 96px
              overflowY: "auto",
            })}
          >
            {options.map((opt) => (
              <li
                key={opt.value}
                className={css({
                  height: "2.25rem", //文字を空白にしたいので
                  paddingY: "200", // 8px
                  paddingX: "400", // 16px
                  textStyle: "body.base",
                  color:
                    opt.value === value ? "text.brand.default" : "text.default",
                  bg:
                    opt.value === value
                      ? "background.brand.tertiary"
                      : "background.default",
                  cursor: "pointer",
                  _hover: { bg: "background.defaultHover" },
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                })}
                onMouseDown={() => {
                  onChange?.(opt.value);
                  setIsOpen(false);
                }}
              >
                {opt.label}
              </li>
            ))}
          </ul>
        )}
      </div>
      {/* エラーメッセージ */}
      {isError && errorMessage && (
        <span
          className={css({
            textStyle: "body.base",
            color: "text.danger.default",
            marginTop: "100", // 4px
          })}
        >
          {errorMessage}
        </span>
      )}
    </div>
  );
};

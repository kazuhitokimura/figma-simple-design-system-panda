"use client";
import { css } from "../../../styled-system/css";

export type InputFieldProps = {
  label: string;
  value?: string;
  placeholder?: string;
  state?: "default" | "error" | "disabled"; // 入力フィールドの状態
  onChange?: (value: string) => void; // 入力値が変更されたときのコールバック
};

export const InputField = ({
  label,
  value = "",
  placeholder = "",
  state = "default",
  onChange,
}: InputFieldProps) => {
  // エラー状態かどうか
  const isError = state === "error";
  // 無効状態かどうか
  const isDisabled = state === "disabled";

  return (
    <div
      className={css({
        display: "flex",
        flexDirection: "column",
        gap: "200",
        width: "100%",
      })}
    >
      {/* ラベル部分 */}
      <label
        className={css({
          textStyle: "body.base", //
          color: isDisabled ? "text.disabled" : "text.default",
        })}
      >
        {label}
      </label>
      {/* 入力欄のラッパー */}
      <div
        className={css({
          display: "flex",
          flexDirection: "row",
          alignItems: "stretch",
          alignSelf: "stretch",
          paddingY: "300", // 12px
          paddingX: "400", // 16px
          borderRadius: "200",
          bg: isDisabled ? "background.disabled" : "background.default",
          borderWidth: "border",
          borderStyle: "solid",
          borderColor: isError
            ? "border.danger.default"
            : isDisabled
              ? "border.disabled"
              : "border.default",
        })}
      >
        {/* 実際のinput要素 */}
        <input
          className={css({
            flex: 1,
            border: "none",
            outline: "none",
            bg: "transparent",
            height: "1rem", //なぜか19.5pxになってしまうので
            textStyle: "singleLine.body.base",
            color: isDisabled
              ? "text.disabled"
              : isError
                ? "text.danger.default"
                : "text.default",
            _placeholder: { color: "text.disabled.onDisabled" },
          })}
          type="text"
          value={value}
          placeholder={placeholder}
          disabled={isDisabled}
          onChange={(e) => onChange?.(e.target.value)} // 入力値が変わったときにコールバックを呼ぶ
        />
      </div>
    </div>
  );
};

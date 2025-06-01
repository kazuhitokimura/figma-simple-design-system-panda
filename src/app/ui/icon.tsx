import { SVGProps } from "react";
import { css } from "../../../styled-system/css";

// アイコン名の型定義。
export type IconName =
  | "chevron-down"
  | "chevron-left"
  | "chevron-right"
  | "chevron-up";
// Iconコンポーネントのprops型定義。
// name: アイコン名, size: サイズ, color: 色, SVGProps: SVG要素の追加props
export type IconProps = {
  name: IconName;
  size?: "icon.16" | "icon.20" | "icon.24" | "icon.32" | "icon.40" | "icon.48";
  color?: string;
} & SVGProps<SVGSVGElement>;

// メインのIconコンポーネント
export const Icon = ({
  name,
  size = "icon.24", // デフォルトサイズは24
  color = "icon.default", // デフォルト色はsemantic tokenのicon.default（panda.config.tsにあれば優先）
  ...props
}: IconProps) => {
  switch (name) {
    case "chevron-left":
      return (
        <svg
          className={css({ width: size, height: size, color })}
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <path
            d="M10 12L6 8L10 4"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "chevron-right":
      return (
        <svg
          className={css({ width: size, height: size, color })}
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <path
            d="M6 12L10 8L6 4"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "chevron-up":
      return (
        <svg
          className={css({ width: size, height: size, color })}
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <path
            d="M12 10L8 6L4 10"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "chevron-down":
      return (
        <svg
          className={css({ width: size, height: size, color })}
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <path
            d="M4 6L8 10L12 6"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    default:
      // nameが未定義の場合はnullを返す
      return null;
  }
};

// 各アイコン名ごとにpropsを省略したショートカット関数を定義
export const Icons = {
  chevronDown: (props: Omit<IconProps, "name">) => (
    <Icon name="chevron-down" {...props} />
  ),
  chevronLeft: (props: Omit<IconProps, "name">) => (
    <Icon name="chevron-left" {...props} />
  ),
  chevronRight: (props: Omit<IconProps, "name">) => (
    <Icon name="chevron-right" {...props} />
  ),
  chevronUp: (props: Omit<IconProps, "name">) => (
    <Icon name="chevron-up" {...props} />
  ),
} as const;

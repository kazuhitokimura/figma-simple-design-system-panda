"use client";
import { cva } from "../../../styled-system/css";
import { Icon, IconName } from "./icon";

const iconButton = cva({
  base: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    height: "fit-content",
    width: "fit-content",
    borderRadius: "1000", // 40px
    cursor: "pointer",
    transition: "all 0.2s",
    _disabled: {
      cursor: "not-allowed",
      opacity: 0.5,
    },
  },
  variants: {
    size: {
      medium: {
        padding: "300", // 12px
      },
      small: {
        padding: "200", // 8px
      },
    },
    variant: {
      primary: {
        borderWidth: "border",
        borderStyle: "solid",
        bg: "background.brand.default",
        color: "text.brand.onBrand",
        borderColor: "border.brand",
        _hover: {
          bg: "background.brand.hover",
        },
        _disabled: {
          bg: "background.disabled",
          color: "text.disabled.default",
          borderColor: "border.disabled",
          _hover: {
            bg: "background.disabled",
            color: "text.disabled.default",
            borderColor: "border.disabled",
          },
        },
      },
      neutral: {
        bg: "transparent",
        borderWidth: "border",
        borderStyle: "solid",
        color: "text.default",
        borderColor: "border.default",
        _hover: {
          bg: "background.neutral.tertiaryHover",
        },
        _disabled: {
          bg: "background.disabled",
          color: "text.disabled.default",
          borderColor: "border.disabled",
          _hover: {
            bg: "background.disabled",
            color: "text.disabled.default",
            borderColor: "border.disabled",
          },
        },
      },
      subtle: {
        bg: "transparent",
        color: "text.default",
        borderWidth: "border",
        borderStyle: "solid",
        borderColor: "transparent",
        _hover: {
          bg: "transparent",
          borderWidth: "border",
          borderStyle: "solid",
          borderColor: "border.default",
        },
        _disabled: {
          color: "text.disabled.default",
          _hover: {
            bg: "transparent",
            borderWidth: "border",
            borderStyle: "solid",
            borderColor: "transparent",
          },
        },
      },
    },
  },
  // compound variants
  compoundVariants: [
    // primary variant uses brandOnBrand icon color
    {
      variant: "primary",
      css: {
        "--icon-color": "token(colors.icon.brand.onBrand)",
      },
    },
    // neutral variant uses neutralDefault icon color
    {
      variant: "neutral",
      css: {
        "--icon-color": "token(colors.icon.neutral.default)",
      },
    },
    // subtle variant uses default icon color
    {
      variant: "subtle",
      css: {
        "--icon-color": "token(colors.icon.default)",
      },
    },
    // disabled state overrides all variants
    {
      variant: ["primary", "neutral", "subtle"],
      css: {
        _disabled: {
          "--icon-color": "token(colors.icon.disabled)",
        },
      },
    },
  ],
  defaultVariants: {
    size: "medium",
    variant: "primary",
  },
});

interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: IconName;
  size?: "medium" | "small";
  variant?: "primary" | "neutral" | "subtle";
}

export const IconButton = ({
  size,
  variant,
  icon,
  ...props
}: IconButtonProps) => {
  return (
    <button className={iconButton({ size, variant })} {...props}>
      <Icon name={icon} size="icon.20" style={{ color: "var(--icon-color)" }} />
    </button>
  );
};

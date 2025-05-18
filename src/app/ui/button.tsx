"use client";
import { cva } from "../../../styled-system/css";

const button = cva({
  base: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "200", // 8px
    cursor: "pointer",
    textStyle: "singleLine.body.base",
    gap: "200", // 8px
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
        textStyle: "singleLine.body.base",
      },
      small: {
        padding: "200", // 8px
        textStyle: "singleLine.body.base",
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
        borderWidth: "border",
        borderStyle: "solid",
        bg: "background.neutral.tertiary",
        color: "text.default",
        borderColor: "border.neutral.secondary",
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
  defaultVariants: {
    size: "medium",
    variant: "primary",
  },
});

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "medium" | "small";
  variant?: "primary" | "neutral" | "subtle";
  children: React.ReactNode;
}

export const Button = ({ size, variant, children, ...props }: ButtonProps) => {
  return (
    <button className={button({ size, variant })} {...props}>
      {children}
    </button>
  );
};

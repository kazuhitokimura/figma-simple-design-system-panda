"use client";
import { cva } from "../../../styled-system/css";

const buttonDanger = cva({
  base: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "200",
    cursor: "pointer",
    gap: "200",
    transition: "all 0.2s",
    textStyle: "singleLine.body.base",
    _disabled: {
      cursor: "not-allowed",
      opacity: 0.5,
    },
  },
  variants: {
    size: {
      medium: {
        padding: "300",
        textStyle: "singleLine.body.base",
      },
      small: {
        padding: "200",
        textStyle: "singleLine.body.base",
      },
    },
    variant: {
      primary: {
        bg: "background.danger.default",
        color: "text.danger.onDanger",
        borderWidth: "border",
        borderStyle: "solid",
        borderColor: "border.danger.default",
        _hover: {
          bg: "background.danger.hover",
          borderColor: "border.danger.hover",
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
        color: "text.danger.default",
        borderWidth: "border",
        borderStyle: "solid",
        borderColor: "transparent",
        _hover: {
          bg: "background.danger.tertiaryHover",
          color: "text.danger.default",
          borderWidth: "border",
          borderStyle: "solid",
          borderColor: "border.danger.default",
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
    },
  },
  defaultVariants: {
    size: "medium",
    variant: "primary",
  },
});

interface ButtonDangerProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "medium" | "small";
  variant?: "primary" | "subtle";
  children: React.ReactNode;
}

export const ButtonDanger = ({
  size,
  variant,
  children,
  ...props
}: ButtonDangerProps) => {
  return (
    <button className={buttonDanger({ size, variant })} {...props}>
      {children}
    </button>
  );
};

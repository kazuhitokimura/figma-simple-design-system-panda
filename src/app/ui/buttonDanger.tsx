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
        px: "400",
        py: "300",
        textStyle: "singleLine.body.base",
      },
      small: {
        px: "300",
        py: "200",
        textStyle: "singleLine.body.small.strong",
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
          color: "text.disabled",
          borderColor: "border.disabled",
        },
      },
      subtle: {
        bg: "transparent",
        color: "text.danger.default",
        borderWidth: "border",
        borderStyle: "none",
        _hover: {
          bg: "background.danger.subtleHover",
          color: "text.danger.default",
          borderWidth: "border",
          borderStyle: "solid",
          borderColor: "border.danger.hover",
        },
        _disabled: {
          bg: "background.disabled",
          color: "text.disabled",
          borderColor: "border.disabled",
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

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
        px: "400", // 16px
        py: "300", // 12px
      },
      small: {
        px: "300", // 12px
        py: "200", // 8px
        fontSize: "scale02", // 14px
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
          color: "text.disabled",
          borderColor: "border.disabled",
        },
      },
      neutral: {
        borderWidth: "border",
        borderStyle: "solid",
        bg: "background.default",
        color: "text.default",
        borderColor: "border.default",
        _hover: {
          bg: "background.secondary",
        },
        _disabled: {
          bg: "background.disabled",
          color: "text.disabled",
          borderColor: "border.disabled",
        },
      },
      subtle: {
        bg: "transparent",
        color: "text.default",
        borderWidth: "border",
        borderStyle: "none",
        borderColor: "border.default",
        _hover: {
          color: "text.default",
          borderWidth: "border",
          borderStyle: "solid",
          borderColor: "border.default",
        },
        _disabled: {
          color: "text.disabled",
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

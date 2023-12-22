import { ComponentProps } from "react";
import { styled } from "../styles";

export type ButtonProps = ComponentProps<typeof Button>;

export const Button = styled("button", {
  all: "unset",

  borderRadius: "$sm",
  fontSize: "$sm",
  fontWeight: "$medium",
  fontFamily: "$default",
  textAlign: "center",
  minWidth: 120,
  boxSizing: "border-box",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "$2",
  padding: "0 $4",

  cursor: "pointer",

  svg: {
    width: "$4",
    height: "$4",
  },

  variants: {
    variant: {
      primary: {
        color: "$white",
        background: "$ignite500",

        "&:not:(:disabled):hover": {
          background: "$ignite300",
        },

        "&:disabled": {
          background: "$gray200",
          cursor: "not-allowed",
        },
      },

      secondary: {
        color: "$ignite300",
        border: "2px solid $ignite500",

        "&:not:(:disabled):hover": {
          background: "$ignite500",
          color: "$white",
        },

        "&:disabled": {
          background: "$gray200",
          borderColor: "$gray200",
          cursor: "not-allowed",
        },
      },

      tertiary: {
        color: "$gray100",

        "&:not:(:disabled):hover": {
          color: "$white",
        },

        "&:disabled": {
          color: "$gray600",
          cursor: "not-allowed",
        },
      },
    },

    size: {
      sm: {
        fontSize: "$sm",
        height: 38,
      },
      md: {
        fontSize: "$md",
        height: 46,
      },
    },
  },

  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

Button.displayName = "Button";

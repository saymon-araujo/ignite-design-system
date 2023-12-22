import { StoryObj, Meta } from "@storybook/react";
import { ArrowRight } from "@phosphor-icons/react";
import { Button, ButtonProps } from "@kidohka-ui/react";

export default {
  title: "Form/Button",
  component: Button,

  args: {
    children: "Send",
    variant: "primary",
    size: "md",
    disabled: false,
  },

  argTypes: {
    variant: {
      options: ["primary", "secondary", "tertiary"],
      control: {
        type: "inline-radio",
      },
    },
    size: {
      options: ["sm", "md"],
      control: {
        type: "inline-radio",
      },
    },

    disabled: {
      control: {
        type: "boolean",
      },
    },

    onclick: {
      action: "click",
    },
  },
} as Meta;

export const Primary: StoryObj<ButtonProps> = {};

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    variant: "secondary",
  },
};

export const Tertiary: StoryObj<ButtonProps> = {
  args: {
    variant: "tertiary",
    children: "Cancel",
  },
};

export const Small: StoryObj<ButtonProps> = {
  args: {
    size: "sm",
    children: "Small",
  },
};

export const WithIcon: StoryObj<ButtonProps> = {
  args: {
    children: (
      <>
        Próximo Passo
        <ArrowRight weight="bold" />
      </>
    ),
  },
};

export const Disabled: StoryObj<ButtonProps> = {
  args: {
    children: "Disabled",
    disabled: true,
  },
};

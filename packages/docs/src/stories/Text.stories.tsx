import { StoryObj, Meta } from "@storybook/react";
import { Text, TextProps } from "@kidohka-ui/react";

export default {
  title: "Typography/Text",
  component: Text,

  args: {
    size: "md",
    children:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, eveniet numquam vel, optio necessitatibus temporibus iusto illo rerum nisi doloremque cupiditate laudantium facere minus, animi odit. Velit dolorum explicabo sunt?",
  },
  argTypes: {
    size: {
      options: [
        "xxs",
        "xs",
        "sm",
        "md",
        "lg",
        "xl",
        "2xl",
        "4xl",
        "5xl",
        "6xl",
        "7xl",
        "8xl",
        "9xl",
      ],
      control: {
        type: "inline-radio",
      },
    },
  },
} as Meta<TextProps>;

export const Primary: StoryObj<TextProps> = {};

export const Strong: StoryObj<TextProps> = {
  args: {
    as: "strong",
  },
};

export const Link: StoryObj<TextProps> = {
  args: {
    as: "a",
  },
};

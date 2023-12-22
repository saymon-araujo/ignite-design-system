import { StoryObj, Meta } from "@storybook/react";
import { Heading, HeadingProps } from "@kidohka-ui/react";

export default {
  title: "Typography/Heading",
  component: Heading,

  args: {
    size: "md",
    children:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, eveniet numquam vel, optio necessitatibus temporibus iusto illo rerum nisi doloremque cupiditate laudantium facere minus, animi odit. Velit dolorum explicabo sunt?",
  },

  argTypes: {
    size: {
      options: ["sm", "md", "lg", "2xl", "4xl", "5xl", "6xl"],
      control: {
        type: "inline-radio",
      },
    },
  },
} as Meta<HeadingProps>;

export const Primary: StoryObj<HeadingProps> = {};

export const Strong: StoryObj<HeadingProps> = {
  args: {
    as: "h1",
    children: "Strong Heading",
  },

  parameters: {
    docs: {
      description: {
        story: "Por padrão é sempre um `h2` mas podemos alterar isso com a propriedade `as`.",
      },
    },
  },
};

import { StoryObj, Meta } from "@storybook/react";
import { Box, Text, TextArea, TextAreaProps } from "@kidohka-ui/react";

export default {
  title: "Form/TextArea",
  component: TextArea,
  args: {},
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{
            display: "flex",
            flexDirection: "column",
            gap: "$2",
          }}
        >
          <Text size="sm">Label</Text>
          <Story />
        </Box>
      );
    },
  ],
} as Meta<TextAreaProps>;

export const Primary: StoryObj<TextAreaProps> = {
  args: {
    placeholder: "Placeholder",
  },
};
export const Disabled: StoryObj<TextAreaProps> = {
  args: {
    disabled: true,
  },
};

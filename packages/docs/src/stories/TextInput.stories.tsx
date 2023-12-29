import { StoryObj, Meta } from "@storybook/react";
import { Box, Text, TextInput, TextInputProps } from "@kidohka-ui/react";

export default {
  title: "Form/TextInput",
  component: TextInput,
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
} as Meta<TextInputProps>;

export const Primary: StoryObj<TextInputProps> = {
  args: {
    placeholder: "Placeholder",
  },
};

export const Small: StoryObj<TextInputProps> = {
  args: {
    placeholder: "Placeholder",
    size: "sm",
  },
};

export const WithPrefix: StoryObj<TextInputProps> = {
  args: {
    prefix: "cal.com/",
    placeholder: "your-placeholder",
  },
};

export const Disabled: StoryObj<TextInputProps> = {
  args: {
    disabled: true,
  },
};

import { StoryObj, Meta } from "@storybook/react";
import { Box, MultiStep, MultiStepProps } from "@kidohka-ui/react";

export default {
  title: "Form/Multi Step",
  component: MultiStep,
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
          <Story />
        </Box>
      );
    },
  ],
} as Meta<MultiStepProps>;

export const First: StoryObj<MultiStepProps> = {
  args: {
    amountOfSteps: 4,
    currentStep: 1,
  },
};
export const Filled: StoryObj<MultiStepProps> = {
  args: {
    amountOfSteps: 4,
    currentStep: 4,
  },
};

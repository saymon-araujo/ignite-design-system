import { StoryObj, Meta } from "@storybook/react";
import { Box, BoxProps } from "@kidohka-ui/react";

export default {
  title: "Layout/Box",
  component: Box,

  args: {
    children: (
      <>
        <span>Box Element</span>
      </>
    ),
  },
} as Meta<BoxProps>;

export const Primary: StoryObj<BoxProps> = {};

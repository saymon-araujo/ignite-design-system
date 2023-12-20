import { StoryObj, Meta } from "@storybook/react";
import { Avatar, AvatarProps } from "@kidohka-ui/react";

export default {
  title: "User/Avatar",
  component: Avatar,

  args: {
    src: "https://github.com/saymon-araujo.png",
    alt: "Saymon Araujo",
  },
} as Meta<AvatarProps>;

export const Primary: StoryObj<AvatarProps> = {};

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
};

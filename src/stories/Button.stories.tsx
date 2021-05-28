import React from "react";
import { Story, Meta } from "@storybook/react";
import { Button, ButtonProps } from "@chakra-ui/react";

export default {
  title: "Example/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  children: "Button",
};

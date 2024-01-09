import { Meta, StoryObj } from "@storybook/react";
import { Caption } from "../../theme";
import Checkbox, { CheckboxCustomProps } from "./Checkbox";

const meta: Meta<CheckboxCustomProps> = {
  title: "Components/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: (
      <Caption>
        By creating an account you are accepting our{" "}
        <a href="https://weare8.com">Terms & Conditions</a>
      </Caption>
    ),
    shape: "circle",
  },
};

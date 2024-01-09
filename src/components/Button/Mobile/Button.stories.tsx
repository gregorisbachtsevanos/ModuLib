import { Meta, StoryObj } from "@storybook/react";
import Button, { ButtonProps } from "./Button";
import StoryComponent from "../../../stories/StoryComponent";

const meta: Meta<ButtonProps> = {
  title: "Components/Button/Mobile",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  render: (args: ButtonProps) => {
    const { styleType, styleFor, size, ...rest } = args;

    return (
      <StoryComponent>
        <div className="row header">
          <h3>Primary</h3>
          <h3>Secondary</h3>
          <h3>Ghost</h3>
          <h3>Dark</h3>
        </div>
        <div className="row">
          <Button styleType="primary" styleFor="mobile" size="small" {...rest}>
            Button
          </Button>
          <Button
            styleType="secondary"
            styleFor="mobile"
            size="small"
            {...rest}
          >
            Button
          </Button>
          <Button styleType="ghost" styleFor="mobile" size="small" {...rest}>
            Button
          </Button>
          <Button styleType="dark" styleFor="mobile" size="small" {...rest}>
            Button
          </Button>
          <Button styleType="tertiary" styleFor="mobile" size="small" {...rest}>
            Button
          </Button>
        </div>
      </StoryComponent>
    );
  },
};

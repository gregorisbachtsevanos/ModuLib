import { Meta, StoryObj } from "@storybook/react";
import Button, { ButtonProps } from "./Button";
import StoryComponent from "../../../stories/StoryComponent";

const meta: Meta<ButtonProps> = {
  title: "Components/Button/Web",
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
        <table>
          <tr className="row header">
            <th>Primary</th>
            <th>Secondary</th>
            <th>Ghost</th>
            <th>Dark</th>
            <th>Tertiary</th>
          </tr>

          <tr className="row">
            <td>
              <Button styleType="primary" styleFor="web" size="small" {...rest}>
                Button
              </Button>
            </td>
            <td>
              <Button
                styleType="secondary"
                styleFor="web"
                size="small"
                {...rest}
              >
                Button
              </Button>
            </td>
            <td>
              <Button styleType="ghost" styleFor="web" size="small" {...rest}>
                Button
              </Button>
            </td>
            <td>
              <Button
                styleType="dark"
                styleFor="web"
                size="small"
                disabled
                {...rest}
              >
                Button
              </Button>
            </td>
            <td>
              <Button
                styleType="tertiary"
                styleFor="mobile"
                size="small"
                {...rest}
              >
                Button
              </Button>
            </td>
          </tr>
        </table>
      </StoryComponent>
    );
  },
};

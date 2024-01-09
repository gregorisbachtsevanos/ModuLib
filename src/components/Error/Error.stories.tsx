import { Meta, StoryObj } from "@storybook/react";
import Error, { ErrorProps } from "./Error";
import StoryComponent from "../../stories/StoryComponent";

const meta: Meta<ErrorProps> = {
  title: "Components/Error",
  component: Error,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Error>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      // <StoryComponent>
      <Error>Brand Name</Error>
      // </StoryComponent>
    ),
  },
};

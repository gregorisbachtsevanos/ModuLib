import { Meta, StoryObj } from "@storybook/react";
import CampaignSummary, { CampaignSummaryProps } from "./CampaignSummary";
import { campaign } from "./constants";

const meta: Meta<CampaignSummaryProps> = {
  title: "Components/CampaignSummary",
  component: CampaignSummary,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof CampaignSummary>;

export default meta;
type Story = StoryObj<typeof CampaignSummary>;

export const Default: Story = {
  args: {
    campaign: campaign,
    previewURL: "https://s-uat.test.aws.the8app.com",
  },
};

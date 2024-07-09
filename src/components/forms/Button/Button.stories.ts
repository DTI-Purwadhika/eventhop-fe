import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Button } from "../";
import results from "@/.jest-test-results.json";
import { withTests } from "@storybook/addon-jest";

const meta = {
  title: "forms/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "default",
    children: "Add",
    icon: "Plus",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Copy",
    icon: "Clipboard",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    children: "User",
    icon: "UserRound",
  },
};

export const Destructive: Story = {
  args: {
    variant: "destructive",
    children: "Delete",
    icon: "Trash",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
    children: "Menu",
    icon: "Menu",
  },
};

export const Link: Story = {
  args: {
    variant: "link",
    children: "Homepage",
    icon: "Home",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    children: "Purchase",
    icon: "Ticket",
  },
};

export const Small: Story = {
  args: {
    size: "sm",
    children: "Pin",
    icon: "MapPin",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: "Submit",
    icon: "Plus",
  },
};

export const NoIcon: Story = {
  args: {
    children: "Visit",
  },
};

export const IconOnly: Story = {
  args: {
    iconOnly: "lg",
    size: "icon",
    children: "",
    icon: "Pencil",
  },
};

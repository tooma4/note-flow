import type { Meta, StoryObj } from "@storybook/react";
import { CheckboxUI } from "./Checkbox";
import "./Checkbox.module.scss";

const meta: Meta<typeof CheckboxUI> = {
  title: "UI/Checkbox",
  component: CheckboxUI,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof CheckboxUI>;

export const SearchInput: Story = {
  args: {},
};

export const ModalInput: Story = {
  args: {},
};

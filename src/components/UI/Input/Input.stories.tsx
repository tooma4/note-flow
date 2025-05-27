import type { Meta, StoryObj } from "@storybook/react";
import { InputUI } from "../../UI/Input/Input";
import "./Input.module.scss";

const meta: Meta<typeof InputUI> = {
  title: "UI/Input",
  component: InputUI,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    theme: {
      control: "select",
      options: ["light", "dark"],
      description: "Тема инпута",
    },
    variant: {
      control: "select",
      options: ["search", "modal"],
      description: "Поведение инпута",
    },
  },
};

export default meta;
type Story = StoryObj<typeof InputUI>;

export const SearchInput: Story = {
  args: {
    variant: "search",
  },
};

export const ModalInput: Story = {
  args: {
    variant: "modal",
  },
};

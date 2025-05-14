import type { Meta, StoryObj } from "@storybook/react";
import { HeaderUI } from "./Header";
import "./Header.module.scss";

const meta: Meta<typeof HeaderUI> = {
  title: "UI/Header",
  component: HeaderUI,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  args: {
    title: "Список дел",
  },
};

export default meta;
type Story = StoryObj<typeof HeaderUI>;

export const Default: Story = {
  args: {
    title: "Список деловых дел",
    children: (
      <>
        <div>Компонент 1</div>
        <div>Компонент 2</div>
      </>
    ),
  },
};

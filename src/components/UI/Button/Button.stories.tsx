import type { Meta, StoryObj } from "@storybook/react";
import { ButtonUI } from "./Button";
import "./Button.module.scss";
import {
  addIcon,
  chevronClosedIcon,
  deleteIcon,
  toogleDarkIcon,
} from "../../Button/mockData";

const meta: Meta<typeof ButtonUI> = {
  title: "UI/Button",
  component: ButtonUI,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    text: {
      control: "text",
      description: "Текст внутри кнопки",
    },
    color: {
      control: "select",
      options: ["primary", "secondary", "link"],
      description: "Цвет и стиль кнопки",
      table: {
        type: { summary: "primary | secondary | link" },
        defaultValue: { summary: "primary" },
      },
    },
    variant: {
      control: "select",
      options: ["theme", "add", "text_and_icon", "delete", "edit", "none"],
      description: "Поведение кнопки",
      table: {
        type: {
          summary: "theme | add | text_and_icon | delete | edit | none",
        },
      },
    },
    icon: {
      control: false,
    },
    iconOpened: {
      control: false,
    },
    iconClosed: {
      control: false,
    },
    handleSelect: {
      control: false,
    },
    isOpen: {
      control: false,
    },
  },
};

export default meta;
type Story = StoryObj<typeof ButtonUI>;

export const Primary: Story = {
  args: {
    text: "Применить",
    color: "primary",
  },
};

export const Secondary: Story = {
  args: {
    text: "Отмена",
    color: "secondary",
  },
};

export const IconButtonAdd: Story = {
  args: {
    icon: addIcon,
    color: "primary",
    variant: "add",
  },
};

export const ToggleTheme: Story = {
  args: {
    icon: toogleDarkIcon,
    color: "primary",
    variant: "theme",
  },
};

export const IconButtonDelete: Story = {
  args: {
    icon: deleteIcon,
    color: "link",
    variant: "delete",
  },
};

export const IconButtonAndText: Story = {
  args: {
    textSelect: "Все",
    icon: chevronClosedIcon,
    color: "primary",
    variant: "text_and_icon",
  },
};

import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { InputUI } from "./Input";

describe("Компонент Input", () => {
  // Проверяет, что кнопка отображается с пустым текстом по умолчанию
  test("Отображает поле поиска", () => {
    render(<InputUI variant="search" theme="light" />);
    const inputElement = screen.getByPlaceholderText("Найти задачу");
    expect(inputElement).toBeInTheDocument();
  });

  test("Отображает поле модалки", () => {
    render(<InputUI variant="modal" theme="light" />);
    const inputElement = screen.getByPlaceholderText("Введите имя задачи");
    expect(inputElement).toBeInTheDocument();
  });
});

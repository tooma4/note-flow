import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { ButtonUI } from "./Button"; // Компонента ещё нет!

describe("Компонент Button", () => {
  const mockIconPen = (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.67272 3.99106L1 10.6637V14H4.33636L11.0091 7.32736M7.67272 3.99106L10.0654 1.59837L10.0669 1.59695C10.3962 1.26759 10.5612 1.10261 10.7514 1.04082C10.9189 0.986392 11.0993 0.986392 11.2669 1.04082C11.4569 1.10257 11.6217 1.26735 11.9506 1.59625L13.4018 3.04738C13.7321 3.37769 13.8973 3.54292 13.9592 3.73337C14.0136 3.90088 14.0136 4.08133 13.9592 4.24885C13.8974 4.43916 13.7324 4.60414 13.4025 4.93398L13.4018 4.93468L11.0091 7.32736M7.67272 3.99106L11.0091 7.32736"
        stroke="#CDCDCD"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  // Проверяет, что кнопка отображается с пустым текстом по умолчанию
  test("Отображает кнопку с текстом по умолчанию", () => {
    render(<ButtonUI />);
    expect(screen.getByRole("button")).toHaveTextContent("");
  });

  // Проверяет, что переданный текст отображается правильно
  test("Отображает переданный текст", () => {
    render(<ButtonUI text="Нажать" />);
    expect(screen.getByRole("button")).toHaveTextContent("Нажать");
  });

  // Проверяет, что обработчик onClick вызывается при клике
  test("Вызывает onClick при клике", () => {
    const handleClick = jest.fn();
    render(<ButtonUI onClick={handleClick} />);
    fireEvent.click(screen.getByRole("button"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  // Проверяет, что отображается иконка, переданная через props
  test("Отображает иконку, если передана", () => {
    render(<ButtonUI icon={mockIconPen} />);
    const icon = screen.getByTestId("button-icon");
    expect(icon).toBeInTheDocument();
  });

  // Проверяет, что отображается класс, переданный через props
  test("Отображает переданный класс", () => {
    render(<ButtonUI color="primary" />);
    expect(screen.getByRole("button")).toHaveClass("primary");
  });

  // Проверяет, что отображается type, переданный через props
  test("Отображает переданный type", () => {
    render(<ButtonUI type="button" />);
    expect(screen.getByRole("button")).toHaveAttribute("type", "button");
  });
});

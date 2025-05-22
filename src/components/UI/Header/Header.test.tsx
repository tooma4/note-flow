// import { HeaderUI } from "./Header";
// import { render, screen } from "@testing-library/react";
// import { expect, test } from "@jest/globals";
// import type { IHeaderProps } from "../../Header/types";

// // Мокаем стили, чтобы они не мешали тесту
// jest.mock("./Header.module.scss", () => ({
//   headerContainer: "mock-headerContainer",
//   headerTitle: "mock-headerTitle",
//   headerChildren: "mock-headerChildren",
// }));

// describe("HeaderUI компонент", () => {
//   // Моковые данные для теста
//   const mockProps: IHeaderProps = {
//     title: "Тестовый заголовок",
//     children: <p>Тестовый контент</p>,
//   };

//   test("рендерит заголовок и детей", () => {
//     // Рендерим компонент с моковыми данными
//     render(<HeaderUI {...mockProps} />);

//     // Проверяем, что заголовок отобразился
//     expect(screen.getByText("Тестовый заголовок"));

//     // Проверяем, что children (внутренний контент) тоже отобразился
//     expect(screen.getByText("Тестовый контент"));
//   });
// });

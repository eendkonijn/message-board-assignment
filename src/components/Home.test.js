import React from "react";
import { render, cleanup, screen } from "@testing-library/react";
import Home from "./Home";
import { enableFetchMocks } from "jest-fetch-mock";

enableFetchMocks();

const messages = [
  {
    id: 1000,
    title: "Saepe ut cupiditate.",
    body:
      "Magni vitae esse quia. Autem iusto magnam neque consequuntur consequatur natus et. Culpa aut eos sit placeat dolor temporibus non tempora. Consequuntur minima numquam assumenda amet. Dolores laboriosam aut omnis reprehenderit nostrum nihil ex enim animi.",
    firstName: "Thomas",
    createdAt: "2020-04-08T08:26:41.533Z",
    updatedAt: null,
  },
  {
    id: 1001,
    title: "Incidunt perspiciatis et est qui.",
    body:
      "Omnis iusto tempora est et laborum. Distinctio sunt quis iusto reiciendis et dolores nisi. Dolorum voluptatum facilis suscipit sed repellendus repellat. Officia molestiae veritatis.",
    firstName: "Britt",
    createdAt: "2020-04-08T08:26:41.533Z",
    updatedAt: null,
  },
];

beforeEach(() => {
  fetch.resetMocks();
  fetch.mockResponseOnce(JSON.stringify(messages));
});

afterEach(cleanup);

it("renders without crashing", () => {
  render(<Home />);
});

it("renders a list", () => {
  render(<Home />);
  expect(screen.getByText("Saepe ut cupiditate.")).toBeTruthy;
});

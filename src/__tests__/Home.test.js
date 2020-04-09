import React from "react";
import { render, cleanup, screen } from "@testing-library/react";
import Home from "../components/Home";
import nock from "nock";
import "@testing-library/jest-dom/extend-expect";
// import fetch from "node-fetch";

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

afterEach(cleanup);

describe("Home", () => {
  beforeEach(() => {
    // fetch.resetMocks();
    nock("http://localhost:3000")
      .get("/messages?limit=50")
      .reply(200, messages);
  });

  it("renders a list", async () => {
    render(<Home />);
    await screen.findByText(/Saepe/);

    expect(screen.getByText(/Saepe/)).toBeInTheDocument;
  });
});

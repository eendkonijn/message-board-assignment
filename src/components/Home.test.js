import React from "react";
import { render, cleanup } from "@testing-library/react";
import Home from "./Home";
import formatDate from "./Home";
import { enableFetchMocks } from "jest-fetch-mock";

enableFetchMocks();

afterEach(cleanup);

it("renders without crashing", () => {
  render(<Home />);
});

it("formats dates correctly", () => {
  const date = "2020-04-07T07:13:22.673Z";

  expect(formatDate(date)).toBe("7-4-2020");
});

// it("should take a snapshot", () => {
//   const { asFragment } = render(<Home />);

//   expect(asFragment(<Home />)).toMatchSnapshot();
// });

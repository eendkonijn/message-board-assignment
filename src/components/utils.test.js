import { formatDate } from "./utils";

it("formats dates correctly", () => {
  const date = "2020-04-07T07:13:22.673Z";
  const date2 = "Wed Oct 18 2017 12:41:34 GMT+0000 (UTC)";
  const englishDate = "12-4-2020";
  const wrongDate = "thisisnotadate";

  expect(formatDate(date)).toBe("7-4-2020");
  expect(formatDate(date2)).toBe("18-10-2017");
  expect(formatDate(englishDate)).toBe("4-12-2020");
  expect(formatDate(wrongDate)).toBe("unknown");
});

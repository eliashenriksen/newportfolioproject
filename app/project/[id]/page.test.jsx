import { getContent } from "./page.jsx";
import { render, screen} from "@testing-library/react";
import Page from "./page.jsx";

// describe("getContent", () => {
//   it("Correctly returns single entry data from Contentful client when provided with a VALID entry ID (exists).", async () => {
//     const data = await getContent("6NDj1XiFf2a7mfT4ENScOY");
//     expect(data.sys.id).toEqual("6NDj1XiFf2a7mfT4ENScOY");
//   });

//   it("Correctly returns nothing when provided with an INVALID entry ID (does not exist).", async () => {
//     const data = await getContent("111222333");
//     expect(data).toEqual("");
//   });
// });

describe("Initial test to see that page content is rendered.", () => {
  it("Correctly renders the header.", () => {
    render(<Page />);

    const h1 = screen.getByRole("heading", { level: 1});
    const h2 = screen.getByRole("heading", { name: "Designed by"});

    expect(h1).toBeInTheDocument();
    expect(h2).toBeInTheDocument();

  });
});
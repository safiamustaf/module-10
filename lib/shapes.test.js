const { Square, Triangle, Circle } = require("./shapes");

describe("Triangle", () => {
    test("should render svg for a blue polygon element", () => {
      const expectedSvg =
        '<polygon points="150, 18 244, 182 56, 182" fill="blue" />';
      const triangle = new Triangle();
      triangle.setColor("blue");
      const actualSvg = triangle.render();
      expect(actualSvg).toEqual(expectedSvg);
    });
    test("should accept a fillColor param", () => {
      const expectedSvg =
        '<polygon points="150, 18 244, 182 56, 182" fill="green" />';
      const triangle = new Triangle();
      triangle.setColor("green");
      const actualSvg = triangle.render();
      expect(actualSvg).toEqual(expectedSvg);
    });
  });
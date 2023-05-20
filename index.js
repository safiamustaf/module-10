const inquirer = require("inquirer");
const { Circle, Triangle, Square } = require("./lib/shapes");
const SVG = require("./lib/svg");
const { writeFile } = require("fs/promises");

function init() {
    return inquirer
      .prompt([
        {
          name: "text",
          type: "input",
          message:
            "Enter text for the logo. (Must not be more than 3 characters.)",
          validate: (text) =>
            text.length <= 3 ||
            "The message must not contain more than 3 characters",
        },
        {
          name: "textColor",
          type: "input",
          message: "Provide a text color",
        },
        {
          name: "shapeType",
          type: "list",
          message: "Choose a shape for the logo",
          choices: ["circle", "square", "triangle"],
        },
        {
          name: "shapeColor",
          type: "input",
          message: "Provide a shape color",
        },
      ])
      .then((response) => {
        let text = response.text;
        let textColor = response.textColor;
        let shape = response.shapeType;
        let shapeColor =  response.shapeColor;
        let svgShape;
        switch (shape) {
          case "circle":
            svgShape = new Circle();
            break;

          case "square":
            svgShape = new Square();
            break;

          default:
            svgShape = new Triangle();
            break;
        }
        svgShape.setColor(shapeColor);

        const svg = new SVG();
        svg.setText(text, textColor);
        svg.setShape(shape);
        return writeFile("logo.svg", svg.render());
      })
      .then(() => {
        console.log("logo  created");
      })
      .catch((error) => {
        console.log(error);
      });
  }
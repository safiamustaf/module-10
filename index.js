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
}
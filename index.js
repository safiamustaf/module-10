const inquirer = require("inquirer");
const { Circle, Triangle, Square } = require("./lib/shapes");
const SVG = require("./lib/svg");
const { writeFile } = require("fs/promises");

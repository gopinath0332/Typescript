require("bootstrap");
require("bootstrap/dist/css/bootstrap.css");

import Hello from "./test";

let hello = new Hello("Typescript");
console.debug(hello.getName());

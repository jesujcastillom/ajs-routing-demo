import { IComponentOptions } from "angular";

const template = require("./index.component.html");
export const IndexComponent: IComponentOptions = {
  template,
  bindings: {
    user: '<',
  }
};

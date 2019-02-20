import {IComponentOptions} from "angular";

const template = require('./repos.component.html');
export const ReposComponent: IComponentOptions = {
    template,
    bindings: {
        repos: '<',
        user: '<',
    }
};

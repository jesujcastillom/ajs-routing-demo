import {IComponentOptions} from "angular";

const template = require('./user.component.html');
export const UserComponent: IComponentOptions = {
    template,
    bindings: {
        user: '<'
    }
};

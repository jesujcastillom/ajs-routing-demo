import {IComponentOptions} from "angular";

const template = require('./side-bar.component.html');
export const SideBarComponent: IComponentOptions = {
    template,
    bindings: {
        user: '<',
    }
};

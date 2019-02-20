import {module as NgModule, bootstrap} from "angular";
import uiRouter from "@uirouter/angularjs";

import "./styles.scss";

import {RoutingConfiguration} from "./configs/app.routing";
import {IndexComponent as Index} from "./components/index/index.component";

import {UserComponent as User} from "./components/user/user.component";
import {ReposComponent as Repos} from "./components/repos/repos.component";

const AppModule = NgModule("app", [uiRouter])
    .config(RoutingConfiguration)
    .component('index', Index)
    .component('user', User)
    .component('repos', Repos).name;

bootstrap(document.documentElement, [AppModule], {strictDi: true});

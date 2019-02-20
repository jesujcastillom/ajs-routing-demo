import {module as NgModule, bootstrap} from "angular";
import uiRouter from "@uirouter/angularjs";
import 'oclazyload';

import "./styles.scss";

import {RoutingConfiguration} from "./configs/app.routing";
import {IndexComponent as Index} from "./components/index/index.component";

import {UserComponent as User} from "./components/user/user.component";

const AppModule = NgModule("app", [uiRouter, 'oc.lazyLoad'])
    .config(RoutingConfiguration)
    .component('index', Index)
    .component('user', User).name;

bootstrap(document.documentElement, [AppModule], {strictDi: true});

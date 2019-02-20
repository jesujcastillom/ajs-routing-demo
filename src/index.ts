import {module as NgModule, bootstrap} from "angular";
import uiRouter from "@uirouter/angularjs";
import 'oclazyload';

import "./styles.scss";

import {RoutingConfiguration} from "./configs/app.routing";
import {IndexComponent as Index} from "./components/index/index.component";
import {NavBarComponent as NavBar} from "./components/nav-bar/nav-bar.component";
import {SideBarComponent as SideBar} from "./components/side-bar/side-bar.component";
import {UserComponent as User} from "./components/user/user.component";

const AppModule = NgModule("app", [uiRouter, 'oc.lazyLoad'])
    .config(RoutingConfiguration)
    .component('index', Index)
    .component('navBar', NavBar)
    .component('sideBar', SideBar)
    .component('user', User).name;

bootstrap(document.documentElement, [AppModule], {strictDi: true});

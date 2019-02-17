import { module as NgModule, bootstrap } from "angular";
import uiRouter from "@uirouter/angularjs";

import "./styles.scss";

import { RoutingConfiguration } from "./configs/app.routing";
const AppModule = NgModule("app", [uiRouter]).config(RoutingConfiguration).name;

bootstrap(document.documentElement, [AppModule], { strictDi: true });

import { module as NgModule, bootstrap } from "angular";
import uiRouter from "@uirouter/angularjs";

import "./styles.scss";

import { RoutingConfiguration } from "./configs/app.routing";
import { IndexComponent as Index } from "./components/index/index.component";
const AppModule = NgModule("app", [uiRouter])
  .config(RoutingConfiguration)
  .component("index", Index).name;

bootstrap(document.documentElement, [AppModule], { strictDi: true });

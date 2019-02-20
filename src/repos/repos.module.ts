import {module as NgModule} from "angular";

import {RoutingConfiguration} from './repos.routing';

import {ReposComponent as Repos} from "./components/repos/repos.component";

export const ReposModule = NgModule('app/repos', [])
    .config(RoutingConfiguration)
    .component('repos', Repos)
    .name;

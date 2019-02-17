import { StateProvider, Ng1StateDeclaration } from "@uirouter/angularjs";

export function RoutingConfiguration($stateProvider: StateProvider) {
  const states: Ng1StateDeclaration[] = [
      {
          name: 'index',
          url: '',
          component: 'index',
      },
  ];
  states.forEach(state => {
    $stateProvider.state(state);
  });
}

RoutingConfiguration.$inject = ["$stateProvider"];

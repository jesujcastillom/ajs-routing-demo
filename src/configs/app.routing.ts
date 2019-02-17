import { StateProvider, Ng1StateDeclaration } from "@uirouter/angularjs";
import { IHttpService } from "angular";

export function RoutingConfiguration($stateProvider: StateProvider) {
  const states: Ng1StateDeclaration[] = [
    {
      name: "index",
      url: "",
      component: "index",
      resolve: {
        user: [
          "$http",
          ($http: IHttpService) => {
            return $http
              .get("https://api.github.com/users/angular")
              .then(({ data: user }) => user);
          }
        ]
      }
    }
  ];
  states.forEach(state => {
    $stateProvider.state(state);
  });
}

RoutingConfiguration.$inject = ["$stateProvider"];

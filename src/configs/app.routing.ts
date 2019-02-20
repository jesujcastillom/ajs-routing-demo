import {StateProvider, Ng1StateDeclaration, Transition, UrlService} from "@uirouter/angularjs";
import {IHttpService} from "angular";

export function RoutingConfiguration($stateProvider: StateProvider, $urlServiceProvider: UrlService) {
    $urlServiceProvider.rules.otherwise('/home');
    const states: Ng1StateDeclaration[] = [
        {
            name: 'index',
            url: '/home',
            component: 'user',
            resolve: {
                user: [
                    "$http",
                    ($http: IHttpService) => {
                        return $http
                            .get("https://api.github.com/users/angular")
                            .then(({data: user}) => user);
                    }
                ]
            },
        },
        {
            name: 'repos',
            url: '/repos',
            component: 'repos',
            resolve: {
                repos: ['$transition$', '$http', ($transition$: Transition, $http: IHttpService) => {
                    return $transition$.injector()
                        .getAsync('user')
                        .then(({repos_url}) => {
                            return $http.get(repos_url)
                                .then(({data: repos}) => repos);
                        })
                }],
                user: [
                    "$http",
                    ($http: IHttpService) => {
                        return $http
                            .get("https://api.github.com/users/angular")
                            .then(({data: user}) => user);
                    }
                ]
            }
        }
    ];
    states.forEach(state => {
        $stateProvider.state(state);
    });
}

RoutingConfiguration.$inject = ["$stateProvider", "$urlServiceProvider"];

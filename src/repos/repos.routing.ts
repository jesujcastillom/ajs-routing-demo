import {Ng1StateDeclaration, StateProvider, Transition} from "@uirouter/angularjs";
import {IHttpService} from "angular";

export function RoutingConfiguration($stateProvider: StateProvider) {
    const states: Ng1StateDeclaration[] = [
        {
            name: 'index.repos',
            url: '/repos',
            template: '<ui-view></ui-view>',
            abstract: true,
            resolve: {
                repos: ['$transition$', '$http', ($transition$: Transition, $http: IHttpService) => {
                    return $transition$.injector()
                        .getAsync('user')
                        .then(({repos_url}) => {
                            return $http.get(repos_url)
                                .then(({data: repos}) => repos);
                        })
                }],
            }
        },
        {
            name: 'index.repos.list',
            url: '',
            component: 'repos',
            onExit: () => {
                return confirm('You are leaving this state, are you sure?');
            },
        },
    ];
    states.forEach((state) => {
        $stateProvider.state(state);
    });
}

RoutingConfiguration.$inject = ['$stateProvider'];

import {Ng1StateDeclaration, StateProvider, Transition, StateParams} from "@uirouter/angularjs";
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
        {
            name: 'index.repos.detail',
            url: '/:repoId',
            component: 'user',
            resolve: {
                repo: ['$transition$', '$stateParams', ($transition$: Transition, $stateParams: StateParams) => {
                    return $transition$.injector()
                        .getAsync('repos')
                        .then((repos: Array<{ id: number }>) => {
                            const {repoId} = $stateParams;
                            return repos.find(({id}) => id === +repoId);
                        });
                }],
            },
            bindings: {
                user: 'repo',
            },
        },
    ];
    states.forEach((state) => {
        $stateProvider.state(state);
    });
}

RoutingConfiguration.$inject = ['$stateProvider'];

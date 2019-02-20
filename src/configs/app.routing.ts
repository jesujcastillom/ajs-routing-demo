import {StateProvider, Ng1StateDeclaration, Transition, UrlService} from "@uirouter/angularjs";
import {IHttpService} from "angular";
import {ILazyLoad} from "oclazyload";

export function RoutingConfiguration($stateProvider: StateProvider, $urlServiceProvider: UrlService) {
    $urlServiceProvider.rules.otherwise('/home');
    const states: Ng1StateDeclaration[] = [
        {
            name: 'index',
            url: '/home',
            component: 'index',
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
            abstract: true,
        },
        {
            name: 'index.user',
            url: '',
            component: 'user',
        },
        {
            name: 'index.repos.**',
            url: '/repos',
            lazyLoad: (transition: Transition) => {
                return import('../repos/repos.module')
                    .then(({ReposModule}) => {
                        const $ocLazyLoad: ILazyLoad = transition.injector().get('$ocLazyLoad');
                        return $ocLazyLoad.inject(ReposModule);
                    });
            }
        }
    ];
    states.forEach(state => {
        $stateProvider.state(state);
    });
}

RoutingConfiguration.$inject = ["$stateProvider", "$urlServiceProvider"];

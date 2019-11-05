const Home = () => import( /*webpackChunkName:"group-foo"*/ '../views/home');
const Cinema = () => import( /*webpackChunkName:"group-foo"*/ '../views/cinema');
const Mine = () => import( /*webpackChunkName:"group-foo"*/ '../views/mine');
const HomeHot = () => import( /*webpackChunkName:"group-foo"*/ '../views/home/homehot.vue');
const HomeComing = () => import( /*webpackChunkName:"group-foo"*/ '../views/home/homecoming.vue');
const Error = () => import( /*webpackChunkName:"group-foo"*/ '../views/error');



const routes = [{
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home,
        name: 'home',
        redirect: '/home/f-hot',
        children: [{
            path: 'f-hot',
            component: HomeHot,
            name: 'f-hot'
        }, {
            path: 'f-coming',
            component: HomeComing,
            name: 'f-coming'
        }]
    },
    {
        path: '/cinema',
        component: Cinema,
        name: 'cinema'
    },
    {
        path: '/mine',
        component: Mine,
        name: 'mine'
    },
    {
        path: '/error',
        component: Error,
    }
];


export default routes;
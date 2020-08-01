import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);
const router =new Router({
    mode: 'history',
    base: "/",
    routes: [
        {
            path: '',
            component: () => import('./src/components/plantillas/Principal.vue'),
            children: [
                {
                    path: '/',
                    name: 'inicio',
                    component: () => import('./src/components/Inicio.vue')
                },
                {
                    path: '/Nivel1',
                    name: 'nivel1',
                    component: () => import('./src/components/Nivel1'),
                },
                {
                    path: '/Nivel2',
                    name: 'nivel2',
                    component: () => import('./src/components/Nivel2'),
                },
                {
                    path: '/Nivel3',
                    name: 'nivel3',
                    component: () => import('./src/components/Nivel3'),
                },
                {
                    path: '/Nivel4',
                    name: 'nivel4',
                    component: () => import('./src/components/Nivel4'),
                },
                {
                    path: '/Prolife',
                    name: 'Prolife',
                    component: () => import('./src/components/Prolife'),
                }
            ]
        }
    ],
}); 
export default router;

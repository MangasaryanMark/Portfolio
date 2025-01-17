import App from "@/App.vue";
import Home from "@/pages/Home.vue";
import ThisIsUs from "@/pages/ThisIsUs.vue";
import Menu from "@/pages/Menu.vue";
import Contact from "@/pages/Contact.vue";
import Orders from "@/pages/Orders.vue";
export default [
    {
        path: '/',
        component: Home,
        name: 'home',
    },
    {
        path: '/ThisIsUs',
        component: ThisIsUs,
        name: 'thisIsUs',
    },
    {
        path: '/Menu',
        component: Menu,
        name: 'menu',
    },
    {
        path: '/Orders',
        component: Orders,
        name: 'orders',
    },
{
        path: '/Contact',
        component: Contact,
        name: 'contact',
    }

]
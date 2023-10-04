import { createRouter, createWebHistory } from 'vue-router';

import MainPage from './pages/MainPage.vue';
import ListsPage from "@/pages/ListsPage";
import WatchlistPage from "@/pages/WatchlistPage";
import CommunityPage from "@/pages/CommunityPage";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/profile' },
        { path: '/profile', component: MainPage },
        { path: '/lists', component: ListsPage },
        { path: '/watchlist', component: WatchlistPage },
        { path: '/community', component: CommunityPage },
    ],
});

export default router;

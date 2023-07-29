import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PlanView from "@/views/PlanView.vue";
import LeaderBoardView from "@/views/LeaderBoardView.vue";
import ProfileView from "@/views/ProfileView.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/Home',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/Plan',
    name: 'Plan',
    component: PlanView
  },
  {
    path: '/Leaderboard',
    name: 'Leaderboard',
    component: LeaderBoardView
  },
  {
    path: '/Profile',
    name: 'Profile',
    component: ProfileView
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

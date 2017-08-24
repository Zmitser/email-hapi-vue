import Vue from 'vue'
import Router from 'vue-router'
import Landing from '@/components/Landing'
import Dashboard from '@/components/Dashboard'
import SurveyNew from '@/components/SurveyNew'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: Landing
    },
    {
      path: '/surveys',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/surveys/new',
      name: 'SurveyNew',
      component: SurveyNew
    }
  ],
  mode: 'history'
})

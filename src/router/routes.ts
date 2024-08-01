import { createRouter, createWebHistory } from 'vue-router'
import RegularOperations from '@/views/RegularOperations.vue'
import IntegratedStrategies from '@/views/IntegratedStrategies.vue'
import StationarySecurityService from '@/views/StationarySecurityService.vue'
import OperatorList from '@/views/OperatorList.vue'

const routes = [
  { path: '/regular-operations', component: RegularOperations },
  { path: '/integrated-strategies', component: IntegratedStrategies },
  { path: '/stationary-security-service', component: StationarySecurityService },
  { path: '/operators', component: OperatorList }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
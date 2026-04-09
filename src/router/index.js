import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', name: 'splash', component: () => import('../views/SplashScreen.vue') },
  { path: '/login', name: 'login', component: () => import('../views/LoginScreen.vue') },
  { path: '/home', name: 'home', component: () => import('../views/HomeScreen.vue') },
  { path: '/calendar', name: 'calendar', component: () => import('../views/CalendarScreen.vue') },
  { path: '/booking', name: 'booking', component: () => import('../views/BookingScreen.vue') },
  { path: '/booking-detail', name: 'booking-detail', component: () => import('../views/BookingDetailScreen.vue') },
  { path: '/profile', name: 'profile', component: () => import('../views/ProfileScreen.vue') },
  { path: '/pricing', name: 'pricing', component: () => import('../views/PricingScreen.vue') },
  { path: '/messages', name: 'messages', component: () => import('../views/MessagesScreen.vue') },
  { path: '/chat', name: 'chat', component: () => import('../views/ChatScreen.vue') },
  { path: '/events', name: 'events', component: () => import('../views/EventsScreen.vue') },
  { path: '/news/:id', name: 'news', component: () => import('../views/NewsScreen.vue') },
  { path: '/subscriptions', name: 'subscriptions', component: () => import('../views/SubscriptionsScreen.vue') },
  { path: '/history', name: 'history', component: () => import('../views/HistoryScreen.vue') },
  { path: '/admin', name: 'admin', component: () => import('../views/AdminScreen.vue') },
  { path: '/admin/sessions', name: 'admin-sessions', component: () => import('../views/admin/AdminSessionsScreen.vue') },
  { path: '/admin/sessions/create', name: 'admin-session-create', component: () => import('../views/admin/AdminSessionCreateScreen.vue') },
  { path: '/admin/reservations', name: 'admin-reservations', component: () => import('../views/admin/AdminReservationsScreen.vue') },
  { path: '/admin/events', name: 'admin-events', component: () => import('../views/admin/AdminEventsScreen.vue') },
  { path: '/admin/events/create', name: 'admin-event-create', component: () => import('../views/admin/AdminEventCreateScreen.vue') },
  { path: '/admin/settings', name: 'admin-settings', component: () => import('../views/admin/AdminSettingsScreen.vue') },
  { path: '/notifications', name: 'notifications', component: () => import('../views/NotificationsScreen.vue') },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router

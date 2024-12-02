import { createRouter, createWebHistory } from "vue-router";
const routes = [
  {
    path: "/",
    component: () => import("../components/DefaultLayout.vue"),
    children: [
      {
        path: "/",
        name: "home",
        component: () => import("../views/Home.vue"),
      },
      {
        path: "/by-name/:name?",
        name: "byName",
        component: () => import("../views/MealsByName.vue"),
      },
      {
        path: "/by-letter/:letter?",
        name: "byLetter",
        component: () => import("../views/MealsByLetter.vue"),
      },
      {
        path: "/ingredients",
        name: "ingredients",
        component: () => import("../views/Ingredients.vue"),
      },
      {
        path: "/by-ingredient/:ingredient?",
        name: "byIngredient",
        component: () => import("../views/MealsByIngredients.vue"),
      },
      // {
      //   path: "/letter/:letter?",
      //   name: "byLetter",
      //   component: () => import("../views/MealList.vue"),
      // },
      {
        path: 'meal/:id',
        name: 'mealDetails',
        component: () => import('../views/MealDetails.vue')
      }
    ],
  },
  {
    path: '/guest',
    component: () => import('../components/GuestLayout.vue'),
    children: [
      // {
      //   path: "/by-name/:name?",
      //   name: "byName",
      //   component: () => import("../views/MealsByName.vue"),
      // }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;

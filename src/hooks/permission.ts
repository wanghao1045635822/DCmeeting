import { RouteLocationNormalized, RouteRecordRaw } from "vue-router";
import { useUserStore } from "@/store";
import { getUserInfo, getUserResources } from "@/utils/auth";

export default function usePermission() {
  const userStore = useUserStore();
  return {
    accessRouter(route: RouteLocationNormalized | RouteRecordRaw) {
      //遍历userStore.resource
      let isok = false;
      return true
      let user = getUserResources();
      let resurces: any;
      // if (userStore.resources) {
      //   resurces = userStore.resources;
      // } else {
      //   if (user) {
      //     resurces = JSON.parse(user);
      //   }
      // }
      // if (resurces) {
      //   resurces.forEach(r => {
      //     if ((r.menuType == 0 || r.menuType == 3) && (route.name == r.component || route.path == r.component)) {
      //       isok = true;
      //     }
      //   });
      //   return isok;
      // } else {
      //   return (
      //     !route.meta?.requiresAuth ||
      //     !route.meta?.roles ||
      //     route.meta?.roles?.includes("*") ||
      //     route.meta?.roles?.includes(userStore.role)
      //   );
      // }

    },
    findFirstPermissionRoute(_routers: any, role = "admin") {
      const cloneRouters = [..._routers];
      while (cloneRouters.length) {
        const firstElement = cloneRouters.shift();
        if (
          firstElement?.meta?.roles?.find((el: string[]) => {
            return el.includes("*") || el.includes(role);
          })
        )
          return { name: firstElement.name };
        if (firstElement?.children) {
          cloneRouters.push(...firstElement.children);
        }
      }
      return null;
    }
    // You can add any rules you want
  };
}

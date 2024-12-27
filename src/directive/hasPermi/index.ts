import { DirectiveBinding } from 'vue';
import { useUserStore } from '@/store';
import { getUserResources } from "@/utils/auth";

function hasPermissionDirective(el: HTMLElement, binding: DirectiveBinding) {

  // 获取用户权限
  const userStore = useUserStore();
  const roleData = JSON.parse( getUserResources())
  const roleBtn = roleData.map((item: any) => item.component)
  const permission = binding.value as string;

    if (!roleBtn.includes(permission)) {
      el.style.display = 'none';
    }
}



export default {
  mounted(el: HTMLElement, binding: DirectiveBinding) {
  
    hasPermissionDirective(el, binding);
  },
  updated(el: HTMLElement, binding: DirectiveBinding) {
   
    hasPermissionDirective(el, binding);
  },
};

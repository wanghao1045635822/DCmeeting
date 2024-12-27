import { DirectiveBinding } from 'vue';
import { useUserStore } from '@/store';
import { getUserResources } from "@/utils/auth";

function hasNumberOnly(el: HTMLElement, binding: DirectiveBinding) {
  el.querySelector('input').addEventListener('input', function () {
    this.value = this.value.replace(/[^\d]/g, '');
    // console.log(this);
  });
}



export default {
  mounted(el: HTMLElement, binding: DirectiveBinding) {

    hasNumberOnly(el, binding);

  },
  updated(el: HTMLElement, binding: DirectiveBinding) {

    // hasNumberOnly(el, binding);
  },
};

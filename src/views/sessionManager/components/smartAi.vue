<template>
  <div class="layoutAgentCenter">
              <a-scrollbar
                style="
                  height: calc(100vh - 100px);
                  overflow-y: auto;
                  overflow-x: hidden;
                "
              >
                <div class="search">
                  <!--                  查询框-->
                  <img src="@/assets/images/his.png"
                       style="width: 100%"
                       alt="">

                </div>
                <div class="agentMainCenter">
                  <a-row class="agentCenter">
                    <a-col :span="8" v-for="item in dialogs">
                      <div
                        class="item agentCenter-box"
                        @click="createNewSession(item)"
                      >
                        <div class="text" >
                          <a-avatar>
                            <img
                              :style="{ width: '100%' }"
                              alt="dessert"
                              :src="item.avatar || imgSrc"
                            />
                          </a-avatar>
                          <span style="margin-left: 10px;font-weight: 500;color: var(--color-text-1)">
                            {{ item.name }}
                          </span>
                        </div>
                        <div class="time"
                        >
                        </div>
                      </div>
                    </a-col>
                    <a-col :span="8" v-for="item in agentList">
                      <div
                        class="item agentCenter-box"
                        @click="createNewSession(item)"
                      >
                        <div class="text" >
                          <a-avatar>
                            <img
                              :style="{ width: '100%' }"
                              alt="dessert"
                              :src="item.avatar || imgSrc"
                            />
                          </a-avatar>
                          <span style="margin-left: 10px;font-weight: 500;color: var(--color-text-1)">
                            {{ item.name }}
                          </span>
                        </div>
                        <div class="time"
                        >
                        </div>
                      </div>
                    </a-col>
                  </a-row>
                </div>
              </a-scrollbar>
  </div>
</template>
<script setup lang="ts">
import {
  IconClose,
  IconSearch,
  IconTiktokColor
} from "@arco-design/web-vue/es/icon";
import { useAppStore, useUserStore } from "@/store";
import { computed, nextTick, onMounted, watch, reactive, ref, onBeforeMount, onBeforeUnmount } from "vue";

import { Message } from "@arco-design/web-vue";
import EventBus from '@/utils/EventBus';
import moment from "moment";
import {
  addSessionApi,
  chatApi,
  getDialogListApi,
  getSessionDetailsApi,
  sessionListApi
} from "@/api/session";
import { queryCanvasList } from "@/api/Agent";
const emit = defineEmits(["querySessionDetail","changeAgentType","createSession"]);
import logo from "@/assets/images/model.png";
const sessionList = ref([]); //会话列表
const activeSessionId = ref("");
const fieldNames = { value: "id", label: "name" };
const dialogs = ref([]);
const dialogObj = reactive({});
const agentObj = reactive({});
const agentList = ref([]);
const searchValue = ref("");
const selectValue = ref("");
const sectionList = ref({});
const imgSrc = ref(logo);
const DialogList = async () => {
  const { code, data } = await getDialogListApi();
  if (code === 200) {
    if (data?.length>0) {
      selectValue.value = data[0].id;
      dialogs.value = data.map((item) => {
        return {
          ...item,
          type: 1 //智能体
        };
      });
      // console.log(data, "dialogs");

    }
  }
};

const queryCanvas = async (params = {}) => {
  try {
    const { data } = await queryCanvasList(params);
    console.log(data, "agent");
    agentList.value = data.map((item) => {
      return {
        ...item,
        name: item.title,
        type: 2 //agent
      };
    });
    // 合并数组
    // dialogs.value = dialogs.value.concat(agentList.value);


  } catch (err) {
    // you can report use errorHandler or other
  } finally {
  }
};


// 查询会话列表
const querySessionList = async (id) => {
  const { code, data } = await sessionListApi(id);
  if (code === 200) {
    sessionList.value = data;



  } else {
    Message.warning("查询失败");
  }
};
// 生成智能体新建会话
const createNewSession = async (session) => {
  console.log(session, 'session');
  // emit('querySessionDetail',session);
  if (session.type == '1') {
    // 生成智能体新的对话
    emit('createSession',session.id,`和${session.name}的会话`);
    emit('changeAgentType','1');
  } else {
    // 生成agent新的对话
    EventBus.emit("createAgent",session);
    emit('changeAgentType','2');
  }



}
onBeforeMount(()=>{
  DialogList();
  queryCanvas();
})

onMounted(() => {
  EventBus.on("smartAi", () => {
    emit('changeAgentType','4');
    DialogList();
    queryCanvas();
  });
})
onBeforeUnmount(() => {
  EventBus.off("smartAi");
});


</script>
<style scoped lang="less">
  .layoutAgentCenter{
    width: 100%;
    //background: #999999;
    position: absolute;
    left: 0;
    top: 0;
    .agentTitle___F_iam {
      font-size: 36px;
      line-height: 50px;
      font-weight: 700;
      text-align: center;
    }
    .search{
      width: 100%;
      .search-box{
        width: 70%;
        margin-left: 15%;
        border: 1px solid var(--color-text-4);
        padding: 10px;
        border-radius: 12px;
        background: var(--color-bg-2);
        margin-top: 20px;
        margin-bottom: 20px;
        :deep(.arco-input-wrapper){
          border: none;
          background: var(--color-bg-2);
        }
      }
    }
    .agentMainCenter{
      width: 70%;
      margin: 0 auto;
      .agentCenter{
        width: 100%;
        margin-top: 30px;
        .agentCenter-box{
          display: flex;
          width: 90%;
          margin: 0 auto;
          //border: 1px solid var(--color-neutral-3);
          padding: 16px;
          border-radius: 12px;
          background: var(--color-bg-1);
          margin-top: 10px;
          cursor: pointer;
          justify-content: space-between;
          align-items: center;
          color: var(--color-text-2);
        }
        .agentCenter-box:hover{
          color: var(--color-text-2);
          //border: 1px solid var(--color-neutral-3);
          background: var(--color-bg-3);
          box-shadow: 0 1px 2px -2px rgba(0, 0, 0, 0.16), 0 3px 6px 0 rgba(0, 0, 0, 0.12), 0 5px 12px 4px rgba(0, 0, 0, 0.09);
        }
      }
    }




  }



</style>

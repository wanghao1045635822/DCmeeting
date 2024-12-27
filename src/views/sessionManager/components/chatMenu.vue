<template>
  <div class="layoutNavMoveCenter">
    <div class="layoutNavMove___j5ets">
      <div class="myAgent___djnd_ myAgentAnim myAgentlight___yK7Gk">
        <div data-testid="msh-sidebar-main" class="myAgentHome___PG6IZ"></div>
        <div class="myAgentLine___Isl6E"></div>
        <div class="myAgentTool___Y1_mC" data-testid="msh-sidebar-new" @click="()=>{
          EventBus.emit('newChat')
        }">
          <div class="myAgentToolIcon___gaAKI myAgentToolIconNew___DBZrW">
            <img
            src="@/assets/images/talk.png"
            style="width: 24px"
            alt="">
          </div>
        </div>
        <div data-testid="msh-sidebar-history" class="myAgentTool___Y1_mC"  @click="()=>{
          EventBus.emit('history')
        }">
          <div class="myAgentToolIcon___gaAKI myAgentToolIconHistory___GTLWk" >
            <img
              src="@/assets/images/historybg.png"
              style="width: 24px"
            alt="">
          </div>
        </div>
        <div data-testid="msh-sidebar-square" class="myAgentTool___Y1_mC myAgentToolSquare___dbLm1" @click="()=>{
          EventBus.emit('smartAi')
        }">
          <div class="myAgentToolIcon___gaAKI myAgentToolIconSquare___Rj1o_"><img
            src="@/assets/images/agent.png"
            style="width: 24px"
            alt=""></div>
        </div>
        <div class="myAgentLine___Isl6E" style="margin-top: 4px;"></div>
        <div id="myAgentBox">
<!--          <div class="myAgentBox___zrCit">-->
<!--            <div class="myAgentBoxImg___Mgu9e">-->
<!--              <div class="myAgentBoxImgLayout___u69B_">-->
<!--                <div class="MuiBox-root css-5nczy5"><img-->
<!--                  src="https://kimi-img.moonshot.cn/prod-chat-kimi/avatar/kimiplus/academic.png" alt=""-->
<!--                  style="border-radius: 50%; width: 100%; height: 100%;"></div>-->
<!--                <span class="myAgentBoxImgLayoutTip___xHV4m">学术搜索</span></div>-->
<!--              <div data-testid="msh-sidebar-bot-delete" class="myAgentBoxImgDelete___qXZuq">-->
<!--                <div class="myAgentBoxImgDeleteInner____Hawc">从侧边栏移除</div>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--          <div class="myAgentBox___zrCit">-->
<!--            <div class="myAgentBoxImg___Mgu9e">-->
<!--              <div class="myAgentBoxImgLayout___u69B_">-->
<!--                <div class="MuiBox-root css-5nczy5"><img-->
<!--                  src="https://kimi-img.moonshot.cn/prod-chat-kimi/avatar/kimiplus/paper_rewrite.png" alt=""-->
<!--                  style="border-radius: 50%; width: 100%; height: 100%;"></div>-->
<!--                <span class="myAgentBoxImgLayoutTip___xHV4m">论文改写</span></div>-->
<!--              <div data-testid="msh-sidebar-bot-delete" class="myAgentBoxImgDelete___qXZuq">-->
<!--                <div class="myAgentBoxImgDeleteInner____Hawc">从侧边栏移除</div>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--          <div class="myAgentBox___zrCit">-->
<!--            <div class="myAgentBoxImg___Mgu9e">-->
<!--              <div class="myAgentBoxImgLayout___u69B_">-->
<!--                <div class="MuiBox-root css-5nczy5"><img-->
<!--                  src="https://kimi-img.moonshot.cn/prod-chat-kimi/avatar/kimiplus/prompt.png" alt=""-->
<!--                  style="border-radius: 50%; width: 100%; height: 100%;"></div>-->
<!--                <span class="myAgentBoxImgLayoutTip___xHV4m">提示词专家</span></div>-->
<!--              <div data-testid="msh-sidebar-bot-delete" class="myAgentBoxImgDelete___qXZuq">-->
<!--                <div class="myAgentBoxImgDeleteInner____Hawc">从侧边栏移除</div>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--          <div class="myAgentBox___zrCit">-->
<!--            <div class="myAgentBoxImg___Mgu9e">-->
<!--              <div class="myAgentBoxImgLayout___u69B_">-->
<!--                <div class="MuiBox-root css-5nczy5"><img-->
<!--                  src="https://kimi-img.moonshot.cn/prod-chat-kimi/avatar/kimiplus/taro.png" alt=""-->
<!--                  style="border-radius: 50%; width: 100%; height: 100%;"></div>-->
<!--                <span class="myAgentBoxImgLayoutTip___xHV4m">塔罗师</span></div>-->
<!--              <div data-testid="msh-sidebar-bot-delete" class="myAgentBoxImgDelete___qXZuq">-->
<!--                <div class="myAgentBoxImgDeleteInner____Hawc">从侧边栏移除</div>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
          <div class="myAgentBox___zrCit" v-for="item in sessionList">
            <div class="myAgentBoxImg___Mgu9e" @click="createNewSession(item)">
              <div class="myAgentBoxImgLayout___u69B_">
                <div class="MuiBox-root css-5nczy5">
                  <img
                    :src="item.icon ? httpUrl + item.icon:imgSrc"
                    alt=""
                    style="border-radius: 50%; width: 100%; height: 100%;">
                </div>
                <span class="myAgentBoxImgLayoutTip___xHV4m">{{item.name}}</span>
              </div>
              <div data-testid="msh-sidebar-bot-delete" class="myAgentBoxImgDelete___qXZuq"  @click.stop="deleteSession(item)">
                <div class="myAgentBoxImgDeleteInner____Hawc"  >从侧边栏移除</div>
              </div>
            </div>
          </div>
        </div>
<!--        <div class="myAgentLine___Isl6E" style="margin-top: 4px;"></div>-->
      </div>
    </div>
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
import {
  addSessionApi,
  chatApi,
  getDialogListApi,
  getSessionDetailsApi,
  deleteSessionApi,
  sessionListApi
} from "@/api/session";
import { Message } from "@arco-design/web-vue";
const httpUrl = localStorage.getItem('httpUrl');
import EventBus from '@/utils/EventBus';
const emit = defineEmits(["querySessionDetail","changeAgentType","createSession"]);
import { appUsageSessionListApi, deleteAppUsage } from "@/api/Agent";
import { getAgentSessionDetailsApi } from "@/api/agentSession";
const activeSessionId = ref("");
const fieldNames = { value: "id", label: "name" };
const dialogs = ref([]);
const dialogObj = reactive({});
const agentObj = reactive({});
const agentList = ref([]);
const searchValue = ref("");
const selectValue = ref("");
const sectionList = ref({});
const sessionList = ref([]); //用户操作会话列表
import img1 from '@/assets/images/talkbg.png'
import logo from "@/assets/images/model.png";
const imgSrc = ref(logo);



// 查询历史用户习惯会话列表
const querySessionList = async (id) => {
  const { code, data } = await appUsageSessionListApi('');
  if (code === 200) {
    sessionList.value = data.map((item) => {
      return {
        ...item,
      }
    });
    // sessionList.value.splice(0, 5);
    console.log(sessionList.value,'用户习惯会话列表');
  } else {
    // Message.warning("查询失败");
  }
};


// 新增会话
const createNewSession = async (session) => {
  console.log(session, 'session');
  // 查询历史记录
  if (session.app_type == '1') {
    // 生成智能体新的对话
    emit('createSession',session.app_id,`和${session.name}的会话`);
    emit('changeAgentType','1');
  } else {
    // 生成agent新的对话
    // agent对象数据封装
    const { code, data } = await getAgentSessionDetailsApi(session.app_id);
    if (code == 0) {
      console.log(data,'会话详情');
      let sessionObj = {
        id: session.app_id,
        dsl: data.dsl,
        title: session.name,
      }
      EventBus.emit("createAgent",sessionObj);
      emit('changeAgentType','2');
    }

  }



}




//根据会话id删除会话
const deleteSession = async (session) => {
  const { code } = await deleteAppUsage({
    app_id:session.app_id
  });
  if (code === 200) {
    // Message.success('删除成功');
    const { code, data } = await appUsageSessionListApi('');
    if (code === 200) {
      sessionList.value = data;
      // sessionList.value.splice(0, 5);
      console.log(sessionList.value,'用户习惯会话列表');
      if(sessionList.value.length == 0){
        // 生成智能体新的对话
        emit('createSession','');
        emit('changeAgentType','1');
      }
    } else {
      // Message.warning("查询失败");
    }
  }
};






onBeforeMount(()=>{
  querySessionList('');
})

onMounted(() => {
  EventBus.on("queryAppUsageList", (data) => {
    querySessionList('');
  })
})
onBeforeUnmount(() => {
  EventBus.off("queryAppUsageList");
});



</script>
<style scoped lang="less">
  @import "@/views/sessionManager/style/layout.css";
  .layoutNavMoveCenter {
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 160px); /* 或者指定高度 */
    position: relative;
  }
  #myAgentBox{
    //width: 100%;
    //max-height: 220px;
    //overflow: hidden;
  }




</style>

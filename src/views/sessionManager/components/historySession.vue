<template>
  <div class="layoutHisCenter">
              <a-button
                type="primary"
                status="danger"
                style="
                position: absolute;
                top: 10px;
                left: -40px;
                font-size: 30px;
                z-index: 99;
                cursor: pointer"
                @click="emit('changeAgentType','1')"
              >
                <template #icon>
                  <icon-close style="font-size: 20px" />
                </template>
              </a-button>

              <a-scrollbar
                ref="scrollRef"
                class="left-list"
                style="
                  height: calc(100vh - 160px);
                  overflow-y: scroll;
                  overflow-x: hidden;
                "
                v-if="isReached"
                @scroll="handleScroll"
              >
                <div class="historyTitle___F_iam">历史会话</div>


                <div class="search">
<!--                  查询框-->
                  <div class="search-box">
                    <icon-search />
                    <a-input
                      placeholder="搜索历史会话"
                      v-model="searchValue"
                      style="width: 90%;"
                    />
                  </div>

                </div>


                <div class="historyCenter">
                  <div
                    class="item historyCenter-box"
                    v-for="session in sessionList"
                    @click="querySessionDetail(session)"
                    @mouseenter="handleMouseEnter(session)"
                    @mouseleave="handleMouseLeave(session)"
                  >
                    <div class="text" >
                      <img
                        :style="{ width: '16px' }"
                        alt="dessert"
                        :src="session.icon ? httpUrl + session.icon : imgSrc"
                      />
                      {{ session.name }}
                    </div>
                    <div class="time"
                    >
                      <span v-show="session.showtype == 1" style="font-size: 14px">
                        {{
                          moment(new Date(session.create_time)).format(
                            'YYYY-MM-DD HH:mm:ss'
                          )
                        }}
                      </span>
                    </div>
                    <a-button type="text" @click.stop="deleteSession(session)" style="color: red;position: absolute;right: 10px;top: 10px;"  v-show="session.showtype == 2">
                      <icon-delete style="font-size: 14px" />
                    </a-button>
                  </div>
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

import { Message, Modal } from "@arco-design/web-vue";
import EventBus from '@/utils/EventBus';
import moment from "moment";
import {
  addSessionApi,
  chatApi,
  getDialogListApi,
  getSessionDetailsApi,
  deleteSessionApi,
  sessionListApiPage
} from "@/api/session";

import { queryCanvasList } from "@/api/Agent";
const emit = defineEmits(["querySessionDetail","changeAgentType"]);
import logo from "@/assets/images/model.png";
import { deleteKnow } from "@/api/kbList";
import { getAgentSessionDetailsApi } from "@/api/agentSession";
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
const scrollRef = ref(null);
const httpUrl = localStorage.getItem('httpUrl');
const imgSrc = ref(logo);
let scrollTopVal = ref(0);
let queryPage = reactive({
  page: 1,
  page_size: 50
})
let total = ref(0);
let sessionScrollList = ref([]);
let isReached = ref(true);

const DialogList = async () => {
  const { code, data } = await getDialogListApi();
  if (code === 200) {
    if (data) {
      selectValue.value = data[0].id;
      dialogs.value = data.map((item) => {
        return {
          ...item,
          type: 1 //智能体
        };
      });
      // console.log(data, "dialogs");
      queryCanvas();
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
    dialogs.value = dialogs.value.concat(agentList.value);

    // 判断当前是智能体或agent
    // console.log(val, 'val');
    // if (dialogs.value.length > 0) {
    //   dialogChange(dialogs.value[0].id);
    // }
    //新建会话
    querySessionList(dialogs.value[0].id);


  } catch (err) {
    // you can report use errorHandler or other
  } finally {
  }
};


// 查询会话列表
const querySessionList = async (id) => {
  const { code, data } = await sessionListApiPage({
    dialog_id: id,
    ...queryPage
  });
  if (code === 200) {
    sessionList.value = data.map((item) => {
      return {
        ...item,
        showtype: 1
      }
    });
    isReached.value = false;
    setTimeout(()=>{
      isReached.value = true;
    },100)
    // total.value = sessionList.value.length;


  } else {
    Message.warning("查询失败");
  }
};

//根据会话id删除会话
const deleteSession = async (session) => {
  Modal.confirm({
    title: '提示信息',
    content: '确认删除吗',
    okText: '确定',
    cancelText: '取消',
    hideTitle: true,
    onOk: async () => {
      const { code } = await deleteSessionApi([session.id]);
      if (code === 200) {
        Message.success('删除成功');
        querySessionList('');
      }
    },
    onCancel: () => {},
  });
};

const querySessionDetail = async (session) => {
  console.log(session, 'session');
  // 查询历史记录 app_type 1:智能体 2:agent
  if (session.app_type == '1') {
    // 生成智能体新的对话
    emit('changeAgentType','1');
    emit('querySessionDetail',session);
  } else  if (session.app_type == '2'){
    // agent对象数据封装
    // const { code, data } = await getAgentSessionDetailsApi(session.dialog_id);
    // if (code == 0) {
    //   console.log(data,'会话详情');
    //   // let sessionObj = {
    //   //   id: session.app_id,
    //   //   dsl: data.dsl,
    //   //   title: session.name,
    //   // }
    // }
    EventBus.emit("queryAgentSessionDetail",session);
    emit('changeAgentType','2');
  }
}


const handleMouseEnter = (session) => {
  session.showtype = 2;
};

const handleMouseLeave = (session) => {
  session.showtype = 1;
};


const handleScroll = async (e: any) => {
  scrollTopVal.value = e.target.scrollTop;
  let offsetHeight = e.target.offsetHeight;
  let scrollHeight = e.target.scrollHeight;

  if (scrollTopVal.value + offsetHeight >= scrollHeight-1) {
    console.log(scrollTopVal.value);
    // console.log(offsetHeight);
    // console.log(scrollHeight);
    //滚动条到达底部
    // if (sessionList.value.length < total.value) {
    //   //数据为加载完，继续赋值
    //   // queryPage.page++
    //
    //
    //
    // }
    queryPage.page++
    const { code, data } = await sessionListApiPage({
      dialog_id: '',
      ...queryPage
    });
    if (code === 200) {
       sessionScrollList.value = data.map((item) => {
        return {
          ...item,
          showtype: 1
        }
      });
      // total.value = sessionList.value.length;
      sessionList.value = [...sessionList.value,...sessionScrollList.value];
      isReached.value = false;
      setTimeout(()=>{
        isReached.value = true;
        nextTick(()=>{
          scrollRef.value.scrollTop(scrollTopVal.value);
          // console.log(scrollRef.value.$el.scrollTop,'scrollTopVal');
          // console.log(scrollTopVal.value,'scrollTopVal');
        })
      },100)


    } else {
      Message.warning("查询失败");
    }

  }
}



onBeforeMount(()=>{
  // DialogList()
  querySessionList('');
})

onMounted(() => {
  console.log(httpUrl,'当前地址');
  EventBus.on("history", () => {
    emit('changeAgentType','3');
    // DialogList()
    queryPage.page = 1;
    querySessionList('');

  });
  // 添加滚动事件监听器
  scrollRef.value.$el.addEventListener('scroll', handleScroll);

  // 清理函数
  return () => {
    scrollRef.value.$el.removeEventListener('scroll', handleScroll);
  };



})
onBeforeUnmount(() => {
  EventBus.off("history");
});


</script>
<style scoped lang="less">
  .layoutHisCenter{
    width: 100%;
    //background: #999999;
    position: absolute;
    left: 0;
    top: 0;
    .historyTitle___F_iam {
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
    .historyCenter{
      width: 100%;
      margin-top: 30px;
      .historyCenter-box{
        position: relative;
        display: flex;
        width: 70%;
        margin-left: 15%;
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
      .historyCenter-box:hover{
        color: var(--color-text-2);
        //border: 1px solid var(--color-neutral-3);
        background: var(--color-bg-3);
        box-shadow: 0 1px 2px -2px rgba(0, 0, 0, 0.16), 0 3px 6px 0 rgba(0, 0, 0, 0.12), 0 5px 12px 4px rgba(0, 0, 0, 0.09);
      }
    }




  }



</style>

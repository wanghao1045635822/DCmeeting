<template>
  <div :style="{ height: heightrg }">
    <div style="padding: 10px">
      <a-avatar :style="{ backgroundColor: '#3370ff' }">
        <img
          :style="{ width: '100%' }"
          alt="dessert"
          src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a20012a2d4d5b9db43dfc6a01fe508c0.png~tplv-uwbnlip3yd-webp.webp"
        />
      </a-avatar>
      调试预览
    </div>
    <a-divider style="margin: 0; margin-left: 10px" />
    <a-scrollbar
      ref="scrollbar"
      id="home"
      class="chat-list"
      style="width: 90%; overflow: auto; height: 70vh; margin: 0px auto"
    >
      <div class="chat-item" v-for="sessionDetail in sessionDetailList">
        <a-comment
          v-if="sessionDetail.role === 'user'"
          avatar="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp"
        >
          <template #content>
            <div
              :class="{ light: theme === 'light' }"
              style="
                background-color: var(--color-bg-2);
                color: var(--color-text-3);
                border: none;
                padding: 16px;
              "
              >{{ sessionDetail.content }}</div
            >
          </template>
        </a-comment>
        <a-comment
          v-else-if="sessionDetail.role === 'assistant'"
          avatar="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/9eeb1800d9b78349b24682c3518ac4a3.png~tplv-uwbnlip3yd-webp.webp"
        >
          <template #content>
            <a-card
              class="chat-item-answer"
              style="
                background-color: var(--color-bg-2);
                color: var(--color-text-3);
                border: none;
              "
            >
              <div :class="{ light: theme === 'light' }">{{
                sessionDetail.content
              }}</div>
            </a-card>
          </template>
        </a-comment>
        <a-comment
          v-else-if="sessionDetail.role === 'last'"
          avatar="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/9eeb1800d9b78349b24682c3518ac4a3.png~tplv-uwbnlip3yd-webp.webp"
        >
          <template #content>
            <a-textarea
              readonly
              auto-size
              v-model="displayedText"
              class="chat-item-answer"
              style="
                background-color: var(--color-bg-2);
                color: var(--color-text-3);
                border: none;
              "
            >
            </a-textarea>
          </template>
        </a-comment>
      </div>
    </a-scrollbar>
    <div class="bottom">
      <div class="input">
        <a-input
          v-model="inputMsg"
          @keydown.enter="sendMessage"
          placeholder="输入您想了解的内容，按Enter发送"
        >
          <template #suffix>
            <icon-send style="cursor: pointer" @click="sendMessage" />
          </template> </a-input
      ></div>
      <div class="text">内容由AI生成，仅供参考</div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import {
    IconMoreVertical,
    IconQuestionCircleFill,
    IconPoweroff,
    IconCommon,
    IconSend,
  } from '@arco-design/web-vue/es/icon';
  import img1 from '@/assets/images/u64.png';
  import img2 from '@/assets/images/u69.png';
  import img3 from '@/assets/images/u74.png';
  import { ref, onMounted, computed, reactive, nextTick, watch } from 'vue';
  import { useUserStore, useAppStore } from '@/store';
  import {
    sessionListApi,
    deleteSessionApi,
    getSessionDetailsApi,
    chatApi,
  } from '@/api/session';
  import { Message } from '@arco-design/web-vue';
  const userStore = useUserStore();
  const appStore = useAppStore();
  const theme = computed(() => {
    return appStore.theme;
  });
  const heightrg = ref('calc(100vh - 100px)');
  const sessionList = ref([]); //会话列表
  const sessionDetailList = ref([]); //根据会话id出来的会话详情
  const activeSessionId = ref('');
  const inputMsg = ref('');
  const scrollbar = ref(null);

  const currIndex = ref(0);
  const displayedText = ref(''); // 正在显示的文字
  let timer: number | null = null;
  const streamStr = ref('');
  const modalObj = reactive({ add: false });
  //查询会话列表
  const querySessionList = async () => {
    const { code, data } = await sessionListApi();
    if (code === 200) {
      sessionList.value = data;
      if (Array.isArray(data) && data.length > 0) {
        activeSessionId.value = data[1].id;
        const res = await getSessionDetailsApi(data[0].id);
        if (res.code === 200) {
          sessionDetailList.value = res.data.message;
          refreshScroll();
        }
      }
    } else {
      Message.warning('查询失败');
    }
  };
  //根据会话id删除会话
  const deleteSession = async (session) => {
    const { code } = await deleteSessionApi([session.id]);
    if (code === 200) {
      Message.success('删除成功');
      querySessionList();
    }
  };
  // eslint-disable-next-line prettier/prettier
  // 新增会话之后刷新会话列表
  const addSession = () => {
    querySessionList();
  };
  // 初始化数据
  const initData = () => {
    querySessionList();
  };
  // 获取登录信息
  const userName = computed(() => {
    return userStore.name;
  });
  const avatar = computed(() => {
    return userStore.avatar;
  });
  const refreshScroll = () => {
    nextTick(() => {
      const container = document.getElementById('home');
      scrollbar.value.scrollTop(container.scrollHeight);
    });
  };
  // 根据会话id 查询会话详情
  const querySessionDetail = async (session) => {
    activeSessionId.value = session.id;
    const { code, data } = await getSessionDetailsApi(session.id);
    if (code === 200) {
      sessionDetailList.value = data.message;
      refreshScroll(); //刷新滚动条位置
    }
  };
  const sendMessage = async () => {
    if (inputMsg.value) {
      const { code, data } = await chatApi({
        conversation_id: activeSessionId.value,
        messages: inputMsg.value,
      });
      const res = await getSessionDetailsApi(activeSessionId.value);
      if (res.code === 200) {
        sessionDetailList.value = res.data.message.map((item, index) => {
          if (index === res.data.message.length - 1) {
            item.role = 'last';
            displayedText.value = '';
            currIndex.value = 0;
            streamStr.value = item.content;
            startDisplayStr();
          }
          return item;
        });
        refreshScroll();
      }
      inputMsg.value = '';
    } else {
      Message.warning('消息不能为空');
    }
  };
  onMounted(() => {
    initData();
  });
  //文字动态输出
  const startDisplayStr = () => {
    if (timer) {
      clearTimeout(timer!);
    }
    const res = streamStr.value;
    // 将数组中的字符串拼接起来
    if (currIndex.value < res.length) {
      displayedText.value += res[currIndex.value];
      currIndex.value++;
      setTimeout(startDisplayStr, 100);
    } else {
      clearTimeout(timer!);
      timer = null;
    }
  };
  watch(
    () => scrollbar.value,
    (newScroll, oldScroll) => {
      if (newScroll) {
        // 获取a-scroll的高度
        const height = newScroll.$el.offsetHeight;
        console.log('a-scroll height changed to:', height);
      }
    },
    { deep: true }
  );
</script>

<style scoped lang="less">
  .container {
    width: 100%;
    display: flex;
  }
  //.light {
  //  color: white !important;
  //}
  .bottom {
    width: 100%;
    position: absolute;
    bottom: 40px;
    left: 0;

    .input {
      margin-left: 20%;
      width: 60%;
    }

    .text {
      margin-left: 40%;
      font-size: 12px;
      color: lightgrey;
      line-height: 40px;
    }
  }
  .chat-list {
    width: 90%;
    margin: 0px auto;
    .chat-item {
      margin-top: 20px;
      .chat-item-answer {
        color: white;
      }
    }
  }
</style>

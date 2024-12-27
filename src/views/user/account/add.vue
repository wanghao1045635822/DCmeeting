
<template>
  <a-button :type="edit=='edit' ? 'text' : 'primary'" @click="handleClick">
    <template #icon v-if="edit=='add'">
      <icon-plus />
    </template>
    {{edit=='edit' ? '编辑' : '新建账号'}}
  </a-button>
  <a-modal v-model:visible="visible" :title="edit=='edit' ? '编辑' : '新建账号'" @before-open="handleOpened" @cancel="handleCancel" @before-ok="handleBeforeOk">
    <a-form ref="formRef" :rules="rules" :model="form" @submit="handleSubmit" >
      <a-form-item field="name" label="用户名">
        <a-input v-model="form.name" />
      </a-form-item>
      <a-form-item field="nameJoin" label="昵称">
        <a-input v-model="form.nameJoin" />
      </a-form-item>
<!--      <a-form-item field="post" label="Post">-->
<!--        <a-select v-model="form.post">-->
<!--          <a-option value="post1">Post1</a-option>-->
<!--          <a-option value="post2">Post2</a-option>-->
<!--          <a-option value="post3">Post3</a-option>-->
<!--          <a-option value="post4">Post4</a-option>-->
<!--        </a-select>-->
<!--      </a-form-item>-->
      <a-form-item label="备注">
        <a-textarea  v-model="form.txt" placeholder="请输入" allow-clear/>
      </a-form-item>
<!--      <a-form-item>-->
<!--        <div style="width: 100%;text-align: right">-->
<!--          <a-button @click="visible = false">取消</a-button>-->
<!--          <a-button style="margin-left: 10px" type="primary" html-type="submit">确定</a-button>-->
<!--        </div>-->
<!--      </a-form-item>-->
    </a-form>
  </a-modal>
</template>

<script lang="ts" setup>
import { onMounted ,onBeforeMount, reactive, ref } from "vue";

const props = defineProps({
  edit: {
    type: String,
    default: 'add'
  },
  record: {
    type: Object,
    default: () => {
      return {}
    }
  }
})
const visible = ref(false);
const loading = ref(false);
const form = reactive({
  name: '',// 用户名
  nameJoin: '',// 昵称
  post: '',// 岗位
  txt: '',// 备注
});
const formRef = ref(null);

const rules = {
  name: [
    {
      required: true,
      message:'用户名不允许为空',
    },
  ],
  nameJoin: [
    {
      required: true,
      message:'昵称不允许为空',
    },
  ],
  password: [
    {
      required: true,
      message:'password is required',
    },
  ],
  password2: [
    {
      required: true,
      message:'password is required',
    },
    {
      validator: (value, cb) => {
        if (value !== form.password) {
          cb('two passwords do not match')
        } else {
          cb()
        }
      }
    }
  ],
  email: [
    {
      type: 'email',
      required: true,
    }
  ],
  ip: [
    {
      type: 'ip',
      required: true,
    }
  ],
  url: [
    {
      type: 'url',
      required: true,
    }
  ],
  match: [
    {
      required: true,
      validator: (value, cb) => {
        return new Promise((resolve) => {
          if (!value) {
            cb('Please enter match')
          }
          if (value !== 'match') {
            cb('match must be match!')
          }
          resolve()
        })
      }
    }
  ],
}


const handleSubmit = ({values, errors}) => {
  console.log('values:', values, '\nerrors:', errors)
}

const handleClick = () => {
  visible.value = true;
};
const handleBeforeOk = (done) => {
    formRef.value.validate().then(res => {
      console.log('form:', form)
      if (!form.name) {
        done(false)
      }else {
        console.log('请求数据');

      }
    })
};
const handleCancel = () => {
  visible.value = false;
}

const handleOpened =(el) => {
  Object.assign(form,{
    name: '',// 用户名
    nameJoin: '',// 昵称
    post: '',// 岗位
    txt: '',// 备注
  });
  formRef.value.resetFields();
  console.log(props.edit, 'edit');
  console.log(props.record, 'record');
  if(props.edit == 'edit'){
    Object.assign(form,props.record);
  }
}

onBeforeMount(()=>{

})
onMounted(()=>{


})
</script>

<script lang="ts">
import { deleteAccount } from "@/api/account";
export default {
  name: 'add',
  methods: {

  }
};
</script>
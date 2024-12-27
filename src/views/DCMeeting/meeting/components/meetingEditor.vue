<template>
  <div ref="editorDiv" class="editor">
<!--    <QuillEditor-->
<!--      ref="myQuillEditor"-->
<!--      v-model:content="content"-->
<!--      contentType="html"-->
<!--      theme="snow"-->
<!--      :toolbar="toolbar"-->
<!--      style="width: 100%;min-height: 60vh;max-height: 15rem;overflow: scroll;"-->
<!--    />-->
    <quill-editor
      ref="myQuillEditor"
      v-model:content="meetingDetails"
      contentType="html"
      :options="quillOptions"
      style="width: 100%;height: 58vh;overflow: auto;"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, nextTick } from "vue";
  //引入
  import { QuillEditor, Quill } from "@vueup/vue-quill";
  import "@vueup/vue-quill/dist/vue-quill.snow.css";
  import Emoji from '@/plugins/quillEmoji';
  //数据绑定
  const meetingDetails=ref('这是一篇计算机文章......');
  const myQuillEditor=ref(null);
  const editorDiv=ref(null);
  // nextTick(()=>{
  //   const emojiElement = editorDiv.value.querySelector('.ql-emoji');
  //   if (emojiElement) {
  //     console.log('找到 .ql-emoji 元素:', emojiElement);
  //     emojiElement.innerHTML = '<svg t="1732182530040"  class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1539" width="20" height="20"><path d="M512 0C229.2 0 0 229.2 0 512s229.2 512 512 512 512-229.2 512-512S794.8 0 512 0z m0 960C265 960 64 759 64 512S265 64 512 64s448 201 448 448-201 448-448 448z" p-id="1540" fill="#cdcdcd"></path><path d="M320 405.3m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z" p-id="1541" fill="#cdcdcd"></path><path d="M704 405.3m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z" p-id="1542" fill="#cdcdcd"></path><path d="M512 810.7c117.8 0 213.3-95.5 213.3-213.3H298.7c0 117.8 95.5 213.3 213.3 213.3z" p-id="1543" fill="#cdcdcd"></path></svg>';
  //   } else {
  //     console.log('.ql-emoji 元素未找到');
  //   }
  // })

  // 工具栏配置
  const toolbar = ref([
    // [{ size: ["small", false, "large", "huge"] }],
    // 标题-----[{ header: [1, 2, 3, 4, 5, 6, false] }]
    // [{ header: [1, 2, 3, 4, 5, 6, false] }],
    // 字体颜色、字体背景颜色-----[{ color: [] }, { background: [] }]
    // [{ color: [] }, { background: [] }],
    // 字体种类-----[{ font: [] }]
    //   [{ font: [] }],
    // 对齐方式-----[{ align: [] }]
    // 加粗 斜体 下划线 删除线 -----['bold', 'italic', 'underline', 'strike']
    // ["bold", "italic", "underline", "strike"],
    // 引用  代码块-----['blockquote', 'code-block']
    // ["blockquote", "code-block"],
    // 1、2 级标题-----[{ header: 1 }, { header: 2 }]
    //   [{ header: 1 }, { header: 2 }],
    // 有序、无序列表-----[{ list: 'ordered' }, { list: 'bullet' }]
    // [{ list: "ordered" }, { list: "bullet" }],
    // 上标/下标-----[{ script: 'sub' }, { script: 'super' }]
    // [{ script: "sub" }, { script: "super" }],
    // 缩进-----[{ indent: '-1' }, { indent: '+1' }]
    // [{ indent: "-1" }, { indent: "+1" }], // 文本方向-----[{'direction': 'rtl'}]
    // 字体大小-----[{ size: ['small', false, 'large', 'huge'] }]
    // [{ align: [] }], // 清除文本格式-----['clean']
    // ["clean"], // 链接、图片、视频-----['link', 'image', 'video']
    ["image"],
    ["link"],
    // ["video"],
    // ["emoji"],
  ]);
  const quillOptions = {
    theme: 'snow',
    modules: {
      toolbar: {
        container: [
          ['bold', 'italic', 'underline', 'strike'],
          ['blockquote', 'code-block'],
          [{ header: 1 }, { header: 2 }],
          [{ list: 'ordered' }, { list: 'bullet' }],
          [{ script: 'sub' }, { script: 'super' }],
          [{ indent: '-1' }, { indent: '+1' }],
          [{ direction: 'rtl' }],
          [{ size: ['small', false, 'large', 'huge'] }],
          [{ header: [1, 2, 3, 4, 5, 6, false] }],
          [{ color: [] }, { background: [] }],
          [{ font: [] }],
          [{ align: [] }],
          ["image"],
          // ["video"],
          // ["link"],
          // ['clean'],
          // ['emoji'] // 添加表情包按钮
        ],
        handlers: {
          // emoji: function () {
          //   const editor = this.quill;
          //   const range = editor.getSelection();
          //   if (range) {
          //     const emojiPicker = document.createElement('div');
          //     emojiPicker.classList.add('emoji-picker');
          //     emojiPicker.innerHTML = `
          //     <div class="emoji-category">
          //       <span>😊</span>
          //       <span>😂</span>
          //       <span>😍</span>
          //       <span>🤔</span>
          //       <span>🥳</span>
          //       <span>😎</span>
          //       <span>🤗</span>
          //       <span>😔</span>
          //       <span>😴</span>
          //       <span>😌</span>
          //     </div>
          //   `;
          //     emojiPicker.addEventListener('click', (event) => {
          //       const emoji = event.target.innerText;
          //       editor.insertText(range.index, emoji);
          //       editor.setSelection(range.index + emoji.length);
          //       emojiPicker.remove();
          //     });
          //     editorDiv.value.appendChild(emojiPicker);
          //     emojiPicker.style.position = 'absolute';
          //     emojiPicker.style.bottom = `${ - 10}px`;
          //     emojiPicker.style.left = `${ 6 }vw`;
          //     emojiPicker.style.cursor = `pointer`;
          //   }
          // }
        }
      }
    }
  };

  // 注册表情包 Blot
  // Quill.register({ 'formats/emoji': Emoji });


  defineExpose({
    meetingDetails,//暴漏文本变量（包括文本和图片）
  })

  onMounted(() => {
    // 你可以在这里进行一些初始化操作
  });




</script>

<style scoped lang="less">
  .editor{
    width: 100%;
    height: 100%;
    //display: flex;
    //flex-direction: column-reverse;
    //margin-top: 2vh;
    position: relative;
  }
  :deep(.ql-toolbar.ql-snow){
    border: none;
    position: relative;
  }
  :deep(.ql-container.ql-snow){
    border: none;
  }
  .emoji-picker {
    position: absolute;
    z-index: 1000;
    background: white;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }

  .emoji-category span {
    display: inline-block;
    margin: 4px;
    cursor: pointer;
    font-size: 20px;
  }

  /* 自定义图标样式 */
  .quill-custom-icon {
    background-image: url('/biaoqing.svg'); /* 确保路径正确 */
    background-size: cover;
    width: 20px;
    height: 20px;
    display: inline-block;
  }
</style>

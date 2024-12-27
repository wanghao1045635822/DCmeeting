// src/plugins/quillEmoji.js
import Quill from 'quill';

const EmojiBlot = Quill.import('blots/embed');

class Emoji extends EmojiBlot {
  static create(value) {
    let node = super.create(value);
    node.innerHTML = value;
    return node;
  }

  static value(node) {
    return node.innerHTML;
  }
}

Emoji.blotName = 'emoji';
Emoji.tagName = 'span';

Quill.register(Emoji);

export default Emoji;
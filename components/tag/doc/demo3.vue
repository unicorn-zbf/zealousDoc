<template>
  <z-tag
    v-for="tag in dynamicTags"
    :key="tag"
    closable
    @close="handleClose(tag)"
  >
    {{ tag }}
  </z-tag>
  <z-input
    class="input-new-tag"
    v-if="inputVisible"
    ref="tagInputRef"
    v-model="inputValue"
    size="small"
    autofocus
    @keyup.enter="handleInputConfirm"
    @blur="handleInputConfirm"
  />
  <z-button v-else class="button-new-tag" size="small" @click="showInput">+ New Tag</z-button>
</template>

<script setup>
import { nextTick, ref } from 'vue'

const inputValue = ref('')
const dynamicTags = ref(['标签一', '标签二', '标签三'])
const inputVisible = ref(false)
const tagInputRef = ref(null)

const handleClose = (tag) => {
  dynamicTags.value.splice(dynamicTags.value.indexOf(tag), 1)
}

const showInput = () => {
  inputVisible.value = true
  
  nextTick(() => {
    console.log(tagInputRef.value);
  })
}

const handleInputConfirm = () => {
  if (inputValue.value) {
    dynamicTags.value.push(inputValue.value)
  }
  inputVisible.value = false
  inputValue.value = ''
}

</script>
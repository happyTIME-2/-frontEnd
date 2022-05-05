<template>
  <div id="todo-wrap">
    <a-layout>
      <a-layout-header>待办事项</a-layout-header>
      <a-layout-content>
        <a-input-search
          v-model:value="todo"
          placeholder="请输入要待办的事项"
          size="large"
          @search="addTodo"
        >
          <template v-slot:enterButton>
            <a-button>新增</a-button>
          </template>
        </a-input-search>
        <h2 class="title">待办事项</h2>
        <a-card :title="`${index + 1} 、${item.time}`" v-for="(item, index) in todos" :key="item.id">
          <template v-slot:extra>
            <a-switch v-model:checked="item.done" @change="handleCheck(item, true)" />
          </template>
          {{ item.content }}
        </a-card>
        <h2 class="title">已办事项</h2>
        <a-card :title="`${index + 1} 、${item.time}`" v-for="(item, index) in dones" :key="item.id">
          <template v-slot:extra>
            <a-switch v-model:checked="item.done" @change="handleCheck(item, false)"/>
          </template>
          {{ item.content }}
        </a-card>
      </a-layout-content>
    </a-layout>
  </div>
</template>

<script lang="ts">
import { ref, reactive, computed } from 'vue'
export default {
  setup(props: any) {
    const todo = ref('')
    const time = `${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDate()}`

    const state = reactive({
      todoList: [
        {
          id: 1,
          done: false,
          time,
          content: '前往老八食堂，共进午餐'
        },
        {
          id: 2,
          done: false,
          time: time,
          content: '和giao哥合唱一曲'
        },
        {
          id: 3,
          done: false,
          time: time,
          content: '做点阳间的需求'
        }
      ]
    })

    const addTodo = (value: string) => {
      if(!value) {
        console.error('请输入待办事项')
        return
      }

      state.todoList.push({
        content: value,
        id: Date.now(),
        time,
        done: false
      })

      todo.value = '';
    }

    const todos = computed(() => state.todoList.filter(item => !item.done))
    const dones = computed(() => state.todoList.filter(item => item.done))

    const handleCheck = (item: any, status: any) => {
      item.done = status;
    }

    return {
      todo,
      addTodo,
      state,
      todos,
      dones,
      handleCheck
    }
  }
}
</script>

<style scoped>
#todo-wrap {
    min-height: 100vh;
    max-width: 40%;
    margin: 0 auto;
    background-color: #ededed;
  }
#todo-wrap .ant-layout-header,
#todo-wrap .ant-layout-footer {
  background: #7dbcea;
  text-align: center;
  color: #fff;
}

.title {
  margin: 0;
  padding: 10px;
}
</style>
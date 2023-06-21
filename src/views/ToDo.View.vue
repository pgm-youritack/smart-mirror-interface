<template>
  <TitleComponent title="To Do" />
  <div class="todo__items">
    <li v-for="(article, index) in articles" class="todo__item" @click="finish(index + 1)">
      <span>#{{ index + 1 }}: </span>
      {{ article.item }}
      <span class="todo__item-check" v-if="article.donecheck">&#10004;</span>
    </li>
  </div>
</template>

<script>
import TitleComponent from '@/components/title.Component.vue'
import { getTodoItems, insertTodoItem, finishTodoItem } from '../services/Supabase'
import { TodoPageCommands } from '@/services/VoiceCommands'
export default {
  components: {
    TitleComponent
  },
  data() {
    return {
      articles: [],
      form: {
        item: ''
      }
    }
  },
  async mounted() {
    this.articles = await getTodoItems()
    TodoPageCommands(this.articles)
  },
  async created() {},
  methods: {
    submit() {
      this.$emit('submit', this.form)
      insertTodoItem(this.form.item)
      setTimeout(() => {
        this.$router.push('/todo')
      }, 5000)
    },
    finish(index) {
      finishTodoItem(this.articles[index - 1].id)
    }
  }
}
</script>

<template>
  <TitleComponent title="To Do" />
  <div class="todo__items">
    <li v-for="(article, index) in articles" class="todo__item">
      <span>#{{ index + 1 }}: </span>
      {{ article.item }}
      <span class="todo__item-check" v-if="article.donecheck">&#10004;</span>
    </li>
  </div>
  <form class="setup__form" @submit.prevent="submit">
    <input type="text" placeholder="Name" class="setup__form-input" v-model="form.item" />

    <input type="submit" value="Save" class="setup__form-input" />
  </form>
</template>

<script>
import TitleComponent from '@/components/title.Component.vue'
import { getTodoItems, insertTodoItem } from '../services/Supabase'

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
  async created() {
    this.articles = await getTodoItems()
    console.log(this.articles[0].item)
  },
  methods: {
    submit() {
      this.$emit('submit', this.form)
      insertTodoItem(this.form)
      setTimeout(() => {
        this.$router.push('/todo')
      }, 5000)
    }
  }
}
</script>

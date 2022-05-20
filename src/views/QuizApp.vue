<template>
  <h1>Vue クイズ</h1>
  <div class="app">
    <h2>Q. {{ quiz.title }}</h2>
    <img class="quiz-image" v-bind:src="quiz.image" v-bind:alt="quiz.title" />
    <div class="container">
      <button
        v-for="column in quiz.choices"
        :key="column.text"
        @click="feedback(column.feedback)"
      >
        {{ column.text }}
      </button>
    </div>
    <div>{{ quizFeedback }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      quizes: [
        {
          title: "この星の名前は何でしょう？",
          image: require("@/assets/Ganymede.jpg"),
          choices: [
            {
              text: "ゴリアテ",
              feedback:
                "残念！ゴリアテは、旧約聖書に登場するダビデに石で殺される巨人だよ。",
              authenticity: false,
            },
            {
              text: "ゼニガメ",
              feedback:
                "残念！ゼニガメは、クサガメまたはニホンイシガメの幼体だよ。",
              authenticity: false,
            },
            {
              text: "ガニメデ",
              feedback: "正解！ガニメデは、木星の第三惑星だよ！",
              authenticity: true,
            },
          ],
        },
        {
          text: "今何問目でしょう？",
          image: "Two.jpeg",
          choices: [
            {
              text: "に",
              feedback: "正解！",
              authenticity: true,
            },
            {
              text: "1",
              feedback: "残念！",
              authenticity: false,
            },
            {
              text: "4",
              feedback: "残念",
              authenticity: true,
            },
          ],
        },
        {
          text: "城の名前は何でしょう？",
          image: "maruoka.png",
          choices: [
            {
              text: "丸岡城",
              feedback: "正解！",
              authenticity: true,
            },
            {
              text: "丸亀城",
              feedback: "残念！",
              authenticity: false,
            },
            {
              text: "ガニメデ",
              feedback: "残念！ガニメデは、木星の第三惑星だよ！",
              authenticity: false,
            },
          ],
        },
      ],
      quizFeedback: "",
    }
  },
  methods: {
    feedback: function (choiceFeedback) {
      this.quizFeedback = choiceFeedback
    },
  },
}
</script>

<style>
.app {
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

.quiz-image {
  height: 300px;
  width: 300px;
  object-fit: contain;
}

.container {
  display: flex;
  height: 2em;
  width: 300px;
  padding: 1em;
  justify-content: space-around;
}
</style>

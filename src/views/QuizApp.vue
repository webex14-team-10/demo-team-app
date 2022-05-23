<template>
  <h1>Vue クイズ</h1>
  <div class="app">
    <h2>Q. {{ quizes[quizNum].title }}</h2>
    <img
      class="quiz-image"
      :src="quizes[quizNum].image"
      :alt="quizes[quizNum].title"
    />
    <div class="container">
      <button
        v-for="column in quizes[quizNum].choices"
        :key="column.text"
        @click="feedback(column)"
        :disabled="!choiceBtnDisplay"
      >
        {{ column.text }}
      </button>
    </div>
    <div>{{ quizFeedback }}</div>
    <button :disabled="!nextBtnDisplay" @click="nextQuiz">次の問題へ</button>
  </div>
  <div>正答数：{{ seitousu }}/{{ quizNum + 1 }}</div>
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
          title: "今何問目でしょう？",
          image: require("@/assets/Two.jpeg"),
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
          title: "城の名前は何でしょう？",
          image: require("@/assets/maruoka.png"),
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
      quizNum: 0,
      nextBtnDisplay: false,
      choiceBtnDisplay: true,
      seitousu: 0,
    }
  },
  methods: {
    feedback: function (choice) {
      this.quizFeedback = choice.feedback
      this.nextBtnDisplay = true
      this.choiceBtnDisplay = false
      if (choice.authenticity) {
        this.seitousu += 1
      }
    },
    nextQuiz: function () {
      this.quizFeedback = ""
      this.nextBtnDisplay = false
      this.quizNum += 1
      this.quizNum %= 3
      if (this.quizNum === 0) {
        this.seitousu = 0
      }
      this.choiceBtnDisplay = true
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

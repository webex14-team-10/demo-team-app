<template>
  <h1>Vue クイズ</h1>
  <div class="app">
    <h2>Q. {{ question }}</h2>
    <img
      class="quiz-image"
      src="https://zukan.pokemon.co.jp/zukan-api/up/images/index/30c6fa4c78bc3c2eb741e6a0282a086c.png"
      alt="クイズタイトル"
    />
    <div class="container">
      <button v-for="answer in answers" :key="answer">
        {{ answer }}
      </button>
    </div>
    <div>{{ "答え" }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      quiz: [
        {
          question: "このポケモンの名前はなんでしょう？",
          answers: ["ジラーチ", "セレビィ", "シェイミ"],
          answer: 1,
        },
      ],
    }
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

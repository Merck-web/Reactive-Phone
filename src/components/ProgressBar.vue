<template>
  <div class="progress_wrapper d-flex items-center justify-start wrap">
    <div
        v-for="index in count"
        :key="index"
        :class="calculateFilledCells(allQuestion, checkedQuestion, count, index)"
        class="progress_block"
    />
  </div>
</template>

<script>
export default {
  name: 'ProgressBar',
  props: {
    allQuestion: {
      type: Number,
      default: 0
    },
    checkedQuestion: {
      type: Number,
      default: 0
    },
    count: {
      type: Number,
      default: 0
    },
  },
  methods: {
    calculateFilledCells(totalQuestions, answeredQuestions, totalCells, index){
      // Вычисляем, сколько вопросов в среднем приходится на одну ячейку
      const questionsPerCell = totalQuestions / totalCells;

      // Определяем, сколько ячеек будет заполнено полностью
      const filledCells = Math.min(Math.floor(answeredQuestions / questionsPerCell), totalCells);

      //Если индекс элемента меньше или равен количества заполненных ячеек высчитанных сверху, то добавляем класс
      if (index <= filledCells){
        return 'filledCells'
      }
    }
  }
}
</script>

<style scoped>

</style>
<template>
  <q-card
     @click="onClickedRow"
  >
    <slot></slot>
  </q-card>

  <!-- <button @click="listeners['custom-event']('message from child')">      @click="$emit('row-click', arguments)" -->

</template>

<script>
export default {
  name: 'DayListItem',
  data () {
    return {
      // activeTooltip1: false
    }
  },
  methods: {
    onClickedRow: function (e) {
      this.$emit('row-click', this)
    }
  }
}

</script>

<style scoped>
  .q-card {
    color: black;
  }

  .q-card:hover {
    cursor: pointer;
    background-color: rgb(234, 236, 250);
  }
</style>

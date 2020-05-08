<template>
  <q-card
    v-on:click="$emit('row-click')"
  >
    <slot></slot>
  </q-card>

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
    xxx: function (e) {
      // console.log(e)
      // this.$emit('rowClick', this)
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

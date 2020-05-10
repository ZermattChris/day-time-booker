<template>
  <q-card
    @click="onClickedRow"
    v-bind:class="[{ 'disabled': disabledRow }]"
  >
    <div class="itemRow row disable-text-selection">
      <div class="itemTime col-3 center">
        <slot name="time"></slot>
      </div>
      <div class="col center" style="letter-spacing:0.005em;">
        <q-chip
          class="itemMessage q-my-none ellipsis"
          color="white"
          size="0.9em"
        >
          <slot name="message"></slot>
        </q-chip>
      </div>
    </div>
  </q-card>
</template>

<script>
export default {
  name: 'DayListItem',
  data () {
    return {
      disabledRow: this.disableRow,
      selected: false
    }
  },
  props: [
    'disableRow'
  ],
  methods: {
    onClickedRow: function (e) {
      // console.log(!this.disabledRow)
      if (!this.disabledRow) this.$emit('row-click', this) // only fire event if this item is enabled!
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

<template>
    <q-item
     clickable
      @click="onClickedRow"
      class="disable-text-selection"
      v-bind:class="[{ 'disabled': disabledRow, 'hiliteRow': selected }]"
    >
      <q-item-section style="display:inline; text-align:center;" class="itemTime col-3">
        <slot name="time"></slot>
      </q-item-section>

      <q-item-section style="display:inline;">
        <slot name="message"></slot>
      </q-item-section>

    </q-item>
</template>

<script>
export default {
  name: 'DayListItem',
  data () {
    return {
      nrAvailable: this.avail,
      disabledRow: this.disableRow,
      selected: false,
      bookingNrPeople: this.bookedNr
    }
  },
  props: [
    'disableRow',
    'avail',
    'bookedNr'
  ],
  methods: {
    onClickedRow: function (e) {
      // console.log('clicked row')
      // console.log(!this.disabledRow)
      if (!this.disabledRow) {
        this.$emit('row-click', this) // only fire event if this item is enabled!
      }
    },
    select: function () {
      if (!this.disabledRow) {
        this.selected = true
        // hide .defaultMsg and show .bookedMsg
        // console.log(document.getElementById('defaultMsg-' + this.$attrs.id))
        document.getElementById('defaultMsg-' + this.$attrs.id).className = 'hidden'
        document.getElementById('bookedMsg-' + this.$attrs.id).className = ''
      }
    },
    deselect: function () {
      if (!this.disabledRow) {
        this.selected = false
        // show .defaultMsg and hide .bookedMsg
        document.getElementById('defaultMsg-' + this.$attrs.id).className = ''
        document.getElementById('bookedMsg-' + this.$attrs.id).className = 'hidden'
      }
    },
    reset: function (nrPeople) {
      // console.log('Nr: ' + nrPeople + ' -> Items Avail: ' + this.nrAvailable)
      if (nrPeople > this.nrAvailable) {
        this.selected = false
        this.disabledRow = true
        document.getElementById('defaultMsg-' + this.$attrs.id).className = ''
        document.getElementById('bookedMsg-' + this.$attrs.id).className = 'hidden'
      } else {
        this.disabledRow = false
      }
    }
  }
}

</script>

<style scoped>
  .q-item {
    min-height: unset;
    color: black;
  }
  .q-item:hover {
    cursor: pointer;
    background-color: rgb(255, 255, 255);
  }
  /* .q-item.disabled,
  .q-item.disabled > .q-chip {
    opacity: 1 !important;
    background-color: rgb(131, 131, 131) !important;
  } */
  .hiliteRow {
    font-weight: bolder;
  }
</style>

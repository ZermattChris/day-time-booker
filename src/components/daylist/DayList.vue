<template>

  <q-card id="DayList"
    class="text-white shadow-4"
    style=""
    dense
    bordered
  >
    <q-card-section id="DLHead"
      class="center text-shadow-2"
    >
      <div id="dlh-text-h4" style="font-weight:bold;">{{getDisplayDay}}</div>
      <div id="dlh-text-subtitle1" style="font-weight:bold;">{{getDisplaySubtitleDateStr}}</div>
    </q-card-section>

    <DayListItem
      class="item"
      :id = "timeSlot.id"
      v-for = "timeSlot in timeSlots"
      v-bind:key = "timeSlot.id"
      v-on:row-click = "onRowClick(timeSlot, $event)"
      :disable-row = "disableRow(timeSlot.avail)"
    >
      <template v-slot:time>
        <span style="color:maroon">*</span>
        {{getHours(timeSlot.time)}}<span class="itemMinutes">:{{getMins(timeSlot.time)}}</span>
      </template>
      <template v-slot:message>
        <q-icon class="icon" name="check_circle" color="gray" size="1.3em" style="padding-right:0.5em;"/>
        {{timeSlot.avail}} places available
      </template>

    </DayListItem>

    <p id="availabilityTimeMsg">&nbsp;</p>

  </q-card>

</template>

<script>
import DayListItem from 'components/daylist/DayListItem'
import { date } from 'quasar'
const qDate = date

export default {
  name: 'DayList',
  components: {
    DayListItem
  },
  props: [
    'timeSlots',
    'nrPeople',
    'displayDate'
  ],
  data () {
    return {
      displayDayStr: '',
      bookingNrPeople: this.nrPeople
    }
  },
  methods: {
    // Called when user clicks on the DayListItem sub component.
    // 'timeSlot' contains the clicked Row's data from the TimeSlots array.
    // el holds the Dom object that was clicked on (DayListItem)
    onRowClick: function (timeSlot, el) {
      // console.log(el)
      // console.log('Clicked on TimeSlot id: ' + timeSlot.id + '. Time: ' + timeSlot.time + '. Availability: ' + timeSlot.avail + ' Event: ' + el)
      this.$emit('row-selected', timeSlot.id, timeSlot.time, timeSlot.avail, el)
    },
    getHours: function (timeStr) {
      // split timeStr on the colon ':' or throw error.
      var items = timeStr.split(':')
      if (items.length !== 2) {
        throw new Error('Time String data (timeSlots array) must be in the format of "10:45". Was passed:' + timeStr)
      }
      return items[0]
    },
    getMins: function (timeStr) {
      // split timeStr on the colon ':' or throw error.
      var items = timeStr.split(':')
      if (items.length !== 2) {
        throw new Error('Time String data (timeSlots array) must be in the format of "10:45". Was passed:' + timeStr)
      }
      return items[1]
    },
    disableRow: function (rowAvailibility) {
      // calculate if there are enough spaces available in this row, and
      // if not, then disable the row for user selection, by passing in a
      // prop ':disable-row' and adding/removing a disabled attribute to the row item.
      // console.log(rowAvailibility, this.bookingNrPeople)
      if (rowAvailibility >= this.bookingNrPeople) return false
      return true
    }
  },
  computed: {
    // a computed getter
    getDisplayDay: function () {
      return qDate.formatDate(this.displayDate, 'ddd')
    },
    getDisplaySubtitleDateStr: function () {
      return '' + qDate.formatDate(this.displayDate, 'D MMMM, YYYY')
    }
  }
}

</script>

<style scoped>
#DayList {
  background: radial-gradient(circle, #bebebe 0%, #757575 100%);
  /* min-width: 200px; */
}
/* HeadBox - where the big date info is shown */
#DLHead {
  padding: 0.3em 1em;
}
  #dlh-text-h4 {
    font-size: 1.8em;
    padding: 0em;
  }
  #dlh-text-subtitle1 {
    font-size: 0.9em;
    padding: 0em ;
  }

/* This is each specific row box */
.item {
  background: rgb(240, 240, 240);
  font-size: 1.3em;

  border-radius: 0;

  padding-top: 0.2em;
  padding-left: 0.4em;
  padding-right: 0.4em;
  padding-bottom: 0.2em;

  border-bottom: 0.1em rgb(255, 255, 255) solid;
}

  div.item:last-child {
    border-bottom-width: 0px;
    padding-bottom: 0.3em;
  }
.itemTime {
    font-size: 1.2em;
  }
.itemMinutes {
  position: relative;
  top: -0.6em;
  left: 0.1em;
  font-size: 0.50em !important;
  color: rgb(46, 46, 46);
}
.center {
  text-align: center;
}
.text-shadow-2 {
  text-shadow: 0 0 2px black;
}

p#availabilityTimeMsg {
  text-align: center;
  font-size: 0.45em;
  margin: 0.2em 0 0 0;
  color: rgb(175, 175, 175);
}

</style>

<template>

  <q-card id="DayList"
    class="text-white shadow-4"
    style=""
    dense
    bordered
  >
    <q-card-section id="DLHead"
      class="q-pa-sm center text-shadow-2"
    >
      <div class="text-h4" style="font-weight:bold;">{{getDisplayDay}}</div>
      <div class="text-subtitle1" style="font-weight:bold;">{{getDisplaySubtitleDateStr}}</div>
    </q-card-section>

    <DayListItem
      class="item"
      :id = "timeSlot.id"
      v-for = "timeSlot in timeSlots"
      v-bind:key = "timeSlot.id"
      v-on:row-click = "rowClick(timeSlot)"
    >
      <!-- Pass row content into DayListItem's 'slot' -->
      <div class="row disable-text-selection">
        <div class="col-3 center time">
            <span style="color:maroon">*</span>
            {{getHours(timeSlot.time)}}<span class="minutes">:{{getMins(timeSlot.time)}}</span>
        </div>
        <!-- <div class="center col-1 col-md-auto">
          <q-icon class="icon q-px-md" name="check_circle" color="green" />
        </div> -->
        <div class="col center">
          <q-chip
            outline
            color="green-10"
            text-color="black"
            class="q-my-none ellipsis"
            size="lg"
          >
            <q-icon class="icon q-px-md" name="check_circle" color="green" />
            {{timeSlot.avail}} places available
          </q-chip>
        </div>
      </div>
    </DayListItem>

    <p id="availabilityTimeMsg">&nbsp;</p>

  </q-card>

</template>

<script>
import DayListItem from 'components/daylist/DayListItem'
import { date } from 'quasar'
const qDate = date

// import date from 'quasar'
// const { addToDate } = date

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
      selectedRow: null
    }
  },
  methods: {
    // Called when user clicks on the DayListItem sub component.
    // 'timeSlot' contains the clicked Row's data from the TimeSlots array.
    rowClick: function (timeSlot) {
      // console.log('Clicked on TimeSlot id: ' + timeSlot.id + '. Time: ' + timeSlot.time + '. Availability: ' + timeSlot.avail)
      this.$emit('row-selected', timeSlot.id, timeSlot.time, timeSlot.avail)
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
    }
  },
  computed: {
    // a computed getter
    getDisplayDay: function () {
      return qDate.formatDate(this.displayDate, 'ddd')
    },
    getDisplaySubtitleDateStr: function () {
      return '' + qDate.formatDate(this.displayDate, 'D MMMM, YYYY')
    },
    xxx: function () {
      return '' + qDate.formatDate(this.displayDate, 'D MMMM, YYYY')
    }
  }
}

</script>

<style scoped>
#DayList {
  background: radial-gradient(circle, #bebebe 0%, #170d30 100%);
  min-width: 260px;
}

/* This is each specific row box */
.item {
  background: rgb(240, 240, 240);
  font-size: 1.3em;

  padding-top: 12px;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 9px;

  border-bottom: 2px rgb(255, 255, 255) solid !important;
}
  .item:last-child {
    border-bottom-width: 0px !important;
  }
.time {
    font-size: 1.2em;
  }
.minutes {
  position: relative;
  top: -2px;
  left: 1px;
  font-size: 0.80em !important;
  color: rgb(46, 46, 46);
}
/* .description {
  color: maroon;
  text-overflow: clip;
} */
/* .icon {
  margin-right: 10px;
  font-size: 1.4em;
} */
/* .description {
  margin-left: 6px;
} */
.center {
  text-align: center;
}
.text-shadow-2 {
  text-shadow: 0 0 2px black;
}

p#availabilityTimeMsg {
  text-align: center;
  font-size: 0.85em;
  margin: 2px 0 0 0;
  color: rgb(175, 175, 175);
}

</style>

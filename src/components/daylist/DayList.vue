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

  padding-top: 0.4em;
  padding-left: 0.4em;
  padding-right: 0.4em;
  padding-bottom: 0.2em;

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
  top: -0.6em;
  left: 0.1em;
  font-size: 0.50em !important;
  color: rgb(46, 46, 46);
}
/* .description {
  color: maroon;
  text-overflow: clip;
} */
/* .icon {
} */
/* .description {
} */
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

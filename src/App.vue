<template>
  <div id="q-app" class="q-pa-md">

    <div class="q-pa-md">   <!-- A Scale slider to test the font-scaling -->
      <q-badge color="primary" class="q-pa-md" outline>
        Scale: <strong>{{ scaleValue }}</strong>
      </q-badge>

      <q-slider
        v-model="scaleValue"
        :min="1"
        :max="10"
        :step="1"
        snap
        markers
        label
        color="purple"
      />
    </div>

      <!-- Extra div to try and center on page -->
      <div style="background-color:yellow; padding:20px;">

        <!-- START: DayTimeBooker Component -->
        <div id="DTBContainer" :style="cssProps" style="margin: 0 auto;" >

          <!-- This is our custom component to mimic an EasyJet style of booking -->
          <!-- Flight Nr/Slots for a given day. -->
          <!-- v-bind:timeSlots Pass in an array of times to use when rendering each row. -->
          <!-- v-on: Listen for a rowSelected event and pass to our handler method here -->
          <DayList
            v-bind:nrPeople="bookingNrOfPeople"
            v-bind:displayDate="dateToDisplay"
            v-bind:timeSlots="timesArray"
            v-on:row-selected="onRowSelected"
          />

        </div>
        <!-- END : DayTimeBooker Component -->

      </div>

      <!-- Display a message with a * saying all times are Office Meeting Times. -->
      <p id="officeMeetingTimes">
        <span style="color:red">*</span> All times are meeting at the
        <a href="#">FlyZermatt office</a>.
      </p>

      <!-- Give a bunch of data from when the user selects a TimeSlot -->
      <div class="q-pa-xs shadow-4" style="background-color:lightgray; border-color:black;" bordered>
        <div class="q-pa-xs" style="color:maroon; font-weight:bold;">
          Info:
        </div>

        <div class="q-py-xs q-px-xs">Selected Slot: {{clickedId}}</div>
        <div class="q-py-xs q-px-xs">Selected Time: {{clickedTime}}</div>
        <div class="q-py-xs q-px-xs">Selected Availability in Slot: {{clickedAvail}}</div>

        <hr />

        <!-- How many people in this Booking? -->
        <div class="q-py-xs q-px-xs">
          User Group of: <strong>{{bookingNrOfPeople}}</strong>:&nbsp;
            <q-btn-dropdown color="primary" label="Nr of People" size="sm" id="peopleDropMenu">
              <q-list>
                <q-item
                  clickable
                  v-close-popup
                  highlight
                  v-for="n in maxPeoplePerBooking"
                  :key="`x.${n}`"
                  v:bind="bookingNrOfPeople"
                  @click="onNrPplClick"
                >
                  <q-item-section>
                    <q-item-label>{{n}}</q-item-label>
                  </q-item-section>
                </q-item>
                <q-item
                  :key="`x.${maxPeoplePerBooking + 1}`"
                  clickable v-close-popup
                  highlight
                  @click="onTooManyPeople"
                >
                  <q-item-section>
                    <q-item-label>{{maxPeoplePerBooking+1}}+ people</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-btn-dropdown>
        </div>

        <div class="q-py-xs q-px-xs">User selected Date: <strong>{{getUserDateStr}}</strong>
          <span style="width:3px;">&nbsp;</span>
          <q-btn
            color="blue"
            size="8px"
            icon="today"
            style="position:relative; top:-2px;"
            v-on:click="toggleCalendarPopup"
          >
            <q-popup-proxy @before-show="calUpdateProxy" transition-show="scale" transition-hide="scale">
              <q-date v-model="dateToDisplay">
                <div class="row items-center justify-end q-gutter-sm">
                  <q-btn label="Cancel" color="primary" flat v-close-popup />
                  <q-btn label="OK" color="primary" flat @click="calSave" v-close-popup />
                </div>
              </q-date>
            </q-popup-proxy>
          </q-btn>
        </div>
      </div>

      <!-- Popup dialog from Vuesax saying for more than MAX group size, do 2x separate bookings -->
      <!-- or contact us directly (message in notes field, call, etc.) -->
      <vs-dialog id="bigGroupDialog"
        blur
        width="450px"
        not-center
        v-model="exceededMaxNrPeopleDialogActive"
      >
        <template #header>
          <div class="center q-my-md">
            <q-icon class="icon" size="60px" name="info" color="primary" style=""/>
          </div>
          <h4 class="center q-mb-md q-mt-md" style="">
            Booking a <strong>Big</strong> Group
          </h4>
        </template>

        <div class="con-content">
          <p>If your group contains {{maxPeoplePerBooking+1}} or more people...</p>
          <p>
            ...you can either do 2 or more separate bookings, splitting your group
            up amongst available times, or send us a Booking message (later in this
            booking process) or just give us a ring: Tel +41 79 123 3456
          </p>
        </div>

        <template #footer>
          <div class="con-footer" style="text-align:center;">
            <q-btn id="btnClosePeopleDialog"
              class=""
              rounded
              color="primary"
              @click="exceededMaxNrPeopleDialogActive=false"
            >
              <strong class="q-px-lg">Ok</strong>
            </q-btn>
          </div>
        </template>
      </vs-dialog>

  </div>
</template>

<script >
import Vue from 'vue'

import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css'

Vue.use(Vuesax)

import { date } from 'quasar'
const qDate = date

import DayList from 'src/components/daylist/DayList.vue'

export default {
  name: 'App',
  components: {
    DayList
  },
  data () {
    return {
      bookingNrOfPeople: 2,
      maxPeoplePerBooking: 6,
      clickedId: 0,
      clickedTime: '-',
      clickedAvail: 0,
      scaleValue: 5,
      dateToDisplay: Date.now(), // default to current date/time
      dateToDisplayCalVisible: false,
      exceededMaxNrPeopleDialogActive: false,
      timesArray: [
        { id: 1, time: '08:30', avail: 6 },
        { id: 2, time: '10:15', avail: 1 },
        { id: 3, time: '11:45', avail: 0 },
        { id: 4, time: '13:15', avail: 4 },
        { id: 5, time: '14:45', avail: 2 },
        { id: 6, time: '16:15', avail: 5 },
        { id: 7, time: '17:00', avail: 6 },
        { id: 8, time: '19:00', avail: 2 }
      ]
    }
  },
  computed: {
    // a computed getter
    getUserDateStr: function () {
      return '' + qDate.formatDate(this.dateToDisplay, 'dddd, MMMM D, YYYY')
    },
    cssProps () {
      return {
        '--scale-font-size': (this.scaleValue * 0.1) + 0.7 + 'em',
        '--scale-box-width': (this.scaleValue * 30) + 250 + 'px'
      }
    }
  },
  methods: {
    onRowSelected (eId, eTime, eAvail) {
      // console.log('User clicked on TimeSlot: ' + eTime + ', ' + eAvail)
      this.clickedId = eId
      this.clickedTime = eTime
      this.clickedAvail = eAvail
    },
    toggleCalendarPopup: function () {
      // as cal data is bound, we don't need to handle anything here! Cool.
      // console.log('cal click')
      if (this.dateToDisplayCalVisible) {
        // Calendar is visible, close it.
      } else {
        // Show Calendar.

      }
      // this.dateToDisplayCalVisible = !this.dateToDisplayCalVisible
      // console.log('cal visible: ' + this.dateToDisplayCalVisible)
    },
    onNrPplClick (e) {
      this.bookingNrOfPeople = parseInt(e.target.textContent, 10) // Uses the string label to set nr of people.
    },
    onTooManyPeople (e) {
      this.bookingNrOfPeople = this.maxPeoplePerBooking
      this.exceededMaxNrPeopleDialogActive = !this.exceededMaxNrPeopleDialogActive
      console.log(e)
      // document.getElementById('btnClosePeopleDialog').focus() // not working. Grrr... Focus stays on pesky dropmenu, so hitting ENTER doesn't close dialog.
      e.preventDefault()
    },
    closeGroupDialog (e) {
      console.log('catching close dialog ev')
    },
    calUpdateProxy () {
      this.proxyDate = this.date
    },

    calSave () {
      this.date = this.proxyDate
    }
  }
}
</script>

<style>
  /* Set the Base font scaling size for the component here */
  #DTBContainer {
    font-size: var(--scale-font-size);
    width: var(--scale-box-width);
  }
  .disable-text-selection {
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* Internet Explorer */
    -khtml-user-select: none; /* KHTML browsers (e.g. Konqueror) */
    -webkit-user-select: none; /* Chrome, Safari, and Opera */
    -webkit-touch-callout: none; /* Disable Android and iOS callouts*/
  }
  #officeMeetingTimes {
    margin: 20px;
  }

</style>

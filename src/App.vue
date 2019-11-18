<template>
  <div id="app">
    <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.0/semantic.min.css">
    <div id="calendar-wrap">
      <iMarker
        ref="calendar"
        :weekText="theData.weekText.selected"
        :sundayBegin="theData.sundayBegin"
        :format="theData.format.selected"
        :markers="theData.markers"
        :disabledFutureDay="theData.disabledFutureDay"
        :hideOtherMonthDay="theData.hideOtherMonthDay"
        :hideOtherMonthMarker="theData.hideOtherMonthMarker"
        @month="handleDateChange($event)"
        @day="handleDateChange($event)"
      ></iMarker>
      <inputForm
        :date="currentDate"
        :event="event"
        :parentData="theData.markers"
        @interface="handleFcAfterDateBack"
      ></inputForm>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import SuiVue from 'semantic-ui-vue';
import iMarker from "./components/iMarker.vue";
import inputForm from "./components/inputForm.vue";


const date = new Date();
const year = date.getFullYear();
const month = date.getMonth() + 1;

export default {
  name: "app",
  components: {
    iMarker, inputForm
  },
  data() {
    return {
      theData: {
        disabledFutureDay: false,
        hideOtherMonthDay: false,
        hideOtherMonthMarker: false,
        sundayBegin: false,
        format: {
          selected: "YYYY-MM-DD",
          options: ["YYYY-MM-DD", "YYYY-M-D", "YY/MM/DD", "YY/M/D"]
        },
        weekText: {
          lang: "EN",
          selected: "",
          options: [
            {
              lang: "EN",
              value: ["M", "T", "W", "T", "F", "S", "S"]
            },
          ]
        },
        markers: []
      },
      currentDate: "",
      targetDate: "",
      event: {
        subject: '',
        location: '',
        markedAs: '',
        description: ''
      }
    };
  },
  watch: {
    currentDate(newVal, oldVal) {
      this.targetDate = oldVal;
    },
    "theData.format.selected"() {
      this.$refs.calendar.chooseTargetDate(this.currentDate);
    },
    "theData.weekText.lang"(val) {
      this.setWeekText(val);
    }
  },
  created() {
    this.setWeekText();
    this.getMarkers();
  },
  methods: {
    getMarkers(){
      const local = localStorage;
      var i = 0;
      for (var key in local) {
        if (key.match("[0-9]+")) {
          var event = JSON.parse(localStorage.getItem(key));
          this.theData.markers[i]= {
            date: key, className: event.markedAs
          }
          i++;
        }
      }
    },
    handleFcAfterDateBack (event) {
      this.theData.markers.push(event)
    },
    handleDateChange(date) {
      this.currentDate = date;
      var event = JSON.parse(localStorage.getItem(this.currentDate));
      if (event !== null){
        this.event = event;
      } else {
        this.event = {
          subject: '',
          location: '',
          markedAs: '',
          description: ''
        }
      }
    },
    setWeekText(lang = "EN") {
      this.theData.weekText.options.filter(item => {
        if (item.lang === lang) {
          this.theData.weekText.selected = item.value;
        }
      });
    },
    handleDateChange(date) {
      this.currentDate = date;
    },
    switchToPrevMonth() {
      this.$refs.calendar.switchToPrevMonth();
    },
    switchToNextMonth() {
      this.$refs.calendar.switchToNextMonth();
    },
    chooseTargetDate() {
      this.$refs.calendar.chooseTargetDate(this.targetDate);
    }
  }
};
Vue.use(SuiVue);
</script>

<style>
#calendar-wrap {
  padding-bottom: 30px;
  color: #2c3e50;
  background-color: #ffad87;
  height: 100vh;
  width: 100vw;
}
/* marker */
#calendar-wrap /deep/ #calendar {
  max-width: 414px;
  margin: auto;
}
/* marker style*/
#calendar-wrap .casual span {
  color: #fff !important;
  background-color: #7b1fa2;
}
#calendar-wrap .love span {
  color: #fff !important;
  background-color: #ff4081;
}

#calendar-wrap .meeting span {
  color: #fff !important;
  background-color: #448aff;
}

#calendar-wrap .urgent span {
  color: #fff !important;
  background-color: #FF0000;
}

#calendar-wrap /deep/ .weekend-day span {
  color: #536dfe;
}


/* copyright */
.copyright {
  padding: 30px 0;
  text-align: center;
  color: #ccc;
  font-size: 12px;
}
</style>

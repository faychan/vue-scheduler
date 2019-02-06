<template>
  <div id="app">
    <div id="calendar-wrap">
      <iMarker
        ref="calendar"
        :weekText="props.weekText.selected"
        :sundayBegin="props.sundayBegin"
        :format="props.format.selected"
        :markers="props.markers"
        :disabledFutureDay="props.disabledFutureDay"
        :hideOtherMonthDay="props.hideOtherMonthDay"
        :hideOtherMonthMarker="props.hideOtherMonthMarker"
        @month="handleDateChange($event)"
        @day="handleDateChange($event)"
      ></iMarker>
      <inputForm></inputForm>
    </div>
    <div class="copyright">Copyright © 2019 Allen AuYeung</div>
  </div>
</template>

<script>
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
      props: {
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
            {
              lang: "ZH",
              value: ["一", "二", "三", "四", "五", "六", "日"]
            }
          ]
        },
        markers: [
          {
            date: `${year}-${month}-09`,
            className: "meeting"
          },
          {
            date: `${year}-${month}-20`,
            className: "casual"
          },
          {
            date: `${year}-${month}-30`,
            className: "love"
          },
          {
            date: `${year}-${month + 1}-01`,
            className: "urgent"
          }
        ]
      },
      currentDate: "",
      targetDate: ""
    };
  },
  watch: {
    currentDate(newVal, oldVal) {
      this.targetDate = oldVal;
    },
    "props.format.selected"() {
      this.$refs.calendar.chooseTargetDate(this.currentDate);
    },
    "props.weekText.lang"(val) {
      this.setWeekText(val);
    }
  },
  created() {
    this.setWeekText();
  },
  methods: {
    handleDateChange(date) {
      this.currentDate = date;
    },
    setWeekText(lang = "EN") {
      this.props.weekText.options.filter(item => {
        if (item.lang === lang) {
          this.props.weekText.selected = item.value;
        }
      });
    },
    // handleDateChange(date) {
    //   this.currentDate = date;
    // },
    // switchToPrevMonth() {
    //   this.$refs.calendar.switchToPrevMonth();
    // },
    // switchToNextMonth() {
    //   this.$refs.calendar.switchToNextMonth();
    // },
    chooseTargetDate() {
      this.$refs.calendar.chooseTargetDate(this.targetDate);
    }
  }
};
</script>

<style>
#calendar-wrap {
  padding-bottom: 30px;
  color: #2c3e50;
  background-color: #232323;
  height: 100vh;
  width: 100vw;
}
/* marker */
#calendar-wrap /deep/ #calendar {
  max-width: 414px;
  margin: auto;
}
/* marker style*/
#calendar-wrap/deep/ .casual span {
  color: #fff;
  background-color: #7b1fa2;
}
#calendar-wrap /deep/ .love span {
  color: #fff;
  background-color: #ff4081;
}

#calendar-wrap /deep/ .meeting span {
  color: #fff;
  background-color: #448aff;
}

#calendar-wrap /deep/ .urgent span {
  color: #fff;
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

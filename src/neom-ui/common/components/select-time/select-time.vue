<template>
  <div class="select-time">
    <div class="n-flex n-flex-wrap">
      <div v-for="item in preSelectList" :key="item.type"
        class="select-time__item n-flex-ajcenter  n-border n-fs-26 n-mr-8 n-grey"
        :class="[{ 'active': selected === item.type }]" @click="handleChange(item.type)">
        {{ item.name }} <n-icon v-show="item.type === 'other'"
          :name="showCalendar ? 'icon-tubiao_danjiantou_xiangxia' : 'icon-right'" size="24" />
      </div>
    </div>
    <van-calendar v-model="showCalendar" ref="calendarRef" color="#1989FA" type="range" :min-date="minDate"
      :max-date="maxDate" :default-date="defaultDate_" :formatter="formatter" @confirm="calendarConfirm"></van-calendar>
  </div>
</template>

<script>
import dayjs from "dayjs";
import NIcon from "@/neom-ui/common/components/icon/icon.vue";



export default {
  name: 'SelectTime',
  components: { NIcon },
  props: {
    // normal 全部 昨天 前3天 前7天 其他时间
    mode: {
      type: String,
      default: 'normal',
    },
    defaultDate: {
      type: [Date, Array],
      default: () => [dayjs().subtract(7, 'days').toDate(), dayjs().toDate()],
    },
    // 前置选中的时间
    preSelected: {
      type: String,
      default: 'all',
    },
    preSelectList: {
      type: Array,
      default: () => [
        {
          name: '全部',
          type: 'all',
        },
        {
          name: '今天',
          type: 'today',
        },
        {
          name: '昨天',
          type: 'yesterday',
        },
        {
          name: '前3天',
          type: 'threeDaysAgo',
        },
        {
          name: '前7天',
          type: 'sevenDaysAgo',
        },
        {
          name: '其他时间',
          type: 'other',
        },
      ],
    },
    minDate: {
      type: Date,
      default: () => dayjs().subtract(1, 'years').toDate()
    },
    maxDate: {
      type: Date,
      default: () => dayjs().add(1, 'years').toDate()
    },

  },
  watch: {
    preSelected: {
      handler(val) {
        this.selected = val;
      },
      immediate: true,
    },
    showCalendar(val) {
      this.$nextTick(() => {
        val && this.$refs.calendarRef.scrollToDate(new Date());
      });
    },
  },
  computed: {
    defaultDate_() {
      return null;
    },
  },
  data() {
    return {
      showCalendar: false,
      selected: 'all',
      startDate: '',
      endDate: '',

    };
  },
  methods: {

    formatter(day) {
      const { date } = day;
      const isToday = dayjs(date).isSame(new Date(), 'day');
      if (isToday) {
        day.text = '今天';
        day.className = 'today';
      }
      return day;
    },
    handleChange(val) {
      this.selected = val;
      if (val === 'other') return this.showCalendar = true;
      let timeMap = {
        all: {
          startDate: '',
          endDate: '',
        },
        today: {
          startDate: dayjs().startOf('d'),
          endDate: dayjs().endOf('d'),
        },
        yesterday: {
          startDate: dayjs().subtract(1, 'days'),
          endDate: dayjs().subtract(1, 'days'),
        },
        threeDaysAgo: {
          startDate: dayjs().subtract(3, 'days'),
          endDate: dayjs(),
        },
        sevenDaysAgo: {
          startDate: dayjs().subtract(7, 'days'),
          endDate: dayjs(),
        },
      };
      const { startDate, endDate } = timeMap[val];
      this.startDate = this.handleFormat(startDate, 'startOf');
      this.endDate = this.handleFormat(endDate, 'endOf');
      this.handleConfirm();
    },
    calendarConfirm(timeArr) {
      let [startDate, endDate] = timeArr;
      this.startDate = this.handleFormat(startDate, 'startOf');
      this.endDate = this.handleFormat(endDate, 'endOf');
      this.showCalendar = false;
      this.handleConfirm();
    },
    handleFormat(date, type) {
      if (!date) return '';
      if (type === 'startOf') return dayjs(date).startOf('d').format('YYYY-MM-DD HH:mm:ss');
      if (type === 'endOf') return dayjs(date).endOf('d').format('YYYY-MM-DD HH:mm:ss');
      return dayjs(date).format('YYYY-MM-DD HH:mm:ss');
    },
    handleConfirm() {
      let dates = {
        startDate: this.startDate,
        endDate: this.endDate,
      };
      this.$emit('change', dates);
    }
  },

};
</script>

<style lang="scss" scoped>
.select-time {
  .select-time__item {
    border-radius: 16px;
    padding: 4px 8px;
    position: relative;

    &::after {
      border-radius: 32px;
      border-color: #dcdfe2;
    }

    &.active {
      color: #1989fa;

      &::after {
        border-color: #1989fa;
      }

      // /deep/ .neom-icon {
      //   margin-left: 2px;
      //   margin-top: -8px;
      //   &.icon-right{
      //     margin-top: 0px;
      //   }
      // }
    }
  }
}

/deep/ .van-calendar {
  .van-calendar__day {
    font-size: 28px;
  }

  .van-calendar__day.today {
    color: #1989fa;
    font-weight: bold;
  }

  .van-calendar__day--start,
  .van-calendar__day--end {
    &.today {
      color: #fff;
    }
  }
}
</style>
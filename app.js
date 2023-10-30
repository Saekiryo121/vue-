Vue.createApp({
  data: function () {
    return {
      totalBaito: 15,
        daysPerWeek: 5,
        shiftSize: 6,
        shiftSchedule: {},
        shiftGenerated: false
    }
  },
  methods: {
    generateShift() {
      this.shiftSchedule = {};
      for (let day = 1; day <= this.daysPerWeek; day++) {
        let shuffledBaito = this.shuffleBaito();
        this.shiftSchedule[day] = shuffledBaito.slice(0, this.shiftSize);
      }
      this.shiftGenerated = true;
    },
    shuffleBaito() {
      let baitoList = Array.from({ length: this.totalBaito }, (v, i) => `Baito ${i + 1}`);
      for (let i = baitoList.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [baitoList[i], baitoList[j]] = [baitoList[j], baitoList[i]];
      }
      return baitoList;
    }
  }

}).mount("#app");

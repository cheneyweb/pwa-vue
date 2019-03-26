<template>
  <div class="about">
    <Timeline/>
  </div>
</template>
<script>
import Timeline from "../components/Timeline";
export default {
  components: {
    Timeline
  },
  data() {
    return {
      statScrollNum: 0
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
    //console.log(this.$store.state.homeScroll);
    document.documentElement.scrollTop = this.$store.state.statScroll
  },
  methods: {
    handleScroll () {
      this.statScrollNum = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
    }
  },
  beforeDestroy() {
    //console.log('scroll='+this.homeScrollNum);
    this.$store.commit('setStatScroll',this.statScrollNum)
  }
};
</script>
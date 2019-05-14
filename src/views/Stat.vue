<template>
  <div>
    <v-subheader>文明进程</v-subheader>
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
      // statScrollNum: 0
    };
  },
  // mounted() {
  //   window.addEventListener("scroll", this.handleScroll);
  //   document.documentElement.scrollTop = this.$store.state.statScroll;
  // },
  methods: {
    // handleScroll() {
    //   this.statScrollNum =
    //     window.pageYOffset ||
    //     document.documentElement.scrollTop ||
    //     document.body.scrollTop;
    // }
  }
  // beforeDestroy() {
  //   this.$store.commit("setStatScroll", this.statScrollNum);
  // }
};
</script>
<template>
  <v-layout>
    <v-flex md4 xs4>
      <v-card>
        <v-img
          class="white--text"
          src="http://img.xserver.top/wenming_poor4.jpg"
          aspect-ratio="2.5"
          max-height="100"
        >
          <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs12 align-end flexbox>
                <!-- <font color="grey" class="headline ">穷:原罪</font> -->
              </v-flex>
            </v-layout>
          </v-container>
        </v-img>
        <v-card-title primary-title class="py-2">
          <div>
            <h3 class="headline">穷人</h3>
            <h4>
              人口
              <kbd>
                <animate-number ref="num0" from="0" to="1000" duration="2000" easing="easeInQuad"></animate-number>
              </kbd>
            </h4>
            <h4>
              资产
              <br>
              <kbd>
                <animate-number
                  ref="num1"
                  from="0"
                  to="100"
                  duration="2000"
                  easing="easeInQuad"
                  :formatter="formatterAnimateNumber"
                ></animate-number>
              </kbd>
            </h4>
          </div>
        </v-card-title>
        <v-card-text class="py-0">{{ poor }}</v-card-text>
      </v-card>
    </v-flex>
    <v-flex md4 xs4>
      <v-card>
        <v-img src="http://img.xserver.top/wenming_middle4.jpg" aspect-ratio="2.5" max-height="100"></v-img>
        <v-card-title primary-title class="py-2">
          <div>
            <h3 class="headline">中产</h3>
            <h4>
              人口
              <kbd>
                <animate-number ref="num2" from="0" to="100" duration="2000" easing="easeInQuad"></animate-number>
              </kbd>
            </h4>
            <h4>
              资产
              <br>
              <kbd>
                <animate-number
                  ref="num3"
                  from="0"
                  to="1000"
                  duration="2000"
                  easing="easeInQuad"
                  :formatter="formatterAnimateNumber"
                ></animate-number>
              </kbd>
            </h4>
          </div>
        </v-card-title>
        <v-card-text class="py-0">{{ middle }}</v-card-text>
      </v-card>
    </v-flex>
    <v-flex md4 xs4>
      <v-card>
        <v-img src="http://img.xserver.top/wenming_rich4.jpg" aspect-ratio="2.5" max-height="100"></v-img>
        <v-card-title primary-title class="py-2">
          <div>
            <h3 class="headline">富人</h3>
            <h4>
              人口
              <kbd>
                <animate-number ref="num4" from="0" to="10" duration="2000" easing="easeInQuad"></animate-number>
              </kbd>
            </h4>
            <h4>
              资产
              <br>
              <kbd>
                <animate-number
                  ref="num5"
                  from="0"
                  to="10000"
                  duration="2000"
                  easing="easeInQuad"
                  :formatter="formatterAnimateNumber"
                ></animate-number>
              </kbd>
            </h4>
          </div>
        </v-card-title>
        <v-card-text class="py-0">{{ rich }}</v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import NumberGrow from "../components/NumberGrow";
export default {
  components: {
    NumberGrow
  },
  created: function() {
    let self = this;
    setInterval(function() {
      for (let i = 0; i < 6; i++) {
        self.$refs[`num${i}`] ? self.$refs[`num${i}`].start() : null;
      }
    }, 30000);
  },
  methods: {
    formatterAnimateNumber: num => {
      const formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 2
      });
      return formatter.format(num);
    }
  },
  data: () => ({
    timeCountdown: 30,
    tip: `文明的进程会不可避免的产生贫富差距，消除贫富差距，并延续文明千万代，是你的终极目标`,
    rich: `处于社会金字塔顶，通过剥削下层阶级获取财富`,
    middle: `处于社会中层，由穷人晋升，同时有成为富人的潜力`,
    poor: `处于社会底层濒临淘汰，极少数可晋升中产`
  })
};
</script>


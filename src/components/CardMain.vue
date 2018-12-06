<template>
  <!-- <v-card class="red" flat> -->
  <v-layout wrap>
    <v-flex md6 xs12>
      <v-img
        class="white--text"
        src="http://img.xserver.top/wenming_desert.webp"
        aspect-ratio="7.5"
        max-height="100"
      >
        <v-container fill-height fluid>
          <v-layout fill-height>
            <v-flex xs12 align-end flexbox>
              <span class="title">文明的希望是不断繁衍迭代</span>
            </v-flex>
          </v-layout>
        </v-container>
      </v-img>
      <v-card-title primary-title pt-0>
        <v-layout wrap>
          <v-flex>
            <v-layout wrap column>
              <!-- <v-card  max-width="400" elevation-20> -->
              <v-flex xs12 pb-1>
                <code>文明法则</code>
                <span class="caption font-weight-bold">：三种阶层人类相互结合，父母阶层越高，后代阶层越高</span>
              </v-flex>
              <v-flex xs12 pb-1>
                <code>文明法则</code>
                <span class="caption font-weight-bold">：男女双方阶层差距越大，男女双方结合概率越低</span>
              </v-flex>
              <v-flex xs12 d-flex hidden-xs-only>
                <v-btn flat small outline color="green darken-4">穷人-1</v-btn>
                <v-btn small outline color="cyan darken-4">中产 0</v-btn>
                <v-btn small outline color="deep-orange darken-4">富人+1</v-btn>
              </v-flex>
              <v-flex xs12 d-flex hidden-xs-only>
                <v-btn flat small outline color="brown">富人+富人=+2</v-btn>
                <v-btn flat small outline color="brown">富人+中产=+1</v-btn>
                <v-btn flat small outline color="brown">中产+中产= 0</v-btn>
                <!-- <v-flex><code>富人+富人=+2</code></v-flex>
                <v-flex><code>富人+中产=+1</code></v-flex>
                <v-flex><code>中产+中产= 0</code></v-flex>-->
              </v-flex>
              <v-flex xs12 d-flex hidden-xs-only>
                <v-btn flat small outline color="brown">富人+穷人= 0</v-btn>
                <v-btn flat small outline color="brown">中产+穷人=-1</v-btn>
                <v-btn flat small outline color="brown">穷人+穷人=-2</v-btn>
                <!-- <v-flex><code>富人+穷人= 0</code></v-flex>
                <v-flex><code>中产+穷人=-1</code></v-flex>
                <v-flex><code>穷人+穷人=-2</code></v-flex>-->
              </v-flex>
              <!-- </v-card> -->
            </v-layout>
          </v-flex>
          <v-flex>
            <!-- <v-card>
                <h3 class="headline">地球文明</h3>
                <h4>已更迭人类代数：
                    <animate-number ref="num0" from="0" to="100" duration="2000" easing="easeInQuad"></animate-number>
                </h4>
                <h4>当代人类总人口：
                    <animate-number ref="num1" from="0" to="1110" duration="2000" easing="easeInQuad"></animate-number>
                </h4>
                <h4>当代人类总资产：$
                    <animate-number ref="num2" from="0" to="2000" duration="2000" easing="easeInQuad"></animate-number>
                </h4>
                <h4>下代人类更新时间剩余：{{timeCountdown}}(秒)</h4>
            </v-card>-->
            <!-- <v-flex slot="item" slot-scope="props"> -->
            <v-card>
              <v-card-title class="subheading font-weight-bold">地球文明</v-card-title>
              <v-divider></v-divider>
              <v-list dense>
                <v-list-tile>
                  <v-list-tile-content>已更迭人类代数</v-list-tile-content>
                  <v-list-tile-content class="align-end">
                    <kbd>
                      <animate-number
                        ref="num0"
                        from="0"
                        to="100"
                        duration="2000"
                        easing="easeInQuad"
                      ></animate-number>
                    </kbd>
                  </v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-content>当代人类总人口</v-list-tile-content>
                  <v-list-tile-content class="align-end">
                    <kbd>
                      <animate-number
                        ref="num1"
                        from="0"
                        to="1110"
                        duration="2000"
                        easing="easeInQuad"
                      ></animate-number>
                    </kbd>
                  </v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-content>当代人类总资产</v-list-tile-content>
                  <v-list-tile-content class="align-end">
                    <kbd>
                      <animate-number
                        ref="num2"
                        from="0"
                        to="2000"
                        duration="2000"
                        easing="easeInQuad"
                        :formatter="formatterAnimateNumber"
                      ></animate-number>
                    </kbd>
                  </v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-content>下代人类更新时间</v-list-tile-content>
                  <v-list-tile-content class="align-end font-weight-black">
                    <font color="#bd4147">{{timeCountdown}}(秒)</font>
                  </v-list-tile-content>
                </v-list-tile>
              </v-list>
            </v-card>
          </v-flex>
          <!-- </v-flex> -->
        </v-layout>
      </v-card-title>
      <v-card-text>
        <code>文明目标</code>
        <span class="caption font-weight-bold">：{{ tip }}</span>
      </v-card-text>
      <!-- <v-card-actions>
          <v-btn flat color="orange">人口问题</v-btn>
          <v-btn flat color="orange">贫富差距</v-btn>
      </v-card-actions>-->
    </v-flex>
    <v-flex md3 xs12>
      <canvas id="chart1" width="375" height="150"></canvas>
    </v-flex>
    <v-flex md3 hidden-xs-only>
      <canvas id="chart2" width="375" height="150"></canvas>
    </v-flex>
  </v-layout>
  <!-- </v-card> -->
</template>

<script>
// import NumberGrow from "./components/NumberGrow";
import F2 from "@antv/f2";
F2.track(false);

export default {
  components: {
    // NumberGrow
  },
  data: () => ({
    timeCountdown: 30,
    tip: `文明进程不可避免的产生贫富差距，消除贫富差距，并延续文明千万代，是你的终极目标`
  }),
  created: function() {
    let self = this;
    setInterval(function() {
      self.timeCountdown--;
      if (self.timeCountdown < 0) {
        for (let i = 0; i < 3; i++) {
          self.$refs[`num${i}`] ? self.$refs[`num${i}`].start() : null;
        }
        self.timeCountdown = 30;
      }
    }, 1000);
  },
  mounted: function() {
    this.chart1();
    this.chart2();
  },
  methods: {
    formatterAnimateNumber: num => {
      const formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 2
      });
      return formatter.format(num);
    },
    chart1: () => {
      // 自定义线图变更动画
      F2.Animate.registerAnimation("lineUpdate", (updateShape, animateCfg) => {
        var cacheShape = updateShape.get("cacheShape"); // 该动画 shape 的前一个状态
        var cacheAttrs = cacheShape.attrs; // 上一个 shape 属性
        var oldPoints = cacheAttrs.points; // 上一个状态的关键点
        var newPoints = updateShape.attr("points"); // 当前 shape 的关键点

        var oldLength = oldPoints.length;
        var newLength = newPoints.length;
        var deltaLength = newLength - oldLength;

        var lastPoint = newPoints[newPoints.length - 1];
        for (var i = 0; i < deltaLength; i++) {
          oldPoints.push(lastPoint);
        }

        updateShape.attr(cacheAttrs);
        updateShape.animate().to({
          attrs: {
            points: newPoints
          },
          duration: 800,
          easing: animateCfg.easing
        });
      });

      // 数据源，可以指定当前时间的偏移的秒
      let generation = -1;
      function getRecord() {
        return {
          time: `${++generation}代人类`,
          value: Math.floor(Math.random() * generation * 1000)
        };
      }
      var data = [];
      data.push(getRecord());
      data.push(getRecord());
      data.push(getRecord());

      // 实例化图表
      var chart = new F2.Chart({
        id: "chart1",
        padding: [5, "auto", 20, "auto"],
        pixelRatio: window.devicePixelRatio
      });
      chart.source(data, {
        time: {
          // type: "timeCat",
          // mask: "HH:mm:ss",
          range: [0, 1],
          tickCount: 5
        },
        value: {
          min: 1,
          tickCount: 5
        }
      });
      chart.tooltip({
        showCrosshairs: true,
        onShow: function onShow(ev) {
          var items = ev.items;
          items[0].name = items[0].title;
        }
      });
      chart
        .line()
        .position("time*value")
        .shape("smooth")
        .animate({
          update: {
            animation: "lineUpdate"
          }
        });
      chart.render();

      setInterval(() => {
        data.push(getRecord());
        if (data.length > 11) {
          data = data.slice(10);
        }
        chart.changeData(data);
        // chart.guide().tag({
        //   position: [data[data.length - 1].time, data[data.length - 1].value],
        //   content: data[data.length - 1].value,
        //   direct: "tl"
        // });
      }, 1000);
    },
    chart2: () => {
      var data = [
        {
          year: "穷人",
          sales: 1000
        },
        {
          year: "中产",
          sales: 100
        },
        {
          year: "富人",
          sales: 10
        }
      ];
      var chart = new F2.Chart({
        id: "chart2",
        padding: [5, "auto", 20, "auto"],
        pixelRatio: window.devicePixelRatio
      });
      chart.source(data, {
        sales: {
          tickCount: 5
        }
      });
      chart.tooltip({
        showItemMarker: false,
        onShow: function onShow(ev) {
          var items = ev.items;
          items[0].name = null;
          items[0].name = items[0].title;
          items[0].value = items[0].value;
        }
      });
      chart.interval().position("year*sales");
      chart.render();
    }
  }
};
</script>


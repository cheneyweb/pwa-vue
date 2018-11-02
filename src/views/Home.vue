<template>
  <!-- <v-container fluid grid-list-sm> -->
    <v-layout row wrap>
      <v-flex xs12>
        <v-card>
          <v-layout wrap>
            <v-flex >
              <v-img
              class="white--text"
                src="http://img.xserver.top/mycivilization_desert.png"
                aspect-ratio="3.75"
                max-height="100"
              >
                <v-container fill-height fluid>
                  <v-layout fill-height>
                    <v-flex xs12 align-end flexbox>
                      <span class="headline">文明的希望是不断繁衍迭代</span>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-img>
              <v-card-title primary-title pt-0>
                <v-layout column pb-2>
                  <v-card color="grey lighten-5" max-width="400" elevation-20>
                    <v-flex>
                    <code>文明法则1</code><span class="caption font-weight-bold">：三种阶层的人相互结合，下一代的阶层由上一代父母决定</span>
                    </v-flex>
                    <v-flex>
                    <code>文明法则2</code><span class="caption font-weight-bold">：阶层差距越大，男女双方结合概率越低</span>
                    </v-flex>
                    <v-flex>
                    <code>文明初始 </code>：<code>穷人-1</code>&nbsp&nbsp&nbsp&nbsp<code>中产 0</code>&nbsp&nbsp&nbsp&nbsp<code>富人+1</code>
                    </v-flex>
                    <v-flex>
                    <code>富人+富人=+2</code>&nbsp&nbsp&nbsp&nbsp<code>富人+中产=+1</code>&nbsp&nbsp&nbsp&nbsp<code>中产+中产= 0</code>
                    </v-flex>
                    <v-flex>
                    <code>富人+穷人= 0</code>&nbsp&nbsp&nbsp&nbsp<code>中产+穷人=-1</code>&nbsp&nbsp&nbsp&nbsp<code>穷人+穷人=-2</code>
                    </v-flex>
                  </v-card>
                </v-layout>
                <div>
                  <h3 class="headline">地球文明</h3>
                  <h4>已更迭人类代数：<animate-number ref="num0" from="0" to="100" duration="2000" easing="easeInQuad"></animate-number></h4>
                  <h4>当代人类总人口：<animate-number ref="num1" from="0" to="1110" duration="2000" easing="easeInQuad"></animate-number></h4>
                  <h4>当代人类总资产：$<animate-number ref="num2" from="0" to="2000" duration="2000" easing="easeInQuad"></animate-number></h4>
                  <h4>下一代人类到来时间剩余：{{timeCountdown}}（秒）</h4>
                </div>
              </v-card-title>
              <v-card-text>{{ tip }}</v-card-text>
              <!-- <v-card-actions>
                <v-btn flat color="orange">人口问题</v-btn>
                <v-btn flat color="orange">贫富差距</v-btn>
              </v-card-actions> -->
            </v-flex>
            <v-flex>
              <canvas id="chart1" width="300" height="300"></canvas>
            </v-flex>
            <v-flex hidden-xs-only>
              <canvas id="chart2" width="300" height="300"></canvas>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
      <v-flex d-flex xs12 sm4 child-flex>
        <v-card>
          <v-img
          class="white--text"
            src="http://img.xserver.top/mycivilization_poorman.jpg"
            aspect-ratio="3.75"
            max-height="100"
          >
          <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs12 align-end flexbox>
                <span class="headline">穷：原罪</span>
              </v-flex>
            </v-layout>
          </v-container>
          </v-img>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">穷人</h3>
              <h4>人口：<animate-number ref="num3" from="0" to="1000" duration="2000" easing="easeInQuad"></animate-number></h4>
              <h4>资产：$<animate-number ref="num4" from="0" to="0" duration="2000" easing="easeInQuad"></animate-number></h4>
            </div>
          </v-card-title>
          <v-card-text>{{ poor }}</v-card-text>
          <!-- <v-card-actions>
            <v-btn flat color="orange">人口问题</v-btn>
            <v-btn flat color="orange">贫富差距</v-btn>
          </v-card-actions> -->
        </v-card>
      </v-flex>
      <v-flex d-flex xs12 sm4 child-flex>
        <v-card>
          <v-img
            src="http://img.xserver.top/mycivilization_middle.jpg"
            aspect-ratio="3.75"
            max-height="100"
          ></v-img>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">中产</h3>
              <h4>人口：<animate-number ref="num5" from="0" to="100" duration="2000" easing="easeInQuad"></animate-number></h4>
              <h4>资产：$<animate-number ref="num6" from="0" to="1000" duration="2000" easing="easeInQuad"></animate-number></h4>
            </div>
          </v-card-title>
          <v-card-text>{{ middle }}</v-card-text>
          <!-- <v-card-actions>
            <v-btn flat color="orange">人口问题</v-btn>
            <v-btn flat color="orange">贫富差距</v-btn>
          </v-card-actions> -->
        </v-card>
      </v-flex>
      <v-flex d-flex xs12 sm4>
        <v-card>
          <v-img
            src="http://img.xserver.top/mycivilization_richman.jpeg"
            aspect-ratio="3.75"
            max-height="100"
          ></v-img>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">富人</h3>
              <h4>人口：<animate-number ref="num7" from="0" to="10" duration="2000" easing="easeInQuad"></animate-number></h4>
              <h4>资产：$<animate-number ref="num8" from="0" to="1000" duration="2000" easing="easeInQuad"></animate-number></h4>
            </div>
          </v-card-title>
          <v-card-text>{{ rich }}</v-card-text>
          <!-- <v-card-actions>
            <v-btn flat color="orange">人口问题</v-btn>
            <v-btn flat color="orange">贫富差距</v-btn>
          </v-card-actions> -->
        </v-card>
      </v-flex>
      <v-flex d-flex xs12 order-xs5>
        <v-layout column>
          <v-flex d-flex>
            <v-card  dark tile flat>
              <SliderTax/>
            </v-card>
          </v-flex>
          <v-flex d-flex>
            <v-card dark tile flat>
              <SelectExpend/>
            </v-card>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  <!-- </v-container> -->
</template>

<script>
import SliderTax from "../components/SliderTax";
import SelectExpend from "../components/SelectExpend";
import NumberGrow from "../components/NumberGrow";
import F2 from "@antv/f2";
F2.track(false);

export default {
  components: {
    SliderTax,
    SelectExpend,
    NumberGrow
  },
  data: () => ({
    timeCountdown: 30,
    tip: `文明的进程会不可避免的产生贫富差距，消除贫富差距，并延续文明千万代，是你的终极目标`,
    rich: `处于社会金字塔顶，通过剥削下层阶级获取财富`,
    middle: `处于中层，由穷人晋升`,
    poor: `处于社会底层，濒临淘汰`
  }),
  created: function() {
    let self = this;
    setInterval(function() {
      self.timeCountdown--;
      if (self.timeCountdown < 0) {
        for (let i = 0; i < 9; i++) {
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
    chart1: () => {
      // 自定义线图变更动画
      F2.Animate.registerAnimation("lineUpdate", function(
        updateShape,
        animateCfg
      ) {
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

      var data = [];
      // 添加数据，模拟数据，可以指定当前时间的偏移的秒
      function getRecord(offset) {
        offset = offset || 0;
        return {
          time: new Date().getTime() + offset * 1000,
          value: Math.random() + 10
        };
      }

      data.push(getRecord(-2));
      data.push(getRecord(-1));
      data.push(getRecord());

      var chart = new F2.Chart({
        id: "chart1",
        pixelRatio: window.devicePixelRatio
      });

      var defs = {
        time: {
          type: "timeCat",
          mask: "HH:mm:ss",
          range: [0, 1]
        },
        value: {
          tickCount: 5,
          min: 8
        }
      };
      chart.source(data, defs);
      chart.axis("time", {
        label: function label(text, index, total) {
          var textCfg = {
            text: ""
          };
          if (index === 0) {
            textCfg.textAlign = "left";
            textCfg.text = text;
          } else if (index === total - 1) {
            textCfg.textAlign = "right";
            textCfg.text = text;
          }
          return textCfg;
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

      setInterval(function() {
        data.push(getRecord());
        chart.changeData(data);
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

<style>
</style>

<template>
  <v-layout row>
    <v-flex xs12>
      <v-list subheader three-line>
        <v-subheader>外星文明</v-subheader>
        <v-list-tile v-for="item in items" :key="item.title" avatar ripple @click="diplomacy(item)">
          <v-list-tile-avatar>
            <img :src="item.avatar">
          </v-list-tile-avatar>

          <v-list-tile-content @click="dialog = true">
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            <v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>
          </v-list-tile-content>

          <v-list-tile-action>
            <v-list-tile-action-text>{{ item.action }}</v-list-tile-action-text>
            <v-btn icon>
              <v-icon :color="item.active ? 'teal' : 'grey'">chat_bubble</v-icon>
            </v-btn>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>
    </v-flex>
    <v-dialog v-model="dialog" full-width>
      <v-card>
        <v-card-title class="headline">{{item.title}}</v-card-title>
        <v-card-text>文明描述</v-card-text>
        <v-card-text>
          <canvas id="mountNode" width="300" height="300"></canvas>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="success" @click="dialog = false">示好</v-btn>
          <v-btn color="error" @click="dialog = false">侵略</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
import F2 from "@antv/f2";
export default {
  /* data: () => ({
    items: [
      {
        active: true,
        title: "火星文明",
        subtitle: "人口1000",
        avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
        action: "15 min"
      },
      {
        active: true,
        title: "赛亚人文明",
        subtitle: "人口1000",
        avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
        action: "15 min"
      },
      {
        title: "三体文明",
        subtitle: "人口1000",
        avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
        action: "15 min"
      },
      {
        title: "阿凡达文明",
        subtitle: "人口1000",
        avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
        action: "15 min"
      }
    ],
    item: {},
    dialog: false
  }), */
  created() {
    //console.log(document);
  },
  data() {
    return {
      items: [
        {
          active: true,
          title: "火星文明",
          subtitle: "人口1000",
          avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
          action: "15 min"
        },
        {
          active: true,
          title: "赛亚人文明",
          subtitle: "人口1000",
          avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
          action: "15 min"
        },
        {
          title: "三体文明",
          subtitle: "人口1000",
          avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
          action: "15 min"
        },
        {
          title: "三体文明",
          subtitle: "人口1000",
          avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
          action: "15 min"
        },
        {
          title: "三体文明",
          subtitle: "人口1000",
          avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
          action: "15 min"
        },
        {
          title: "三体文明",
          subtitle: "人口1000",
          avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
          action: "15 min"
        },
        {
          title: "三体文明",
          subtitle: "人口1000",
          avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
          action: "15 min"
        },
        {
          title: "三体文明",
          subtitle: "人口1000",
          avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
          action: "15 min"
        },
        {
          title: "三体文明",
          subtitle: "人口1000",
          avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
          action: "15 min"
        },
        {
          title: "三体文明",
          subtitle: "人口1000",
          avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
          action: "15 min"
        },
        {
          title: "阿凡达文明",
          subtitle: "人口1000",
          avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
          action: "15 min"
        }
      ],
      item: {},
      dialog: false,
      exploreScrollNum: 0
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    document.documentElement.scrollTop = this.$store.state.exploreScroll;
  },
  methods: {
    diplomacy(item) {
      this.chart1();
      this.item = item;
    },
    chart1() {
      var data = [
        {
          item: "军事实力",
          score: 90,
          img:
            "https://gw.alipayobjects.com/zos/rmsportal/txPVjdlnLANzxmwZcchu.png"
        },
        {
          item: "财务状况",
          score: 80,
          img:
            "https://gw.alipayobjects.com/zos/rmsportal/UMqgEqZdEcPhRekNGAdc.png"
        },
        {
          item: "人口数量",
          score: 70,
          img:
            "https://gw.alipayobjects.com/zos/rmsportal/eBXrRufzPGlOisYGZwnv.png"
        },
        {
          item: "外交数量",
          score: 75,
          img:
            "https://gw.alipayobjects.com/zos/rmsportal/zqqWMLXrFwnqhySFHVjZ.png"
        },
        {
          item: "贫富差距",
          score: 60,
          img:
            "https://gw.alipayobjects.com/zos/rmsportal/DxcRoUZXpYOzAWKrlRvv.png"
        }
      ];
      var chart = new F2.Chart({
        id: "mountNode",
        pixelRatio: window.devicePixelRatio
      });

      chart.coord("polar", {
        radius: 0.8
      });
      chart.source(data, {
        score: {
          min: 0,
          max: 100
        }
      });
      chart.tooltip(false);
      chart.axis("item", {
        grid: {
          lineDash: null,
          top: true
        },
        label: null
      });
      chart.axis("score", {
        label: null,
        grid: function grid(text) {
          if (text === "100") {
            return {
              lineDash: null
            };
          }
          return {
            lineWidth: 0
          };
        },
        line: null
      });

      chart
        .area()
        .position("item*score")
        .style({
          fill: "r(0.45,0.55,0.15) 0:#fff 0.35:#DEF5F5 0.75:#C8EEEF 1:#A8E5E6",
          fillOpacity: 100
        });

      data.map(function(obj) {
        var offsetY =
          obj.item === "风险偏好" || obj.item === "风险承受能力" ? -10 : 0;
        chart.guide().html({
          position: [obj.item, 130],
          html:
            '<div style="width: 80px;height: 24px;text-align: center">' +
            '<img src="' +
            obj.img +
            '" style="width: 24px;height: 24px;" />' +
            '<div style="color: #808080;transform:scale(0.8, 0.8);font-size:12px;">' +
            obj.item +
            "</div>" +
            "</div></div>",
          offsetY: offsetY
        });
      });
      chart.render();
    },
    handleScroll() {
      this.exploreScrollNum =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
    }
  },
  beforeDestroy() {
    this.$store.commit("setExploreScroll", this.exploreScrollNum);
  }
};
</script>

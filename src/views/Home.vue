<template>
  <v-container fluid grid-list-sm>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card>
          <v-img
          class="white--text"
            src="http://img.xserver.top/mycivilization_desert.jpg"
            aspect-ratio="3.75"
            max-height="100"
          >
          <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs12 align-end flexbox>
                <span class="headline">文明的希望是不断的繁衍迭代</span>
              </v-flex>
            </v-layout>
          </v-container>
          </v-img>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">地球文明</h3>
              <h4>总人口：1110</h4>
            </div>
          </v-card-title>
          <v-card-text>{{ tip }}</v-card-text>
          <v-card-actions>
            <v-btn flat color="orange">人口问题</v-btn>
            <v-btn flat color="orange">贫富差距</v-btn>
          </v-card-actions>
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
              <h4>人口：1000</h4>
            </div>
          </v-card-title>
          <v-card-text>{{ poor }}</v-card-text>
          <v-card-actions>
            <v-btn flat color="orange">人口问题</v-btn>
            <v-btn flat color="orange">贫富差距</v-btn>
          </v-card-actions>
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
              <h4>人口：100</h4>
            </div>
          </v-card-title>
          <v-card-text>{{ middle }}</v-card-text>
          <v-card-actions>
            <v-btn flat color="orange">人口问题</v-btn>
            <v-btn flat color="orange">贫富差距</v-btn>
          </v-card-actions>
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
              <h4>人口：10</h4>
            </div>
          </v-card-title>
          <v-card-text>{{ rich }}</v-card-text>
          <v-card-actions>
            <v-btn flat color="orange">详情</v-btn>
            <v-btn flat color="orange">贫富差距</v-btn>
          </v-card-actions>
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
  </v-container>
</template>

<script>
import SliderTax from "../components/SliderTax";
import SelectExpend from "../components/SelectExpend";
export default {
  components: {
    SliderTax,
    SelectExpend
  },
  data: () => ({
    tip:`文明的进程会不可避免的产生贫富差距，消除贫富差距，并延续文明千万代，是你的终极目标`,
    rich: `处于社会金字塔顶，通过剥削下层阶级获取财富`,
    middle: `处于中层，由穷人晋升`,
    poor: `处于社会底层`
  })
};
</script>

<style>
</style>

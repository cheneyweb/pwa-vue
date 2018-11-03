<template>
    <v-layout>
        <v-flex md4 xs4>
            <v-card>
                <v-img class="white--text" src="../img/poor.jpg" aspect-ratio="1" max-height="100">
                    <v-container fill-height fluid>
                        <v-layout fill-height>
                            <v-flex xs12 align-end flexbox>
                                <font color="grey" class="headline ">穷:原罪</font>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-img>
                <v-card-title primary-title>
                    <div>
                        <h3 class="headline mb-0">穷人</h3>
                        <h4>人口：
                            <animate-number ref="num3" from="0" to="1000" duration="2000" easing="easeInQuad"></animate-number>
                        </h4>
                        <h4>资产：$
                            <animate-number ref="num4" from="0" to="0" duration="2000" easing="easeInQuad"></animate-number>
                        </h4>
                    </div>
                </v-card-title>
                <v-card-text>{{ poor }}</v-card-text>
                <!-- <v-card-actions>
                            <v-btn flat color="orange">人口问题</v-btn>
                            <v-btn flat color="orange">贫富差距</v-btn>
                          </v-card-actions> -->
            </v-card>
        </v-flex>
        <v-flex md4 xs4>
            <v-card>
                <v-img src="../img/middle.jpg" aspect-ratio="1" max-height="100"></v-img>
                <v-card-title primary-title>
                    <div>
                        <h3 class="headline mb-0">中产</h3>
                        <h4>人口：
                            <animate-number ref="num5" from="0" to="100" duration="2000" easing="easeInQuad"></animate-number>
                        </h4>
                        <h4>资产：$
                            <animate-number ref="num6" from="0" to="1000" duration="2000" easing="easeInQuad"></animate-number>
                        </h4>
                    </div>
                </v-card-title>
                <v-card-text>{{ middle }}</v-card-text>
                <!-- <v-card-actions>
                            <v-btn flat color="orange">人口问题</v-btn>
                            <v-btn flat color="orange">贫富差距</v-btn>
                          </v-card-actions> -->
            </v-card>
        </v-flex>
        <v-flex md4 xs4>
            <v-card>
                <v-img src="../img/rich.jpg" aspect-ratio="1" max-height="100"></v-img>
                <v-card-title primary-title>
                    <div>
                        <h3 class="headline mb-0">富人</h3>
                        <h4>人口：
                            <animate-number ref="num7" from="0" to="10" duration="2000" easing="easeInQuad"></animate-number>
                        </h4>
                        <h4>资产：$
                            <animate-number ref="num8" from="0" to="1000" duration="2000" easing="easeInQuad"></animate-number>
                        </h4>
                    </div>
                </v-card-title>
                <v-card-text>{{ rich }}</v-card-text>
                <!-- <v-card-actions>
                            <v-btn flat color="orange">人口问题</v-btn>
                            <v-btn flat color="orange">贫富差距</v-btn>
                          </v-card-actions> -->
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
        data: () => ({
            timeCountdown: 30,
            tip: `文明的进程会不可避免的产生贫富差距，消除贫富差距，并延续文明千万代，是你的终极目标`,
            rich: `处于社会金字塔顶，通过剥削下层阶级获取财富`,
            middle: `处于社会中层，由穷人晋升，同时有成为富人的潜力`,
            poor: `处于社会底层濒临淘汰，极少数可晋升中产`
        })
    };
</script>


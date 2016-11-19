import React from 'react';
import  style from './css/KGraph.css';
import echarts from 'echarts';


export default class KGraph extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: this.props.graphid
        }
    }

    getData() {
        return [
            ['2013/1/24', 2320.26, 2320.26, 2287.3, 2362.94],
            ['2013/1/25', 2300, 2291.3, 2288.26, 2308.38],
            ['2013/1/28', 2295.35, 2346.5, 2295.35, 2346.92],
            ['2013/1/29', 2347.22, 2358.98, 2337.35, 2363.8],
            ['2013/1/30', 2360.75, 2382.48, 2347.89, 2383.76],
            ['2013/1/31', 2383.43, 2385.42, 2371.23, 2391.82],
            ['2013/2/1', 2377.41, 2419.02, 2369.57, 2421.15],
            ['2013/2/4', 2425.92, 2428.15, 2417.58, 2440.38],
            ['2013/2/5', 2411, 2433.13, 2403.3, 2437.42],
            ['2013/2/6', 2432.68, 2434.48, 2427.7, 2441.73],
            ['2013/2/7', 2430.69, 2418.53, 2394.22, 2433.89],
            ['2013/2/8', 2416.62, 2432.4, 2414.4, 2443.03],
            ['2013/2/18', 2441.91, 2421.56, 2415.43, 2444.8],
            ['2013/2/19', 2420.26, 2382.91, 2373.53, 2427.07],
            ['2013/2/20', 2383.49, 2397.18, 2370.61, 2397.94],
            ['2013/2/21', 2378.82, 2325.95, 2309.17, 2378.82],
            ['2013/2/22', 2322.94, 2314.16, 2308.76, 2330.88],
            ['2013/2/25', 2320.62, 2325.82, 2315.01, 2338.78],
            ['2013/2/26', 2313.74, 2293.34, 2289.89, 2340.71],
            ['2013/2/27', 2297.77, 2313.22, 2292.03, 2324.63],
            ['2013/2/28', 2322.32, 2365.59, 2308.92, 2366.16],
            ['2013/3/1', 2364.54, 2359.51, 2330.86, 2369.65],
            ['2013/3/4', 2332.08, 2273.4, 2259.25, 2333.54],
            ['2013/3/5', 2274.81, 2326.31, 2270.1, 2328.14],
            ['2013/3/6', 2333.61, 2347.18, 2321.6, 2351.44],
            ['2013/3/7', 2340.44, 2324.29, 2304.27, 2352.02],
            ['2013/3/8', 2326.42, 2318.61, 2314.59, 2333.67],
            ['2013/3/11', 2314.68, 2310.59, 2296.58, 2320.96],
            ['2013/3/12', 2309.16, 2286.6, 2264.83, 2333.29],
            ['2013/3/13', 2282.17, 2263.97, 2253.25, 2286.33],
        ];
    }


    splitData(rawData) {
        var categoryData = [];
        var values = []
        for (var i = 0; i < rawData.length; i++) {
            categoryData.push(rawData[i].splice(0, 1)[0]);
            var xinarr = [];
            for (var j = 0; j < rawData[i].length; j++) {
                xinarr.push(Math.round(rawData[i][j]));
            }
            values.push(xinarr);
        }
        return {
            categoryData: categoryData,
            values: values
        };
    }


    drawCharts() {
        var myChart = echarts.init(document.getElementById(this.state.id));
        var data0 = this.splitData(this.getData());

        var option = {
            backgroundColor: '#0F1626',
            textStyle: {
                color: 'white',
                fontStyle: 'normal',
                fontFamily: '微软雅黑'
            },
            title: {
                show: false,
            },
            legend: {
                show: false,
            },
            toolbox: {
                show: false,
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'line',
                    lineStyle: {
                        color:'#00BFFF'
                    }
                },
                formatter: function (params) {
                    var res = params[0].name;
                    res += '<br/>  开盘 : ' + params[0].value[0] + '  最高 : ' + params[0].value[3];
                    res += '<br/>  收盘 : ' + params[0].value[1] + '  最低 : ' + params[0].value[2];
                    return res;
                }
            },
            grid: {
                left: '12%',
                right: '0%',
                bottom: '15%',
                borderColor: 'white',
                show: true,
            },

            xAxis: [
                {
                    type: 'category',
                    boundaryGap: true,
                    axisTick: {onGap: false},
                    splitLine: {show: false},
                    data: data0.categoryData,
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: 'white'
                        }
                    },
                    axisTick: {
                        show: false,
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    scale: true,
                    boundaryGap: [0.01, 0.01],
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: 'white'
                        }
                    },
                    axisTick: {
                        show: false,
                    }
                }
            ],
            series: [
                {
                    name: '上证指数',
                    type: 'k',
                    data: data0.values,
                    itemStyle: {
                        normal: {
                            color0: 'green'
                        }
                    },
                }
            ]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
    }


    componentDidMount() {
        this.drawCharts();
    }

    /*注意return后面的js有自动加；的习惯*/
    render() {
        return <div>
            <div id={this.state.id} className={style.graph}></div>
        </div>;
    }
}




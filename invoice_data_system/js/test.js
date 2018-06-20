var avalue={
    backgroundColor: 'transparent',

        /*    tooltip: {
                confine:true,
                backgroundColor: 'transparent',
                show:false,
                trigger:'item',
                position:'top',
                formatter:function (params) {
                    console.log(params);
                    var tiphtml=`<div style="width: 70px;height: 50px;text-align: center;background-color:transparent;border-radius: 50%;border:2px solid #fa385a"><span id='pop' style="color: #fa385a !important;text-align: center;font-weight: bold"><p>${params.data.name}</p><p>${params.data.value}</p></span></div><style>#pop:after{width:0;height:0;left:50%;content: '';bottom: -6px;margin-left: -8px;position: absolute;border:8px solid transparent;border-bottom: 8px solid #e74c3c}</style>`;
                 //   return (params.name+'and'+params.value);
                    return tiphtml;
                }

            },*/
        geo: {
    map: 'china',

        label: {
        emphasis: {
            show: false,

        },
        normal:{
            show:false
        }
    },
    nameMap:{
        '甘肃':'yesyes!'
    },
    itemStyle: {
        normal: {
            borderColor: '#17f4f7',//省份的边框颜色
                areaColor: 'transparent',//地图背景颜色
                label: {
                show: false
            }
        }
    },
    scaleLimit: {
        min: 1,
            max: 1
    }
},


    series: [
        {     //0

            silent: false,
            name: '',
            type: 'lines',

            zlevel: 1,
            effect: {
                show: true,
                period: 6,
                trailLength: 0.7,
                symbol: 'pin',         //飞行 node
                symbolSize: 5,
                color:'#fff'

            },
            lineStyle: {                  //路线
                normal: {
                    color: '#a6c84c',
                    width: 0,
                    curveness: 0.2
                }
            },
            label: {
                normal: {
                    show: false,
                    position: 'right',
                    formatter: '{b}'
                }
            },
            data: [{

                coords: [cpFrom,cpTo]
            }, {

                coords: [cpFrom_1, cpTo_1]
            }]
        },
        {            //1

            silent: false,
            name: '',
            type: 'lines',

            zlevel: 2,
            effect: {
                show: true,
                period: 6,
                trailLength: 0,
                symbol: 'pin',         //飞行 node
                symbolSize: 5,
                color:'#fff'

            },
            lineStyle: {                  //路线
                normal: {
                    color: '#a6c84c',
                    width: 2,
                    opacity:0,
                    curveness: 0.2
                }
            },
            label: {
                normal: {
                    show: false,
                    position: 'right',
                    formatter: '{b}'
                }
            },
            data: [{

                coords: [cpFrom,cpTo]
            }, {

                coords: [cpFrom_1, cpTo_1]
            }]
        },
        /* {
             name: 'tip',
             type: 'map',
             mapType: 'china',

             itemStyle: {
                 normal: {
                     borderColor: '#17f4f7',//省份的边框颜色
                     areaColor: 'transparent',//地图背景颜色
                     label: {
                         show: false
                     }
                 },
                 emphasis: {
                     areaColor:'#17f4f7',
                     label: {
                         show: false
                     }
                 }
             },
             data: [
                 {
                     name: '北京',
                     value: Math.round(Math.random() * 1000)+'元',
                 },
                 {
                     name: '河北',
                     value: Math.round(Math.random() * 1000)+'元',

                 },
                 {
                     name: '天津',
                     value: Math.round(Math.random() * 1000)+'元',

                 },
                 {
                     name: '黑龙江',
                     value: Math.round(Math.random() * 1000)+'元',

                 }

             ]
         },
         */
        {                 //2
            name: '',
            type: 'effectScatter',
            coordinateSystem: 'geo',
            label:{
                normal:{
                    formatter:'{a}',
                    show:false,
                    position:'top'
                }
            },
            zlevel: 3,
            rippleEffect: {
                brushType: 'stroke'
            },
            symbol:'circle',
            symbolSize: 3,
            itemStyle: {
                normal: {
                    color: 'pink'
                }
            },
            silent: false,
            data:[{value: cpFrom},{value: cpTo},{value: cpFrom_1},{value: cpTo_1}],



        },
        {            //3

            name: 'Top 5',
            type: 'effectScatter',
            coordinateSystem: 'geo',
            data: [{value: [106,38],amount:8880}],
            symbolSize: 15,

            showEffectOn: 'render',
            rippleEffect: {
                brushType: 'stroke'
            },
            hoverAnimation: true,
            normal:{
                lineHeight:4
            },
            label: {

                normal: {
                    fontWeight:'500',

                    fontSize:14,
                    formatter: function (params) {
                        return `{term| ${params.data.value} }`+'{fregment2|64800元}'
                    },
                    position: 'top',
                    show: true,
                    lineHeight:35,
                    padding:1,
                    rich: {
                        term: {
                            fontSize: 15,
                            fontWeight:'lighter',
                            backgroundColor:'rgb(199,86,83)',
                            color: '#fff',
                            borderRadius: 18,
                        },

                        fregment2: {
                            backgroundColor: '#339911',
                            color: '#fff',
                            borderRadius: 18,
                            padding: 5
                        }
                    }
                }
            },
            itemStyle: {
                normal: {
                    color: '#f4e925',
                    shadowBlur: 10,
                    shadowColor: '#333'
                }
            },
            zlevel: 2
        }


    ]

}
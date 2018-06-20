(function () {
    var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';
    var cpFrom=[0,0];
    var cpTo=[0,0];
    var cpFrom_1=[0,0];
    var cpTo_1=[0,0];

var loctionReset ={
    "23":{"name":"黑龙江","loc1X":"125.13","loc1Y":"48.39","loc2X":"131.13","loc2Y":"45.78"},
    "22":{"name":"吉林","loc1X":"123.3","loc1Y":"45.16","loc2X":"127.19","loc2Y":"42.28"},
    "21":{"name":"辽宁","loc1X":"120.35","loc1Y":"41.29","loc2X":"124.22","loc2Y":"41.95"},
    "15":{"name":"内蒙古","loc1X":"105.05","loc1Y":"40.68","loc2X":"120.13","loc2Y":"43.53"},
    "11":{"name":"北京","loc1X":"114.69","loc1Y":"41.18","loc2X":"118.66","loc2Y":"40.34"},
    "12":{"name":"天津","loc1X":"116.08","loc1Y":"39.89","loc2X":"117.48","loc2Y":"39.09"},
    "13":{"name":"石家庄","loc1X":"114.02","loc1Y":"36.76","loc2X":"116.89","loc2Y":"38.28"},
    "14":{"name":"山西","loc1X":"113.43","loc1Y":"39.83","loc2X":"111.45","loc2Y":"35.74"},
    "64":{"name":"宁夏","loc1X":"106.39","loc1Y":"38.45","loc2X":"106.1","loc2Y":"36.34"},
    "62":{"name":"甘肃","loc1X":"102.64","loc1Y":"38.27","loc2X":"105.21","loc2Y":"34.1"},
    "63":{"name":"青海","loc1X":"91.16","loc1Y":"34.83","loc2X":"101.65","loc2Y":"36.87"},
    "61":{"name":"陕西","loc1X":"108.89","loc1Y":"33.05","loc2X":"109.77","loc2Y":"38.16"},
    "65":{"name":"新疆","loc1X":"92.63","loc1Y":"43.25","loc2X":"77.91","loc2Y":"37.93"},
    "37":{"name":"山东","loc1X":"116.03","loc1Y":"35.8","loc2X":"120.66","loc2Y":"36.93"},
    "41":{"name":"河南","loc1X":"112.06","loc1Y":"33.18","loc2X":"114.7","loc2Y":"34.77"},
    "34":{"name":"安徽","loc1X":"117.06","loc1Y":"33.74","loc2X":"116.55","loc2Y":"30.8"},
    "51":{"name":"四川","loc1X":"101.09","loc1Y":"28.74","loc2X":"106.83","loc2Y":"32.18"},
    "54":{"name":"西藏","loc1X":"81.59","loc1Y":"33.67","loc2X":"96.6","loc2Y":"29.39"},
    "42":{"name":"湖北","loc1X":"110.51","loc1Y":"32.37","loc2X":"114.41","loc2Y":"30.92"},
    "32":{"name":"江苏","loc1X":"118.97","loc1Y":"34.23","loc2X":"120.23","loc2Y":"31.81"},
    "31":{"name":"上海","loc1X":"121.48","loc1Y":"31.37","loc2X":"121.55","loc2Y":"30.8"},
    "33":{"name":"浙江","loc1X":"120.23","loc1Y":"30.35","loc2X":"120.3","loc2Y":"27.96"},
    "36":{"name":"江西","loc1X":"115.88","loc1Y":"28.68","loc2X":"115.22","loc2Y":"25.72"},
    "35":{"name":"福建","loc1X":"116.55","loc1Y":"24.71","loc2X":"119.27","loc2Y":"26.97"},
    "43":{"name":"湖南","loc1X":"110.07","loc1Y":"26.91","loc2X":"113.09","loc2Y":"28.42"},
    "52":{"name":"贵州","loc1X":"105.07","loc1Y":"25.92","loc2X":"108.53","loc2Y":"27.83"},
    "50":{"name":"重庆","loc1X":"105.8","loc1Y":"29.71","loc2X":"108.53","loc2Y":"29.52"},
    "53":{"name":"云南","loc1X":"103.89","loc1Y":"25.92","loc2X":"100.72","loc2Y":"23.23"},
    "45":{"name":"广西","loc1X":"110.22","loc1Y":"25.52","loc2X":"108.3","loc2Y":"22.33"},
    "44":{"name":"广东","loc1X":"113.82","loc1Y":"24.04","loc2X":"110.95","loc2Y":"21.86"},
    "46":{"name":"海南","loc1X":"110.29","loc1Y":"20.03","loc2X":"109.7","loc2Y":"18.56"},
    "81":{"name":"香港","loc1X":"114.12","loc1Y":"22.37","loc2X":"114.12","loc2Y":"22.37"},
    "71":{"name":"台湾","loc1X":"121.48","loc1Y":"24.98","loc2X":"120.52","loc2Y":"22.89"},
    "82":{"name":"澳门","loc1X":"113.53","loc1Y":"21.89","loc2X":"113.53","loc2Y":"21.89"}
};
    var _provinceMap1 = {
        "11": {
            "name": "北京",
            "location": [116.405285, 39.904989]
        },
        "12": {
            "name": "天津",
            "location": [117.190182, 39.125596]
        },
        "13": {
            "name": "河北",
            "location": [114.502461, 38.045474]
        },
        "14": {
            "name": "山西",
            "location": [112.549248, 37.857014]
        },
        "15": {
            "name": "内蒙",
            "location": ""
        },
        "21": {
            "name": "辽宁",
            "location": [123.429096, 41.796767]
        },
        "22": {
            "name": "吉林",
            "location": [125.3245, 43.886841]
        },
        "23": {
            "name": "黑龙江",
            "location": [126.642464, 45.756967]
        },
        "31": {
            "name": "上海",
            "location": [121.472644, 31.231706]
        },
        "32": {
            "name": "江苏",
            "location": [118.767413, 32.041544]
        },
        "33": {
            "name": "浙江",
            "location": [120.153576, 30.287459]
        },
        "34": {
            "name": "安徽",
            "location": [117.283042, 31.86119]
        },
        "35": {
            "name": "福建",
            "location": [119.306239, 26.075302]
        },
        "36": {
            "name": "江西",
            "location": [115.892151, 28.676493]
        },
        "37": {
            "name": "山东",
            "location": [117.000923, 36.675807]
        },
        "41": {
            "name": "河南",
            "location": [113.665412, 34.757975]
        },
        "42": {
            "name": "湖北",
            "location": [114.298572, 30.584355]
        },
        "43": {
            "name": "湖南",
            "location": [112.982279, 28.19409]
        },
        "44": {
            "name": "广东",
            "location": [113.280637, 23.125178]
        },
        "45": {
            "name": "广西",
            "location": [108.320004, 22.82402]
        },
        "46": {
            "name": "海南",
            "location": [110.33119, 20.031971]
        },
        "50": {
            "name": "重庆",
            "location": [106.504962, 29.533155]
        },
        "51": {
            "name": "四川",
            "location": [104.065735, 30.659462]
        },
        "52": {
            "name": "贵州",
            "location": [106.713478, 26.578343]
        },
        "53": {
            "name": "云南",
            "location": [102.712251, 25.040609]
        },
        "54": {
            "name": "西藏",
            "location": [91.132212, 29.660361]
        },
        "61": {
            "name": "陕西",
            "location": [108.948024, 34.263161]
        },
        "62": {
            "name": "甘肃",
            "location": [103.823557, 36.058039]
        },
        "63": {
            "name": "青海",
            "location": [101.778916, 36.623178]
        },
        "64": {
            "name": "宁夏",
            "location": [106.278179, 38.46637]
        },
        "65": {
            "name": "新疆",
            "location": [87.617733, 43.792818]
        },
        "71": {
            "name": "台湾",
            "location": [121.509062, 25.044332]
        },
        "81": {
            "name": "香港",
            "location": [114.173355, 22.320048]
        },
        "82": {
            "name": "澳门",
            "location": [113.54909, 22.198951]
        }
    };

    var _baseUrl = "/fpexample";

    var mock = true;

    var _api = {
        fpstream_in: _baseUrl + "/fpstream_in",
        fpstream_out: _baseUrl + "/fpstream_out",
    }

    if (mock) {
        _api = {
            fpstream_in: "./js/fpstream_in.json",
            fpstream_out: "./js/fpstream_out.json"
        }
    }

    // 洗牌算法
    function fisher_yates_shuffle(arr) {
        for (var i = 0; i < arr.length - 1; i++) {
            const j = i + Math.floor(Math.random() * (arr.length - i));
            [arr[i], arr[j]] = [arr[j], arr[i]]
        }
        return arr
    }

    // 封装ajax
    function ajax(url) {
        return new Promise(function (resolve, reject) {
            $.ajax({
                url: url,
                method: "GET",
                dataType: "json"
            }).then(function (data) {
                resolve(data.result);
                if (data.error && data.error.code == 1) {
                    resolve(data.result);
                } else {
                    var msg = data.error.message || "系统错误";
                    alert(msg);
                    reject(msg);
                }
            }, function () {
                var msg = "网络异常";
                console.error(msg);
                reject(msg);
            })
        });
    }



    var page = {
        init: function () {
            this.getData();





        },
        initMap() {
            var _this = this;
            this.mapChart = echarts.init(document.getElementById('map-wrap'));
            $.get('./js/china.json', function (chinaJson) {
                echarts.registerMap('china', chinaJson); // 注册地图
                var option = {
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

                        itemStyle: {
                            normal: {
                                borderColor: '#17f4f7',//省份的边框颜色
                                borderWidth:1,
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
                        {

                            silent: false,
                            name: '',
                            type: 'lines',

                            zlevel: 1,
                            effect: {
                                show: true,
                                period: 5,
                                trailLength: 0.6,
                                symbol: 'pin',         //飞行 node
                                symbolSize: 9,
                                color:'#fff'

                            },
                            lineStyle: {                  //路线
                                normal: {
                                    color: '#FFF',
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
                        {

                            silent: false,
                            name: '',
                            type: 'lines',

                            zlevel: 2,
                            effect: {

                                show: true,
                                period: 5,
                                trailLength: 0,
                                symbol: 'pin',         //飞行 node
                                symbolSize: 10,
                                color:'#FFF'

                            },

                            lineStyle: {                  //路线
                                normal: {

                                    color: '#FFF',
                                    width: 3,
                                    opacity:0.5,
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

                        {
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
                            symbolSize: 8,
                            itemStyle: {
                                normal: {
                                    color: '#FFF'
                                }
                            },
                            silent: false,
                            data:[{value: cpFrom},{value: cpTo},{value: cpFrom_1},{value: cpTo_1}],



                        },
                        {

                            name: 'Top 5',
                            type: 'effectScatter',
                            coordinateSystem: 'geo',
                            data: _this.getTop5Area_Map(),
                            symbolSize: 12,

                            showEffectOn: 'render',
                            rippleEffect: {
                                brushType: 'stroke'
                            },
                            hoverAnimation: true,
                            normal:{

                            },
                            label: {

                                normal: {
                                    fontWeight:'500',

                                    fontSize:14,
                                    formatter: function (params) {

                                        return `{term| ${params.data.name} }`+`{fregment2|${params.data.amount}元}`
                                    },
                                    position: 'top',
                                    show: true,
                                    lineHeight:30,
                                    padding:2,
                                    rich: {
                                        term: {
                                            fontSize: 15,
                                            fontWeight:'lighter',
                                            backgroundColor:'rgb(199,86,83)',
                                            color: '#fff',
                                            borderRadius: 18,
                                            padding: 1
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

                };
                _this.mapChart.setOption(option);
                var count=0;
setInterval(function(){
    _this.mapChart.dispatchAction({
        type: 'downplay',
        seriesIndex: 3,
   //     dataIndex: 1
    });
    _this.mapChart.dispatchAction({
        type: 'highlight',
        seriesIndex: 3,
        dataIndex: count%5,

    });
    count++;
                },1000);


             //       var count=0;
               /*     setInterval(function () {
                        _this.mapChart.dispatchAction({
                           type:'downplay',
                           seriesIndex:1
                        });
                        _this.mapChart.dispatchAction({
                            type: 'highlight',
                            seriesIndex: 1,
                            dataIndex: count%4
                        });

                        _this.mapChart.dispatchAction({
                            type: 'showTip',
                            seriesIndex: 1,
                            dataIndex: count%4
                        });
                        count++;
                    },1000);
*/






            //    _this.setcp();
                console.log('进项'+cpFrom+'|'+cpTo);
                console.log('出项'+cpFrom_1+'|'+cpTo_1);

            });

        },
        _getIncomingInvoice: function () {
            return ajax.call(_api, _api.fpstream_in);
        },
        _getSalesInvoice: function () {
            return ajax(_api.fpstream_out);
        },
        getData: function () {
            var _this = this;
            Promise.all([this._getIncomingInvoice(), this._getSalesInvoice()]).then(function (results) {
                _this.incomingData = results[0];
                _this.salesData = results[1];
                console.log("进项数据", results[0]);
                console.log("销项数据", results[1]);
                console.log(cpFrom+','+cpTo);
                _this.showUpdateTime(); // 显示更新时间
                _this.showAmount(); // 总开票金额
                _this.getTop5(); // 当日地区排名
                _this.getTop5_company();    //瞬时发票金额排名前TOP5
               // _this.getTop5Area_Map();
                _this.getTop1InstantIncomingArea();   //瞬时最大进项地区
                _this.getTop1InstantsalesArea();   //瞬时最大销项地区
                _this.getTop1InstantIncomingAmount();  //瞬时最大进项金额
                _this.getInstantsalesAmount();         //瞬时最大销项金额
                _this.showAreaPercent(); // 当日地区占比
                _this.showNo1(); // 排名第一省份
                _this.paintLine();  // 地图画线

                _this.animefx();     //对获取的数据启用平移动画（放在这里是保证在异步promise状态更新后执行）
            })
        },
        showUpdateTime: function () {
            var date_str1 = this.incomingData.date_str,
                date_str2 = this.salesData.date_str;
            var lastTime = date_str1 - date_str2 > 0 ? date_str1 : date_str2;
            var $elem = $(".J_update-time");
            $elem.html(this._parseTime(lastTime));
        },
        _parseTime(time) {
            var hour = time.substr(-6, 2);
            var minute = time.substr(-4, 2);
            var second = time.substr(-2, 2);
            return hour + ": " + minute + ": " + second;
        },
        showAmount: function () {
            var amount1 = this.incomingData.totalAmount,
                amount2 = this.salesData.totalAmount;
            var $incomingElem = $(".J_incoming-amount"),
                $salesElem = $(".J_sales-amount");
            $incomingElem.html(" " + parseFloat(amount1.toFixed(2)).toLocaleString());
            $salesElem.html("  " + parseFloat(amount2.toFixed(2)).toLocaleString());
            var totalAmount = (parseFloat(amount1) + parseFloat(amount2)).toFixed(2);
            this.totalAmount = totalAmount;
            totalAmount = Number(totalAmount).toLocaleString();
            var len = $(".number-area .item").length;
            var arr = totalAmount.split("");
            if (arr.length <= len) {
                var fillNum = len - arr.length;
                if (fillNum > 0) {
                    for (var i = 0; i < fillNum; i++) {
                        arr.unshift("");
                    }
                }
                var result = arr.map(function (item) {
                    return '<div class="item"><div class="inner">' + item + '</div></div>'
                }).join("");
                var $numArea = $(".J_number-area");
                $numArea.html(result);
            }
        },
        getTop1InstantIncomingArea:function(){
            var arrlist=this.incomingData.zone_rank.split('#');
            var arr=[];

            for(var key in _provinceMap1){
                if(key==arrlist[0]){
                    arr.push(`
                    <div class="hd">
                            <h3>实时最大进项地区</h3>
                    </div>
                    <div class="bd">
                            <div class="area fl">
                                ${_provinceMap1[key].name}
                            </div>
                            <div class="num-price fr">
                                <p>${arrlist[2].split('|')[0]}张</p>
                                <p style="margin-top: 5px;">￥${(arrlist[1]/10000).toFixed(2)}万元</p>
                            </div>
                        </div>
                    `);
                    $('#Top1InstantIncomingArea').html(arr.join(""));
                }
            }
        },
        getTop1InstantsalesArea:function(){
            var arrlist=this.salesData.zone_rank.split('#');
            var arr=[];

            for(var key in _provinceMap1){
                if(key==arrlist[0]){
                    arr.push(`
                    <div class="hd">
                            <h3>实时最大销项地区</h3>
                        </div>
                        <div class="bd">
                            <div class="area fl">
                                ${_provinceMap1[key].name}
                            </div>
                            <div class="num-price fr">
                                <p>${arrlist[2].split('|')[0]}张</p>
                                <p style="margin-top: 5px;">￥${(arrlist[1]/10000).toFixed(2)}万元</p>
                            </div>
                        </div>
                    `);

                    $('#Top1InstantsalesArea').html(arr.join(""));
                }
            }
        },
        getTop1InstantIncomingAmount:function(){
            var max=this.incomingData.streamMax[0];
            if(max.strKaiPiaoFang.length<=3){
                var temp=max.strKaiPiaoFang.split('');
                temp[1]='✱';
                max.strKaiPiaoFang=temp.join('');
            }
            if(max.strKaiPiaoFang.length==4){
                var temp=max.strKaiPiaoFang.split('');
                temp[1]='✱';temp[2]='✱';
                max.strKaiPiaoFang=temp.join('');
            }
            var arr=[];
            arr.push(`                    
                   <div class="price">￥ ${new Number(max.dblAmount)}元</div>
                   <div class="company" >${max.strKaiPiaoFang}</div>   
                    `);
            $("#Top1InstantIncomingAmount").html(arr.join(""));

        },
        getInstantsalesAmount:function(){

            var max=this.salesData.streamMax[0];
            if(max.strKaiPiaoFang.length<=3){
                var temp=max.strKaiPiaoFang.split('');
                temp[1]='✱';
                max.strKaiPiaoFang=temp.join('');
            }
            if(max.strKaiPiaoFang.length==4){
                var temp=max.strKaiPiaoFang.split('');
                temp[1]='✱';temp[2]='✱';
                max.strKaiPiaoFang=temp.join('');
            }
            var arr=[];
            arr.push(`                    
                   <div class="price">￥ ${new Number(max.dblAmount)}元</div>
                   <div class="company">${max.strKaiPiaoFang}</div>   
                    `);
            $("#Top1InstantSalesAmount").html(arr.join(""));
        },
        getTop5Area_Map:function(){
            function sortNumber(b,a)
            {
                return a.amount - b.amount
            }
            var totalStr=this.incomingData.zone_rank+'|'+this.salesData.zone_rank;
            var arrayTemp=totalStr.split('|');
            var arraySort=[];

            for(var key in arrayTemp) {
               arraySort.push({zone:arrayTemp[key].split('#')[0],amount:parseInt(arrayTemp[key].split('#')[1])});
            }
            for(var key in arraySort){
                for(var key_1 in arraySort){

                    if(key==key_1){
                        continue;
                    }
                    if(arraySort[key].zone==arraySort[key_1].zone){

                        arraySort[key].amount+=arraySort[key_1].amount;
                        arraySort.splice(key_1,1);
                    }
                }
            }
            for(var key in arraySort){
                if(_provinceMap1[arraySort[key].zone]){
                    arraySort[key].name=_provinceMap1[arraySort[key].zone].name;
                    arraySort[key].value=_provinceMap1[arraySort[key].zone].location;

                }
            }
            arraySort.sort(sortNumber);
            console.log(arraySort);
            var arrayFinal=arraySort.slice(0,5);
            console.log(arrayFinal);
            return arrayFinal;


        },
        getTop5_company:function(){


            var temp=this.incomingData.streamMax.concat(this.salesData.streamMax);
         //   console.log(temp);
           function up(y,x){
                return x.dblAmount-y.dblAmount;
           }
         temp.sort(up);
            var top5list=temp.slice(0,5);
          //  console.log(temp);
            var liArr=[];
            for(var i=0;i<top5list.length;i++){
                if(top5list[i].strKaiPiaoFang.length<=3){
                    var temp=top5list[i].strKaiPiaoFang.split('');
                    temp[1]='✱';
                    top5list[i].strKaiPiaoFang=temp.join('');
                }
                if(top5list[i].strKaiPiaoFang.length==4){
                    var temp=top5list[i].strKaiPiaoFang.split('');
                    temp[1]='✱';temp[2]='✱';
                    top5list[i].strKaiPiaoFang=temp.join('');
                }
            liArr.push(`
           <li>
           <div class="text">${top5list[i].strKaiPiaoFang}</div>
           <span class="top">${top5list[i].dblAmount}元</span>
           </li>
            `);
            }
            $('#top5_company').html(liArr.join(""));

        },
        getTop5: function () {
            var zonelist1 = this.incomingData.zonelist;
            var zonelist2 = this.salesData.zonelist;
            var zoneObj = {},
                zonelist = [];
            for (var i = 0; i < zonelist1.length; i++) {
                var zone = zonelist1[i],
                    code = zone.zonecode;

                if (!_provinceMap1[code]) {
                    continue;
                }
                zoneObj[code] = {
                    code: code,
                    city: _provinceMap1[code].name,
                    number: zone.number,
                    amount: zone.amount,
                }
            }
            for (var i = 0; i < zonelist2.length; i++) {
                var zone = zonelist2[i],
                    code = zone.zonecode;
                if (!_provinceMap1[code]) {
                    continue;
                }
                if (!zoneObj[code]) {
                    zoneObj[code] = {
                        city: _provinceMap1[code].name,
                        number: zone.number,
                        amount: zone.amount,
                    }
                } else {
                    zoneObj[code].number = parseFloat(zoneObj[code].number) + parseFloat(zone.number);
                    zoneObj[code].amount = parseFloat(zoneObj[code].amount) + parseFloat(zone.amount);
                }
            }
            console.log(zoneObj);
            zonelist = Object.values(zoneObj).map(item => {

                item.percentNum = item.amount / this.totalAmount;
                item.percent = Math.round(item.amount / this.totalAmount * 100) + "%";
                return item;
            }).sort(function (o1, o2) {
                return o2.amount - o1.amount;
            });
            this.zonelist = zonelist;
            var top5 = zonelist.slice(0, 5);
            var liArr = [];
            for (var i = 0; i < top5.length; i++) {
                liArr.push(`
                    <li>
                        <span class="fl num">TOP${i + 1}</span>
                        <span class="fl area">${top5[i].city}</span>
                        <span class="fr">${top5[i].amount.toFixed(2)}元</span>
                    </li>
                `)
            }
            $(".J_top5").html(liArr.join(""));
        },
        showAreaPercent: function () {
            var top6 = this.zonelist.slice(0, 6);
            top6[0].width = 0.33;
            top6[0].isFirst = true;
            for (var i = 1; i < top6.length; i++) {
                if (top6[i].percent != top6[i - 1].percent) {
                    top6[i].width = top6[i - 1].width * 0.95;
                } else {
                    top6[i].width = top6[i - 1].width;
                }
            }
            var result = fisher_yates_shuffle(top6);
            var itemArr = [];
            result.forEach(function (item, index) {
                var width = Math.round(item.width * 100) + "%";
                var style = `width: ${width}; padding-bottom: ${width};`;
                if (item.isFirst) {
                    style += "color: #ffcc33;";
                }
                if (index != 0 && index != 3) {
                    style += "margin-left: -5%;";
                }
                if (index >= 3) {
                    style += "position: relative; top: -20px;"
                }
                itemArr.push(`
                    <div class="item" style="${style}">
                        <div class="inner">
                            <div>
                                <div class="num">${item.percent}</div>
                                <div class="area">${item.city}</div>
                            </div>
                        </div>
                    </div>
                `)
            })
            $(".J_area-percent").html(itemArr.join(""));
        },
        showNo1: function () {
            var result = this.zonelist.slice(0, 1)[0];
            console.log(result);
            var html = `
                <div class="province">${result.city}省</div> 
                <div class="item">
                    <p class="price">￥${(result.amount/1000000000).toFixed(2)}亿元</p>
                    <p class="text">开票金额</p>
                </div>   
                <div class="item">
                    <p class="price">${(result.number/10000).toFixed(2)}万</p>
                    <p class="text">开票数量</p>
                </div>   
            `;
            $(".J_no1-province").html(html);
        },
        getcp:function(code,isshooter,isJinXiang){     //获取坐标

            for(var key in _provinceMap1){
                if(key==code){

                            if(isshooter){
                                if(isJinXiang) {
                                    Object.assign(cpFrom,_provinceMap1[key].location);

                                }
                                else {
                                    Object.assign(cpFrom_1,_provinceMap1[key].location);

                                }
                                break;
                            }
                            else{
                                if(isJinXiang) {
                                    Object.assign(cpTo,_provinceMap1[key].location);

                                }
                                else {
                                    Object.assign(cpTo_1,_provinceMap1[key].location);

                                }
                                break;
                            }


                }
            }
        },
        paintLine: function () {
            var shooter=this.incomingData.streamMax[0].strtKaiPiaoFangZoneCode;
            var shooter_1=this.salesData.streamMax[0].strtKaiPiaoFangZoneCode;
            var catcher=this.incomingData.streamMax[0].strShouPiaoFangZoneCode;
            var catcher_1=this.salesData.streamMax[0].strShouPiaoFangZoneCode;
            this.getcp(shooter,true,true);
            this.getcp(catcher,false,true);
            this.getcp(shooter_1,true,false);
            this.getcp(catcher_1,false,false);
            this.initMap();
            //cpFrom_1[0]==cpTo_1[0]&&cpFrom_1[1]==cpTo_1[1]
            if(shooter==catcher){

            for(var i in loctionReset){
                if(i==shooter){
                    var p=Math.round(Math.random()+1);
                    if(p==1) {
                        cpFrom[0] = loctionReset[i].loc1X;
                        cpFrom[1] = loctionReset[i].loc1Y;
                        cpTo[0] = loctionReset[i].loc2X;
                        cpTo[1] = loctionReset[i].loc2Y;
                    }
                    else{
                        cpFrom[0] = loctionReset[i].loc2X;
                        cpFrom[1] = loctionReset[i].loc2Y;
                        cpTo[0] = loctionReset[i].loc1X;
                        cpTo[1] = loctionReset[i].loc1Y;
                    }
                }
            }
              //  Object.assign(temp,cpFrom); 28 1   5    4 8  5
            }
            if(shooter_1==catcher_1){
                for(var i in loctionReset){
                    if(i==shooter){
                            var p = Math.round(Math.random() + 1);
                            if (p == 1) {
                                cpFrom_1[0] = loctionReset[i].loc1X;
                                cpFrom_1[1] = loctionReset[i].loc1Y;
                                cpTo_1[0] = loctionReset[i].loc2X;
                                cpTo_1[1] = loctionReset[i].loc2Y;
                            }
                            else {
                                cpFrom_1[0] = loctionReset[i].loc2X;
                                cpFrom_1[1] = loctionReset[i].loc2Y;
                                cpTo_1[0] = loctionReset[i].loc1X;
                                cpTo_1[1] = loctionReset[i].loc1Y;
                            }

                    }
                }


            }
            if(cpFrom[0]==cpFrom_1[0]&&cpFrom[1]==cpFrom_1[1]&&cpTo[0]==cpTo_1[0]&&cpTo[1]==cpTo_1[1]) {
                cpFrom_1[0]=cpTo[0];
                cpFrom_1[1]=cpTo[1];
                cpTo_1[0]=cpFrom[0];
                cpTo_1[1]=cpFrom[1];
            }




        },
        animefx:function(){
            var Anime = anime({           //左边区域横移淡入
                targets: '.company-rank-box li,.now-max-area,.now-max-account',
                translateX: [-30,0],
                delay: function(el, i, l) { return i * 50; },
                easing: [.7, .28, .25, .64],
                //   direction: 'alternate',
                loop: false,
                autoplay:true,
                opacity:[0,1]


            });
            var Anime_1 = anime({              //top1省份区域横移淡入
                targets: '.no1-province .hd,.J_no1-province .province,.J_no1-province .item',  //单独放出来为了与左侧区域同步淡入（消除delay影响）
                translateX: [-30,0],
                delay: function(el, i, l) { return i * 50; },
                easing: [.7, .28, .25, .64],
                //   direction: 'alternate',
                loop: false,
                autoplay:true,
                opacity:[0,1]


            });
            var Anime_2 = anime({           //top1省份底层网格淡入
                targets:'.no1-province',
                opacity:[0,1],
                easing: [.7, .28, .25, .64],
            })

        }

    };
    page.init();
      setInterval(function (){page.init();},10000);


})();
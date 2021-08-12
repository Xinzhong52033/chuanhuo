<template>
    <div class="brand">
        <div id="container">
            <Echarts :options='mapState' :mapData='scLine' mapName='brand' @chartOver='chartOver' @chartOut='chartOut' />
            <div class="wrap"></div>
        </div>
        <div class="left box">
            <div class="search">
                <el-button size="medium" type="info" @click="goback">返回</el-button>
                <el-select v-model="select" style="width: 70%" size="medium" placeholder="请选择">
                    <el-option label="全部" value="1"></el-option>
                    <el-option label="商品" value="2"></el-option>
                    <el-option label="供应商" value="3"></el-option>
                    <el-option label="园区" value="4"></el-option>
                </el-select>
            </div>
            <div class="title">
                <span class="ball"></span>
                <span>攀枝花馆</span>
            </div>
            <div class="card">
                <div class="img">
                    <img src="../../../../assets/img/city.jpg" alt="" />
                </div>
                <div class="info">
                    <div class="row">
                        <span>人口：</span><span class="big-number">108.37</span><span style="margin-left: 5px">万人</span>
                    </div>
                    <div class="row">
                        <span>GDP：</span><span class="big-number">1010.13</span><span style="margin-left: 5px"> 亿元</span>
                    </div>
                </div>
                <div class="sec-title">
                    <div class="sec-title-name">品牌馆简介</div>
                    <div class="line"></div>
                </div>
                <div class="intro">
                    攀枝花市已探明铁矿（主要是钒钛磁铁矿）71.8亿吨，占四川省探明铁矿资源储量的72.3%，是中国四大铁矿区之一；伴生钛资源储量占全国的93%，居世界第一；伴生钒资源储量占全国的63%，居世界第三。探明石墨资源储量全国第三。
                </div>
                <div class="sec-title">
                    <div class="sec-title-name">名优品牌</div>
                    <div class="line"></div>
                </div>
                <div class="goodBrand">
                    <div class="button energe">能源产品</div>
                    <div class="button chemistry">化学品</div>
                    <div class="button metal">金属品</div>
                    <div class="button bulid">建材品</div>
                    <div class="button farm">农副产品</div>
                </div>

            </div>

        </div>
        <div class="selection">
            <div class="item" @click="selectItem='名优品牌'" :class="selectItem=='名优品牌'?'select-item':''">名优品牌</div>
            <div class="item" @click="selectItem='供应商'" :class="selectItem=='供应商'?'select-item':''">供应商</div>
            <div class="item" @click="selectItem='园区'" :class="selectItem=='园区'?'select-item':''">园区</div>
            <div class="item" @click="selectItem='特色展示'" :class="selectItem=='特色展示'?'select-item':''">特色展示</div>
        </div>
        <div class="right box">
            <div v-if="selectItem=='名优品牌'">
                <div class="title">
                    <span class="ball"></span>
                    <span>名优品牌</span>
                </div>
                <div class="goodTitle">钛白粉</div>
                <div class="line"></div>
                <div class="intro">
                    钛被誉为“太空金属”及“战略金属”，在高端装备应用广泛。攀钢钛产品也应用于电力、化工及民生领域。
                </div>
                <div class="goodTitle">钢轨</div>
                <div class="line"></div>
                <div class="intro">
                    全长余热淬火钢轨工艺形成自主知识产权，在线热处理技术世界领先，获得中国和美国专利；国内首家开发的高速铁路钢轨技术填补了国内空白，结束了我国不能生产高速铁路钢轨的历史，轨梁万能轧制和长尺化生产技术国际领先； Φ340mm 无逢钢管连轧机组达到世界先进水平；冷轧热镀锌铝生产线达到世界先进水平。
                </div>
                <div class="goodTitle">铁矿</div>
                <div class="line"></div>
                <div class="intro">
                    攀钢依托资源优势和工艺技术优势，形成了以重轨、 310乙字钢等为代表的大型材，以汽车大梁板、冷轧镀锌板、IF钢等为代表的板材，以无缝钢管为代表的管材，以高钒铁、钒氮合金、高品质钛白粉为代表的钒钛制品，优质棒线材以及特殊钢等六大系列标志性产品。
                </div>
                <div class="goodTitle">炼焦煤</div>
                <div class="line"></div>
                <div class="intro">
                    攀钢依托资源优势和工艺技术优势，形成了以重轨、 310乙字钢等为代表的大型材，以汽车大梁板、冷轧镀锌板、IF钢等为代表的板材，以无缝钢管为代表的管材，以高钒铁、钒氮合金、高品质钛白粉为代表的钒钛制品，优质棒线材以及特殊钢等六大系列标志性产品。
                </div>
            </div>
            <div v-if="selectItem=='供应商'">
                <div class="title">
                    <span class="ball"></span>
                    <span>供应商</span>
                </div>
                <div class="detail-info">
                    <div class="row">
                        <span>供应商总数：</span><span class="big-number">159</span><span style="margin-left: 5px">家</span>
                    </div>
                    <div class="flex-row">
                        <span>能源类：91 家</span>
                        <span>化工类：15 家</span>
                        <span>金属类：23 家</span>
                        <span>建材类：17 家</span>
                        <span>农副类：13 家</span>
                    </div>
                </div>
                <div class="provideTable">
                    <DataTable style="width: 100%" :height="520*$widthCoefficient" size='mini' :columns="tableColumns" :border='true' :showBottomBar='false' :data="tableData" :highlightCurrentRow="true">
                        <template slot="number" slot-scope="{row}">
                            <span class="link"> {{row.number}}</span>
                        </template>
                        <template slot="pre" slot-scope="{row}">
                            <span class="link"> {{row.pre}}</span>
                        </template>
                    </DataTable>
                </div>
            </div>
            <div v-if="selectItem=='园区'">
                <div class="title">
                    <span class="ball"></span>
                    <span>园区</span>
                </div>
                <div class="detail-info">
                    <div class="row">
                        <span>园区总数：</span><span class="big-number">19</span><span style="margin-left: 5px">个</span>
                    </div>
                    <div class="flex-row">
                        <span>工业园区：8 个</span>
                        <span>物流园区： 2个</span>
                        <span>物流园区： 3个</span>
                        <span>建材类： 5个</span>
                        <span>农副类： 1个</span>
                    </div>
                </div>
                <div class="provideTable">
                    <DataTable style="width: 100%" :height="520*$widthCoefficient" size='mini' :columns="tableColumns2" :border='true' :showBottomBar='false' :data="tableData2" :highlightCurrentRow="true">
                        <template slot="number" slot-scope="{row}">
                            <span class="link"> {{row.number}}</span>
                        </template>
                        <template slot="pre" slot-scope="{row}">
                            <span class="link"> {{row.pre}}</span>
                        </template>
                    </DataTable>
                </div>
            </div>
            <div v-if="selectItem=='特色展示'">
                <div class="title">
                    <span class="ball"></span>
                    <span>特色展示</span>
                </div>
                <div>
                    <div class="videoName">攀枝花-钛铁矿</div>
                    <div class="img">
                        <i class=""></i>
                        <video src="http://loading.spsict.com/chuanhuo_chuchuan/mvs/%E6%94%80%E6%9E%9D%E8%8A%B1%E9%92%9B%E9%93%81%E7%9F%BF.mp4" poster="http://loading.spsict.com/chuanhuo_chuchuan/imgs/攀枝花钛铁矿.png" controls></video>
                    </div>
                </div>
                <div>
                    <div class="videoName">攀枝花-钢铁</div>
                    <div class="img">
                        <video src="http://loading.spsict.com/chuanhuo_chuchuan/mvs/%E6%94%80%E6%9E%9D%E8%8A%B1%E9%92%A2%E6%9D%90.mp4" poster="http://loading.spsict.com/chuanhuo_chuchuan/imgs/攀枝花钢材.jpg" controls></video>
                    </div>
                </div>
                <!-- <div>
                    <div class="videoName">攀枝花-钢铁</div>
                    <div class="img">
                        <video src="http://loading.spsict.com/chuanhuo_chuchuan/mvs/攀枝花钢材.mp4" controls></video>
                    </div>
                </div> -->

            </div>

        </div>
        <!-- <div class='selectProduct companyPark'>
            <div>
                <el-checkbox v-model="selected.company" class="el-checkbox"></el-checkbox><i class="iconfont icon-dingwei"></i><span>供应商</span>
            </div>
            <div>
                <el-checkbox class="el-checkbox" v-model="selected.park"></el-checkbox><i class="iconfont icon-yuanqu"></i><span>园区</span>
            </div>
        </div> -->
        <div class='selectProduct'>
            <div>
                <el-checkbox v-model="selected.energe"></el-checkbox><span class="ball light-blue"></span><span>能源</span>
            </div>
            <div>
                <el-checkbox  v-model="selected.chemistry"></el-checkbox><span class="ball green"></span><span>化工</span>
            </div>
            <div>
                <el-checkbox  v-model="selected.metal"></el-checkbox><span class="ball purple"></span><span>金属</span>
            </div>
            <div>
                <el-checkbox  v-model="selected.build"></el-checkbox><span class="ball yellow"></span><span>建材</span>
            </div>
            <div>
                <el-checkbox  v-model="selected.farm"></el-checkbox><span class="ball blue"></span><span>农副</span>
            </div>
        </div>
    </div>
</template>

<script>
import Echarts from "@/components/echarts.vue";
// import scLine from '@/assets/json/sc_line.json'
import { mapStatefun } from "./map/brandDetail.js";
import axios from "axios";
import DataTable from "@/components/DataTable.vue";
let $widthCoefficient = document.documentElement.clientWidth / 1920;
import {CompanyList} from './map/panzhihua.json'
const tableColumns2 = [
    {
        title: "类别",
        align: "center",
        name: "index",
        width: 80 * $widthCoefficient + "px",
        showOverflow: true,
    },
    {
        title: "名称",
        align: "center",
        width: 100 * $widthCoefficient + "px",
        name: "name",
        showOverflow: true,
    },
    {
        title: "年处理能力",
        align: "center",
        name: "__slot:number",
        width: 100 * $widthCoefficient + "px",
        showOverflow: true,
    },
    {
        title: "仓储个数",
        align: "center",
        name: "__slot:pre",
        width: 80 * $widthCoefficient + "px",
        showOverflow: true,
    },
];
const tableColumns = [
    {
        title: "类别",
        align: "center",
        name: "index",
        width: 60 * $widthCoefficient + "px",
        showOverflow: true,
    },
    {
        title: "名称",
        align: "center",
        width: 120 * $widthCoefficient + "px",
        name: "name",
        showOverflow: true,
    },
    {
        title: "主营商品",
        align: "center",
        name: "__slot:number",
        width: 120 * $widthCoefficient + "px",
        showOverflow: true,
    },
    {
        title: "库存",
        align: "center",
        name: "__slot:pre",
        width: 100 * $widthCoefficient + "px",
        showOverflow: true,
    },
];

export default {
    name: "brand",
    components: {
        Echarts,
        DataTable,
        // panzhihua,
    },
    data() {
        return {
            checked: true,
            tableData: [
                {
                    index: "能源类",
                    name: "攀钢集团钒钛资源股份有限公司",
                    number: "常用有色金属",
                    pre: "45",
                },
                {
                    index: "能源类",
                    name: "攀钢集团钒钛资源股份有限公司",
                    number: "其他常用有色金属冶炼",
                    pre: "39",
                },
                {
                    index: "能源类",
                    name: "攀枝花煤业（集团）有限责任公司",
                    number: "金属及金属矿",
                    pre: "48",
                },
                {
                    index: "建材类",
                    name: "攀枝花钢城集团贸易有限公司",
                    number: "金属及金属矿",
                    pre: "35",
                },
                {
                    index: "能源类",
                    name: "四川省富邦钒钛制动鼓有限公司",
                    number: "其他金属机械",
                    pre: "56",
                },
                {
                    index: "建材类",
                    name: "攀枝花新中钛科技有限公司",
                    number: "其他专业技术服务",
                    pre: "123",
                },
                {
                    index: "制造类",
                    name: "攀枝花市恒源石化有限公司",
                    number: "磷肥",
                    pre: "500",
                },
                {
                    index: "制造类",
                    name: "中世钛业有限公司",
                    number: "颜料",
                    pre: "50.26",
                },
                {
                    index: "能源类",
                    name: "攀枝花天伦化工有限公司",
                    number: "常用有色金属",
                    pre: "232",
                },
                {
                    index: "能源类",
                    name: "攀枝花一立矿业股份有限公司",
                    number: "钨钼矿采选",
                    pre: "18",
                },
                {
                    index: "能源类",
                    name: "攀枝花一立矿业股份有限公司",
                    number: "铁合金冶炼",
                    pre: "510.26",
                },
                {
                    index: "能源类",
                    name: "四川长矶复合材料有限公司",
                    number: "其他非金属矿物制品",
                    pre: "56",
                },
            ],
            tableData2: [
                {
                    index: "物流园区",
                    name: "航空物流园区",
                    number: "45万吨",
                    pre: "214个",
                },
                {
                    index: "工业园区",
                    name: "钒钛产业园区",
                    number: "32万吨",
                    pre: "320个",
                },
                {
                    index: "工业园区",
                    name: "格里坪民营经济创",
                    number: "23万吨",
                    pre: "236",
                },
                {
                    index: "工业园区",
                    name: "新九工矿区",
                    number: "15万吨",
                    pre: "200",
                },
                {
                    index: "工业园区",
                    name: "白马工矿区",
                    number: "10万吨",
                    pre: "154",
                },
            ],
            tableColumns,
            tableColumns2,
            detail: false,
            center: [116.397428, 39.90923],
            input: "",
            select: "",
            mapState: {},
            scLine: {},
            data: {},
            selectItem: "名优品牌",
            lineDatas: {
                energe: {
                    icon: `image://${require("@/assets/img/location1.png")}`,
                    data: [
                        {
                            value: [101.643925, 26.595667],
                            info: {
                                company_type: "制造类",
                                company_name: "攀钢集团钒钛资源股份有限公司",
                                product_name: "其他常用有色金属冶炼",
                                trademark:
                                    "万立,PG4,PG,PZH,攀钢钒钛 PZH,攀枝花,攀钢,PQ",
                                awards: '"钒钛磁铁矿高效绿色综合回收工艺及装备研究"技术创新项目一等奖,中国驰名商标',
                                contacts: "谢勇",
                                tel: "0812256063",
                                url: "https://www.tianyancha.com/company/960650",
                                location: "101.643925,26.595667",
                                dizhi: "攀枝花市东区弄弄坪",
                            },
                        },
                        {
                            value: [102.004739, 26.794673],
                            info: {
                                company_type: "采矿类",
                                company_name: "四川安宁铁钛股份有限公司",
                                product_name: "铁矿石",
                                trademark:
                                    "东太,RT 2,紫东,TIO2 DF,ZDTIO,A NING,安宁铁钛",
                                awards: "国家高新技术企业、国家级绿色矿山企业、中国冶金矿山50强企业",
                                contacts: "罗勇",
                                tel: "08128945776",
                                url: "https://www.tianyancha.com/company/183371440",
                                location: "102.004739,26.794673",
                                dizhi: "米易县垭口镇",
                            },
                        },
                    ],
                },
                chemistry: {
                    icon: `image://${require("@/assets/img/location2.png")}`,
                    data: [
                        {
                            value: [101.718637, 26.582347],
                            info: {
                                company_type: "制造类",
                                company_name: "四川金光化工股份有限公司",
                                product_name: "其他基础化学原料",
                                trademark: "金光化工",
                                awards: "",
                                contacts: "徐小光",
                                tel: "1354856610",
                                url: "https://www.tianyancha.com/company/2327121321",
                                location: "101.718637,26.582347",
                                dizhi:'攀枝花市钒钛产业园区内'
                            },
                        },
                        {
                            value: [101.68307, 26.435543],
                            info: {
                                company_type: "制造类",
                                company_name: "攀枝花市攀西石墨股份有限公司",
                                product_name: "化工",
                                trademark: "攀西,攀昊;CLIMB UP",
                                awards: "",
                                contacts: "刘兵",
                                tel: "1388060523",
                                url: "https://www.tianyancha.com/company/331571240",
                                location: "101.683070,26.435543",
                                dizhi: '成都市都江堰经济开发区上阳街524号'
                            },
                        },
                    ],
                },
                metal: {
                    icon: `image://${require("@/assets/img/location3.png")}`,
                    data: [
                        {
                            value: [102.004739, 26.794673],
                            info: {
                                company_type: "制造类",
                                company_name: "攀枝花兴辰钒钛有限公司",
                                product_name: "其他稀有金属冶炼",
                                trademark: "兴辰;X",
                                awards: "",
                                contacts: "雷长荣",
                                tel: "08126855321",
                                url: "https://www.tianyancha.com/company/304133975",
                                location: "102.004739,26.794673",
                                dizhi:'米易县垭口镇',
                            },
                        },
                        {
                            value: [103.674548, 31.027571],
                            info: {
                                company_type: "制造类",
                                company_name: "成都市长峰钢铁集团有限公司",
                                product_name: "炼钢",
                                trademark: "青城",
                                awards: "",
                                contacts: "陈小俤",
                                tel: "028-7895101",
                                url: "https://www.tianyancha.com/company/160721162",
                                location: "103.674548,31.027571",
                                dizhi:'成都市都江堰经济开发区上阳街214号'
                            },
                        },
                    ],
                },
                bulid: {
                    icon: `image://${require("@/assets/img/location4.png")}`,
                    data: [
                        {
                            value: [101.588025, 26.585481],
                            info: {
                                company_name: "攀枝花煤业（集团）有限责任公司",
                                product_name: "烟煤和无烟煤",
                                trademark: "巴关河;BGH",
                                awards: "2019年中国煤炭企业50强,全国煤炭工业100强企业,全国煤炭系统优秀企业，全国煤炭质量信得过先进单位，国家重点企业信息系统先进单位，全国节能先进单位；四川省先进企业，四川省工业企业最大规模20强，四川工业企业综合实力30强，四川省重合同守信用企业；攀枝花市工业经济发展突出贡献奖，攀枝花市出口开拓奖、出口增长奖",
                                contacts: "张敏",
                                tel: "08124587372",
                                url: "https://www.tianyancha.com/company/185208474",
                                location: "101.588025,26.585481",
                                dizhi: '攀枝花市陶家渡'
                            },
                        },
                        {
                            value: [101.740821, 26.568696],
                            info: {
                                company_type: "建筑类",
                                company_name: "攀枝花钢城集团贸易有限公司",
                                product_name: "金属及金属矿",
                                trademark: "金沙源",
                                awards: "2019年四川企业100强,2019年四川制造业企业100强,2019年四川服务业企业100强,2019年四川企业纳税10强,2019年四川企业利润10强,2018年攀枝花市民营企业50强,四川民营企业100强,全国行业质量无投诉、诚信示范企业、全国用户满意企业、重质量、守诚信企业,党建工作示范单位",
                                contacts: "杜敏",
                                tel: "08125689031",
                                url: "https://www.tianyancha.com/company/761713188",
                                location: "101.740821,26.568696",
                                dizhi: '攀枝花市东区新宏路7号阳城龙庭24幢商业4层7附8、9号商铺'
                            },
                        },
                    ],
                },
                farm: {
                    icon: `image://${require("@/assets/img/location5.png")}`,
                    data: [
                        {
                            value: [101.718637, 26.582347],
                            info: {
                                company_type: "建筑类",
                                company_name: "攀枝花新中钛科技有限公司",
                                product_name: "其他专业技术服务",
                                trademark: "中钛,ZTI",
                                awards: "",
                                contacts: "左*远",
                                tel: "1307895608",
                                url: "https://www.tianyancha.com/company/322349654",
                                location: "101.718637,26.582347",
                                dizhi:'攀枝花市钒钛产业园区'
                            },
                        },
                        {
                            value: [101.847132, 26.553011],
                            info: {
                                company_type: "制造类",
                                company_name: "中世钛业有限公司",
                                product_name: "其他金属机械",
                                trademark: "中世钛业",
                                awards: "",
                                contacts: "张里世",
                                tel: "08122356959",
                                url: "https://www.tianyancha.com/company/361301544",
                                location: "101.847132,26.553011",
                                dizhi: '曹妃甸工业区装备制造园区' 
                            },
                        },
                        {
                            value: [101.856969,26.683143],
                            info: {
                                company_type: "制造类",
                                company_name: "攀枝花一立矿业股份有限公司",
                                product_name: "铁合金冶炼",
                                trademark:
                                    "一立矿业 YILI MINING Y,一立矿业 YILI MINING",
                                awards: "2020年攀枝花市民营企业50强",
                                contacts: "赵*刚",
                                tel: "08123659377",
                                url: "https://www.tianyancha.com/company/187103223",
                                location: "101.856969,26.683143",
                                dizhi:'盐边县桐子林镇'
                            },
                        },
                    ],
                },
            },
            panzhihua: CompanyList,
            test: {
                energe:{
                    icon: `image://${require("@/assets/img/location1.png")}`,
                    data:[]
                },
                chemistry:{
                    icon: `image://${require("@/assets/img/location2.png")}`,
                   data:[]
                },
                metal:{
                    icon: `image://${require("@/assets/img/location3.png")}`,
                    data:[]
                },
                bulid:{
                    icon: `image://${require("@/assets/img/location4.png")}`,
                    data:[]
                    
                },
                farm:{
                    icon: `image://${require("@/assets/img/location5.png")}`,
                    data:[]
                }
            },
            selected:{
                energe:true,
                chemistry:true,
                metal:true,
                build:true,
                farm:true,
                company: true,
                park: true
            }
        };
    },
    
    created() {
        // this.initMap();
        
    },
    mounted() {
        this.detlData()
        // this.$nextTick(()=> {
        //     this.initMap();
        // })
        
    },
    watch: {
        selected: {
            handler: function () {
                this.detlData()
            },
            deep: true
        }
    },
    methods: {
        detlData() {
            // var energe, chemistry, metal, build, farm = []
            this.test.bulid.data = []
            this.test.chemistry.data = []
             this.test.energe.data = []
             this.test.farm.data = []
             this.test.metal.data = []
            this.panzhihua.forEach(item => {
                if (item.company_type == '建筑类'&&this.selected.build==true) {
                    this.test.bulid.data.push({
                            value: item.location.split(','),
                            info: item
                    })
                } 
                else if (item.company_type == '化工类'&&this.selected.chemistry==true) {
                     this.test.chemistry.data.push({
                            value: item.location.split(','),
                            info: item
                    })
                }
                 else if (item.company_type == '采矿类'&&this.selected.energe==true) {
                     this.test.energe.data.push({
                            value: item.location.split(','),
                            info: item
                    })
                } 
                else if (item.company_type == '食品类'&&this.selected.farm==true) {
                     this.test.farm.data.push({
                            value: item.location.split(','),
                            info: item
                    })
                }
                 else if (item.company_type == '制造类'&&this.selected.metal==true) {
                     this.test.metal.data.push({
                            value: item.location.split(','),
                            info: item
                    })
                }
            });
            this.initMap();
        },
        async initMap() {
            let { data } = await axios.get(
                `http://loading.spsict.com/china_maps/${this.$route.query.adcode}.json`
            );
            this.scLine = data;
            let mapData = [];
            for (let i = 0; i < this.scLine.features.length; i++) {
                mapData.push({
                    name: this.scLine.features[i].properties.name,
                    adcode: this.scLine.features[i].properties.adcode,
                });
            }
            this.mapState = mapStatefun(mapData, this.test);
        },
        chartOver(param) {
            this.detail = true;
        },
        chartOut(param) {
            this.detail = false;
        },
        chartClick(param) {
            console.log(param);
            alert(param.data.adcode);
        },
        goback() {
            this.$router.go(-1);
        },
    },
};
</script>

<style lang="less" scoped>
.brand {
    font-size: 16px;
    .wh(100%, 858px);
    position: relative;
    #container {
        position: absolute;
        .wh(100%, 100%);
        z-index: 22;
        background: url("../../../../assets/img/mapbg.png");
        background-size: 100% 100%;
        .wrap {
            position: absolute;
            .wh(100%, 100%);
            background: #fff;
            background: rgba(248, 251, 255, 0.1);
            top: 0;
            left: 0;
            z-index: -1;
        }
    }

    // .flexb();
    .box {
        position: absolute;
        top: 50px;
        .wh(330px, 758px);
        padding: 30px;
        box-sizing: border-box;
        box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.08);
        overflow: auto;
        background-color: #fff;
    }
    .title {
        height: 20px;
        line-height: 20px;
        .flex();
        align-items: center;
        .ball {
            display: inline-block;
            .wh(18px, 18px);
            background-image: linear-gradient(to left, #ffffff, #3860f4);
            border-radius: 50%;
            margin-right: 10px;
        }
        span {
            font-size: 20px;
            color: @blue;
            font-weight: 500;
        }
        margin-bottom: 20px;
    }
    .selectProduct {
        position: absolute;
        .wh(160px, 165px);
        background-color: #fff;
        box-shadow: 0px 3px 15px rgba(56, 96, 244, 0.25);
        right: 20.5%;
        z-index: 1000;
        bottom: 10%;
        padding: 20px 20px;
        .bs();
        .flex(space-around);
        flex-direction: column;
        > div {
            .flex();
            align-items: center;
            font-size: 16px;
            color: @black;
            .ball,
            i {
                width: 14px;
                height: 14px;
                opacity: 1;
                border-radius: 10px;
                margin: 0 15px 0 20px;
            }
            .light-blue {
                background: #25cbf2;
            }
            .green {
                background: #11c986;
            }
            .purple {
                background: #a135f4;
            }
            .yellow {
                background: @yellow;
            }
            .blue {
                background: @blue;
            }
        }
    }
    .companyPark {
        .wh(160px, 90px);
        bottom: 32%;
        .el-checkbox {
            margin-top: 8px;
        }
        i {
            display: inline-block;
            font-size: 18px;
            color: @blue;
        }
    }
    .sec-title {
        color: @blue;
        .flex();
        &-name {
            height: 29px;
            .bs();
            width: auto;
            font-size: 18px;
            border-bottom: 4px solid @blue;
        }
        .line {
            margin-top: 27px;
            flex: 1;
            height: 1px;
            background-color: #c3cffc;
        }
    }
    .left {
        position: absolute;
        left: 50px;
        // margin-left: 50px;
        z-index: 1000;
        /deep/.search {
            .flexb();
            align-items: center;
            .el-button {
                background-color: @black;
                &:hover {
                    background-color: #888;
                }
                margin-right: 30px;
            }
            margin-bottom: 30px;
        }
        .card {
            .img {
                .wh(270px, 152px);
                img {
                    .wh(100%, 100%);
                }
                position: relative;
                .name {
                    position: absolute;
                    bottom: 0;
                    .wh(110px, 28px);
                    box-sizing: border-box;
                    line-height: 28px;
                    text-align: center;
                    .bis("../../../../assets/img/name.png");
                    color: #fff;
                    opacity: 0.8;
                    padding-right: 15px;
                }
                margin-bottom: 10px;
            }
            .info {
                .row {
                    margin-bottom: 10px;
                    .black {
                        color: @black;
                    }
                    .flex();
                    align-items: center;
                    span:first-child {
                        width: 70px;
                        flex-shrink: 0;
                    }
                }
                margin-bottom: 20px;
            }
            .intro {
                line-height: 22px;
                margin: 20px 0;
            }
            .goodBrand {
                margin-top: 10px;
                .button {
                    display: inline-block;
                    width: 80px;
                    height: 32px;
                    line-height: 32px;
                    text-align: center;
                    .bs();
                    margin: 10px 4px;
                    &:hover {
                        cursor: pointer;
                        opacity: 0.7;
                    }
                }
                .energe {
                    background: rgba(37, 203, 242, 0.1);
                    color: rgba(37, 203, 242, 1);
                    border: 1px solid rgba(37, 203, 242, 1);
                }
                .chemistry {
                    background: rgba(17, 201, 134, 0.1);
                    color: rgba(17, 201, 134, 1);
                    border: 1px solid rgba(17, 201, 134, 1);
                }
                .metal {
                    background: rgba(161, 53, 244, 0.1);
                    color: rgba(161, 53, 244, 1);
                    border: 1px solid rgba(161, 53, 244, 1);
                }
                .farm {
                    background: rgba(242, 200, 37, 0.1);
                    color: rgba(242, 200, 37, 1);
                    border: 1px solid rgba(242, 200, 37, 1);
                }
                .bulid {
                    background: rgba(56, 96, 244, 0.1);
                    color: rgba(56, 96, 244, 1);
                    border: 1px solid rgba(56, 96, 244, 1);
                }
            }
        }
    }
    .right {
        position: absolute;
        z-index: 10000;
        right: 50px;
        color: @fc1;
        > div {
            .wh(100%, 100%);
        }
        .goodTitle {
            .wh(110px, 28px);
            background-color: @blue;
            text-align: center;
            line-height: 28px;
            color: #fff;
        }
        .line {
            width: 100%;
            height: 1px;
            background: #c3cffc;
            margin-bottom: 20px;
        }
        .intro {
            line-height: 22px;
            margin: 20px 0;
            font-size: 14px;
        }
        .title {
            padding-bottom: 0px;
            // border-bottom: 1px dashed @blue;
        }
        .detail-info {
            font-size: 14px;
            .row {
                .flex();
                span:first-child {
                    width: 100px;
                    flex-shrink: 0;
                    margin-bottom: 15px;
                }
            }
            .flex-row {
                .flex();
                flex-wrap: wrap;
                span {
                    display: inline-block;
                    width: 50%;
                    margin-bottom: 10px;
                }
            }

            margin-bottom: 15px;
        }
        .provideTable {
            .wh(100%, 72%);
        }
        .img {
            .wh(270px, 152px);
            img {
                .wh(100%, 100%);
            }
            position: relative;
            .name {
                position: absolute;
                bottom: 0;
                .wh(110px, 28px);
                box-sizing: border-box;
                line-height: 28px;
                text-align: center;
                .bis("../../../../assets/img/name.png");
                color: #fff;
                opacity: 0.8;
                padding-right: 15px;
            }
            margin-bottom: 15px;
            video {
                .wh(100%, 100%);
            }
        }
        .videoName {
            font-size: 14px;
            margin: 5px 0px;
        }
    }
    .selection {
        z-index: 10000;
        font-size: 16px;
        position: absolute;
        right: 380px;
        .wh(40px, 376px);
        top: 50px;
        .flexb();
        flex-direction: column;
        .item {
            text-align: center;
            width: 100%;
            background: #ffffff;
            box-shadow: 0px 0px 10px rgba(255, 187, 32, 0.2);
            opacity: 1;
            border-radius: 8px 0px 0px 8px;
            padding: 5px 10px;
            color: rgba(255, 187, 32, 1);
            .bs();
            cursor: pointer;
        }
        .select-item {
            background-color: rgba(255, 187, 32, 1);
            color: #fff;
        }
    }
}
</style>
<style lang="less">
.tooltip {
    // width: 280px;
    border: 1px solid #11c986;
    border-left: 4px solid #11c986;
    padding: 20px;
    background: #fff;
    .bs();
    &-title {
        font-size: 18px;
        font-weight: 600;
        line-height: 31px;
        color: @black;
        margin-bottom: 10px;
    }
    > .info {
        // .wh(100%, 100%);
        font-size: 14px;
        line-height: 16px;
        &:not(:last-child) {
            margin-bottom: 10px;
        }
        .flex();
        align-items: flex-start;
        .name {
            flex: 1;
            width: 130px;
            color: @fc;
        }
        .value {
            flex: 2;
            color: @black;

            // width: 210px;
        }
    }
}
</style>
<template>
    <div>
        <!-- <el-dialog title="发票预览" :visible.sync="open" width="1200px" class="invoice-dialog" append-to-body> -->
            <div class="invoice-box">
                <el-alert title="票样预览是为了您可以直观的查看发票的信息，并不代表实际发票，当开具完成后请预览查看实际票面" type="success" show-icon :closable="false">
                </el-alert>
                <div id="myComponent">
                    <div class="top">

                        <div class="title">
                            <h1>机动车销售统一发票</h1>
                            <span class="title_fpl">发票联</span>
                        </div>


                        <img :src="qrCodeData" alt="二维码">
                        <div class="tips-box">开票日期：<span>{{ getDate2(invoiceData.kprq) }}</span></div>

                    </div>

                    <div class="body">
                        <div class="body1">
                            <div class="top_body_left border_left border_top">
                                <div>机打代码</div>
                                <div>机打号码</div>
                                <div>机器编号</div>
                            </div>
                            <div class="top_body_left2 border_left border_top">
                                <div>{{ invoiceData.zzfpdm }}</div>
                                <div>{{ invoiceData.zzfphm }}</div>
                                <div>{{ invoiceData.zzfpbh }}</div>
                            </div>
                            <div class="top_body_sk border_left border_top">
                                <div>税</div>
                                <div>控</div>
                                <div>码</div>
                            </div>
                            <div class="top_body_sk2 border_left border_right border_top">
                                <div>数电票号码：{{ invoiceData.fpHm }}</div>
                                <div>{{ "全国增值税发票查验平台：" }}</div>
                                <div>{{ "https://inv-veri.chinatax.gov.cn/" }}</div>
                            </div>
                        </div>
                        <div class="body2">
                            <div class="top_body_left border_left border_top">
                                <div>购买方名称</div>
                            </div>
                            <div class="top_body_left2 border_left border_top">
                                <div>{{ invoiceData.purchaserName }}</div>
                            </div>
                            <div class="top_body_sk border_left border_top">
                                <div>纳税人识别号/</div>
                                <div>身份证号码/</div>
                                <div>组织结构代码</div>
                            </div>
                            <div class="top_body_sk2 border_left border_right border_top">
                                <div>{{ invoiceData.purchaserTaxNo }}</div>
                            </div>
                        </div>
                        <div class="body3">
                            <div class="top_body_left border_left border_top">
                                <div>车辆类型</div>
                            </div>
                            <div class="top_body_left2 border_left border_top">
                                <div :style="{ 'fontSize': invoiceData.cllxDm?.length >= 18 ? '11px' : '14px' }">
                                    {{ invoiceData.cllxDm }}
                                </div>
                            </div>
                            <div class="top_body_left border_left border_top">
                                <div>厂牌型号</div>
                            </div>
                            <div class="top_body_left2 border_left border_top">
                                <div>{{ invoiceData.cpxh }}</div>
                            </div>
                            <div class="top_body_sk border_left border_top">
                                <div>产地</div>
                            </div>
                            <div class="top_body_sk2 border_left border_right border_top">
                                <div>{{ invoiceData.cd }}</div>
                            </div>
                        </div>
                        <div class="body4">
                            <div class="top_body_left border_left border_top">
                                <div>合格证号</div>
                            </div>
                            <div class="top_body_left2 border_left border_top">
                                <div>{{ invoiceData.hgzh }}</div>
                            </div>
                            <div class="top_body_left border_left border_top">
                                <div>进口证明号</div>
                            </div>
                            <div class="top_body_left2 border_left border_top">
                                <div>{{ invoiceData.jkzmsh }}</div>
                            </div>
                            <div class="top_body_sk border_left border_top">
                                <div>商检单号</div>
                            </div>
                            <div class="top_body_sk2 border_left border_right border_top">
                                <div>{{ invoiceData.sjdh }}</div>
                            </div>
                        </div>
                        <div class="body5">
                            <div class="top_body_left border_left border_top">
                                <div>发动机号码</div>
                            </div>
                            <div class="top_body_left2 border_left border_top">
                                <div>{{ invoiceData.fdjhm }}</div>
                            </div>
                            <div class="top_body_sk border_left border_top">
                                <div>车辆识别号代码/车架号码</div>
                            </div>
                            <div class="top_body_sk2 border_left border_right border_top">
                                <div>{{ invoiceData.cjh }}</div>
                            </div>
                        </div>
                        <div class="body6">
                            <div class="top_body_left border_left border_top">
                                <div>价税合计</div>
                            </div>
                            <div class="top_body_left2 border_left  border_top">
                                <div>{{ invoiceData.dxhj }}</div>
                            </div>
                            <div class="top_body_sk  border_top">
                                <div>小写</div>
                            </div>
                            <div class="top_body_sk2  border_right border_top">
                                <div>￥{{ invoiceData.jshj }}</div>
                            </div>
                        </div>
                        <div class="body7">
                            <div class="top_body_left border_left border_top">
                                <div>销货单位名称</div>
                            </div>
                            <div class="top_body_left2 border_left border_top">
                                <div>{{ invoiceData.name }}</div>
                            </div>
                            <div class="top_body_sk border_left border_top">
                                <div>电话</div>
                            </div>
                            <div class="top_body_sk2 border_left border_right border_top">
                                <div>{{ invoiceData.companyTel }}</div>
                            </div>
                        </div>
                        <div class="body8">
                            <div class="top_body_left border_left border_top">
                                <div>纳税人识别号</div>
                            </div>
                            <div class="top_body_left2 border_left border_top">
                                <div>{{ invoiceData.nsrsbh }}</div>
                            </div>
                            <div class="top_body_sk border_left border_top">
                                <div>账号</div>
                            </div>
                            <div class="top_body_sk2 border_left border_right border_top">
                                <div>{{ invoiceData.yhzh }}</div>
                            </div>
                        </div>
                        <div class="body9">
                            <div class="top_body_left border_left border_top">
                                <div>地址</div>
                            </div>
                            <div class="top_body_left2 border_left border_top">
                                <div>{{ invoiceData.address }}</div>
                            </div>
                            <div class="top_body_sk border_left border_top">
                                <div>开户银行</div>
                            </div>
                            <div class="top_body_sk2 border_left border_right border_top">
                                <div>{{ invoiceData.yhmc }}</div>
                            </div>
                        </div>
                        <div class="body10">
                            <div class="top_body_left border_left border_top">
                                <div>增值税税率</div>
                                <div>或征收率</div>
                            </div>
                            <div class="top_body_left2 border_left border_top">
                                <div>{{ invoiceData.sl }}</div>
                            </div>
                            <div class="top_body_left border_left border_top">
                                <div>增值税</div>
                                <div>税 额</div>
                            </div>
                            <div class="top_body_left2 border_left border_top">
                                <div>￥{{ invoiceData.hjse }}</div>
                            </div>
                            <div class="top_body_sk border_left border_top">
                                <div>主管税务</div>
                                <div>机关及代码</div>
                            </div>
                            <div class="top_body_sk2 border_left border_right border_top">
                                <div>{{ invoiceData.swjgmc }}</div>
                                <div>{{ invoiceData.swjgdm }}</div>
                            </div>
                        </div>
                        <div class="body11">
                            <div class="top_body_left border_left border_top">
                                <div>不含税价</div>
                            </div>
                            <div class="top_body_left border_left border_top">
                                <div>小写</div>
                            </div>
                            <div class="top_body_left2  border_top">
                                <div>￥{{ invoiceData.hjje }}</div>
                            </div>
                            <div class="top_body_left border_left border_top">
                                <div>完税凭证号码</div>
                            </div>
                            <div class="top_body_left2 border_left border_top">
                                <div>{{ invoiceData.wspzhm }}</div>
                            </div>
                            <div class="top_body_left border_left border_top">
                                <div>吨位</div>
                            </div>
                            <div class="top_body_left2 border_left border_top">
                                <div class="dw_fs">{{ invoiceData.cldw }}</div>
                            </div>
                            <div class="top_body_sk border_left border_top">
                                <div>限乘人数</div>
                            </div>
                            <div class="top_body_sk2 border_left border_right border_top">
                                <div>{{ invoiceData.xcrs }}</div>
                            </div>
                        </div>
                        <div class="body12">
                            <div class="top_body_left  border_top">
                                <div>销货单位盖章</div>
                            </div>
                            <div class="top_body_left2  border_top">
                                <div></div>
                            </div>
                            <div class="top_body_sk  border_top">
                                <div>开票人</div>
                            </div>
                            <div class="top_body_sk2   border_top">
                                <div>{{ invoiceData.drawer }}</div>
                            </div>
                            <div class="top_body_sk   border_top">
                                <div>备注:一车一票</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div slot="footer" class="dialog-footer-invoice">
                <!-- <el-button type="primary" @click="printComponent('myComponent')">打 印</el-button> -->
                <!-- <el-button @click="cancel()">取 消</el-button> -->
            </div>
        <!-- </el-dialog> -->
    </div>
</template>

<script>
import { roundFixed, formatToDate } from "../src/utils/index";
import { Decimal } from '../src/utils/decimal.js'
// import QRCode from '../src/utils/qrcode/bin/qrcode';


export default {
    props: {
        invoiceData: {
            type: Object,
            default: {
            }
        },
    },
    data() {
        
        return {
            qrCodeDataOne: '',
            invoiceDataDrawer: this.$store.state.user.personalName,
            open: false,
        };
    },
    computed: {
        qrCodeData() {
            const QRCode = require('../src/utils/qrcode');
            const { xxhj, updateTime } = this.invoiceData;
            let ewms = '01,01,' + '' + ',' + '23312000000000000000' + ',' + xxhj + ',' + updateTime + ',' + '' + ',' + '727C'
            QRCode.toDataURL(ewms)
                .then(dataUrl => {
                    this.qrCodeDataOne = dataUrl;
                })
                .catch(error => {
                    console.error(error);
                });
            return this.qrCodeDataOne

        },
    },
    watch: {},
    created() {
        console.log(this.invoiceData);
    },
    mounted() {

    },
    methods: {
        invoiceTypeSpecial(dict, row) {
            if (row.elementCode == '00') {
                return '';
            } else {
                return this.selectDictLabel(dict, row.elementCode);
            }

        },
        getDate2(data) {
            return formatToDate(data)
        },
        invoiceTypeFormat(dict, row) {
            return this.selectDictLabel(dict, row.invoiceType);
        },
        SLFormat(dict, row) {
            return this.selectDictLabel(dict, row.taxRate);
        },
        getRoundFixed(data) {
            return roundFixed(data, 2)
        },
        getRoundFixedAdd(one, two) {
            if (one < 0) {
                let dataAdd = one + two
                return roundFixed(dataAdd, 2)
            } else {
                let dataAdd = one - two
                return roundFixed(dataAdd, 2)
            }
        },
        getHeight(index) {
            if (this.invoiceData.details.length == 1) {
                return 90
            } else if (this.invoiceData.details.length == 2) {
                if (index == 0) {
                    return 30
                } else {
                    return 60
                }
            } else {
                return 30
            }
        },
        getRoundFixed6(data) {
            console.log(data.quantity, 'data.quantity');
            if (!data.quantity) {
                return null;
            } else {
                let unit = Decimal(Number(data.unitPrice)).mul(Decimal(Number(data.quantity))).div(Decimal(Number(data.taxRate) + 1)).div(Decimal(Number(data.quantity)))
                return roundFixed(Number(unit), 8)
            }
        },
        // 取消按钮
        cancel() {
            this.open = false;
        },
        openlateInvoice() {
            this.open = true;
        }
    },
}
</script>

<style lang="scss" scoped>
.invoice-dialog :deep .el-dialog__body {
    padding: 0 20px;
}

.dialog-footer-invoice {
    width: 100%;
    display: flex;
    justify-content: flex-end;
}

.yz {
    top: -88px;
    position: relative;
    right: 35px;
    float: right;
    transform: rotate(-31deg);
}

.yz2 {
    // top: -65px;
    // position: relative;
    // right: 5px;
    // float: right;
    // transform: rotate(-31deg);
    top: -63px;
    position: relative;
    right: -360px;
    float: left;
}

/* 发票详情展示 */
.invoice-box {
    // border: 2px solid #902121;
    width: 1060px;
    font-size: 15px;
    margin: 0 auto;
    background: #fff;
}


.invoice-box code {
    color: #000;
    box-shadow: none;
    background: none;
    display: block;
    border: 0;
    font-size: 18px;
    font-family: Menlo, Monaco, Consolas, "Courier New", monospace;
}

.top {
    height: 150px;
    position: relative;
    border: none;
    overflow: hidden;

    .title {
        width: 320px;
        margin: 0 auto;
        // padding-bottom: 2px;
        // border-bottom: 1px solid #983232;
        position: relative;
        display: flex;
        flex-direction: column;

        .title_fpl {
            font-size: 25px;
            text-align: center;
            padding-bottom: 18px;
            font-weight: 500;
            color: #9e5210;
            letter-spacing: 4px;
            // border-bottom: 1px solid #800000;
            letter-spacing: 4px;
        }

        .el-image {
            position: absolute;
            width: 140px;
            left: 135px;
            top: 0px;
        }

        h1 {
            font-size: 30px;
            text-align: center;
            margin: 60px auto 0;
            // padding-bottom: 18px;
            font-family: "楷体";
            font-weight: 500;
            color: #9e5210;
            letter-spacing: 4px;
            // border-bottom: 1px solid #800000;
            letter-spacing: 4px;
        }
    }
}

.invoice-box .tips-box {
    height: 30px;
    line-height: 30px;
    position: absolute;
    top: 110px;
    left: 18px;
}

// .invoice-box .tips-box span {
//   display: inline-block;
//   height: 30px;
//   line-height: 30px;
//   color: #000;
//   margin-right: 5px;
//   font-weight: bold;
//   font-size: 14px;
// }

.invoice-box .top img {
    position: absolute;
    width: 100px;
    height: 100px;
    left: 10px;
    top: 20px;
}

.border_top {
    border-top: 1px solid #902121;
}

.border_left {
    border-left: 1px solid #902121;
}

.border_right {
    border-right: 1px solid #902121;
}

.top_body_left {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    font-size: 14px;
    font-family: "楷体";
    letter-spacing: 1px;
    text-align: center;
    color: #9e5210;
}

.top_body_left2 {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;
    font-size: 14px;
    letter-spacing: 1px;
    text-align: center;
    color: #606266;
    padding-left: 5px;
}

.pl_30 {
    padding-left: 30px !important;
}

.top_body_sk {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    font-size: 14px;
    font-family: "楷体";
    letter-spacing: 1px;
    text-align: center;
    color: #9e5210;
}

.top_body_sk2 {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;
    font-size: 14px;
    letter-spacing: 1px;
    text-align: center;
    color: #606266;
    padding-left: 5px;
}

.body {
    .body1 {
        display: grid;
        justify-content: center;
        grid-template-columns: 150px 300px 35px 540px;
        grid-template-rows: 90px;
    }

    .body2 {
        display: grid;
        justify-content: center;
        grid-template-columns: 150px 335px 220px 320px;
        grid-template-rows: 80px;
    }

    .body3 {
        display: grid;
        justify-content: center;
        grid-template-columns: 150px 220px 80px 340px 50px 185px;
        grid-template-rows: 30px;
    }

    .body4 {
        display: grid;
        justify-content: center;
        grid-template-columns: 150px 220px 120px 270px 80px 185px;
        grid-template-rows: 30px;
    }

    .body5 {
        display: grid;
        justify-content: center;
        grid-template-columns: 150px 340px 215px 320px;
        grid-template-rows: 30px;
    }

    .body6 {
        display: grid;
        justify-content: center;
        grid-template-columns: 150px 580px 65px 230px;
        grid-template-rows: 30px;
    }

    .body7 {
        display: grid;
        justify-content: center;
        grid-template-columns: 150px 510px 75px 290px;
        grid-template-rows: 30px;
    }

    .body8 {
        display: grid;
        justify-content: center;
        grid-template-columns: 150px 510px 75px 290px;
        grid-template-rows: 30px;
    }

    .body9 {
        display: grid;
        justify-content: center;
        grid-template-columns: 150px 390px 100px 385px;
        grid-template-rows: 30px;
    }

    .body10 {
        display: grid;
        justify-content: center;
        grid-template-columns: 150px 130px 90px 190px 100px 365px;
        grid-template-rows: 60px;
    }

    .body11 {
        display: grid;
        justify-content: center;
        grid-template-columns: 150px 50px 200px 115px 240px 50px 70px 80px 70px;
        grid-template-rows: 30px;
    }

    .body12 {
        display: grid;
        justify-content: center;
        grid-template-columns: 150px 260px 90px 245px 280px;
        grid-template-rows: 60px;
    }

    .dw_fs {
        font-size: 14px;
    }
}
</style>

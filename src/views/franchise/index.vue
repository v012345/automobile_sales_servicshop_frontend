<template>
    <div style="width:100vw;overflow:hidden">
        <div>
            <van-image width="100vw" :src="$backend + config.franchise_banner" />
        </div>
        <div>
            <van-field
                v-model="form.division"
                is-link
                readonly
                label="区域"
                placeholder="区域选择"
                @click="showCityPicker = true"
            />
            <!-- <van-field
                v-model="form.brand"
                is-link
                readonly
                label="品牌"
                placeholder="品牌选择"
                @click="showBrandPicker = true"
            />-->
            <van-field v-model="form.brand" label="品牌" />
            <van-field v-model="form.shop" label="店名" />
            <van-field v-model="form.name" label="姓名" />
            <van-field v-model="form.phone_number" type="tel" label="手机" />
            <van-field v-model="form.job_title" label="职位" />
            <!-- <van-field label="职位">
                <template #input>
                    <van-radio-group v-model="form.job_title" direction="horizontal">
                        <van-radio name="店总">店总</van-radio>
                        <van-radio name="市场">市场</van-radio>
                        <van-radio name="售后">售后</van-radio>
                        <van-radio name="其他">其他</van-radio>
                    </van-radio-group>
                </template>
            </van-field>-->

            <van-button @click="franchise" type="warning" block>立即报名</van-button>
        </div>
        <div>
            <van-grid direction="horizontal" :column-num="5">
                <van-grid-item text="序号" />
                <van-grid-item text="城市" />
                <van-grid-item text="品牌" />
                <van-grid-item text="售卡" />
                <van-grid-item text="转介绍" />
            </van-grid>
            <van-grid
                v-for="(franchisee, i) in franchisees"
                :key="franchisee.id"
                direction="horizontal"
                :column-num="5"
            >
                <van-grid-item :text="(i + 1).toString()" />
                <van-grid-item :text="franchisee.city" />
                <van-grid-item :text="franchisee.brand" />
                <van-grid-item :text="franchisee.sale_number.toString()" />
                <van-grid-item :text="parseInt(franchisee.rate * 100) + '%'" />
            </van-grid>
        </div>
        <div>
            <van-popup v-model="showBrandPicker" position="bottom">
                <!-- <van-search v-model="brand" placeholder="Placeholder" /> -->
                <van-tree-select
                    :items="brands"
                    :active-id.sync="activeId"
                    :main-active-index.sync="activeIndex"
                    @click-item="selectBrand"
                />
            </van-popup>
        </div>
        <div>
            <van-popup v-model="showCityPicker" round position="bottom">
                <van-cascader
                    v-model="code"
                    title="区域选择"
                    :options="administrative_division_codes"
                    @close="showCityPicker = false"
                    @finish="onFinish"
                />
            </van-popup>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import { Toast } from "vant";

export default {
    data() {
        return {
            form: {
                brand: undefined,
                shop: undefined,
                job_title: undefined,
                name: undefined,
                phone_number: undefined,
                division: undefined
            },
            brand: "",
            brands: [],
            activeId: 2,
            activeIndex: 0,
            showCityPicker: false,
            showBrandPicker: false,
            code: "",
            franchisees: [],
            administrative_division_codes: [],

        }
    },
    methods: {
        onFinish({ selectedOptions }) {
            this.showCityPicker = false;
            this.form.division = selectedOptions.map((option) => option.text).join('/');
        },
        selectBrand(e) {
            this.form.brand = e.text
            this.showBrandPicker = false

        },
        franchise() {
            const { brand, shop, job_title, name, phone_number, division } = this.form
            if (!(brand && shop && job_title && name && phone_number && division)) {
                Toast({ message: "请输入完整信息" })
                return
            }
            this.axios.post(this.$api + "franchisee/franchise", {
                ...this.form,
                open_id: this.user.open_id,
                user_id: this.user.id,

            }).then(() => {
                Toast({ message: "报名成功" })
                this.form = {
                    brand: undefined,
                    shop: undefined,
                    job_title: undefined,
                    name: undefined,
                    phone_number: undefined,
                    division: undefined
                }
            })
        }
    },
    computed: {
        ...mapState(['user', "config"]),
    },
    created() {
        if (localStorage.getItem("franchisees")) {
            this.franchisees = JSON.parse(localStorage.getItem("franchisees"));
        }
        this.axios.get(this.$api + "franchisees").then((response) => {
            this.franchisees = response.data
            localStorage.setItem("franchisees", JSON.stringify(response.data))
            // console.log(response.data);
        })
        this.axios.get(this.$api + "brands").then((response) => {
            // 
            response.data.forEach(e => {
                e.text = e.main_brand
                let temp = [];
                let id = 1;
                e.sub_brands.forEach(b => {
                    temp.push({
                        text: b,
                        id: id++
                    })
                })
                e.children = temp;
            })
            this.brands = response.data
        })
        this.axios.get(this.$api + "administrative_division_codes").then((response) => {
            response.data.forEach(element => {
                element.text = element.division
                element.value = element.code
                if (element.cities.length > 0) {
                    element.cities.forEach((c) => {
                        c.text = c.division
                        c.value = c.code
                    })
                    element.children = element.cities
                } else {
                    element.children = [
                        { text: element.division, value: element.code }
                    ]
                }
            });
            this.administrative_division_codes = response.data
        })

    }
}
</script>

<style lang="less" scoped>
// /deep/ van-grid van-hai
// /deep/ van-grid van-hai
// /deep/ van-grid van-hairline--top {
//     &:first-child {
//         width: 10px;
//     }
// }
// /deep/ .van-grid-item__text {
//     white-space: nowrap;
// }
/deep/ .van-grid-item__content {
    padding: 8px 0px;
}
/deep/ .van-grid-item__text {
    font-size: 0.65rem;
}

<template>
  <div class="van-coupon" :class="{ 'van-coupon--disabled': !available }" style="margin-top: 1rem">
    <div class="van-coupon__content">
      <div class="van-coupon__head">
        <template v-if="type == 'normal'">
          <h2 class="van-coupon__amount">{{ value }}<span>元</span></h2>
        </template>
        <template v-else>
          <!-- <h2 class="van-coupon__amount">收纳箱</h2> -->
          <h2 class="van-coupon__amount"><span style="font-size:1.5rem">{{ gift }}</span> </h2>
        </template>

        <p class="van-coupon__condition">请到门店使用</p>
      </div>
      <div class="van-coupon__body">
        <p class="van-coupon__name">{{ type == "normal" ? "保养服务" : "礼品券" }}</p>
        <p class="van-coupon__valid">
          {{ $dayjs(allow_to_use_at).format("YYYY-MM-DD") }} 至
          {{ $dayjs(expire_at).format("YYYY-MM-DD") }}
        </p>
      </div>
      <div class="right_button">
        <template v-if="available">
          <van-button type="danger"><span class="text1">已生效</span> </van-button>
        </template>
        <template v-else>
          <van-button color="#cfcfcf" disabled><span class="text1">未生效</span> </van-button>
        </template>

      </div>

    </div>
    <p class="van-coupon__description">{{ description }}</p>
  </div>
</template>

<script>
export default {
  name: "Coupon",
  // props: ["value", "allow_to_use_at", "expire_at", "available", "description"],
  data() {
    return {
      gift: "收纳箱",
    }
  },
  props: {
    value: {},
    allow_to_use_at: {},
    expire_at: {},
    available: {},
    description: {},
    type: { default: "normal" }
  },
};
</script>
<style lang="less" scoped>
.right_button {
  margin-right: 5px;

  .text1 {
    font-size: 0.8rem;
  }

  .text2 {
    font-size: 0.5rem;
  }

}
</style>
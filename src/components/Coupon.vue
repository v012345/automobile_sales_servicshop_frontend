<template>
  <div class="van-coupon" :class="{ 'van-coupon--disabled': !available }" style="margin-top: 1rem">
    <div class="van-coupon__content">
      <div class="van-coupon__head">
        <h2 class="van-coupon__amount">{{ value }}<span>元</span></h2>
        <p class="van-coupon__condition">请到门店使用</p>
      </div>
      <div class="van-coupon__body">
        <p class="van-coupon__name">优惠券</p>
        <p class="van-coupon__valid">
          {{ $dayjs(allow_to_use_at).format("YYYY-MM-DD") }} 至
          {{ $dayjs(expire_at).format("YYYY-MM-DD") }}
        </p>
      </div>
      <div class="right_button">
        <template v-if="available">
          <van-button type="danger"><span class="text1">点击生成<br>二维码</span> </van-button>
        </template>
        <template v-else>
          <van-button disabled><span class="text2">通过海报<br>邀请好友<br>激活此券</span> </van-button>
        </template>

      </div>

    </div>
    <p class="van-coupon__description">{{ description }}</p>
  </div>
</template>

<script>
export default {
  name: "Coupon",
  props: ["value", "allow_to_use_at", "expire_at", "available", "description"],
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
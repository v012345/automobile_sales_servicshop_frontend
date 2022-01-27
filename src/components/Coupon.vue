<template>
  <div class="van-coupon__content">
    <div class="van-coupon__head">
      <h2 class="van-coupon__amount">{{ value }}<span>元</span></h2>
      <p class="van-coupon__condition">无使用门槛</p>
    </div>
    <div class="van-coupon__body">
      <p class="van-coupon__name">优惠券</p>
      <p class="van-coupon__valid">{{ allow_to_use_at }} 至 {{ expire_at }}</p>
      <div
        role="checkbox"
        tabindex="0"
        aria-checked="true"
        class="van-checkbox van-coupon__corner"
        size="18"
      >
        <div
          class="
            van-checkbox__icon
            van-checkbox__icon--round
            van-checkbox__icon--checked
          "
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Coupon",
  props: ["value", "allow_to_use_at", "expire_at","state"],
};
</script>
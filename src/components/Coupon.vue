<template>
  <div
    class="van-coupon"
    :class="{ 'van-coupon--disabled': !available }"
    style="margin-top: 1rem"
  >
    <div class="van-coupon__content">
      <div class="van-coupon__head">
        <h2 class="van-coupon__amount">{{ value }}<span>元</span></h2>
        <p class="van-coupon__condition">无使用门槛</p>
      </div>
      <div class="van-coupon__body">
        <p class="van-coupon__name">优惠券</p>
        <p class="van-coupon__valid">
          {{ $dayjs(allow_to_use_at).format("YYYY-MM-DD") }} 至
          {{ $dayjs(expire_at).format("YYYY-MM-DD") }}
        </p>
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
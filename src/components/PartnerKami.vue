<template>
  <div class="container w-screen flex justify-center mx-auto">
    <div class="grid p-14">
      <h3
        class="p-14 before:absolute before:bg-blue-400 before:empty-content bg-[url('/public/Hero.png')]"
      >
        Partner Kami
      </h3>
      <div class="grid grid-cols-2 gap-10 gap-x-14">
        <!-- Airbnb -->
        <AirBnb />
        <!-- HubSpot -->
        <HubSpot />
        <!-- Google -->
        <Google />
        <!-- Microsoft -->
        <Microsoft />
        <!-- Walmart -->
        <Walmart />
        <!-- FedEx -->
        <FedEx />
      </div>
    </div>
  </div>
</template>

<script>
import Google from '@/assets/icons/partners/Google'
import AirBnb from '@/assets/icons/partners/AirBnb'
import FedEx from '@/assets/icons/partners/FedEx'
import HubSpot from '@/assets/icons/partners/HubSpot'
import Microsoft from '@/assets/icons/partners/Microsoft'
import Walmart from '@/assets/icons/partners/Walmart'
export default {
  components: {
    Google,
    AirBnb,
    FedEx,
    HubSpot,
    Microsoft,
    Walmart,
  },
}
</script>

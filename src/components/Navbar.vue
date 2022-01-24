<template>
  <nav class="w-screen bg-gray sticky">
    <div class="flex justify-between items-center bg-gray-200 p-6 sticky">
      <!-- Icon -->
      <Logo />
      <div></div>
      <!-- Navbutton -->
      <div class=" ">
        <Menu class="" />
      </div>
    </div>
  </nav>
</template>

<script>
import Logo from "@/assets/icons/Logo";
import Menu from "@/assets/icons/Menu";
export default {
  components: {
    Logo,
    Menu,
  },
};
</script>

<style></style>

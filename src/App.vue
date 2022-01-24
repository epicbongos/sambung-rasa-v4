<template>
  <div id="app">
    <div class="container mx-auto px-20">
      <div
        class="fixed flex justify-end items-end content-end bg-blue-300 bottom-0 right-0 rounded-tl-lg transparent text-sky-100 border-l-8 z-50 opacity-90"
      >
        <router-link class="px-2" to="/">home</router-link>
        <router-link class="px-2" to="/LandingPage1">LandingPage1</router-link>
        <router-link class="px-2" to="/LandingPage2">LandingPage2</router-link>
      </div>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss" scoped>
$link-light-blue: #5182de;

.router-link-exact-active {
  background-color: indianred;
  cursor: pointer;
}
</style>

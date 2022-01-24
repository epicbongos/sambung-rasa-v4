<template>
  <body class="min-h-screen">
    <div class="flex"></div>
    <div>
      <Navbar />
    </div>
    <div>
      <Hero />
    </div>
    <!-- Info component-->
    <div></div>
    <!-- Intro-->
    <div></div>
    <!-- Program Pilihan -->
    <div></div>
    <!-- Feedback -->
    <div>
      <Feedback />
    </div>
    <div>
      <PartnerKami />
    </div>
    <footer class="">
      <Footer />
    </footer>
  </body>
</template>

<script>
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PartnerKami from "@/components/PartnerKami";
import Feedback from "@/components/Feedback";
import Hero from "@/components/Hero";

export default {
  name: "Home",
  components: {
    Navbar,
    Footer,
    PartnerKami,
    Feedback,
    Hero,
  },
};
</script>

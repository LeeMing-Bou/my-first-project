<template>
  <!-- <MainHeader></MainHeader> -->
  <HeaderPage></HeaderPage>
  <ServiceSection></ServiceSection>
  <AboutUs></AboutUs>
  <WhySection></WhySection>
  <TeamSection></TeamSection>
  <ClientSection></ClientSection>
</template>

<!-- "@"" Start from root to direction -->

<script>
// import MainHeader from "@/components/MainHeader.vue";
import HeaderPage from "@/components/HeaderPage.vue";
import ServiceSection from "@/components/ServiceSection.vue";
import AboutUs from "@/components/AboutUs.vue";
import WhySection from "@/components/WhySection.vue";
import TeamSection from "@/components/TeamSection.vue";
import ClientSection from "@/components/ClientSection.vue";

export default {
  name: "App",
  components: {
    // MainHeader,
    HeaderPage,
    ServiceSection,
    AboutUs,
    WhySection,
    TeamSection,
    ClientSection,
  },
};
</script>

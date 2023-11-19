<template>
  <div class="home">
    <LayoutWrapper></LayoutWrapper>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import LayoutWrapper from "@/components/organisms/LayoutWrapper.vue";

@Options({
  components: {
    LayoutWrapper,
  },
})
export default class LayoutWrapper extends Vue {}
</script>

<template>
  <UserInformationForm v-if="stepId === '1'" />
  <SummaryForm v-if="stepId === '2'" />
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import UserInformationForm from "@/components/form/UserInformationForm.vue";
import SummaryForm from "@/components/form/SummaryForm.vue";

const route = useRoute();

const stepId = computed(() => {
  return route.params && route.params.stepid;
});
</script>

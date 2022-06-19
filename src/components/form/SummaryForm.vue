<template>
  <div
    class="w-1/2 bg-gray-100 pt-12 pb-16 text-center bg-white shadow-md rounded-xl"
  >
    <div class="text-4xl text-black font-semibold leading-7 pb-8 text-teal-400">
      Summary
    </div>
    <hr />
    <div class="text-2xl text-black font-semibold leading-7 pt-12">
      {{ user.name }},
    </div>
    <ul class="space-y-4 mt-8">
      <li>
        Name: <span class="pl-1">{{ user.name }}</span>
      </li>
      <li>
        Age: <span class="pl-1">{{ user.age }}</span>
      </li>
      <li>
        Where do you live: <span class="pl-1">{{ user.country }}</span>
      </li>
      <li>
        Package:
        <span class="pl-1">{{ plans[user.planType].title }}</span>
      </li>
      <li>
        Premium: <span class="pl-1">{{ premiumTotal }}</span>
      </li>
    </ul>
    <div class="flex space-x-4 justify-center items-center mt-16">
      <button
        id="backBtn"
        class="text-black border border-black text-base py-1.5 px-20 rounded-md"
        @click="goBack"
      >
        Back
      </button>
      <button
        id="buyBtn"
        class="text-white border border-emerald-400 bg-emerald-500 hover:bg-emerald-400 text-base py-1.5 px-20 rounded-md"
        @click="goToNext"
      >
        Buy
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

const router = useRouter();
const store = useStore();

const user = computed(() => store.state.user);
const plans = computed(() => store.getters["getPlans"]);
const premiumTotal = computed(() => store.getters["premiumTotal"]);

// buy insurance
function goToNext() {
  store.commit("buyInsurance", true);
  store.commit("resetForm");
  router.push("/");
}

// go back to previous form
function goBack() {
  router.push("/step/1");
}
</script>

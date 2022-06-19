<template>
  <div class="w-1/2 pb-14 text-center bg-white shadow-md rounded-xl">
    <div
      v-if="isBuyInsurance"
      class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative text-left"
      role="alert"
    >
      <strong class="font-bold">Thanks for buying insurance!</strong>
      <span
        @click="isBuyInsurance = false"
        class="absolute top-0 bottom-0 right-0 px-4 py-3"
      >
        <svg
          class="fill-current h-6 w-6 text-green-500"
          role="button"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <title>Close</title>
          <path
            d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"
          />
        </svg>
      </span>
    </div>
    <div class="text-4xl text-teal-400 font-bold leading-7 mt-20">
      Hello There!
    </div>
    <div
      class="text-lg text-gray-700 font-normal leading-6 tracking-wider pt-12 pb-8"
    >
      Let's buy some insurance. It is going to take only a few steps
    </div>
    <div class="mb-8 mt-8">
      <button
        type="button"
        class="text-white bg-emerald-500 hover:bg-emerald-400 text-2xl py-4 px-24 rounded-md cursor-pointer"
        @click="goToWizard"
      >
        Start
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const router = useRouter();
const store = useStore();

const isBuyInsurance = computed({
  get() {
    return store.state.isBuyInsurance;
  },
  set(newValue: boolean) {
    store.commit("buyInsurance", newValue);
  },
});

// go to wizard page
function goToWizard() {
  isBuyInsurance.value = false;
  router.push("/step/1");
}
</script>

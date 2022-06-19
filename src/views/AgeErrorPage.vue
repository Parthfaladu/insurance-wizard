<template>
  <div
    class="w-1/2 bg-gray-100 pt-20 pb-14 text-center bg-white shadow-md rounded-xl"
  >
    <div class="text-4xl text-black font-bold leading-7">Ooops</div>
    <div
      class="text-lg text-gray-700 font-normal leading-6 tracking-wider pt-12 pb-8"
    >
      Your age is over our accepted limit. <br />
      We are sorry but we can not insure you now
    </div>
    <div class="mt-8">
      <button
        id="okBtn"
        type="button"
        class="text-white bg-black hover:bg-zinc-800 text-lg py-2 px-36 rounded-md"
        @click="goToStart"
      >
        Ok :(
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useStore } from "vuex";
import { useRouter } from "vue-router";

const router = useRouter();
const store = useStore();

function goToStart() {
  store.commit("resetForm");
  router.push("/");
}
</script>

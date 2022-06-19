<template>
  <div class="w-3/4 bg-gray-100 pt-12 pb-16 bg-white shadow-md rounded-xl">
    <div
      class="text-4xl text-teal-400 font-semibold leading-7 text-center pb-8"
    >
      Tell us about yourself
    </div>
    <hr />
    <form>
      <div class="grid grid-cols-1 gap-4 justify-items-center mt-8">
        <div class="w-3/4">
          <label
            class="text-gray-700 dark:text-gray-200 flex items-start"
            for="username"
            >Name</label
          >
          <input
            v-model="name"
            id="name"
            type="text"
            placeholder="Add text"
            class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
          />
        </div>

        <div class="w-3/4">
          <label
            class="text-gray-700 dark:text-gray-200 flex items-start"
            for="age"
            >Age</label
          >
          <input
            v-model.number="age"
            id="age"
            type="number"
            placeholder="50"
            class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
          />
        </div>

        <div class="w-3/4 mb-6 md:mb-0 pt-1">
          <label
            class="text-gray-700 dark:text-gray-200 flex items-start"
            for="country"
            >Where do you live</label
          >

          <div class="relative mt-2">
            <select
              v-model="country"
              class="block appearance-none w-full border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="country"
            >
              <option
                v-for="(country, key, index) in countryList"
                :key="index"
                :value="key"
              >
                {{ key }}
              </option>
            </select>
            <div
              class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-caret-down-fill"
                viewBox="0 0 16 16"
              >
                <path
                  d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"
                />
              </svg>
            </div>
          </div>
        </div>
        <div class="w-3/4 grid grid-cols-2 gap-4 mt-4">
          <div
            v-for="(plan, planKey, index) in plans"
            class="flex items-center col-span-2"
            :key="index"
          >
            <label class="text-sm font-medium text-gray-900 dark:text-gray-300">
              <input
                v-model="planType"
                type="radio"
                :value="planKey"
                name="default-radio"
                class="text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <span class="ml-2">{{ plan.title }}</span></label
            >
          </div>
        </div>
        <div
          v-show="premiumTotal"
          class="text-xl text-black font-semibold leading-7 pt-12"
        >
          Your premium is: <span id="premiumTotal">{{ premiumTotal }}</span>
        </div>
        <div class="flex mt-8 items-center">
          <button
            type="button"
            id="backBtn"
            class="text-black border border-black text-base py-1.5 px-20 rounded-md"
            @click="goToBack"
          >
            Back
          </button>
          <button
            type="button"
            id="nextBtn"
            class="text-white ml-4 text-base py-1.5 px-20 rounded-md border"
            :class="
              !name || !age
                ? 'border-gray-300 bg-gray-300 cursor-not-allowed'
                : 'border-emerald-400 bg-emerald-500 hover:bg-emerald-400 cursor-pointer'
            "
            :disabled="!name || !age"
            @click="goToNext"
          >
            Next
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

const router = useRouter();
const store = useStore();

// country list to display in dropdown
const countryList = ref(store.state.countryCode);

// as per selected country plan details
const plans = computed(() => store.getters["getPlans"]);

// premium total
const premiumTotal = computed(() => store.getters["premiumTotal"]);

// all computed for form fields with setters and getters from store
const name = computed({
  get() {
    return store.state.user.name;
  },
  set(newValue: string | null) {
    store.commit("setUser", { field: "name", value: newValue });
  },
});

const age = computed({
  get() {
    return store.state.user.age;
  },
  set(newValue: number | null) {
    store.commit("setUser", {
      field: "age",
      value: newValue,
    });
  },
});

const country = computed({
  get() {
    return store.state.user.country;
  },
  set(newValue: string | null) {
    store.commit("setUser", { field: "country", value: newValue });
  },
});

const planType = computed({
  get() {
    return store.state.user.planType;
  },
  set(newValue: string | null) {
    store.commit("setUser", { field: "planType", value: newValue });
  },
});

// go to next form
function goToNext() {
  if (age.value && age.value >= 100) {
    store.commit("resetForm");
    router.push("/age/error");
  } else {
    router.push("/step/2");
  }
}

// go to previous form
function goToBack() {
  router.push("/");
}
</script>

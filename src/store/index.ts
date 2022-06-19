import { createStore } from "vuex";

const SET_USER = "setUser";
const RESET_FORM = "resetForm";
const BUY_INSURANCE = "buyInsurance";

const initialUser = {
  name: null,
  age: null,
  country: "Hong Kong",
  planType: "standard",
};

const currencyRate: any = {
  HKD: 1,
  USD: 2,
  AUD: 3,
};

type CountryCode = {
  [key: string]: string;
};

type User = {
  name: string | null;
  age: number | null;
  country: string;
  planType: string;
};

type Plans = {
  [key: string]: {
    title: string;
    price: number;
  };
};

export interface State {
  isBuyInsurance: boolean;
  user: User;
  plans: Plans;
  countryCode: CountryCode;
}

export default createStore<State>({
  state: {
    user: Object.assign({}, initialUser), // assign initial user object copy
    isBuyInsurance: false,
    plans: {
      standard: {
        title: "Standard",
        price: 10,
      },
      safe: {
        title: "Safe (50%)",
        price: 15,
      },
      superSafe: {
        title: "Super Safe (75%)",
        price: 17.5,
      },
    },
    countryCode: {
      "Hong Kong": "HKD",
      USA: "USD",
      Australia: "AUD",
    },
  },
  getters: {
    // get selected country rate
    getCurrencyRate(state: any, getters) {
      return currencyRate[getters["getCountryCode"]];
    },
    // get selected country code
    getCountryCode(state: State) {
      return state.countryCode[state.user.country];
    },
    premiumTotal(state: State, getters) {
      const age = state.user.age;
      const planType = state.user.planType;
      const country = state.user.country;

      if (age && planType && country) {
        // calculate total premium using (age * plan base price * rate) formula
        return `${
          age * state.plans[planType].price * getters["getCurrencyRate"]
        } ${getters["getCountryCode"]}`;
      }
      return null;
    },
    getPlans(state: State, getters) {
      for (const planType in state.plans) {
        const plan = state.plans[planType];
        if (planType === "safe") {
          plan.title = state.user.age
            ? `Safe ( ${state.user.age * getters["getCurrencyRate"] * 5} ${
                getters["getCountryCode"]
              } 50%)`
            : `Safe (50%)`;
        } else if (planType === "superSafe") {
          plan.title = state.user.age
            ? `Super Safe ( ${
                state.user.age * getters["getCurrencyRate"] * 7.5
              } ${getters["getCountryCode"]} 75%)`
            : `Super Safe (75%)`;
        }
      }
      return state.plans;
    },
  },
  mutations: {
    [SET_USER]: (state: any, { field, value }): void => {
      state.user[field] = value;
    },
    [BUY_INSURANCE]: (state: any, status: boolean): void => {
      state.isBuyInsurance = status;
    },
    // reset form
    [RESET_FORM]: (state: State): void => {
      state.user = initialUser;
    },
  },
  actions: {},
  modules: {},
});

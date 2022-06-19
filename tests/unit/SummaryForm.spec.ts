import { mount } from "@vue/test-utils";
import SummaryForm from "@/components/form/SummaryForm.vue";
import { createRouterMock, injectRouterMock } from "vue-router-mock";
import store from "@/store";

describe("SummaryForm.vue", () => {
  it("buy premium", async () => {
    const router = createRouterMock();
    injectRouterMock(router);

    const wrapper = mount(SummaryForm, {
      global: {
        provide: {
          store: store,
        },
      },
    });

    await wrapper.find("#buyBtn").trigger("click");

    expect(router.push).toHaveBeenCalledWith("/");
  });

  it("go back to previous wizard step", async () => {
    const router = createRouterMock();
    injectRouterMock(router);

    const wrapper = mount(SummaryForm, {
      global: {
        provide: {
          store: store,
        },
      },
    });

    await wrapper.find("#backBtn").trigger("click");

    expect(router.push).toHaveBeenCalledWith("/step/1");
  });
});

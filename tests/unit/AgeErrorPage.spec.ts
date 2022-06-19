import { mount } from "@vue/test-utils";
import AgeErrorPage from "@/views/AgeErrorPage.vue";
import { createRouterMock, injectRouterMock } from "vue-router-mock";
import store from "@/store";

describe("AgeErrorPage.vue", () => {
  it("go to start page", async () => {
    const router = createRouterMock();
    injectRouterMock(router);

    const wrapper = mount(AgeErrorPage, {
      global: {
        provide: {
          store: store,
        },
      },
    });

    await wrapper.find("#okBtn").trigger("click");

    expect(router.push).toHaveBeenCalledWith("/");
  });
});

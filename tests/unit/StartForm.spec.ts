import { mount } from "@vue/test-utils";
import StartForm from "@/components/form/StartForm.vue";
import { createRouterMock, injectRouterMock } from "vue-router-mock";
import store from "@/store";

describe("StartForm.vue", () => {
  it("display user information form", async () => {
    const router = createRouterMock();
    injectRouterMock(router);

    const wrapper = mount(StartForm, {
      global: {
        provide: {
          store: store,
        },
      },
    });

    await wrapper.find("button").trigger("click");

    expect(router.push).toHaveBeenCalledWith("/step/1");
  });
});

import { mount } from "@vue/test-utils";
import UserInformationForm from "@/components/form/UserInformationForm.vue";
import { createRouterMock, injectRouterMock } from "vue-router-mock";
import store from "@/store";

describe("UserInformationForm.vue", () => {
  it("validate premium total", async () => {
    const router = createRouterMock();
    injectRouterMock(router);

    const wrapper = mount(UserInformationForm, {
      global: {
        provide: {
          store: store,
        },
      },
    });

    await wrapper.find("#age").setValue(50);
    await wrapper.find("#country").setValue("USA");

    expect(wrapper.find("#premiumTotal").text()).toBe("1000 USD");
  });

  it("go to next page", async () => {
    const router = createRouterMock();
    injectRouterMock(router);

    const wrapper = mount(UserInformationForm, {
      global: {
        provide: {
          store: store,
        },
      },
    });

    await wrapper.find("#name").setValue("parth patel");
    await wrapper.find("#age").setValue(50);
    await wrapper.find("#country").setValue("USA");
    await wrapper.find("#nextBtn").trigger("click");

    expect(router.push).toHaveBeenCalledWith("/step/2");
  });

  it("is display age error page", async () => {
    const router = createRouterMock();
    injectRouterMock(router);

    const wrapper = mount(UserInformationForm, {
      global: {
        provide: {
          store: store,
        },
      },
    });

    await wrapper.find("#name").setValue("parth patel");
    await wrapper.find("#age").setValue(101);
    await wrapper.find("#country").setValue("USA");
    await wrapper.find("#nextBtn").trigger("click");

    expect(router.push).toHaveBeenCalledWith("/age/error");
  });

  it("go back to start page", async () => {
    const router = createRouterMock();
    injectRouterMock(router);

    const wrapper = mount(UserInformationForm, {
      global: {
        provide: {
          store: store,
        },
      },
    });

    await wrapper.find("#backBtn").trigger("click");

    expect(router.push).toHaveBeenCalledWith("/");
  });
});

import { mount } from "@vue/test-utils";
import AppHeader from "@/components/AppHeader";

describe("AppHeader", () => {
  const wrapper = mount(AppHeader);
  test("if logged in is false show button", () => {
    expect(wrapper.find("button").isVisible()).toBe(false);
  });
  test("if logged in is true show button", async () => {
    wrapper.setData({ loggedIn: true });
    await wrapper.vm.$nextTick();
    expect(wrapper.find("button").isVisible()).toBe(true);
  });
});

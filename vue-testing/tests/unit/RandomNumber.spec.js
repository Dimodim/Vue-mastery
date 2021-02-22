import { mount } from "@vue/test-utils";
import RandomNumber from "@/components/RandomNumber";

describe("RandomNumber", () => {
  let wrapper = mount(RandomNumber);
  test("RandomNumber data value should be 0", () => {
    expect(wrapper.html()).toContain('<span>0</span>');
  });
  test("RandomNumber data value should change on click", async () => {
      wrapper.find('button').trigger('click');
      await wrapper.vm.$nextTick();
      const generatedNumber = parseInt(wrapper.find('span').element.textContent);
    expect(generatedNumber).toBeGreaterThanOrEqual(1);
    expect(generatedNumber).toBeLessThanOrEqual(10);
  });
  test("RandomNumber data value should be 0", async () => {
    wrapper = mount(RandomNumber,{
        propsData:{
            min: 200,
            max: 300
        }
    });
    wrapper.find('button').trigger('click');
    await wrapper.vm.$nextTick();
    const generatedNumber = parseInt(wrapper.find('span').element.textContent);
  expect(generatedNumber).toBeGreaterThanOrEqual(200);
  expect(generatedNumber).toBeLessThanOrEqual(300);
});
  
});

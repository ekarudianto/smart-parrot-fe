/* eslint-disable no-undef */
import { shallow } from '@vue/test-utils';
import App from '@/App.vue';
import Vue from 'vue';
import vueRouter from 'vue-router';

describe('App.vue', () => {
  let cmp;

  beforeEach(() => {
    Vue.use(vueRouter);
    cmp = shallow(App, { // Create a shallow instance of the component
      data: {
        messages: ['Cat'], // Insert fake data
      },
    });
  });

  it('equals name to "App"', () => {
    expect(cmp.name()).toEqual('App');
  });

  it('equals fake data messages to ["Cat"]', () => {
    expect(cmp.vm.messages).toEqual(['Cat']);
  });

  it('has the expected html structure', () => {
    expect(cmp.element).toMatchSnapshot();
  });
});

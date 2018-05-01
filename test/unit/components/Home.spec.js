/* eslint-disable no-undef */
import { shallow } from '@vue/test-utils';
import Home from '@/components/Home.vue';

describe('Home.vue', () => {
  let cmp;

  beforeEach(() => {
    cmp = shallow(Home, { // Create a shallow instance of the component
      data: {
        messages: ['Cat'], // Insert fake data
      },
    });
  });

  it('equals name to "Home"', () => {
    expect(cmp.name()).toEqual('Home');
  });

  it('equals fake data messages to ["Cat"]', () => {
    expect(cmp.vm.messages).toEqual(['Cat']);
  });

  it('has the expected html structure', () => {
    expect(cmp.element).toMatchSnapshot();
  });
});

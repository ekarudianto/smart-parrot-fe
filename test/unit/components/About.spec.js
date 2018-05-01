/* eslint-disable no-undef */
import { shallow } from '@vue/test-utils';
import About from '@/components/About.vue';

describe('About.vue', () => {
  let cmp;

  beforeEach(() => {
    cmp = shallow(About, { // Create a shallow instance of the component
      data: {
        messages: ['Cat'], // Insert fake data
      },
    });
  });

  it('equals name to "About"', () => {
    expect(cmp.name()).toEqual('About');
  });

  it('equals fake data messages to ["Cat"]', () => {
    expect(cmp.vm.messages).toEqual(['Cat']);
  });

  it('has the expected html structure', () => {
    expect(cmp.element).toMatchSnapshot();
  });
});

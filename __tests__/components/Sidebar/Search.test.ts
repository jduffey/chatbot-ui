import { it, describe, expect } from 'vitest';

import { render, screen } from '@testing-library/react';

import { Search } from '@/components/Sidebar/Search';

describe('Search', () => {
  it('should render', () => {
    const wrapper = mount(Search);
    expect(wrapper.html()).toMatchSnapshot();
  });
});

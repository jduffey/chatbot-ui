import { it, describe, expect } from 'vitest';

import { Search, Props } from '@/components/Sidebar/Search';

import { render, screen } from '@testing-library/react';

describe('Search', () => {
  it('should render', () => {
    const onSearch = (_searchTerm: string) => { };

    const props: Props = {
      placeholder: "PLACEHOLDER",
      searchTerm: "SEARCH_TERM",
      onSearch: onSearch,
    };

    const { container } = render(
      <Search>
    );

    expect(container.innerHTML).toMatchSnapshot();
  });
});

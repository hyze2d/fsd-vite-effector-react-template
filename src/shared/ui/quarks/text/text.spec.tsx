import { render } from '@testing-library/react';

import { Text } from './text';

describe('<Text />', () => {
  it('Should render without an error', () => {
    const result = render(<Text variant='body1'>Hello</Text>);

    expect(result.getByText('Hello')).toBeTruthy();
  });
});

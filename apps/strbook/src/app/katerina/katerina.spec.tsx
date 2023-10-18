import React from 'react';
import { render } from '@testing-library/react-native';

import Katerina from './katerina';

describe('Katerina', () => {
  it('should render successfully', () => {
    const { root } = render(< Katerina />);
    expect(root).toBeTruthy();
  });
});

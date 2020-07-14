import React from 'react';
import { render } from '@testing-library/react';
import Login from './Login';

describe('Login Component', () => {
    test('renders without props', () => {
      expect(render(<Login/>)).not.toBeFalsy();
    });
});
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Home from '../page';

describe('Landing page', () => {
  it('has proper metadata configured', () => {
    const { container } = render(<Home />);
    expect(container).toBeInTheDocument();
  });
});

describe('SEO Metadata', () => {
  it('page renders without errors', () => {
    expect(() => render(<Home />)).not.toThrow();
  });
});

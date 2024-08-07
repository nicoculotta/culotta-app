import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header', () => {
  it('render component', () => {
    const logoMock = <div data-testid="logo-mock">Logo</div>;
    const actionsMock = <div data-testid="actions-mock">Acciones</div>;

    render(<Header logo={logoMock} actions={actionsMock} />);

    expect(screen.getByTestId('logo-mock')).toBeDefined();
    expect(screen.getByTestId('actions-mock')).toBeDefined();
  });

  it('aplica las clases CSS correctamente', () => {
    const { container } = render(
      <Header logo={<div>Logo</div>} actions={<div>Acciones</div>} />
    );

    expect(container.firstChild).toHaveClass('header');
    expect(container.querySelector('.header__logo')).toBeDefined();
    expect(container.querySelector('.header__actions')).toBeDefined();
  });
});

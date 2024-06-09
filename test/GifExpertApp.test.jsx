import { fireEvent, getByRole, render, screen } from '@testing-library/react';
import { GifExpertApp } from '../src/GifExpertApp';
import { AddCategory } from '../src/components';


describe('Pruebas en <GifExpertApp />', () => {
  // Tratar de escribir en el input del form
  // Postear el formulario y evaluar el resultado
  // Tomar el snapshot
  // Enviar dos veces la misma categoría (No debería de poder enviarse)

  test('Tomar el snapshot', () => {

    const { container } = render( <GifExpertApp /> );
    expect( container ).toMatchSnapshot();
    
  });

  test('Tratar de escribir en el input del form', () => {

    render( <AddCategory onNewCategory={ () => {} } /> );
    const input = screen.getByRole( 'textbox' );

    fireEvent.input( input, { target: { value: 'One Punchman' }});
    expect( input.value ).toBe( 'One Punchman' );

  });

  test('Postear el formulario y evaluar el resultado', () => {

    const inputValue = 'One Punchman';
    const onNewCategory = jest.fn();

    render( <AddCategory onNewCategory={ onNewCategory } /> );

    const input = screen.getByRole( 'textbox' );
    const form = screen.getByRole( 'form' );

    fireEvent.input( input, { target: { value: inputValue }});
    fireEvent.submit( form );

    expect( input.value ).toBe('');
    expect( onNewCategory ).toHaveBeenCalled();
    expect( onNewCategory ).toHaveBeenCalledTimes(1);
    expect( onNewCategory ).toHaveBeenCalledWith( inputValue );

  });

});
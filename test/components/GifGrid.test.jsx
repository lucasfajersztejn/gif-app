import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');

describe('pruebas en <GifGrid />', () => {

  const category = 'One Punch';


  test('Debe de mostrar el loading inicialmente', () => {

    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true 
    });

    render( <GifGrid category={ category } /> );
    expect( screen.getByText( 'Cargando...' ) );
    expect( screen.getByText( category ) );
    screen.debug();

  });

  test('Debe de mostrar items cuando se cargan las imágenes useFetchGifs', () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true 
    });
  });

});
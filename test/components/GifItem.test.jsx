import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem"

describe('test on <GifItem />', () => {

  const title = 'Saitama'
  const url = `https://api.giphy.com/v1/gifs/search?api_key=xM25jB2FxNgSRzRmX4IM5cuc69lUFBIT&q=DragonBall&limit=10`;

  test('title and url are needed', () => {
    const { container } = render( <GifItem title={title} url={url}/> );
    expect( container ).toMatchSnapshot();    
  });

  test('Debe de mostrar la imagen con el URL y el ALT indicado', () => {
    render( <GifItem title={title} url={url}/> );
    // screen.debug();
    // expect( screen.getByRole('img').src ).toBe( url );
    // expect( screen.getByRole('img').alt ).toBe( title );
    const { src, alt } = screen.getByRole('img');
    expect( src ).toBe( url );
    expect( alt ).toBe( title );
  });

  test('Debe de mostrar el titulo del componente', () => {
    render( <GifItem title={title} url={url}/> );
    expect( screen.getByText( title ) ).toBeTruthy();
  });


});
import { render } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem"

describe('test on <GifItem />', () => {

  const title = 'title is needed'
  const url = `https://api.giphy.com/v1/gifs/search?api_key=xM25jB2FxNgSRzRmX4IM5cuc69lUFBIT&q=DragonBall&limit=10`;

  test('title and url are needed', () => {
    const { container } = render( <GifItem title={title} url={url}/> );
    expect( container ).toMatchSnapshot();    
  })
})
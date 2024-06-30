import React from 'react'
import styled from 'styled-components';

const StyledFigure = styled.figure`
max-width: 200px;

figcaption {
  font-style: italic;
}
`

export default function Figure({imageURL, date}) {
    return (
      <StyledFigure>
      <img src={imageURL} />
      <figcaption>Awesome pic taken on {date}</figcaption>
    </StyledFigure>
    )
  }
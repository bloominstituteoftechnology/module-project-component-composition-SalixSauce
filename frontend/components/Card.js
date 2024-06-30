import React from 'react'
import Figure from './Figure'
import styled from 'styled-components';

const StyledCard = styled.div`
 border: 100px solid black;
`

export default function Card({title, text, imageURL, date}) {
    return (
      <StyledCard className='card'>
        <h2 >{title}</h2>
        <p>{text}</p>
        <Figure 
         imageURL={imageURL}
         date={date}
        />
      </StyledCard>
    )
  }
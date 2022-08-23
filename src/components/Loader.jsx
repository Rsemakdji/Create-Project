import React from 'react'
import styled from 'styled-components'


const Container = styled.div `
background: linear-gradient(90deg, rgb(180, 99, 235) 40%, rgb(39, 69, 242) 100%);
min-height: 100vh;
display: flex;
justify-content: center;
align-items: center;
`

const LoaderContainer = styled.div `
position: relative;
width: 12.5rem;
height: 12.5rem;
display: flex;
justify-content: center;
align-items: center;
`

const Form = styled.span `
position: absolute;
top: 0;
left:0;
width: 100%;
height: 100%;
border: 5px solid white;
animation: animate 5s linear infinite;
&:nth-child(1) {
    border-color: #e64032;
    border-radius: 25% 75% 47% 53% / 80% 70% 30% 20%;
}
&:nth-child(2) {
    border-color: #f6b801;
    border-radius: 84% 16% 47% 53% / 44% 70% 30% 56% ;
    animation-direction: reverse;
}
&:nth-child(3) {
    border-color: #31a452;
    border-radius: 84% 16% 94% 6% / 43% 2% 98% 57% ;
    animation-duration: 2,5s;
}
@keyframes  animate{
0% {
    transform: rotate(0deg)
}
100% {
    transform: rotate(360deg)
}
}
`

const Title = styled.h2 `
  color: #b1ddf1;
  font-family: consolas, sans-serif;
  font-weight: 500;
  animation: clignote 2s linear infinite;
  @keyframes clignote {
      50% {
          opacity:0;
      }
  }
`


const Loader = () => {
  return (
    <Container>
      <LoaderContainer>
          <Form></Form>
          <Form></Form>
          <Form></Form>
          <Title> Loading ...</Title>
      </LoaderContainer>
    </Container>
  )
}

export default Loader
import styled, { keyframes } from "styled-components";

const translate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(30deg);
    
  }
`;


export const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1040;
    width: 100vw;
    height: 100vh;
    background-color: #000;
    opacity: .5;
`

export const ModalWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1050;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    outline: 0;
`

export const Image = styled.img`
  z-index: 99999;
  position: absolute;
  top: 5%;
  right: 5%;
  animation: ${translate} 3s alternate infinite;
`

export const ModalContainer = styled.div`
    z-index: 100;
    background: white;
    position: relative;
    border-radius: 3px;
    max-width: 500px;
    padding: 48px;
    margin: 15% auto;
    width: 60%;
    overflow: auto;
    border-radius: 4px;
    outline: none;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
    
    p, h1 {
      margin: 0;
    }
`
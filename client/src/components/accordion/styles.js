import styled from "styled-components"

export const AccordionSection = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 3.5rem 0;
`

export const Container = styled.div``

export const Wrap = styled.div`
  background: var(--color-bg-variant);
  color: var(--color-white);
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  cursor: pointer;
  h1 {
    padding: 2rem;
    font-size: 2rem;
  }
  span {
    margin-right: 1.5rem;
  }
`

export const Dropdown = styled.div`
  background: transparent;
  color: #00ffb9;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #00ffb9;
  border-top: 1px solid #00ffb9;
  p {
    font-size: 2rem;
    padding: 2rem;
  }
`

import styled from "styled-components"

export const Container = styled.div`
  width: var(--container-width-lg);
  height: 7px;
  width: 60%;
  position: relative;
  margin: 2.5rem;
`

export const BaseBox = styled.div`
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  border-radius: 3px;
  transition: width 10s ease-in-out;
`

export const Background = styled(BaseBox)`
  background: var(--color-light);
  width: 100%;
`

export const Progress = styled(BaseBox)`
  background: var(--color-primary);
  width: ${({ percent }) => percent}%;
`

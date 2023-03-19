import styled from "styled-components"
import {  mobile } from "../../responsive"

export const CardContainer = styled.div`
  background: var(--color-bg-variant);
  padding: 2.4rem 5rem;
  border-radius: 2rem;
  margin: 2.5rem 2rem;
  border: 1px solid transparent;
  &:hover {
    background: transparent;
    border-color: var(--color-primary-variant);
    cursor: default;
  }
  ${mobile({ padding: "2.4rem 1rem" })}
`

export const CardTitle = styled.h3`
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--color-white);
`

export const CardDescription = styled.h3`
  margin: 2rem 0 2.6rem;
  color: var(--color-light);
`

export const ButtonContainer = styled.h3`
  display: flex;
  gap: 2rem;
`

export const Button = styled.button`
  width: max-content;
  display: inline-block;
  color: var(--color-primary);
  padding: 0.75rem 1.2rem;
  border-radius: 0.7rem;
  cursor: pointer;
  border: 1px solid var(--color-primary);
  transition: var(--transition);
  background: var(--color-primary);
  color: var(--color-bg);
  &:hover {
    background: var(--color-white);
    color: var(--color-bg);
    border-color: transparent;
  }
`

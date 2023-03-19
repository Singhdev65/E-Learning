import styled from "styled-components"

export const HeaderWrapper = styled.header`
  background: #35424a;
  color: var(--color-white);
  padding-top: 1.5rem;
  min-height: 5rem;
  border-bottom: #e8491d 3px solid;
  position: sticky;
  top: 0px;
`

export const HeaderContainer = styled.div`
  width: 80%;
  margin: auto;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Highlight = styled.div`
  color: var(--color-primary);
  font-weight: 900;
  font-size: 16px;
`

export const HeaderTitle = styled.div`
  margin: 0;
  display: flex;
  align-items: center;
  gap: 0.7rem;
`

export const Navigation = styled.div``

export const NavigationList = styled.div``

export const NavigationListItem = styled.div`
  float: left;
  display: inline;
  padding: 0 20px 0 20px;
`

export const HeaderLink = styled.a`
  color: var(--color-white);
  text-decoration: none;
  text-transform: uppercase;
  font-size: 16px;
  &:hover {
    color: #cccccc;
    font-weight: bold;
  }
`

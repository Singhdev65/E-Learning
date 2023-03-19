import React from "react"
import {
  HeaderContainer,
  HeaderLink,
  HeaderTitle,
  HeaderWrapper,
  Highlight,
  Navigation,
  NavigationList,
  NavigationListItem
} from "./styles"

export default function Header() {
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <HeaderTitle>
          <Highlight>React</Highlight> Roadmap
        </HeaderTitle>
        <Navigation>
          <NavigationList>
            {/* <NavigationListItem>
              <HeaderLink href='#'>Home</HeaderLink>
            </NavigationListItem>
            <NavigationListItem>
              <HeaderLink href='#'>About</HeaderLink>
            </NavigationListItem>
            <NavigationListItem>
              <HeaderLink href='#'>Services</HeaderLink>
            </NavigationListItem> */}
          </NavigationList>
        </Navigation>
      </HeaderContainer>
    </HeaderWrapper>
  )
}

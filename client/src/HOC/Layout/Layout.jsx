import {Header, Footer} from "../../components"
import { LayoutContainer } from "./styles"

export default function Layout({ children }) {
  return (
    <LayoutContainer>
      <Header />
      {children}
      <Footer />
    </LayoutContainer>
  )
}

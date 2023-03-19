import React, { useState } from "react"
import { Background, Container, Progress } from "./styles"

export default function ProgressBar() {
  const [percent, setPercent] = useState(50)
  return (
    <Container>
      Progress:
      <Background />
      <Progress percent={percent} />
    </Container>
  )
}

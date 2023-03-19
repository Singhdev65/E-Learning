import React, { useState } from "react"
import { Accordion } from "../components"
import VideoPlayer from "../components/videoPlayer/VideoPlayer"
import { DataFromPlayer } from "../mockData/Data"

export default function PhaseDetail() {
  const [url, setUrl] = useState("")
  const handleClick = data => {
    setUrl(data)
  }
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        height: "95vh",
        padding: "2rem"
      }}
    >
      <div style={{ flex: "0.6" }}>
        <VideoPlayer
          url={
            url.length !== 0
              ? url
              : "https://www.youtube.com/watch?v=QFaFIcGhPoM&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3"
          }
        />
      </div>
      <div
        style={{
          flex: 0.4,
          height: "70vh",
          overflow: "scroll",
          overflowX: "hidden"
        }}
      >
        <Accordion Data={DataFromPlayer} handleClick={handleClick} />
      </div>
    </div>
  )
}

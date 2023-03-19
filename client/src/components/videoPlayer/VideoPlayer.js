import React, { useEffect, useRef } from "react"
import ReactPlayer from "react-player"

export default function VideoPlayer({ url }) {
  const videoRef = useRef()
  useEffect(() => {
    videoRef.current.addEventListener(
      "contextmenu",
      function (e) {
        e.preventDefault()
      },
      false
    )

    return videoRef.current.removeEventListener(
      "contextmenu",
      function (e) {
        e.preventDefault()
      },
      false
    )
  }, [])
  return (
    <div ref={videoRef}>
      <ReactPlayer
        width={"100%"}
        height={"80vh"}
        controls={true}
        url={url}
        config={{ file: { attributes: { controlsList: "nodownload" } } }}
      />
    </div>
  )
}

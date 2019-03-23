import React from "react"
import Check from "../images/icons/checkCircle"
import Envelope from "../images/icons/envelope"
import Github from "../images/icons/github"
import LinkedIn from "../images/icons/linkedin"

const Icon = props => {
  switch (props.name) {
    case "check":
      return <Check {...props} />
    case "envelope":
      return <Envelope {...props} />
    case "github":
      return <Github {...props} />
    case "linkedin":
      return <LinkedIn {...props} />
    default:
      return <div />
  }
}
export default Icon

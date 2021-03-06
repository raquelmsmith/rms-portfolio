import React from "react"
import Asterisk from "../images/icons/asterisk"
import Book from "../images/icons/book"
import Check from "../images/icons/checkCircle"
import Envelope from "../images/icons/envelope"
import Github from "../images/icons/github"
import LinkedIn from "../images/icons/linkedin"
import Pencil from "../images/icons/pencil"
import Person from "../images/icons/person"
import Star from "../images/icons/star"

const Icon = props => {
  switch (props.name) {
    case "asterisk":
      return <Asterisk {...props} />
    case "book":
      return <Book {...props} />
    case "check":
      return <Check {...props} />
    case "envelope":
      return <Envelope {...props} />
    case "github":
      return <Github {...props} />
    case "linkedin":
      return <LinkedIn {...props} />
    case "pencil":
      return <Pencil {...props} />
    case "person":
      return <Person {...props} />
    case "star":
      return <Star {...props} />
    default:
      return <div />
  }
}
export default Icon

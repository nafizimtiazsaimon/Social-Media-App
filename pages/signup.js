import React from 'react';
import {Form, Button, Message, Segment, TextArea, Divider} from "semantic-ui-react"
import { HeaderMessage, FooterMessage} from "../components/Common/WelcomeMessage";

function Signup() {
  const [user, setUser] = userState({
    name: "",
    email: "",
    password: "",
    bio: "",
    facebook: "",
    youtube: "",
    twitter: "",
    instagram: ""

  })

  return (
    <div>Signup</div>
  )
}

export default S

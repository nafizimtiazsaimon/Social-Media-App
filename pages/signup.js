import React,{useState,useEffect,useRef} from 'react';
import {Form, Button, Message, Segment, TextArea, Divider} from "semantic-ui-react"
import { HeaderMessage, FooterMessage} from "../components/Common/WelcomeMessage";

function Signup() {
  const [user, setUser] = useState({
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
    <>
      <HeaderMessage />

      <FooterMessage />
    </>
  )
}
  

export default Signup;

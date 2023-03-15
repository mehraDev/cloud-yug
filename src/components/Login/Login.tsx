import styled from 'styled-components'
import { ui } from '../../firebase/firebase'
import firebase from 'firebase/app'
import { auth } from 'firebaseui'
/* eslint-disable @typescript-eslint/explicit-function-return-type */

const LoginStyled = styled.div`
display: flex;
flex-wrap: wrap;
padding: 1rem;
`

const Login = ({ items }: { items: any }) => {
  ui.start('#firebaseui-auth-container', {
    signInOptions: [
    ]
    // Other config options...
  })
  return <LoginStyled id='#firebaseui-auth-container'>

  </LoginStyled>
}

export default Login

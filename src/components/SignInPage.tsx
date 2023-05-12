
import { useForm } from 'react-hook-form'
import { styled } from 'styled-components'

export default function SignInPage() {
  const {register,} = useForm();
  return (
    <Main>
      <Form action="">
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="submit" />
      </Form>
    </Main>
  )
}


const Form = styled.form`
  display: flex;
  flex-direction: column;
`

const Main = styled.div`
margin: 52px 0 96px 0;
width: 100%;
background: #D9D9D9;
border-radius: 8px;
padding: 52px 28px;
  
`
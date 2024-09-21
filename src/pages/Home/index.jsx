import { useRef } from 'react'
import { useNavigate, useNavigation } from 'react-router-dom' //rotes biblioteca
import api from '../../services/api'

import { 
  Title, 
  Container, 
  ContainerInputs,  
  Form, 
  Input, 
  InputLabel
} from "./styles"

import Button from '../../components/Button' 
import TopBackground from '../../components/TopBackground'


function Home() {

  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()

  const navigate = useNavigate()

  async function registerNewUser(){    
    const data = await api.post('/usuarios', {
      email: inputEmail.current.value,
      name: inputName.current.value,
      age: parseInt(inputAge.current.value)
    })

    /*navigate('/lista-de-usuarios')*/
  }

  return (
    <Container>
      
      <TopBackground />

      <Form>
        <Title>Cadastrar Usuários</Title>

        <ContainerInputs>

            <div>
              <InputLabel>
                Nome<span> * </span>
              </InputLabel>
              <Input type="text" placeholder="Nome do Usuário" ref={inputName}/>
            </div>

            <div>
              <InputLabel>
                Idade<span> * </span>
              </InputLabel>
              <Input type="number" placeholder="Idade do Usuário" ref={inputAge}/>
            </div>
          
        </ContainerInputs>

        <div style={{width:'100%'}}>
            <InputLabel>
              Email<span> * </span>
            </InputLabel>
            <Input type="email" placeholder="Email do Usuário" ref={inputEmail}/>
          </div>

        <Button type='button' onClick={registerNewUser} theme='primary' >Cadastrar Usuário</Button> 
      </Form>

      <Button type='button' onClick={() => navigate('/lista-de-usuarios')}>Ver lista de Usuários</Button> 

    </Container>
  )
}

export default Home

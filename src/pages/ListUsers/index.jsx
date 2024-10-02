import api from '../../services/api'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

import Button from "../../components/Button"
import TopBackground from "../../components/TopBackground"
import Trash from '../../assets/trash.svg'

import { Container, 
        ContainerUsers,
        CardUsers, 
        TrashIcon, 
        Title,
        AvatarUsers } from './styles'; // Make sure AvatarUsers is imported

function ListUsers() {
    const [users, setUsers] = useState([])
    const navigate = useNavigate();


    useEffect(() => {
        async function getUsers() {
            const { data } = await api.get('/usuarios')
            console.log(data)
            setUsers(data)
        }
        getUsers()
    }, [])

async function deleteUsers(id) {
    await api.delete(`/usuarios'/${id}`)

    const updatedUsers = users.filter( user => user.id !== id )

    setUsers(updatedUsers)
}

    return (
        <Container>
            <TopBackground />
            <Title>Cadastrar Usuários</Title>

            <ContainerUsers>
                {users.map(user => (
                    <CardUsers key={user.id}> {/* Add key here */}
                        <AvatarUsers src={`https://avatar.iran.liara.run/public?username=${user.id}`}/>
                        <div>
                            <h3>Nome: {user.name}</h3>
                            <p>Idade: {user.age}</p>
                            <p>Email: {user.email}</p>
                        </div>
                        <TrashIcon src={Trash} alt='icon-lixo' onClick={() => deleteUsers(users.id)}/>
                    </CardUsers>
                ))}
            </ContainerUsers>

            <Button type='button' onClick={() => navigate('/')}>Voltar</Button>     
        </Container>
    )
}

export default ListUsers;

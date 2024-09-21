import api from '../../services/api'
import { useEffect } from 'react'

import Button from "../../components/Button"
import TopBackground from "../../components/TopBackground"


function ListUsers() {

    useEffect(() => {

        async function getUsers() {
            const usersFromApi = await api.get('/usuarios')
            console.log(usersFromApi)
        }
        getUsers()
    }, [])

    return (

        <div>

            <TopBackground />
            <h1>Listagem de usuários</h1>
            <Button>voltar</Button>
            
        </div>

    )
}

export default ListUsers

import { useFetch } from "./useFetch";

export const UserProfile = ({ userId }) => {
    const { data: user, loading, error } = useFetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    console.log(userId)
    if (loading) return <p>Cargando perfil</p>
    if (error) return <p>Error al cargar al usuario: {error.message}</p>

    return (
        <div>
            <h2>{user.name}</h2>
            <p>User Email {user.email}</p>
            <p>City: {user.address.city}</p>
        </div>
    )
}
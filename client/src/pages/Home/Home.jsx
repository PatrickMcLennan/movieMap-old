import React from 'react';
import UserProvider, { UserContext } from '../../contexts/UserProvider';

const Home = () => {
    useEffect(() => {
        document.title = 'movieMap | Home'
    })
    return (
        <UserProvider>
            <div>
                hello you are home
            </div>
        </UserProvider>
    )
}

export default Home
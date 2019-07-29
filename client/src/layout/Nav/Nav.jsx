import React, { useContext } from 'react';

import { UserContext } from '../../contexts/UserProvider'

const Nav = () => {
    // const { context } = useContext(UserContext);
    return (
        <nav>
            <button>Click Me</button>
            {/* {console.log(context)} */}
        </nav>
    )
}

export default Nav;
import { useState,useEffect } from "react";


const ApiData = () => {
    const [users, setUsers] = useState([])
   
    useEffect(() => {
        fetch('/api/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, []);
    return (
        <div className="text-center">
            <button className='bg-orange-400 text-3xl'>Users{users.length}</button>
            {
                users.map(user => <div key={user.id}>
                    <h1>User Name {user.name}</h1>

                </div>
                     )
            }
        </div>
        
    );
};

export default ApiData;
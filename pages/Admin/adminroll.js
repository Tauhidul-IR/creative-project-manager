import React from 'react';

const Adminroll = (email) => {
    const [isAdminRole,setAdminRole]=useState(false)
    const [AdminLoadins,setAdminLoaders] =useState(true)
    useEffect(
        ()=>{
    
            if(email){
                fetch(`https://final-resale-project-assignment.vercel.app/adminRole/${email}`)
                .then(res=>res.json())
                .then(admin=>{
                    setAdminRole(admin?.isAdminRole)
                    setAdminLoaders(false)
    
                })
            }
        },[email])
        return [isAdminRole,AdminLoadins]
    }

export default Adminroll;
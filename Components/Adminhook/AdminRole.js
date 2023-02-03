
import React, { useEffect, useState } from 'react';
const AdminRole = (email) => {
  const [isAdminRole, setAdminRole] = useState(false)
  const [AdminLoadins, setAdminLoaders] = useState(true)
  useEffect(
    () => {
      if (email) {
        fetch(`https://creative-project-manager-server.vercel.app/adminRole/${email}`)
          .then(res => res.json())
          .then(admin => {
            setAdminRole(admin?.isAdminRole)
            setAdminLoaders(false)
          })
      }
    }, [email])
  return [isAdminRole, AdminLoadins]
};
export default AdminRole;
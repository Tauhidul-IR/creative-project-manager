
import React, { useEffect, useState } from 'react';
const AdminRole = (email) => {
  console.log(email);
  const [isAdminRole, setAdminRole] = useState(false)
  const [AdminLoadins, setAdminLoaders] = useState(true)
  console.log(isAdminRole);
  useEffect(
    () => {
      if (email) {
        fetch(`http://localhost:5000/adminRole/${email}`)
          .then(res => res.json())
          .then(admin => {
            console.log(admin);
            setAdminRole(admin?.isAdminRole)
            setAdminLoaders(false)
          })
      }
    }, [email])
  return [isAdminRole, AdminLoadins]
};
export default AdminRole;
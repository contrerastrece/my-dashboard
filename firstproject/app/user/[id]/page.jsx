import React from 'react'
const fetchUser=async(id)=>{
  const response=await fetch(`https://reqres.in/api/users/${id}`);
  const data=await response.json();
  return data.data;

}
const page = async ({params}) => {

  console.log(params)
  const user=await fetchUser(params.id);
  console.log(user)
  return (
    <div>

      <h1 className='text-3xl font-bold'>User Info</h1>
      <h2 className='text-2xl'>{user.id} {user.first_name}</h2>
      <p>{user.email}</p>
      <img src={user.avatar} alt="" />
    </div>
  )
}

export default page
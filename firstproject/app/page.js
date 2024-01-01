import CardUser from "@/components/CardUser";

const  fetchUser=async()=>{
  const response=await fetch('https://reqres.in/api/users');
  const data=await response.json();
  return data;
}
export default async function Home() {
  const users=await fetchUser()
  return (
   <div className="">
    {users.data.map(user=>(
      <CardUser user={user} key={user.id}/>
    ))}
   </div>
  )
}

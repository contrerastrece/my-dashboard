import { redirect } from 'next/navigation'

const HomePage = () => {

  redirect('/dashboard/counter');

  
}

export default HomePage
import Head from 'next/head'
import toast from 'react-hot-toast'
import Loader from '../components/Loader'

export default function Home() {
  return (
    <div >
      
      <button onClick={() => toast.success('Bonjour!')}>
        Toast working?
      </button>
    </div>
  )
}

import Image from 'next/image'
import NavBar from '@/components/NavBar'
import Dropdown from '@/components/object-lists/dropdown'

export default function Home() {
  return (
    <div>
      <h1>Title will go here or something</h1>
      <NavBar />
      <Dropdown />
      <h1> This is the home page</h1>
    </div>
  )
}

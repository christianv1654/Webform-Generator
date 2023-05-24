import './NavBar.css'
import Link from 'next/link'

export default function NavBar() {


   



    return (
        <div>
            <ul>
                <li>
                    <Link href='/Login'>
                        <button className="button" type="button" >
                            Login    
                        </button>
                    </Link>
                    </li>
                <li>Home</li>
                <li>My WebForm</li>
                <li>New WebForm</li>
            </ul>
        </div>
    )
}
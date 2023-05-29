import './NavBar.css'
import Link from 'next/link'

export default function NavBar() {


   



    return (
        <div>
            <ul>
                <li>
                    <Link href='/login/Login'>
                        <button className="button"  type="button" >
                            Login    
                        </button>
                    </Link>
                    </li>
                <li>Home</li>
                <li>My WebForm</li>
                <li>New WebForm</li> 
                <li>
                    <Link href='/about/About'>
                        <button className="button" type="button">
                            About
                        </button>
                    </Link>
                </li>
            </ul>
        </div>
    )
}
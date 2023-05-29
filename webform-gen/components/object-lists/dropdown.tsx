'use client';
import './dropdown.css'


/* Function in the works to create list depending on 
on the option selected
function createList(option) {
    if (option){
        return option;
    } else {
        return 'No Option Selected';
    }
}
*/


export default function Dropdown()  {

    function handleClick() {

    }


    return (  
        <div className="background-list">    
            <div className="dropdwn">
                <button className="dropdwnbtn">
                    Elements
                </button>
                <div className="dropdwn-content">
                    <a>
                        <button className='buttonContent' type='button' onClick={handleClick}>
                        Option 1
                        </button>
                    </a>
                    <a>
                        Option 2
                    </a>
                    <a>
                        Option 3
                    </a>
                    
                </div>
            </div>
        </div>
       

    )
}
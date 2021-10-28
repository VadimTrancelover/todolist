import React from 'react'

function SortPopup() {
    return (
       <div>
        <form>
            <b> Select you favourite tutorial site using dropdown list </b>
                <select id = "myList" onchange = "favTutorial()" >
                    <option> ---Choose tutorial--- </option>
                    <option> w3schools </option>
                    <option> Javatpoint </option>
                    <option> tutorialspoint </option>
                    <option> geeksforgeeks </option>
                </select>
            <p> Your selected tutorial site is: 
                 <input type = "text" id = "favourite" size = "20"/>
            </p>
        </form>
        </div> 
    )
}

export default SortPopup

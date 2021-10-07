import React from 'react'

function SortPopup() {
    return (
        <div>
            <ul  className="sortList">
                <li className="item1">Сортировать по:
                    <ul className="list2" list-style="none">
                        <li className="item2">Выполненным</li> 
                        <li className="item2">Важным</li> 
                    </ul> 
                </li> 
            </ul> 
        </div>
    )
}

export default SortPopup

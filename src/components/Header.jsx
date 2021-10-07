import React from 'react'

function Header() {

  const [time, setTime] = React.useState('')

  const onSetTime = () => {
    setTime( new Date().toLocaleString('ru', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    }))
  }

    setInterval(onSetTime, 60000)


  React.useEffect(() => {
    onSetTime()
  },[])

    return (
    <header> 
      <div className="header-title"> 
       <h1 className="title">Your best TODO List</h1> 
      </div> 
      <div className="header-date"> 
       <p className="title-date"> {time}</p> 
      </div> 
     </header> 
    )
}

export default Header

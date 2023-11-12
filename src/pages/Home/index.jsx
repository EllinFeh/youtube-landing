import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Menu from '../../components/menu/Menu'
import Feed from '../../components/home/Feed'
import './Styled.css'

const Home = () => {
  return (
    <>
      <Navbar />
      <div className='main'>
        <div>
          <Menu />
        </div>
          <Feed />
        <div>
        </div>
      </div>
    </>
  )
}

export default Home;
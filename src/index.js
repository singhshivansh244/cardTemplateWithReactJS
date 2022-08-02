import React from 'react'
import ReactDOM from 'react-dom'
import Footer from './Footer'
import Header from './Header'
import Main from './Main'
import Button from './Button'
import './style.css'

ReactDOM.render(
  <div className='container'>
    <Header name="Shivansh Singh" profession="Software Engineer" post="SDE" /> 
    <div className='userSocialMedia'><Button /></div>
    <Main title='About' about='Shivansh singh is a good boy and he loves to play with games like GTA 5, Days Gone, Far Cry 6.He Loves to develop and learn new software things, and he is currently working in Amazon.' />
    <Main title='Interest' about='Loves to play games and have fun ipsumsfjklsdjf sjlfkj sljfl sjflj lskfjl sjflskj fkljsd ld' />
    <Footer />
  </div>,
  document.getElementById('root')
)
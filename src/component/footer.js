// import PrevencionSalud from '../imagenes/prevencionsalud.png'

import React from 'react'
function Footer(){
  return(
    <footer className='footer'>
      <div className='brand'>
        <img src='./img/prevencionsalud.png' alt='Prevencion salud' />
      </div>
        
      <div className='wtp'>
        <a href="https://api.whatsapp.com/send?phone=5493513734471" className="whatsapp" rel="noreferrer" > <i className="fa fa-whatsapp whatsapp-icon"></i></a>
      </div>
    </footer>
  )
}

export default Footer

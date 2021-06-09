import PrevencionSalud from '../imagenes/prevencionsalud.png'

function Footer(){
    return(
      <footer className='footer'>
        <div className='brand'>
         <img src={PrevencionSalud} alt='Prevencion salud' />
        </div>
        
        <div className='wtp'>
          <a href="https://api.whatsapp.com/send?phone=5493513734471" class="whatsapp" rel="noreferrer" > <i className="fa fa-whatsapp whatsapp-icon"></i></a>
        </div>
      </footer>
    )
};

export default Footer;

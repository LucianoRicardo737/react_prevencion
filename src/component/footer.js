

function Footer(){
    return(
      <footer className='footer'>
        <div className='brand'>
         <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-83TfnCYGyfutFEFt3eJm77kBvoqHv6WDEQ&usqp=CAU' alt='Prevencion salud' />
        </div>
        <div className='redes'>
          <ul>
            <li className='icon face'><a href='https://www.facebook.com/PrevencionSaludOficial/'><img src='https://corporate-site-content.gruposancorseguros.com/PS/Content/FWIcon.svg' alt='facebook'/></a></li>
            <li className='icon insta'><a href='https://www.instagram.com/prevencionsaludoficial/?hl=es-la'><img src='https://corporate-site-content.gruposancorseguros.com/PS/Content/IGIcon.svg' alt='instagram'/></a></li>
          </ul>
        </div>
        <div className='wtp'>
          <a href="https://api.whatsapp.com/send?phone=5493512690404" class="whatsapp" rel="noreferrer" > <i className="fa fa-whatsapp whatsapp-icon"></i></a>
        </div>
      </footer>
    )
};

export default Footer;

import  Marquee  from  'react-double-marquee' ;
import PrevencionSalud from '../imagenes/prevencionsalud.png'
function Header(){
    return(
    <div>
        <header>
        <div className='brand'>
          <img src={PrevencionSalud} alt='Prevencion salud' />
        </div>
        </header>
          <div className='body'
        style={{
          width: '100%',
          whiteSpace: 'nowrap',
        }}
      >
        <Marquee>
        <img src='//v.fastcdn.co/u/fdbc6f18/54030821-0-logos.png' alt='clinicas'/>
        </Marquee>
      
          
          </div>
    </div>
    )
};

export default Header;
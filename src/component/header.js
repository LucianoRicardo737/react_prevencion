import  Marquee  from  'react-double-marquee' ;
function Header(){
    return(
    <div>
        <header>
        <div className='brand'>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-83TfnCYGyfutFEFt3eJm77kBvoqHv6WDEQ&usqp=CAU' alt='Prevencion salud' />
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
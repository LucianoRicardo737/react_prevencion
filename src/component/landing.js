import React from 'react'
// import Marquee from 'react-double-marquee'

const Landing = () =>{
  return(
    <div>
      <section className='container'>
        <section className='personas'>
          <h3>La mejor cobertura en un solo lugar.</h3>
          <img className='girl' src='./img/personaje5.png' alt='persona'/> 
        </section>
      </section>
      <section className='atencion'>
        <div className='body'
          style={{
            width: '100%',
            whiteSpace: 'nowrap',
          }}
        >
          {/* <Marquee>
            <img src='//v.fastcdn.co/u/fdbc6f18/54030821-0-logos.png' alt='clinicas'/>
          </Marquee> */}

    
        </div>
      </section>
    </div>
  )
}

export default Landing
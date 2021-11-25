
import React from 'react'
import emailjs from 'emailjs-com'
// import Personaje1 from '../imagenes/personaje1.png'
// import Personaje2 from '../imagenes/personaje2.png'
// import Personaje3 from '../imagenes/personaje3.png'
// import Personaje4 from '../imagenes/personaje4.png'

import './formulario.css'

const Formulario=()=> {


  function sendEmail(e) {
    
    e.preventDefault()
  
    emailjs.sendForm('service_eq3iirs','template_c3hox3v',e.target, 'user_CoD3IIv5HprRwlsFejKi4').then(() => {
      alert('Gracias por su consulta, nos comunicaremos a la brevedad.')
       
    }, (err) => {
      alert(JSON.stringify(err))
    })
    e.target.reset()
  }
  return(
    <section className='container'>
      <div> <h3 className='title'>La mejor atención para vos y tu familia</h3></div>
      <section className='personas'>
        <div className='items-personas'>
          <img src='./img/personaje1.png' alt='Prevencion Salud'/>
          <img src='./img/personaje2.png' alt='Prevencion Salud'/>
          <img src='./img/personaje3.png' alt='Prevencion Salud'/>
          <img src='./img/personaje4.png' alt='Prevencion Salud'/>
        </div>
      </section>  
      <section className='form'>
     
        <form className="contact-form" onSubmit={sendEmail}>
          <h2 className='datos'>Cotizá tu plan</h2>

          <div className='dviOrdenForm'>
            <label form='name'>Nombre:</label>
            <input type="text" name="from_name"required placeholder='Ingrese su Nombre'/>
          </div>
          <div className='dviOrdenForm'>
            <label form='telefono'>Cód. Área + Teléfono:</label>
            <input  name="user_number" type="tel" required placeholder='Ingrese su numero de teléfono'/>
          </div>
          <div className='dviOrdenForm'>
            <label form="user_email">Email:</label>
            <input name="user_email" type='email' required placeholder='Ingrese su email'/>
          </div>
          <div className='dviOrdenForm'>
            <label form="user_age">Edad:</label>
            <input  name="user_age" type='tel' required placeholder='Ingrese su edad'/>
          </div>
          <div className='dviOrdenForm'>
            <label form="user_city">Localidad</label>
            <input name="user_city" type='text' required placeholder='Donde se encuentra'/>
          </div>
          <div className='dviOrdenForm'>
            <label form="user_children">Hijos:</label>
            {/* <input name="user_children" type="text" required placeholder='Si - No'/> */}
            <select>
              <option default >
                 Seleccionar
              </option>
              <option>
            Si
              </option>
              <option>
            No
              </option>
            </select>
          </div>

          <div className='dviOrdenForm'>
            <label form="children">Cantidad:</label>
            <input name="children"  type='number' placeholder='Ingrese la cantidad de hijos' required/>
          </div>
          <div className='dviOrdenForm'>
            <label form="partner">Conyuge - Edad:</label>
            <input name="partner" type='number'  placeholder='Ingrese la edad de su conyugue' required/>
          </div>
          <div className='dviOrdenForm'>
            <label form="situacion">Situación laboral:</label>
            <input name="user_situation"  placeholder='Defina su situación laboral' type='browsers'list="browsers" required/>
          </div>

          <datalist id="browsers">
            <option value="Autónomo / Particular"/>
            <option value="Relación de dependencia"/>
            <option value="Monotributista"/>
          </datalist>

          <div className='dviOrdenForm'>
            <label form='message'>Comentarios:</label>
            <textarea name="message" placeholder='Ingrese un comentario...' />
          </div>

          <input type="submit" value="ENVIAR" />

        </form>
        
                    
                    
            
      </section>

    </section>
  )
}

export default Formulario


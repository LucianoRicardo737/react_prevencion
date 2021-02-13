
import React from 'react';
import emailjs from 'emailjs-com';


export default function Formulario() {


    function sendEmail(e) {
    
      e.preventDefault();
  
      emailjs.sendForm("service_vnx95ty", "template_xkh0orj",e.target, "user_RE3rcE094ud1ToqGsEQkH").then(() => {
       alert('Gracias por su consulta, nos comunicaremos a la brevedad.')
       
      }, (err) => {
        alert(JSON.stringify(err));
      });
    }
    return(
        <section className='container'>
        <div> <h3 className='title'>La mejor atención para vos y tu familia</h3></div>
        <section className='personas'>
        <div className='items-personas'>
           <img src='//v.fastcdn.co/u/fdbc6f18/54009346-0-Sin-ttulo-6.png' alt='personaje'/>
          <img src='//v.fastcdn.co/u/fdbc6f18/54009081-0-Sin-ttulo-5.png' alt='personaje'/>
          <img src='//v.fastcdn.co/u/fdbc6f18/54009216-0-Sin-ttulo-3.png' alt='personaje'/>
          <img src='//v.fastcdn.co/u/fdbc6f18/54009596-0-Sin-ttulo-7.png' alt='personaje'/>
            </div>
        </section>  
        <section className='form'>
     
        <form className="contact-form" onSubmit={sendEmail}>
        <h2 className='datos'>Dejanos tus datos</h2>
        <label form='name'>Nombre:</label>
        <input type="text" name="from_name" style={{textTransform:'uppercase',}} required />
        <label form='telefono'>Cód. Área + Teléfono:</label>
        <input  name="user_number" type="tel" required></input>
        <label form="situacion">Situación laboral:</label>
        <input name="user_situation" type='browsers'list="browsers" required/>
        <datalist id="browsers">
          <option value="Autónomo / Particular"/>
          <option value="Relación de dependencia"/>
          <option value="Monotributista"/>
        </datalist>
      <label form='message'>Comentarios</label>
      <textarea name="message" />
      <input type="submit" value="ENVIAR" />
    </form>
        
                    
                    
            
            </section>

            </section>
    );
}




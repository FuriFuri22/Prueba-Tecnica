"use client";

import React, {useState} from "react";

/**
 * ContactForm - Componente funcional que representa un formulario de contacto.
 * Utiliza React hooks para manejar el estado del formulario y la validación.
 */

const ContactForm = () =>{
    //Estados para almacenar los valores de los campos del formulario
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [errors, setErrors] = useState({});

     /**
     * handleSubmit - Función que se ejecuta al enviar el formulario.
     * Valida los campos y actualiza el estado de errores si es necesario.
     */
     const handleSubmit = (e) => {
        e.preventDefault();
    
        const newErrors = {};
        const caracteres = (/\S+@\S+\.\S+/);
        // Validación de campos
        if (!name) newErrors.name = 'El nombre es obligatorio.';
        if (!email) newErrors.email = 'El email es obligatorio.';
        else if (!caracteres.test(email)) newErrors.email = 'El email no es válido.';
        if (!message) newErrors.message = 'El mensaje es obligatorio.';
    
        // Si hay errores, actualiza el estado y no envía el formulario
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }
    
        // Marca el formulario como enviado
        setSubmitted(true);
    };
    return (
        <section>
            <h2>Contacto</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Nombre:
                    <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} 
                    style={{marginLeft:"6px"}}/>
                    {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
                </label>
                <label>
                    {/*
                     Aqui podia haber usado el type "email" para el imput de email, pero si hago esto
                     el test nunca encontrara el mensaje de error "El email no es válido."
                     por lo que decidi dejarlo como type text para que el test pueda verificar el mensaje de error
                    */}
                    Email:
                    <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)}
                    style={{marginLeft:"23px"}} />
                    {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
                </label>
                <label>
                    Mensaje:
                    <textarea name="message" value={message} onChange={(e) => setMessage(e.target.value)}
                        style={{marginLeft:"3px"}}></textarea>
                    {errors.message && <p style={{ color: 'red' }}>{errors.message}</p>}
                </label>
                <button type="submit">Enviar</button>
            </form>
            {submitted && <p>Formulario enviado con éxito.</p>}
        </section>
    );
};




export default ContactForm;
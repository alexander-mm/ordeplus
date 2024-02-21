import { useState } from 'react';
import emailjs from 'emailjs-com';
import Error from '../components/Error'

const Contact = () => {

    const [nombres, setNombres] = useState("")
    const [apellidos, setApellidos] = useState("")
    const [whatsapp, setWhatsApp] = useState("")
    const [email, setEmail] = useState("")
    const [ciudad, setCiudad] = useState("")
    const [mensaje, setMensaje] = useState("")

    const [error, setError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if ([nombres, apellidos, whatsapp, email, ciudad, mensaje].includes('')) {
            setError(true)
            return;
        }
        setError(false)
        setNombres('')
        setApellidos('')
        setWhatsApp('')
        setEmail('')
        setCiudad('')
        setMensaje('')

        const serviceID = 'service_fbm3957';
        const templateID = 'template_9b93df9';
        const userID = 'bvahDzKpDYIhGFTkD';

        emailjs.sendForm(serviceID, templateID, e.target, userID)
            .then((result) => {
                console.log('Correo electrónico enviado con éxito', result.text);
            })
            .catch((error) => {
                console.error('Error al enviar el correo electrónico', error);
            });
    };

    return (
        <section className="mt-[3.8em] mb-8 bg-mainBlue font-avenir">
            <h1 className="text-white text-center font-avenir text-[40px] pt-1">CONTÁCTANOS</h1>
            <div className='border-white border-t-[0.1px] border-opacity-40 mx-auto lg:max-w-screen-lg mb-4'></div>
            <form onSubmit={handleSubmit} className="mx-[10%] md:mx-[15%] lg:mx-[25%]">
                <div className="mb-5">
                    <label htmlFor="nombres" className="block text-white uppercase font-bold">
                        NOMBRES:
                    </label>
                    <input
                        id="nombres"
                        type="text"
                        name="nombres"
                        placeholder="Escribe tus nombres"
                        className="w-full p-2 mt-2 placeholder-gray-400"
                        value={nombres}
                        onChange={(e) => setNombres(e.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="apellidos" className="block text-white uppercase font-bold">
                        APELLIDOS:
                    </label>
                    <input
                        id="apellidos"
                        type="text"
                        name="apellidos"
                        placeholder='Escribe tus apellidos'
                        className="w-full p-2 mt-2 placeholder-gray-400"
                        value={apellidos}
                        onChange={(e) => setApellidos(e.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="whatsapp" className="block text-white uppercase font-bold">
                        WHATSAPP:
                    </label>
                    <input
                        id="whatsapp"
                        type="text"
                        name="whatsapp"
                        placeholder='Escribe tu WhatsApp'
                        className="w-full p-2 mt-2 placeholder-gray-400"
                        value={whatsapp}
                        onChange={(e) => setWhatsApp(e.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="email" className="block text-white uppercase font-bold">
                        E-MAIL:
                    </label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        placeholder='Escribe tu e-mail'
                        className="w-full p-2 mt-2 placeholder-gray-400"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="ciudad" className="block text-white uppercase font-bold">
                        CIUDAD:
                    </label>
                    <input
                        id="ciudad"
                        type="text"
                        name="ciudad"
                        placeholder='Escribe tu ciudad'
                        className="w-full p-2 mt-2 placeholder-gray-400"
                        value={ciudad}
                        onChange={(e) => setCiudad(e.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="pais" className="block text-white uppercase font-bold">
                        DÉJANOS UN MENSAJE:
                    </label>
                    <textarea
                        id="pais"
                        type="text"
                        name="pais"
                        placeholder=""
                        className="w-full p-2 mt-2 placeholder-gray-400"
                        value={mensaje}
                        onChange={(e) => setMensaje(e.target.value)}
                    />
                </div>
                {error && <Error />}
                <input
                    type="submit"
                    className="bg-grayBack border hover:bg-green-600 w-full p-3 text-mainBlue font-sans mt-8 uppercase font-bold cursor-pointer" value='ENVIAR SOLICITUD' />
            </form>
        </section>
    )
}

export default Contact
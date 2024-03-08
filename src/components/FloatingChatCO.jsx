import '../css/floatingChat.css';
import '../css/chat.css';

const FloatingChatCO = () => {
    return (
        <div className='flex flex-col chat bg-chat rounded-xl z-[2000] pb-6 bottom-[110px] xs:bottom-[35px] xs2:bottom-[20px] sm:bottom-[8px] left-[10px] w-60'>
            <div className='bg-green-400 text-center font-century font-semibold rounded-t-xl py-1'>
                Escríbenos a WhatsApp
            </div>
            <div className='bg-white shadow-xl mb-16 text-start text-sm md:text-md mt-2 ml-2 mr-5 px-2 text-black font-microflf rounded-tl-lg rounded-tr-lg rounded-br-lg'>
                ¿Tienes dudas? Haz clic y habla con nuestro equipo ahora!
            </div>
            <a
                href="https://api.whatsapp.com/send?phone=573186441844"
                className="floating-chat z-[2000] bottom-[110px] xs:bottom-[35px] xs2:bottom-[20px] sm:bottom-[8px] left-[10px]"
                target="_blank"
                rel="noopener noreferrer"
            >
            </a>
        </div>
    );
};

export default FloatingChatCO;
import React from 'react';
import { FaInstagram, FaTwitter, FaFacebookF, FaTiktok, FaYoutube } from 'react-icons/fa';
import { SiVisa, SiMastercard, SiPaypal } from 'react-icons/si';

const Footer = () => {
  return (
    <footer className="bg-[#162329] text-white">
      <div className="container mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 pt-28">
        {/* Información de la compañía */}
        <div>
          <h5 className="text-lg font-normal mb-2 tracking-widest">INFORMACIÓN DE LA COMPAÑÍA</h5>
          <ul className='pt-4'>
            <li><a href="/nosotros">Nosotros</a></li>
            <li><a href="/sostenibilidad">Sostenibilidad</a></li>
            <li><a href="/privacidad">Política de Privacidad</a></li>
            <li><a href="/terminos">Términos y Condiciones</a></li>
          </ul>
        </div>
        
        {/* Atención al cliente */}
        <div>
          <h5 className="text-lg font-normal mb-2 tracking-widest">ATENCIÓN AL CLIENTE</h5>
          <ul className='pt-4'>
            <li><a href="/mi-cuenta">Mi Cuenta</a></li>
            <li><a href="/recuperar">Recuperar Contraseña</a></li>
          </ul>
        </div>
        
        {/* Redes sociales */}
        <div>
          <h5 className="text-lg font-normal mb-2 tracking-widest">SÍGUENOS</h5>
          <div className="flex pt-4">
            <a href="https://instagram.com" className="mr-2"><FaInstagram size='25' /></a>
            <a href="https://twitter.com" className="mr-2"><FaTwitter size='25' /></a>
            <a href="https://facebook.com" className="mr-2"><FaFacebookF size='25' /></a>
            <a href="https://tiktok.com" className="mr-2"><FaTiktok size='25' /></a>
            <a href="https://youtube.com" className="mr-2"><FaYoutube size='25' /></a>
          </div>
        </div>
      </div>
      
      {/* Sección de derechos de autor y métodos de pago */}
      <h2 className="container mx-auto px-6 py-4 flex justify-between items-center text-4xl tracking-[.75em]">HEAVEN</h2>
      <div className="container mx-auto px-6 py-4 border-t border-gray-700 flex justify-between items-center">
        <p>&copy; {new Date().getFullYear()} | HEAVEN | todos los derechos reservados.</p>
        <div className="flex">
          <a href="https://paypal.com" className="mr-2"><SiPaypal size='30' /></a>
          <a href="#" className="mr-2"><SiVisa size='30'/></a>
          <a href="#" className="mr-2"><SiMastercard size='30'/></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
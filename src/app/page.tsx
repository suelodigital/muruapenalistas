'use client';

import { Shield, Users, Scale, Phone, Mail, MapPin, Clock, CheckCircle, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-black to-gray-900">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/90 backdrop-blur-md border-b border-yellow-500/20' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-xl font-bold bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
                ESTUDIO MURUA
              </h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <button
                  onClick={() => scrollToSection('inicio')}
                  className="text-gray-300 hover:text-yellow-500 px-3 py-2 text-sm font-medium transition-colors duration-200"
                >
                  INICIO
                </button>
                <button
                  onClick={() => scrollToSection('sobre-nosotros')}
                  className="text-gray-300 hover:text-yellow-500 px-3 py-2 text-sm font-medium transition-colors duration-200"
                >
                  SOBRE NOSOTROS
                </button>
                <button
                  onClick={() => scrollToSection('servicios')}
                  className="text-gray-300 hover:text-yellow-500 px-3 py-2 text-sm font-medium transition-colors duration-200"
                >
                  SERVICIOS
                </button>
                <button
                  onClick={() => scrollToSection('contacto')}
                  className="text-gray-300 hover:text-yellow-500 px-3 py-2 text-sm font-medium transition-colors duration-200"
                >
                  CONTACTO
                </button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-300 hover:text-yellow-500 p-2"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-md border-b border-yellow-500/20">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <button
                onClick={() => scrollToSection('inicio')}
                className="text-gray-300 hover:text-yellow-500 block px-3 py-2 text-base font-medium w-full text-left transition-colors duration-200"
              >
                INICIO
              </button>
              <button
                onClick={() => scrollToSection('sobre-nosotros')}
                className="text-gray-300 hover:text-yellow-500 block px-3 py-2 text-base font-medium w-full text-left transition-colors duration-200"
              >
                SOBRE NOSOTROS
              </button>
              <button
                onClick={() => scrollToSection('servicios')}
                className="text-gray-300 hover:text-yellow-500 block px-3 py-2 text-base font-medium w-full text-left transition-colors duration-200"
              >
                SERVICIOS
              </button>
              <button
                onClick={() => scrollToSection('contacto')}
                className="text-gray-300 hover:text-yellow-500 block px-3 py-2 text-base font-medium w-full text-left transition-colors duration-200"
              >
                CONTACTO
              </button>
            </div>
          </div>
        )}
      </nav>
      {/* Hero Section - INICIO */}
      <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src="/lawyer-header.jpg"
            alt="Abogado profesional"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900/95 to-black opacity-90"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-60"></div>
        </div>
        
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-600/20 to-transparent"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
              ESTUDIO MURUA
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 mx-auto mb-8"></div>
          </div>
          
          <h2 className="text-2xl md:text-4xl text-white font-light mb-6">
            Abogacía Penalista Especializada
          </h2>
          
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Bajo la dirección de Leopoldo Murua, contamos con un equipo de ayudantes 
            estudiantes de abogacía comprometidos con la defensa de sus derechos.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-semibold rounded-lg hover:from-yellow-400 hover:to-yellow-500 transition-all duration-300 transform hover:scale-105">
              Consulta Gratuita
            </button>
            <button className="px-8 py-4 border-2 border-yellow-500 text-yellow-500 font-semibold rounded-lg hover:bg-yellow-500 hover:text-black transition-all duration-300">
              Nuestros Servicios
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white">
            <div className="flex items-center justify-center gap-3">
              <Shield className="w-6 h-6 text-yellow-500" />
              <span>Defensa Penal</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Scale className="w-6 h-6 text-yellow-500" />
              <span>Asesoría Legal</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Users className="w-6 h-6 text-yellow-500" />
              <span>Equipo Experto</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - SOBRE NOSOTROS */}
      <section id="sobre-nosotros" className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent mb-4">
              Sobre Nuestro Estudio
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl text-white font-semibold mb-6">
                Leopoldo Murua
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Abogado penalista con amplia experiencia en la defensa de causas penales complejas. 
                Líder del Estudio Murua, dedicado a proporcionar representación legal de excelencia 
                y defensa rigurosa de los derechos de nuestros clientes.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Nuestra misión es construir una firma de abogados de referencia, combinando la 
                experiencia profesional con el talento y la energía de jóvenes estudiantes de 
                abogacía que se forman bajo nuestra supervisión directa.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-yellow-500" />
                  <span className="text-white">Atención personalizada</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-yellow-500" />
                  <span className="text-white">Estrategia defensiva sólida</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-yellow-500" />
                  <span className="text-white">Compromiso con cada caso</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-lg border border-yellow-500/20">
              <h4 className="text-xl text-yellow-500 font-semibold mb-6">Nuestro Equipo</h4>
              <p className="text-gray-300 mb-4">
                Contamos con un equipo selecto de ayudantes estudiantes de abogacía que:
              </p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-yellow-500 mt-1">•</span>
                  <span>Apoyan en la investigación y preparación de casos</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-500 mt-1">•</span>
                  <span>Mantienen actualizado el conocimiento legal</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-500 mt-1">•</span>
                  <span>Brindan atención detallada a cada cliente</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-500 mt-1">•</span>
                  <span>Se forman bajo la supervisión directa de Leopoldo Murua</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - SERVICIOS */}
      <section id="servicios" className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent mb-4">
              Áreas de Práctica
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-lg border border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300">
              <Shield className="w-12 h-12 text-yellow-500 mb-6" />
              <h3 className="text-2xl text-white font-semibold mb-4">Derecho Penal</h3>
              <p className="text-gray-300 leading-relaxed">
                Defensa en causas penales, delitos contra la propiedad, delitos económicos, 
                y violaciones a la ley penal en todas sus modalidades.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-lg border border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300">
              <Scale className="w-12 h-12 text-yellow-500 mb-6" />
              <h3 className="text-2xl text-white font-semibold mb-4">Asesoría Legal</h3>
              <p className="text-gray-300 leading-relaxed">
                Consultoría preventiva, análisis de riesgos penales, y asesoramiento 
                estratégico para evitar contingencias legales.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-lg border border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300">
              <Users className="w-12 h-12 text-yellow-500 mb-6" />
              <h3 className="text-2xl text-white font-semibold mb-4">Representación</h3>
              <p className="text-gray-300 leading-relaxed">
                Acompañamiento en todas las etapas del proceso penal, desde la 
                investigación inicial hasta la conclusión del caso.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - CONTACTO */}
      <section id="contacto" className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent mb-4">
              Contacto
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl text-white font-semibold mb-8">Póngase en Contacto</h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Phone className="w-6 h-6 text-yellow-500" />
                  <div>
                    <p className="text-white font-medium">Teléfono</p>
                    <p className="text-gray-300">+54 11 XXXX-XXXX</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6 text-yellow-500" />
                  <div>
                    <p className="text-white font-medium">Email</p>
                    <p className="text-gray-300">info@estudiomurua.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <MapPin className="w-6 h-6 text-yellow-500" />
                  <div>
                    <p className="text-white font-medium">Ubicación</p>
                    <p className="text-gray-300">Buenos Aires, Argentina</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <Clock className="w-6 h-6 text-yellow-500" />
                  <div>
                    <p className="text-white font-medium">Horario de Atención</p>
                    <p className="text-gray-300">Lunes a Viernes: 9:00 - 18:00</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-lg border border-yellow-500/20">
              <h3 className="text-2xl text-yellow-500 font-semibold mb-6">Consulta Gratuita</h3>
              <p className="text-gray-300 mb-6">
                Ofrecemos una consulta inicial sin cargo para evaluar su caso y 
                proporcionarle la mejor estrategia defensiva.
              </p>
              <button className="w-full px-6 py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-semibold rounded-lg hover:from-yellow-400 hover:to-yellow-500 transition-all duration-300 transform hover:scale-105">
                Solicitar Consulta
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-black border-t border-yellow-500/20">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent mb-4">
            ESTUDIO MURUA
          </h3>
          <p className="text-gray-400 mb-4">
            Defensa Penalista Especializada - Construyendo el futuro del derecho penal
          </p>
          <p className="text-gray-500 text-sm">
            © 2024 Estudio Murua. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
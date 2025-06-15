import React, { useState, useEffect } from 'react';
import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";
import GaleriaMomentos from "./GaleriaMomentos";
import { GiSoccerField } from "react-icons/gi";
import { 
  Fish, 
  Utensils, 
  MapPin, 
  Phone, 
  Clock, 
  Users, 
  Star,
  Menu,
  X,
  ChefHat,
  Trophy,
  Camera,
  Mail
} from 'lucide-react';
const HalfStar = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 20 20"
    fill="none"
    className={props.className}
    width={props.width}
    height={props.height}
    {...props}
  >
    <defs>
      <linearGradient id="half-grad">
        <stop offset="50%" stopColor="#facc15" />
        <stop offset="50%" stopColor="#bfa100" />
      </linearGradient>
    </defs>
    <path
      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.049 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z"
      fill="url(#half-grad)"
    />
  </svg>
);

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

 const baseRaw = import.meta.env.BASE_URL;
 const base = baseRaw.endsWith('/') ? baseRaw : baseRaw + '/';

const images = [
  `${base}imagens/arena1.jpg`,
  `${base}imagens/arena2.jpg`,
  `${base}imagens/arena3.jpg`,
  `${base}imagens/arena4.jpg`,
  `${base}imagens/arena5.jpg`,
  `${base}imagens/arena6.jpg`,
  `${base}imagens/arena7.jpg`
];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  const menuItems = [
    {
      category: "Porções",
      items: [
        { name: "Filé de Tilápia", price: "R$-", description: "Filés empanados e fritos até ficarem dourados e crocantes, servidos com limão." },
        { name: "Costelinha de Pacu", price: "R$-", description: "Costelinhas do peixe pacu fritas, com tempero especial da casa." },
        { name: "Torresmo de Rolo", price: "R$-", description: "Típico torresmo em rolo, crocante por fora e suculento por dentro, servido em fatias." },
        { name: "Sashimi de Tilápia", price: "R$-", description: "Finas lâminas de tilápia crua, servidas com repolho, cebola e gengibre." }
      ]
    },
    {
      category: "Pratos Refeição",
      items: [
        { name: "Picanha Grelhada", price: "R$-", description: "Cortes nobres de picanha grelhados no ponto certo, acompanhados de arroz, farofa e vinagrete." },
        { name: "Parmegiana Bovina", price: "R$-", description: "Bife empanado coberto com molho de tomate e queijo derretido, servido com arroz e batata frita." },
        { name: "Tilápia Italiana", price: "R$-", description: "Filé de tilápia ao molho de tomates frescos e ervas, finalizado com queijo gratinado." },
        { name: "Costelinha de Porco Barbecue", price: "R$-", description: "Costelinhas suínas banhadas em molho barbecue artesanal, com arroz e batatas rústicas." }
      ]
    }
  ];

  const testimonials = [
    {
      name: "Adriana Dos Santos Tunes",
      rating: 5,
      comment: "Lugar maravilhoso, ótimo atendimento e comida deliciosa!."
    },
    {
      name: "Fábio Barbosa",
      rating: 5,
      comment: "Local maravilhoso para passar um tempo com sua família e apreciar os pratos maravilhosos do menu! Diversidade e cerveja bem gelada com atendimento adequado! Recomendo."
    },
    {
      name: "Fernando Correa",
      rating: 5,
      comment: "Excelente restaurante. Ótimo atendimento. Vale a pena conhecer. E aqueles que já conhecem, vir novamente. Certamente voltarei. O prato serve tranquilamente duas pessoas. Caipirinha de limão com vodka mereceu um repeteco."
    },
    {
      name: "Thamires Nayara Pereira",
      rating: 5,
      comment: "Ambiente super agradável, tudo excelente quanto ao cardápio e ótimo atendimento também. 👏🏻👏🏻"
    },
    {
      name: "Debora Dias",
      rating: 5,
      comment: "Excelente! Atendimento, comida, paisagem, conforto, tudo nota 10! Certeza da minha volta!."
    },
    {
      name: "Alexandre Venâncio",
      rating: 5,
      comment: "Ambiente incrível comida muito saborosa porém o atendimento estava havendo uma briga interna que depois foi sanada mas só uma dica chamar atenção de seus funcionários deixa para depois do expediente se não o ambiente fica pesado e funcionários descontentes. Me desculpa é só um feedback. Fora isso tudo perfeito."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header
  className="absolute top-0 left-0 w-full z-30 bg-white/80 backdrop-blur-md transition-all duration-300"
  style={{
    boxShadow: '0 8px 32px 0 rgba(0,0,0,0.25), 0 1.5px 8px 0 rgba(0,0,0,0.10)'
  }}
>
  <div className="container mx-auto px-4 py-3">
    <div className="flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <img
  src={`${import.meta.env.BASE_URL}imagens/logo2.jpg`}
  alt="Logo Arena Comelli"
  className="w-16 h-16"
/>
       <h1 className="text-4xl font-carnival font-extrabold text-[#34cc34] drop-shadow-lg tracking-wide custom-stroke">
  Arena Comelli
</h1>
      </div>
      {/* Desktop Menu */}
      <nav className="hidden md:flex space-x-8">
        <a href="#inicio" className="text-gray-700 hover:text-[#34cc34] transition-colors font-semibold text-lg">Início</a>
        <a href="#servicos" className="text-gray-700 hover:text-[#34cc34] transition-colors font-semibold text-lg">Serviços</a>
        <a href="#cardapio" className="text-gray-700 hover:text-[#34cc34] transition-colors font-semibold text-lg">Cardápio</a>
        <a href="#galeria" className="text-gray-700 hover:text-[#34cc34] transition-colors font-semibold text-lg">Galeria</a>
        <a href="#contato" className="text-[#34cc34] hover:text-[#34cc34] transition-colors font-semibold text-lg">Contato</a>
      </nav>
      {/* Mobile Menu Button */}
      <button 
        className="md:hidden text-gray-700 hover:text-[#34cc34] p-2 rounded-full border border-gray-200 shadow-sm transition"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Abrir menu"
      >
        {isMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
      </button>
    </div>
    {/* Mobile Menu */}
    {isMenuOpen && (
      <nav className="md:hidden mt-4 pb-4 border-t border-gray-200 animate-fade-in">
        <div className="flex flex-col space-y-4 mt-4">
          <a href="#inicio" className="text-gray-700 hover:text-[#34cc34] transition-colors font-semibold text-lg">Início</a>
          <a href="#servicos" className="text-gray-700 hover:text-[#34cc34] transition-colors font-semibold text-lg">Serviços</a>
          <a href="#cardapio" className="text-gray-700 hover:text-[#34cc34] transition-colors font-semibold text-lg">Cardápio</a>
          <a href="#galeria" className="text-gray-700 hover:text-[#34cc34] transition-colors font-semibold text-lg">Galeria</a>
          <a href="#contato" className="text-gray-700 hover:text-[#34cc34] transition-colors font-semibold text-lg">Contato</a>
        </div>
      </nav>
    )}
  </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="relative h-screen overflow-hidden pt-24">
        <div className="absolute inset-0 transition-opacity duration-1000">
          <img 
            src={images[currentImageIndex]} 
            alt="Pesca Esportiva" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 h-full flex items-center justify-center text-center text-white px-4">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Pesca Esportiva & 
              <span className="text-[#34cc34]"> Restaurante</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed">
              Desfrute da melhor experiência de pesca esportiva com pratos deliciosos preparados com peixes frescos
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
<button
  className="bg-[#34cc34] hover:bg-[#2ba52b] text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
  onClick={() => {
    const contato = document.getElementById('contato');
    if (contato) {
      contato.scrollIntoView({ behavior: 'smooth' });
    }
  }}
>
  Faça sua reserva
</button>
<button
  className="border-2 border-white text-white hover:bg-white hover:text-gray-800 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300"
  onClick={() => {
    const cardapio = document.getElementById('cardapio');
    if (cardapio) {
      cardapio.scrollIntoView({ behavior: 'smooth' });
    }
  }}
>
  Ver cardápio
</button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Nossos <span className="text-[#34cc34]">Serviços</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Oferecemos uma experiência completa para toda a família
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Pesca Esportiva */}
            <div className="bg-gradient-to-br from-[#34cc34] to-[#2ba52b] rounded-2xl p-8 text-white transform hover:scale-105 transition-all duration-300 shadow-xl">
              <Fish className="h-16 w-16 mb-6 mx-auto" />
              <h3 className="text-2xl font-bold mb-4 text-center">Pesca Esportiva</h3>
              <p className="text-center mb-6 leading-relaxed">
                Açudes com peixes de qualidade, equipamentos disponíveis para locação e ambiente perfeito para pescadores iniciantes e experientes.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center"><Trophy className="h-4 w-4 mr-2" /> Açudes com peixes variados</li>
                <li className="flex items-center"><Trophy className="h-4 w-4 mr-2" /> Equipamentos para locação</li>
                <li className="flex items-center"><Trophy className="h-4 w-4 mr-2" /> Instrutor disponível</li>
              </ul>
            </div>

            {/* Restaurante */}
            <div className="bg-white border-2 border-[#34cc34] rounded-2xl p-8 transform hover:scale-105 transition-all duration-300 shadow-xl">
              <Utensils className="h-16 w-16 mb-6 mx-auto text-[#34cc34]" />
              <h3 className="text-2xl font-bold mb-4 text-center text-gray-800">Restaurante</h3>
              <p className="text-center mb-6 text-gray-600 leading-relaxed">
                Pratos deliciosos preparados com peixes frescos, temperos especiais e receitas tradicionais da região com a melhor culiária da cidade.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center"><ChefHat className="h-4 w-4 mr-2 text-[#34cc34]" /> Peixes frescos diariamente</li>
                <li className="flex items-center"><ChefHat className="h-4 w-4 mr-2 text-[#34cc34]" /> Pratos tradicionais</li>
                <li className="flex items-center"><ChefHat className="h-4 w-4 mr-2 text-[#34cc34]" /> Vista incrível</li>
              </ul>
            </div>

            {/* Campo de Futebol */}
            <div className="bg-gray-800 rounded-2xl p-8 text-white transform hover:scale-105 transition-all duration-300 shadow-xl">
              <GiSoccerField className="h-16 w-16 mb-6 mx-auto text-[#34cc34]" />
              <h3 className="text-2xl font-bold mb-4 text-center">Campos de Futebol</h3>
              <p className="text-center mb-6 leading-relaxed">
                Campos gramado society para jogos entre amigos e familiares. Perfeito para completar o dia de lazer.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center"><Trophy className="h-4 w-4 mr-2 text-[#34cc34]" /> Campo gramado</li>
                <li className="flex items-center"><Trophy className="h-4 w-4 mr-2 text-[#34cc34]" /> Arquibancada</li>
                <li className="flex items-center"><Trophy className="h-4 w-4 mr-2 text-[#34cc34]" /> Área de descanso</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="cardapio" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Nosso <span className="text-[#34cc34]">Cardápio</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Pratos preparados com os peixes mais frescos e ingredientes selecionados
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {menuItems.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-white rounded-2xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center border-b-2 border-[#34cc34] pb-4">
                  {category.category}
                </h3>
                <div className="space-y-6">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="border-b border-gray-100 pb-4 last:border-b-0">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-lg font-semibold text-gray-800">{item.name}</h4>
                        <span className="text-[#34cc34] font-bold text-lg">{item.price}</span>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-[#34cc34] hover:bg-[#2ba52b] text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
              Ver Cardápio Completo
            </button>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="galeria" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              <span className="text-[#34cc34]">Galeria</span> de Fotos
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Veja nossa culinária e momentos especiais dos nossos clientes
            </p>
          </div>
          <GaleriaMomentos />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-r from-[#34cc34] to-[#2ba52b]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="relative flex flex-col md:flex-row md:items-center md:justify-center">
  <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 md:mb-0 text-center w-full">
    - O que nossos clientes dizem -
  </h2>
  <div className="">
  <a
  href="https://www.google.com/search?q=arena+comeli&oq=arena+comeli&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIPCAEQLhgKGK8BGMcBGIAEMgYIAhBFGEAyCggDEAAYgAQYogQyCggEEAAYgAQYogQyCggFEAAYgAQYogTSAQgxODE4ajBqN6gCALACAA&sourceid=chrome&ie=UTF-8#lrd=0x94eaa3f397b6d79f:0x97117f58029404eb,1,,,,"
  target="_blank"
  rel="noopener noreferrer"
  className="md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2 flex items-center justify-center mt-4 md:mt-0 md:ml-8 bg-white/20 rounded-xl px-6 py-2 shadow-xl backdrop-blurg w-64 cursor-pointer transition hover:bg-white/40"
>
  <span className="text-3xl font-extrabold text-yellow-400 mr-2 drop-shadow-lg">4.7</span>
  <div className="flex space-x-1">
    <Star className="h-7 w-7 text-yellow-400 fill-current drop-shadow" />
    <Star className="h-7 w-7 text-yellow-400 fill-current drop-shadow" />
    <Star className="h-7 w-7 text-yellow-400 fill-current drop-shadow" />
    <Star className="h-7 w-7 text-yellow-400 fill-current drop-shadow" />
    <HalfStar className="h-7 w-7 drop-shadow" />
  </div>
  <span className="ml-3 text-white text-base font-medium"></span>
</a>
</div>
</div>
            <p className="text-xl text-green-100 max-w-2xl mx-auto mt-6">
              Experiências reais de quem já visitou a Arena Comelli
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-xl transform hover:scale-105 transition-all duration-300">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed italic">
                  "{testimonial.comment}"
                </p>
                <div className="font-semibold text-gray-800">
                  {testimonial.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

       {/* Contact Section */}
      <section id="contato" className="py-20 bg-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center w-full mb-12">
  {/* Logos à esquerda */}
  <div className="flex space-x-3">
    <img className="rounded-full w-20 h-20" src={`${base}imagens/logo-arena-comelli.jpg`} alt="Arena Comelli" />
<img className="rounded-full w-20 h-20" src={`${base}imagens/logo-arena-pesca.jpg`} alt="Arena Pesca Esportiva" />
<img className="rounded-full w-20 h-20" src={`${base}imagens/logo-arena-grill.jpg`} alt="Arena Grill" />
  </div>
  {/* Espaço flexível entre logos e texto */}
  <div className="flex-1" />
  {/* Texto centralizado */}
  <div className="text-left flex-shrink-0 -ml-64">
  <h2 className="text-4xl md:text-5xl font-bold mb-2">
    Entre em <span className="text-[#34cc34]">Contato</span>
  </h2>
  <p className="text-xl text-gray-300 max-w-2xl">
    Venha nos visitar e viva uma experiência única
  </p>
</div>
  {/* Espaço flexível à direita para centralizar o texto */}
  <div className="flex-1" />
</div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
  <div className="flex items-start space-x-4 mt-16">
  <MapPin className="h-8 w-8 text-[#34cc34] flex-shrink-0 mt-5" />
  <div>
    <h3 className="text-xl font-semibold mb-2">Endereço</h3>
    <p className="text-gray-300">Rodovia BR-369, Km 24, Floresta<br />CEP: 86390-000 - Cambará, Paraná</p>
  </div>
</div>

<div className="flex items-start space-x-4 mt-12">
  <Phone className="h-8 w-8 text-[#34cc34] flex-shrink-0 mt-5" />
  <div>
    <h3 className="text-xl font-semibold mb-2">Telefone</h3>
    <p className="text-gray-300">(43) 9 9951-4973</p>
  </div>
</div>

<div className="flex items-start space-x-4 mt-12">
  <Clock className="h-8 w-8 text-[#34cc34] flex-shrink-0 mt-5" />
  <div>
    <h3 className="text-xl font-semibold mb-2">Horário de Funcionamento</h3>
    <p className="text-gray-300">Quarta e Quinta: 10h às 19h<br />Sexta e Sábado: 10h às 21h<br />Domingo e Feriados: 09 às 19h</p>
  </div>
</div>
</div>
            <div className="bg-gray-700 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-6 text-center">Faça sua Reserva</h3>
              <form className="space-y-4">
                <div>
                  <input 
                    type="text" 
                    placeholder="Seu nome" 
                    className="w-full px-4 py-3 rounded-lg bg-gray-600 text-white placeholder-gray-300 border border-gray-500 focus:border-[#34cc34] focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Seu e-mail" 
                    className="w-full px-4 py-3 rounded-lg bg-gray-600 text-white placeholder-gray-300 border border-gray-500 focus:border-[#34cc34] focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <input 
                    type="tel" 
                    placeholder="Seu telefone" 
                    className="w-full px-4 py-3 rounded-lg bg-gray-600 text-white placeholder-gray-300 border border-gray-500 focus:border-[#34cc34] focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <select
  className="w-full px-4 py-3 rounded-lg bg-gray-600 text-gray-300 placeholder-gray-300 border border-gray-500 focus:border-[#34cc34] focus:outline-none transition-colors"
  defaultValue=""
>
  <option value="" disabled>Área de interesse</option>
  <option value="campo">Campo de Futebol</option>
  <option value="pesca">Pesca Esportiva</option>
  <option value="restaurante">Restaurante</option>
</select>
                </div>  
                <div>
                  <textarea 
                    placeholder="Sua mensagem" 
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-gray-600 text-white placeholder-gray-300 border border-gray-500 focus:border-[#34cc34] focus:outline-none transition-colors resize-none"
                  ></textarea>
                </div>
                <button className="w-full bg-[#34cc34] hover:bg-[#2ba52b] text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                  Enviar Mensagem
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
  <img
  src={`${import.meta.env.BASE_URL}imagens/logo2.jpg`}
  alt="Logo Arena Comelli"
  className="w-16 h-16"
/>
  <h3 className="text-2xl font-extrabold" style={{ fontWeight: 1000 }}>
  Arena Comelli
</h3>
</div>
              <p className="text-gray-300 leading-relaxed">
                O melhor local para pesca esportiva e gastronomia regional. Uma experiência única para toda a família.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-[#34cc34]">Serviços</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Pesca Esportiva</li>
                <li>Restaurante</li>
                <li>Campo de Futebol</li>
                <li>Eventos Privados</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-[#34cc34]">Links Úteis</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#cardapio" className="hover:text-[#34cc34] transition-colors">Cardápio</a></li>
                <li><a href="#galeria" className="hover:text-[#34cc34] transition-colors">Galeria</a></li>
                <li><a href="#contato" className="hover:text-[#34cc34] transition-colors">Contato</a></li>
                <li><a href="#" className="hover:text-[#34cc34] transition-colors">Política de Privacidade</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-[#34cc34]">Siga-nos</h4>
              <p className="text-gray-300 mb-4">
                Acompanhe nossas novidades e promoções
              </p>
              <div className="flex space-x-4">
                <a
  href="https://www.instagram.com/arenacomelli/"
  target="_blank"
  rel="noopener noreferrer"
>
  <button className="bg-[#34cc34] hover:bg-[#2ba52b] p-2 rounded-full transition-colors">
    <FaInstagram className="h-5 w-5" />
  </button>
</a>
<a
  href="https://www.facebook.com/arena.comelli.2025"
  target="_blank"
  rel="noopener noreferrer"
>
  <button className="bg-[#34cc34] hover:bg-[#2ba52b] p-2 rounded-full transition-colors">
    <FaFacebookF className="h-5 w-5" />
  </button>
</a>
<a
  href="https://wa.me/554399514973"
  target="_blank"
  rel="noopener noreferrer"
>
  <button className="bg-[#34cc34] hover:bg-[#2ba52b] p-2 rounded-full transition-colors">
    <FaWhatsapp className="h-5 w-5" />
  </button>
</a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2025 Arena Comelli. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
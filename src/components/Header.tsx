import { FaInstagram, FaFacebook, FaWhatsapp, FaYoutube } from "react-icons/fa";

const Header = () => {
  return (
    <header className="flex flex-col items-center mb-8">
      <div className="relative mb-4">
        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden profile-image">
          <a href="">
            <img src="./my-photo.jpg" alt="" />
          </a>
        </div>
        <div className="absolute -bottom-2 -right-2 bg-accent text-white rounded-full p-2 shadow-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
            />
          </svg>
        </div>
      </div>
      <h1 className="text-3xl md:text-4xl font-bold mb-2 text-center">
        Aloísio Júnior
      </h1>
      <h2 className="text-xl md:text-2xl font-medium mb-4 text-accent text-center">
        Personal Trainer
      </h2>
      <p className="text-center max-w-lg mb-6 text-light/90">
        Especialista em idosos e co-autor do livro "Personal Moderno".
        Transformando e salvando vidas através do exercício físico.
      </p>
      <div className="flex space-x-4 mb-6">
        <a
          href="https://www.instagram.com/aloisiojrpersonal/"
          target="_blank"
          rel="noreferrer"
          className="text-light hover:text-accent transition-colors"
        >
          <FaInstagram className="text-2xl" />
        </a>
        <a href="#" className="text-light hover:text-accent transition-colors">
          <FaFacebook className="text-2xl" />
        </a>
        <a href="https://api.whatsapp.com/send/?phone=5585999343189&text=Quero+saber+mais+sobre+seus+servi%C3%A7os+&type=phone_number&app_absent=0" target="_blank" className="text-light hover:text-accent transition-colors">
          <FaWhatsapp className="text-2xl" />
        </a>
        <a href="#" className="text-light hover:text-accent transition-colors">
          <FaYoutube className="text-2xl" />
        </a>
      </div>
    </header>
  );
};

export default Header;

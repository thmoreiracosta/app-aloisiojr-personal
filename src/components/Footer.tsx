const Footer = () => {
  return (
    <footer className="text-center text-white/70 text-sm">
      <p>
        &copy; {new Date().getFullYear()} Aloísio Júnior Personal Trainer. Todos
        os direitos reservados.
      </p>
      <div className="mt-4 flex justify-center space-x-4 mb-6">
        <a href="#" className="hover:text-accent transition-colors">
          Termos
        </a>
        <a href="#" className="hover:text-accent transition-colors">
          Privacidade
        </a>
        <a 
        href="https://api.whatsapp.com/send/?phone=5585999343189&text=Quero+saber+mais+sobre+seus+servi%C3%A7os+&type=phone_number&app_absent=0" 
        className="hover:text-accent transition-colors"
        target="_blank"
        >
          Contato
        </a>
      </div>
      <span className="text-xs">
        Desenvolvido com ❤️ por{" "}
        <a className="text-xs" href="https://bit.ly/whatsapp_thiagocosta">
          @thmoreiracosta
        </a>
      </span>
    </footer>
  );
};

export default Footer;

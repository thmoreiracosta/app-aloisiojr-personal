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
          href="mailto:a.junior_ef@hotmail.com?subject=Olá&body=Escreva aqui sua mensagem..."
          className="hover:text-accent transition-colors"
          target="_blank"
        >
          Enviar e-mail
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

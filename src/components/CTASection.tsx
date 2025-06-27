const CTASection = () => {
  return (
    <section id="CTASection" className="mb-12">
      <div className="bg-gradient-to-r from-darkblue via-primary to-teal rounded-xl p-6 text-center">
        <div className="flex flex-col items-center md:flex-row md:items-center md:text-left gap-6">
          <img 
            className="w-[150px] h-[150px] rounded-full mx-auto -bottom-2 -right-2 bg-accent text-white p-1.5 shadow-lg"
            src="./image.png" 
            alt="Personal Trainer"
            title="@aloisiojrpersonal" 
          />
          <div className="w-full">
            <h2 className="text-2xl font-bold mb-6 text-center">Pronto para transformar sua vida?</h2>
            <p className="text-center mb-6 text-white/90">Quer mudar seus hábitos? Comece hoje mesmo sua jornada para uma vida mais saudável e ativa.</p>
            <div className="flex justify-center">
              <a 
                href="https://api.whatsapp.com/send/?phone=5585999343189&text=Quero+saber+mais+sobre+seus+servi%C3%A7os+&type=phone_number&app_absent=0" 
                className="inline-block bg-white text-primary font-bold py-3 px-8 rounded-full hover:bg-white/70 transition-colors shadow-lg"
                target="_blank"
              >
                Fale Comigo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

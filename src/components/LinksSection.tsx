import { FaBook, FaCalendarCheck, FaDumbbell, FaUserFriends, FaChevronRight } from 'react-icons/fa';

const LinkSections = () => {
  return (
    <section className="mb-12">
      <div className="grid gap-4">
        <a href="https://sun.eduzz.com/79777JNB9E" target="_blank" rel="noreferrer" className="link-card bg-gradient-to-r from-darkblue to-accent text-white p-4 rounded-xl flex items-center justify-between">
          <div className="flex items-center">
            <div className="bg-white/20 p-3 rounded-lg mr-4">
              <FaBook className="text-xl" />
            </div>
            <div>
              <h3 className="font-bold">Meu Livro</h3>
              <p className="text-sm text-white/80">Personal Moderno - Adquira já!</p>
            </div>
          </div>
          <FaChevronRight />
        </a>
        
        <a href="#CTASection" className="link-card bg-white/10 backdrop-blur-sm p-4 rounded-xl flex items-center justify-between hover:bg-white/20">
          <div className="flex items-center">
            <div className="bg-accent p-3 rounded-lg mr-4">
              <FaCalendarCheck className="text-xl" />
            </div>
            <div>
              <h3 className="font-bold">Agende uma Avaliação</h3>
              <p className="text-sm text-white/80">Avaliação personalizada</p>
            </div>
          </div>
          <FaChevronRight />
        </a>
        
        <a href="#Blog" className="link-card bg-white/10 backdrop-blur-sm p-4 rounded-xl flex items-center justify-between hover:bg-white/20">
          <div className="flex items-center">
            <div className="bg-secondary p-3 rounded-lg mr-4">
              <FaDumbbell className="text-xl" />
            </div>
            <div>
              <h3 className="font-bold">Planos de Treino</h3>
              <p className="text-sm text-white/80">Conheça as opções disponíveis</p>
            </div>
          </div>
          <FaChevronRight />
        </a>
        
        <a href="#Depoiments" className="link-card bg-white/10 backdrop-blur-sm p-4 rounded-xl flex items-center justify-between hover:bg-white/20">
          <div className="flex items-center">
            <div className="bg-navy p-3 rounded-lg mr-4">
              <FaUserFriends className="text-xl" />
            </div>
            <div>
              <h3 className="font-bold">Depoimentos</h3>
              <p className="text-sm text-white/80">Veja os resultados dos meus alunos</p>
            </div>
          </div>
          <FaChevronRight />
        </a>
      </div>
    </section>
  );
};

export default LinkSections;
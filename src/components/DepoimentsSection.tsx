import { FaStar } from 'react-icons/fa';

const DepoimentsSection = () => {
  return (
    <section id="Depoiments" className="mb-12">
      <h2 className="text-2xl font-bold mb-6 text-center">O que dizem sobre mim</h2>
      
      <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center mr-4">
            <span className="font-bold text-lg">M</span>
          </div>
          <div>
            <h3 className="font-bold">Maria Silva</h3>
            <p className="text-sm text-white/80">68 anos</p>
          </div>
        </div>
        <p className="italic text-white/90 mb-4">
          "Depois que comecei a treinar com o Aloísio, minha qualidade de vida melhorou significativamente. 
          Tenho mais disposição, menos dores e me sinto mais jovem!"
        </p>
        <div className="flex text-accent">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DepoimentsSection;
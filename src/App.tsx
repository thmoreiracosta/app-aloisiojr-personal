import { useEffect } from 'react';
import Cabecalho from './components/Header';
import SecaoLinks from './components/LinksSection';
import SecaoBlog from './components/BlogSection';
import SecaoExercicios from './components/ExercisesSection';
import SecaoCTA from './components/CTASection';
import SecaoDepoimentos from './components/DepoimentsSection';
import Rodape from './components/Footer';

function App() {
  useEffect(() => {
    // Adiciona animação ao rolar
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('section').forEach(section => {
      section.classList.add('transition-all', 'duration-700', 'opacity-0', 'translate-y-10');
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="container max-w-3xl mx-auto px-4 py-8 font-sans text-light">
      <Cabecalho />
      <SecaoLinks />
      <SecaoBlog />
      <SecaoExercicios />
      <SecaoCTA />
      <SecaoDepoimentos />
      <Rodape />
    </div>
  );
}

export default App;
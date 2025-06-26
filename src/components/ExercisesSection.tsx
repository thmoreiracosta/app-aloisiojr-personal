import {
  FaWalking,
  FaHandRock,
  FaArrowDown,
  FaRunning,
  FaSync,
} from "react-icons/fa";

interface ExercicioCardProps {
  icone: React.ReactNode;
  titulo: string;
  descricao: string;
  corFundo: string;
  image: string;
}

const ExercicioCard = ({
  icone,
  titulo,
  descricao,
  corFundo,
  image,
}: ExercicioCardProps) => (
  <div className="exercise-card bg-white/10 backdrop-blur-sm p-4 rounded-xl hover:bg-white/20 transition-colors">
    <div className="flex items-center mb-3">
      <div className={`${corFundo} p-2 rounded-lg mr-3`}>{icone}</div>
      <h3 className="font-bold">{titulo}</h3>
    </div>
    <p className="text-sm text-white/80 mb-4">{descricao}</p>

    <div className="w-full h-100 overflow-hidden rounded-lg shadow-lg">
      <img
        src={image}
        alt={titulo}
        className="object-cover transform hover:scale-105 transition-transform duration-300 ease-in-out"
      />
    </div>
  </div>
);

const ExercisesSection = () => {
  const exercicios = [
    {
      icone: <FaWalking className="text-lg" />,
      titulo: "Caminhada",
      descricao:
        "Melhora a circulação, fortalece o coração e ajuda no controle do peso.",
      corFundo: "bg-accent",
      image: "./caminhada.png",
    },
    {
      icone: <FaHandRock className="text-lg" />,
      titulo: "Flexões de Braços",
      descricao: "Fortalece os músculos do peito, ombros e tríceps.",
      corFundo: "bg-secondary",
      image: "./flexao.png",
    },
    {
      icone: <FaArrowDown className="text-lg" />,
      titulo: "Agachamentos",
      descricao: "Fortalece pernas, glúteos e melhora a estabilidade corporal.",
      corFundo: "bg-navy",
      image: "./agachamento.png",
    },
    {
      icone: <FaRunning className="text-lg" />,
      titulo: "Marcha Estacionária",
      descricao:
        "Melhora o condicionamento cardiovascular e a coordenação motora.",
      corFundo: "bg-teal",
      image: "./marcha.png",
    },
    {
      icone: <FaSync className="text-lg" />,
      titulo: "Rotação de Tronco",
      descricao:
        "Contribui para o fortalecimento do core ajudando a reduzir dores e na melhora da postura.",
      corFundo: "bg-darkblue",
      image: "./rotacao.png",
    },
  ];

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-6 text-center">
        <span className="gradient-text">5 Exercícios Essenciais</span>
        <span className="block text-lg font-normal mt-1 text-light/80">
          Para uma longevidade mais saudável
        </span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {exercicios.map((exercicio, index) => (
          <ExercicioCard
            key={index}
            icone={exercicio.icone}
            titulo={exercicio.titulo}
            descricao={exercicio.descricao}
            corFundo={exercicio.corFundo}
            image={exercicio.image}
          />
        ))}
      </div>
    </section>
  );
};

export default ExercisesSection;

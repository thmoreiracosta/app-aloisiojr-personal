import { useState } from "react";
import BlogCard from "./BlogCard";
import VideoModal from "./VideoModal";

const BlogSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [videoExpanded, setVideoExpanded] = useState(false);

  return (
    <section id="Blog" className="mb-12">
      <h2 className="text-2xl font-bold mb-6 text-center">
        <span className="gradient-text">Blog</span>
        <span className="block text-lg font-normal mt-1 text-light/80">
          Dicas e conteúdos exclusivos
        </span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Blog comum usa expanded interno (não muda nada) */}
        <BlogCard
          title=""
          content="🧠💪 A ciência nos mostra que, mesmo com o envelhecimento, treinar de forma intensa preserva a força por mais anos."
          extraContent={`💥 Isso acontece porque não é só sobre músculo. O treinamento intenso gera adaptações neuromusculares, melhorando a coordenação e a resposta do sistema nervoso.\n
          🚀 Se você trabalha com idosos ou quer envelhecer com saúde, não ignore a musculação! Ela pode fazer toda a diferença na qualidade de vida.\n
          🔗 Salve esse post e compartilhe com quem precisa saber disso!\n
          📚 Fonte: Bloch-Ibenfeldt M, et al. Heavy resistance training at retirement age induces 4-year lasting beneficial effects in muscle strength: BMJ Open Sport & Exercise Medicine.`}
          date="20 de Março, 2025"
          imageSrc="./blog_1.jpg"
        />

        {/* Blog com vídeo usa expanded controlado + abre modal */}
        <BlogCard
          title="Boletim do gestor de Saúde do mês de Maio"
          content="Neste vídeo, demonstro exercícios simples e seguros que podem ser feitos em casa para manter a mobilidade."
          date="5 de Junho, 2025"
          isVideo
          actionLabel="Assistir"
          expanded={videoExpanded}
          setExpanded={setVideoExpanded}
          onPlayVideo={() => {
            setVideoExpanded(true);
            setIsModalOpen(true);
          }}
          videoPreviewSrc="./capa_video.jpg" // ✅ imagem de prévia aqui
          extraContent={`📢 Saiu o Boletim do Gestor de Saúde do mês de Maio! 💡 Teve atleta com parada cardíaca no palco, estudo novo sobre o Wegovy, casos bizarros com Ozempic e muito mais.
          🧠 Informação que impacta, com o olhar de quem vive saúde de verdade.\n 🚨 E se você acha que exagero não faz mal, espera ver o “pé de Ozempic”…
          📌 Compartilha com quem precisa repensar o que chama de autocuidado e me segue pra mais conteúdos que transformam vidas.
            #AloisioJrPersonal #BoletimDoGestorDeSaúde #ExercicioSalvaVidas #GestorDeSaúde #LongevidadeAtiva #AtualizaçõesDeSaúde`}
        />
      </div>

      <VideoModal
        videoSrc="./boletim_maio.mp4"
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};

export default BlogSection;

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
          title="Dicas valiosas para exercícios ideais e efetivos."
          content="Neste vídeo, dou dicas de exercícios simples, seguros e que funcionam e são muito importantes para alcançar seu objetivo."
          date="5 de Junho, 2025"
          isVideo
          actionLabel="Assistir"
          expanded={videoExpanded}
          setExpanded={setVideoExpanded}
          onPlayVideo={() => {
            setVideoExpanded(true);
            setIsModalOpen(true);
          }}
          videoPreviewSrc="./capa-video.png" // ✅ imagem de prévia aqui
          extraContent={`📢 Claro que tem exercício bom que ficou de fora e alguns ruins que nem mereciam entrar. 😅\n
            🏃 Mas nessa tierlist eu fui direto ao ponto: o que funciona, o que depende e o que só ocupa espaço no treino.\n
            👨‍🔬 É opinião técnica, mas ainda é opinião. Então comenta aí o que você tiraria ou colocaria.\n
            #AloisioJrPersonal #GestorDeSaúde #TreinoComResponsabilidade #MusculaçãoComCritério #PrescriçãoEstratégica #LongevidadeAtiva`}
        />
      </div>

      <VideoModal
        videoSrc="./exercicios-ideais.mp4"
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};

export default BlogSection;

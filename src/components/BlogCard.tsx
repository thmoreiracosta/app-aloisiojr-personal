import { useState } from "react";
import { FaPlay } from "react-icons/fa";

interface BlogCardProps {
  title: string;
  content: string;
  extraContent?: string;
  date: string;
  imageSrc?: string;
  isVideo?: boolean;  
  videoPreviewSrc?: string; // ✅ NOVO
  onPlayVideo?: () => void;
  actionLabel?: string;
  expanded?: boolean;
  setExpanded?: (value: boolean) => void;
}

const BlogCard = ({
  title,
  content,
  extraContent,
  date,
  imageSrc,
  isVideo = false,
  videoPreviewSrc, // ✅ adiciona aqui!
  onPlayVideo,
  actionLabel,
  expanded: controlledExpanded,
  setExpanded: setControlledExpanded,
}: BlogCardProps) => {

  // estado interno apenas se não for controlado externamente
  const [internalExpanded, setInternalExpanded] = useState(false);

  const isExpanded = controlledExpanded ?? internalExpanded;
  const setExpanded = setControlledExpanded ?? setInternalExpanded;

  const toggleExpanded = () => setExpanded(!isExpanded);

  const handlePlayClick = () => {
    setExpanded(true); // sempre expande
    if (onPlayVideo) onPlayVideo(); // abre o modal
  };

  return (
    <div className="blog-card bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden">
      {/* Mídia */}
      {isVideo ? (
        <div className="relative h-48 bg-slate flex items-center justify-center">
          {videoPreviewSrc && (
            <img
              src={videoPreviewSrc}
              alt="Prévia do vídeo"
              className="absolute w-full h-full object-cover"
            />
          )}
          <div
            className="absolute z-10 w-16 h-16 rounded-full bg-accent/80 flex items-center justify-center cursor-pointer hover:bg-accent transition-colors"
            onClick={handlePlayClick}
          >
            <FaPlay className="text-white text-xl" />
          </div>
        </div>
      ) : imageSrc ? (
        <img src={imageSrc} alt={title} className="w-full h-48 object-cover" />
      ) : (
        <div className="h-48 bg-darkblue" />
      )}

      {/* Conteúdo */}
      <div className="p-5">
        <h3 className="font-bold text-lg mb-2">{title}</h3>
        <p className="text-white/80 text-sm mb-4">
          {content}
          {isExpanded && extraContent && (
            <div className="mt-2 space-y-2">
              {extraContent.split("\n").map((line, idx) => (
                <p key={idx} className="text-white/80 text-sm">
                  {line}
                </p>
              ))}
            </div>
          )}
        </p>

        <div className="flex justify-between items-center">
          <span className="text-xs text-white/60">{date}</span>

          {extraContent && (
            <button
              onClick={toggleExpanded}
              className="text-accent hover:text-white transition-colors text-sm font-medium"
            >
              {isExpanded ? "Fechar" : actionLabel || "Ler mais"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogCard;

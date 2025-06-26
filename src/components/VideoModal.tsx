interface VideoModalProps {
  videoSrc: string;
  isOpen: boolean;
  onClose: () => void;
}

const VideoModal = ({ videoSrc, isOpen, onClose }: VideoModalProps) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed top-20 left-0 w-full h-150 bg-black/80 flex items-center justify-center overflow-hidden"
      style={{ zIndex: 9999999 }}
    >
      <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl w-[360px] h-[640px] max-w-full">
        {/* Botão fechar */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 z-10 text-white text-xl hover:text-red-500"
        >
          ×
        </button>

        {/* Vídeo */}
        <video
          src={videoSrc}
          autoPlay
          controls
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default VideoModal;

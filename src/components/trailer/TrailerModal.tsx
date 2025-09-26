type TrailerModalProps = {
  open: boolean // steuert Sichtbarkeit (showTrailer)
  embedUrl: string | null // fertige YouTube-Embed-URL
  onClose: () => void // schließt das Modal (setShowTrailer(false))
  className?: string // zusätzliche Klassen für die Box
}

export default function TrailerModal({
  open,
  embedUrl,
  onClose,
  className,
}: TrailerModalProps) {
  if (!open || !embedUrl) return null

  return (
    <div
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Trailer Modal"
    >
      <div
        className={`relative w-full max-w-3xl aspect-video bg-black rounded-lg overflow-hidden ${
          className ?? ''
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <iframe
          src={embedUrl}
          title="Trailer"
          className="w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
        <button
          onClick={onClose}
          className="absolute top-2 right-2 bg-white text-black px-3 py-1 rounded"
          aria-label="Trailer schließen"
        >
          ✕
        </button>
      </div>
    </div>
  )
}

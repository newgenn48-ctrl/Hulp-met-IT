export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="relative">
        <div className="loading-spinner"></div>
        <div className="absolute inset-0 animate-ping rounded-full h-8 w-8 border border-primary-500 opacity-75"></div>
      </div>
    </div>
  )
}
export default function Blobs() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute top-20 left-20 w-72 h-72 bg-indigo-500/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
    </div>
  );
}

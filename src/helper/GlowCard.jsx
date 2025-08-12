export default function GlowCard({ children }) {
  return (
    <div className="bg-[#1b203e] border border-[#1d293a] hover:border-[#464c6a] rounded-xl shadow-md transition-all duration-500">
      {children}
    </div>
  );
}

export default function DiamondBackgroundTailwind() {
  return (
    <div className="relative min-h-screen w-full bg-white overflow-hidden">
      {/* Container para o padrão de losangos */}
      <div 
        className="absolute inset-0 bg-[length:20px_20px] bg-repeat"
        style={{
          backgroundImage: `
            linear-gradient(45deg, #f0f0f0 25%, transparent 25%),
            linear-gradient(-45deg, #f0f0f0 25%, transparent 25%),
            linear-gradient(45deg, transparent 75%, #f0f0f0 75%),
            linear-gradient(-45deg, transparent 75%, #f0f0f0 75%)
          `,
          backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px'
        }}
      />
      
      {/* Overlay para suavizar */}
      <div className="absolute inset-0 bg-white/70" />
      
      {/* Container vazio (sem children) */}
      <div className="relative z-10">
        {/* Conteúdo fixo ou vazio */}
      </div>
    </div>
  );
}


export default function GradientOrbs({ mousePos }: { mousePos: { x: number; y: number } }) {
  return (
    <>
      <div
        className="fixed w-80 h-80 md:w-96 md:h-96 rounded-full blur-3xl opacity-20 bg-purple-600 pointer-events-none transition-all duration-300 ease-out"
        style={{ left: mousePos.x - 150, top: mousePos.y - 150 }}
      />
      <div className="fixed top-16 right-16 w-[500px] h-[500px] rounded-full blur-3xl opacity-10 bg-blue-500 animate-ping" />
      <div
        className="fixed bottom-16 left-16 w-[450px] h-[450px] rounded-full blur-3xl opacity-10 bg-pink-500 animate-ping"
        style={{ animationDelay: "1s" }}
      />
    </>
  );
}

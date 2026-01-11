

export default function GradientOrbs({  }: { mousePos: { x: number; y: number } }) {
  return (
    <>
      <div
        className="fixed w-80 h-80 md:w-96 md:h-96 rounded-full blur-3xl opacity-20 bg-gray-600 pointer-events-none transition-all duration-300 ease-out"
        
      />
      <div className="fixed top-16 right-16 w-[500px] h-[500px] rounded-full blur-3xl opacity-10 bg-gray-500 " />
      <div
        className="fixed bottom-16 left-16 w-[450px] h-[450px] rounded-full blur-3xl opacity-10 bg-gray-500 "
        
      />
    </>
  );
}

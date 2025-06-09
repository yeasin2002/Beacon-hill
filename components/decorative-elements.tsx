export default function DecorativeElements() {
  return (
    <>
      {/* Medical Cross Icons */}
      <div className="absolute top-16 right-16 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
        <div className="w-6 h-1 bg-white absolute"></div>
        <div className="w-1 h-6 bg-white absolute"></div>
      </div>

      <div className="absolute top-32 left-8 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
        <div className="w-4 h-0.5 bg-white absolute"></div>
        <div className="w-0.5 h-4 bg-white absolute"></div>
      </div>

      <div className="absolute bottom-32 right-8 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
        <div className="w-3 h-0.5 bg-white absolute"></div>
        <div className="w-0.5 h-3 bg-white absolute"></div>
      </div>

      {/* Blue Geometric Shapes */}
      <div className="absolute top-1/4 -right-8 w-24 h-24 bg-blue-600 rounded-full opacity-80"></div>
      <div className="absolute bottom-1/4 -left-12 w-32 h-32 bg-blue-600 rounded-full opacity-60"></div>

      {/* Green Circular Border */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border-4 border-green-500 rounded-full opacity-30"></div>

      {/* Small Green Dots */}
      <div className="absolute bottom-16 right-24">
        <div className="grid grid-cols-3 gap-2">
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i} className="w-2 h-2 bg-green-500 rounded-full opacity-70"></div>
          ))}
        </div>
      </div>

      {/* Blue Corner Shape */}
      <div
        className="absolute bottom-0 right-0 w-32 h-32 bg-blue-600 opacity-80"
        style={{ clipPath: "polygon(100% 0, 100% 100%, 0 100%)" }}
      ></div>
    </>
  )
}

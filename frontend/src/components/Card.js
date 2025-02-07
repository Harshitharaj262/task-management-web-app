export default function Card({ title, icon, value }) {
  return (
    <div
      className="flex items-center gap-6 w-full max-w-sm bg-white shadow-md p-4 my-2 rounded-lg 
             transform transition duration-300 hover:shadow-lg hover:scale-105"
    >
      <div className="flex items-center justify-center h-12 w-12 rounded-full bg-gray-200">
        {icon}
      </div>
      <div className="flex flex-col">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-600 text-lg font-semibold">{value}</p>
      </div>
    </div>
  );
}

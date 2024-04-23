import React from 'react';

const Home = () => {
  return (
    <>
      <div className="relative">
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-center text-white text-6xl font-bold z-10 my-5">
            ¡Transformando plástico en soluciones duraderas!
          </h1>
          <p className="text-center text-white z-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur, quo placeat debiti
          </p>
        </div>
        <div className="flex items-center justify-center w-full">
          <img src="../public/banner.jpeg" alt="fondo" className="w-full filter brightness-75" />
        </div>
      </div>

      <div className="flex justify-between mt-8 my-10">
        {/* Columna 1 */}
        <div className="w-1/4 mx-2 text-center">
          {/* SVG */}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="w-12 h-12 mx-auto">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12a7.5 7.5 0 0 0 15 0m-15 0a7.5 7.5 0 1 1 15 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077 1.41-.513m14.095-5.13 1.41-.513M5.106 17.785l1.15-.964m11.49-9.642 1.149-.964M7.501 19.795l.75-1.3m7.5-12.99.75-1.3m-6.063 16.658.26-1.477m2.605-14.772.26-1.477m0 17.726-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205 12 12m6.894 5.785-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495" />
          </svg>
          {/* Subtítulo */}
          <h3 className="text-black text-lg mt-2">Subtítulo 1</h3>
          {/* Espacio para párrafo */}
          <p className="text-black mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa consequatur suscipit alias. Temporibus adipisci maiores tempora illum reiciendis consequuntur illo libero, aspernatur autem numquam dolorum saepe laudantium, fuga odio assumenda!</p>
        </div>


        {/* Columna 3 */}
        <div className="w-1/4 mx-2 text-center">
          {/* SVG */}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="w-12 h-12 mx-auto">
            <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
          </svg>
          {/* Subtítulo */}
          <h3 className="text-black text-lg mt-2">Subtítulo 3</h3>
          {/* Espacio para párrafo */}
          <p className="text-black mt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam fugit veniam ullam, dolorum dolore modi placeat expedita quos ab, velit aspernatur voluptas corporis aperiam quo laudantium debitis, perferendis excepturi repellat!</p>
        </div>

        {/* Columna 4 */}
        <div className="w-1/4 mx-2 text-center">
          {/* SVG */}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="w-12 h-12 mx-auto">
            <path stroke-linecap="round" stroke-linejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 1 1 0-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 0 1-1.44-4.282m3.102.069a18.03 18.03 0 0 1-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 0 1 8.835 2.535M10.34 6.66a23.847 23.847 0 0 0 8.835-2.535m0 0A23.74 23.74 0 0 0 18.795 3m.38 1.125a23.91 23.91 0 0 1 1.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 0 0 1.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 0 1 0 3.46" />
          </svg>
          {/* Subtítulo */}
          <h3 className="text-black text-lg mt-2">Subtítulo 4</h3>
          {/* Espacio para párrafo */}
          <p className="text-black mt-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit perspiciatis doloribus, ipsa rem temporibus dolores beatae repudiandae vero, amet et optio quisquam eligendi a fugiat suscipit aliquam pariatur. Eius, consectetur?</p>
        </div>
      </div>
    </>
  );
};

export default Home;

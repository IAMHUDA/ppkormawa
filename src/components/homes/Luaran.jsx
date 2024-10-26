import React from "react";
import { konten } from "../../server/data";
import Content from "../../server/Content";
import Swal from 'sweetalert2';

function Luaran() {
  const showImageDetail = (src, title) => {
    Swal.fire({
      imageUrl: src,
      imageAlt: title,
      title: title,
      imageWidth: '100%',
      imageHeight: 'auto',
      customClass: {
        image: 'max-h-[80vh] object-contain'
      },
      background: '#1a1a1a',
      confirmButtonColor: '#EAB308',
      confirmButtonText: 'Tutup',
    });
  };

  return (
    <section className="bg-gradient-to-b from-gray-900 to-gray-800 py-16">
      <div className="container mx-auto">
        <h2 className="text-center mb-12">
          <span className="inline-block relative">
            <span className="text-4xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 font-Dancingscript">
              Luaran PPK Ormawa
            </span>
            <span className="absolute -bottom-4 left-0 w-full h-1 bg-yellow-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
          </span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {konten.map((item) => (
            <div className="group relative overflow-hidden rounded-xl shadow-2xl transition-all duration-300 hover:shadow-yellow-500/30" key={item.id}>
              <img
                src={item.src}
                alt="project"
                className="w-full h-64 object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-300 text-sm">{item.p}</p>
                <button 
                  className="mt-4 px-4 py-2 bg-yellow-500 text-gray-900 rounded-full font-semibold transform hover:scale-105 transition-transform duration-300"
                  onClick={() => showImageDetail(item.src, item.title)}
                >
                  Lihat Detail
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Luaran;

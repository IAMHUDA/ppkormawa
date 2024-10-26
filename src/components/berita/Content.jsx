import { section } from "framer-motion/client";
import React from "react";
import headline from '../../assets/image/image2/revitalisasi.jpg'
import diaryimage from '../../assets/image/image2/headline.jpg';
import CaregiverImage from '../../assets/image/image2/caregiver.jpg';
import DemoHoreImage from '../../assets/image/image2/demohore.jpg';
import DebestImage from '../../assets/image/image2/debest.jpg';
import PelatihanImage from '../../assets/image/image2/pelatihan.jpg';
import RRIImage from '../../assets/image/image2/RRI.jpg';

function Content() {
  const [openIndex, setOpenIndex] = React.useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="p-8 md:p-16 mt-24 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold text-center text-white mb-12">
          <span className="bg-clip-text  text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600">
            Berita PPK Ormawa
          </span>
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="relative overflow-hidden rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300">
            <img src={headline} alt="Revitalisasi Kampus" className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"/>
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-70">
              <h3 className="text-xl font-semibold text-white">Revitalisasi Kampus</h3>
              <p className="text-gray-300 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
            </div>
          </div>
          
          <div className="space-y-6">
            {[
              { title: "Diary Mahasiswa", image: diaryimage, alt: "Diary Mahasiswa", description: "Cerita pengalaman mahasiswa dalam menjalani kehidupan kampus dan kegiatan akademik mereka." },
              { title: "Program Caregiver", image: CaregiverImage, alt: "Program Caregiver", description: "Informasi tentang program caregiver yang diselenggarakan oleh kampus untuk melatih mahasiswa dalam bidang perawatan." },
              { title: "Demo HORE", image: DemoHoreImage, alt: "Demo HORE", description: "Liputan tentang demonstrasi HORE (Hari Olahraga Rekreasi) yang diadakan di kampus untuk mempromosikan gaya hidup sehat." },
              { title: "De Best Competition", image: DebestImage, alt: "De Best Competition", description: "Berita tentang kompetisi De Best yang diikuti oleh mahasiswa untuk menunjukkan bakat dan kreativitas mereka." },
              { title: "Pelatihan Mahasiswa", image: PelatihanImage, alt: "Pelatihan Mahasiswa", description: "Informasi tentang berbagai pelatihan yang diadakan untuk meningkatkan keterampilan dan pengetahuan mahasiswa." },
              { title: "Kunjungan ke RRI", image: RRIImage, alt: "Kunjungan ke RRI", description: "Liputan tentang kunjungan mahasiswa ke Radio Republik Indonesia (RRI) untuk mempelajari dunia penyiaran." }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
                <details 
                  className="group [&_summary::-webkit-details-marker]:hidden"
                  open={openIndex === index}
                  onClick={(e) => e.preventDefault()}
                >
                  <summary 
                    className="flex cursor-pointer items-center justify-between p-4 lg:p-6"
                    onClick={() => handleToggle(index)}
                  >
                    <div className="flex items-center gap-4">
                      <img src={item.image} alt={item.alt} className="w-16 h-16 object-cover rounded-lg transition-all duration-300 group-open:w-full group-open:h-48"/>
                      <h2 className="text-lg font-medium text-gray-900">
                        {item.title}
                      </h2>
                    </div>
                    <span className="shrink-0 rounded-full bg-green-500 p-1.5 text-white sm:p-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </summary>
                  <div className="p-4 lg:p-6">
                    <p className="leading-relaxed text-gray-700">
                      {item.description}
                    </p>
                  </div>
                </details>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Content;

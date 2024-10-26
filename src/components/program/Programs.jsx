import React from 'react';
import ProgramImage from '../../assets/image/image2/program.jpg';
import ShortCourse3LImage from '../../assets/image/image2/shortcourse3l.jpg';
import CaregiverImage from '../../assets/image/image2/caregiverr.jpg';
import DEBESTImage from '../../assets/image/image2/debestt.jpg';
import DemoHoreImage from '../../assets/image/image2/demohoree.jpg';
import BankSampahImage from '../../assets/image/image2/banksampah.jpg';

function Programs() {
  const programs = [
    { title: "Program Utama", image: ProgramImage, description: "Program unggulan kami untuk pengembangan mahasiswa yang komprehensif, mencakup aspek akademik, kepemimpinan, dan keterampilan praktis." },
    { title: "Short Course 3L", image: ShortCourse3LImage, description: "Kursus singkat intensif yang fokus pada pengembangan keterampilan Leadership, Learning, dan Literacy untuk mempersiapkan mahasiswa menghadapi tantangan global." },
    { title: "Caregiver", image: CaregiverImage, description: "Program pelatihan caregiver profesional yang membekali mahasiswa dengan keterampilan perawatan dan empati untuk melayani masyarakat dengan lebih baik." },
    { title: "DE BEST", image: DEBESTImage, description: "Kompetisi inovasi dan kreativitas mahasiswa yang mendorong pengembangan solusi kreatif untuk masalah-masalah nyata di masyarakat." },
    { title: "Demo HORE", image: DemoHoreImage, description: "Demonstrasi Hari Olahraga Rekreasi yang memadukan kegiatan olahraga dengan hiburan, mempromosikan gaya hidup sehat dan kebersamaan." },
    { title: "Bank Sampah", image: BankSampahImage, description: "Inisiatif pengelolaan sampah kampus yang inovatif, mengajarkan mahasiswa tentang keberlanjutan lingkungan dan tanggung jawab sosial." },
  ];

  return (
    <section className="bg-gradient-to-b mt-24 from-gray-900 to-gray-800 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-12">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600">
            Program PPK Ormawa
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300">
              <div className="relative">
                <img src={program.image} alt={program.title} className="w-full h-48 object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <h3 className="text-2xl font-bold text-white text-center px-4">{program.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-300 text-sm leading-relaxed">{program.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


export default Programs

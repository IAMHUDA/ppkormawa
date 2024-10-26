import React from 'react'

function Locate() {
  return (
    <section className="bg-gradient-to-b from-gray-900 to-gray-800 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-12">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600">
            Lokasi Kami
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-xl overflow-hidden p-6">
            <div className="flex flex-col">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Alamat Kami</h3>
              <p className="text-gray-600 mb-2">Desa Hargorejo</p>
              <p className="text-gray-600 mb-2">Kecamatan Kokap, Kabupaten Kulon Progo</p>
              <p className="text-gray-600 mb-4">Daerah Istimewa Yogyakarta, Indonesia</p>
              
              <h4 className="text-xl font-semibold text-gray-800 mb-2 mt-4">Kontak</h4>
              <p className="text-gray-600 mb-2">Telepon: (0274) 123-4567</p>
              <p className="text-gray-600 mb-4">Email: info@desahargorejo.id</p>
              
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Jam Operasional</h4>
              <p className="text-gray-600 mb-1">Senin - Jumat: 08.00 - 16.00</p>
              <p className="text-gray-600 mb-1">Sabtu: 09.00 - 13.00</p>
              <p className="text-gray-600">Minggu: Tutup</p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="bg-gray-300 rounded-lg shadow-xl overflow-hidden" style={{ height: "400px" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63245.97055414075!2d110.05666687910156!3d-7.827657699999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7ae4541b7d5ef9%3A0x5027a76e3558e0!2sHargorejo%2C%20Kec.%20Kokap%2C%20Kabupaten%20Kulon%20Progo%2C%20Daerah%20Istimewa%20Yogyakarta!5e0!3m2!1sid!2sid!4v1650123456789!5m2!1sid!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="bg-white rounded-lg shadow-xl overflow-hidden p-6">
              <h4 className="text-xl font-semibold text-gray-800 mb-4">Transportasi Umum</h4>
              <ul className="list-disc list-inside text-gray-600">
                <li>Bus Trans Jogja: Rute A1, berhenti di Halte Hargorejo</li>
                <li>Ojek Online: Tersedia di sekitar area</li>
                <li>Taksi: Dapat dipesan melalui aplikasi atau panggilan telepon</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Locate

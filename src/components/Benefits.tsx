export default function Benefits() {
  const benefits = [
    {
      icon: "💰",
      title: "Dana Kembali 100%",
      description: "Semua premi yang Anda bayar dikembalikan utuh di akhir masa pertanggungan",
      highlight: "Rp 180 Juta"
    },
    {
      icon: "🛡️",
      title: "Proteksi Critical Illness",
      description: "Perlindungan penyakit kritis hingga 150% dari Uang Pertanggungan",
      highlight: "≥ Rp 500 Juta"
    },
    {
      icon: "❤️",
      title: "Santunan Jiwa",
      description: "Manfaat santunan jiwa hingga 150% dari total setoran premi",
      highlight: "≥ Rp 270 Juta"
    },
    {
      icon: "⚡",
      title: "Premi Fleksibel",
      description: "Mulai dari Rp 1 juta per bulan dengan berbagai pilihan paket",
      highlight: "Mulai Rp 1 Juta"
    },
    {
      icon: "📈",
      title: "Nilai Investasi",
      description: "Dana Anda berkembang dengan proyeksi return yang menarik",
      highlight: "Hasil Optimal"
    },
    {
      icon: "🎯",
      title: "Masa Bayar Singkat",
      description: "Cukup bayar 15 tahun untuk proteksi seumur hidup",
      highlight: "15 Tahun"
    }
  ]

  const illustrationData = [
    { tahun: "Tahun 1-15", setoran: "Rp 12 Juta/tahun", total: "Rp 180 Juta" },
    { tahun: "Tahun 20", pengembalian: "Dana Kembali", total: "Rp 180 Juta" },
    { tahun: "Proteksi CI", manfaat: "150% UP", total: "≥ Rp 500 Juta" },
    { tahun: "Santunan Jiwa", manfaat: "150% Setoran", total: "≥ Rp 270 Juta" }
  ]

  return (
    <section id="benefits" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">
            Mengapa Pilih <span className="text-blue-600">PO1 Flight Plan?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Kombinasi sempurna antara proteksi maksimal dan jaminan pengembalian dana 100%
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="text-6xl mb-4">{benefit.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">{benefit.description}</p>
              <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-bold text-center">
                {benefit.highlight}
              </div>
            </div>
          ))}
        </div>

        {/* Illustration Table */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-4xl mx-auto">
          <div className="bg-blue-600 text-white p-6 text-center">
            <h3 className="text-3xl font-bold">Ilustrasi Manfaat PO1 Flight Plan</h3>
            <p className="text-blue-100 mt-2">Contoh: Setoran 15× @ Rp 12 Juta</p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left font-bold text-gray-900">Periode</th>
                  <th className="px-6 py-4 text-left font-bold text-gray-900">Deskripsi</th>
                  <th className="px-6 py-4 text-right font-bold text-gray-900">Nilai</th>
                </tr>
              </thead>
              <tbody>
                {illustrationData.map((row, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold text-gray-900">{row.tahun}</td>
                    <td className="px-6 py-4 text-gray-600">
                      {row.setoran || row.pengembalian || row.manfaat}
                    </td>
                    <td className="px-6 py-4 text-right font-bold text-2xl text-blue-600">
                      {row.total}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="bg-yellow-50 p-6 border-l-4 border-yellow-400">
            <p className="text-sm text-gray-700">
              <strong>Disclaimer:</strong> Ilustrasi di atas adalah proyeksi dan bukan jaminan. 
              Nilai aktual dapat berbeda tergantung kinerja investasi dan kondisi pasar. 
              Silakan konsultasi dengan agen untuk penjelasan detail.
            </p>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20 max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Pertanyaan yang Sering Diajukan
          </h3>
          
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h4 className="font-bold text-lg text-gray-900 mb-3">
                Apakah dana benar-benar dikembalikan 100%?
              </h4>
              <p className="text-gray-600">
                Ya, semua premi yang Anda bayar selama 15 tahun akan dikembalikan 100% 
                di tahun ke-20, selama polis masih aktif dan tidak ada klaim.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h4 className="font-bold text-lg text-gray-900 mb-3">
                Apa saja penyakit kritis yang ditanggung?
              </h4>
              <p className="text-gray-600">
                Meliputi 49 jenis penyakit kritis seperti kanker, stroke, serangan jantung, 
                gagal ginjal, dan lainnya sesuai dengan ketentuan polis.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h4 className="font-bold text-lg text-gray-900 mb-3">
                Bisakah premi dibayar tahunan?
              </h4>
              <p className="text-gray-600">
                Ya, tersedia opsi pembayaran bulanan, triwulan, semesteran, dan tahunan 
                dengan penyesuaian rate sesuai frekuensi pembayaran.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default function Testimonials() {
  const testimonials = [
    {
      name: "Budi Santoso",
      role: "Business Executive",
      location: "Jakarta",
      photo: "👨‍💼",
      revenue: "Rp 47 Juta/bulan",
      quote: "Sejak bergabung sebagai BE PO1 Flight Plan, income saya meningkat drastis. Produk yang mudah dipahami nasabah membuat closing rate tinggi!",
      rating: 5
    },
    {
      name: "Siti Nurhaliza",
      role: "Senior Agent",
      location: "Surabaya", 
      photo: "👩‍💼",
      revenue: "Rp 52 Juta/bulan",
      quote: "Kombinasi dana kembali 100% dan proteksi 150% membuat prospek langsung tertarik. Materi presentasi yang disediakan sangat membantu!",
      rating: 5
    },
    {
      name: "Ahmad Wijaya",
      role: "Team Leader",
      location: "Bandung",
      photo: "👨‍💼",
      revenue: "Rp 63 Juta/bulan", 
      quote: "Tim saya tumbuh 300% dalam 6 bulan. Dashboard tracking leads sangat membantu mengoptimalkan follow-up dan konversi.",
      rating: 5
    }
  ]

  const customerTestimonials = [
    {
      name: "Dr. Lisa Permata",
      profession: "Dokter Spesialis",
      photo: "👩‍⚕️",
      quote: "Akhirnya ada produk asuransi yang benar-benar memberikan dana kembali 100%. Proteksi critical illness yang 150% memberikan ketenangan pikiran.",
      benefit: "Proteksi Rp 750 Juta"
    },
    {
      name: "Rian Prakoso",
      profession: "Entrepreneur",
      photo: "👨‍💻",
      quote: "Sebagai pengusaha, saya butuh proteksi yang maksimal. PO1 Flight Plan memberikan semua yang saya butuhkan dengan premi yang reasonable.",
      benefit: "Dana Kembali Rp 180 Juta"
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            Kisah Sukses <span className="text-yellow-400">Nyata</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Bergabunglah dengan ribuan nasabah dan ratusan agen yang telah merasakan manfaatnya
          </p>
        </div>

        {/* BE Success Stories */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12 text-yellow-400">
            💰 Success Story Business Executive
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-800 to-blue-900 rounded-2xl p-8 shadow-2xl">
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4">{testimonial.photo}</div>
                  <h4 className="text-xl font-bold">{testimonial.name}</h4>
                  <p className="text-blue-300">{testimonial.role}</p>
                  <p className="text-sm text-gray-400">{testimonial.location}</p>
                </div>
                
                <div className="bg-green-500 text-center py-3 rounded-lg mb-6">
                  <p className="font-black text-xl">{testimonial.revenue}</p>
                  <p className="text-sm">Pendapatan Bulanan</p>
                </div>
                
                <div className="mb-4">
                  <div className="flex justify-center mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-xl">⭐</span>
                    ))}
                  </div>
                  <p className="text-gray-300 italic text-center">"{testimonial.quote}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Customer Testimonials */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12 text-yellow-400">
            🛡️ Testimoni Nasabah
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {customerTestimonials.map((customer, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <div className="flex items-center mb-6">
                  <div className="text-4xl mr-4">{customer.photo}</div>
                  <div>
                    <h4 className="text-lg font-bold">{customer.name}</h4>
                    <p className="text-gray-400">{customer.profession}</p>
                  </div>
                </div>
                
                <p className="text-gray-300 italic mb-4">"{customer.quote}"</p>
                
                <div className="bg-yellow-500 text-black px-4 py-2 rounded-lg font-bold text-center">
                  {customer.benefit}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Statistics */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-16">
          <h3 className="text-3xl font-bold text-center mb-12 text-yellow-400">
            📊 Data & Pencapaian
          </h3>
          
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-black text-yellow-400 mb-2">5,247</div>
              <p className="text-gray-300">Nasabah Aktif</p>
            </div>
            <div>
              <div className="text-4xl font-black text-green-400 mb-2">98.2%</div>
              <p className="text-gray-300">Tingkat Kepuasan</p>
            </div>
            <div>
              <div className="text-4xl font-black text-blue-400 mb-2">247</div>
              <p className="text-gray-300">Business Executive</p>
            </div>
            <div>
              <div className="text-4xl font-black text-purple-400 mb-2">Rp 2.8T</div>
              <p className="text-gray-300">Total Proteksi</p>
            </div>
          </div>
        </div>

        {/* BE Opportunity */}
        <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black rounded-2xl p-8 text-center">
          <h3 className="text-3xl font-bold mb-4">
            🚀 Ingin Bergabung Sebagai Business Executive?
          </h3>
          <p className="text-xl mb-6">
            Raih penghasilan hingga Rp 50 juta per bulan dengan menjadi mitra kami!
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="bg-black text-white px-8 py-3 rounded-lg font-bold hover:bg-gray-800 transition-all">
              💼 Info Peluang Karir
            </button>
            <button className="border-2 border-black text-black px-8 py-3 rounded-lg font-bold hover:bg-black hover:text-white transition-all">
              📞 Hubungi Rekruiter
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
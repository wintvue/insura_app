'use client'

import { useState } from 'react'

export default function LeadForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    age: '',
    income: '',
    interest: 'proteksi',
    message: ''
  })

  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))

    // Analytics event
    if (typeof window !== 'undefined' && 'gtag' in window) {
      window.gtag('event', 'Submit_Lead', {
        event_category: 'Form',
        event_label: 'Lead_Generation',
        value: 1
      })
    }

    setIsSubmitted(true)
    setIsLoading(false)

    // WhatsApp integration (simplified)
    const whatsappMessage = `Halo, saya tertarik dengan PO1 Flight Plan!%0A%0ANama: ${formData.name}%0ATelepon: ${formData.phone}%0AEmail: ${formData.email}%0AUsia: ${formData.age}%0APenghasilan: ${formData.income}%0AMinat: ${formData.interest}%0APesan: ${formData.message}`
    const whatsappUrl = `https://wa.me/6281234567890?text=${whatsappMessage}`
    
    setTimeout(() => {
      window.open(whatsappUrl, '_blank')
    }, 2000)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  if (isSubmitted) {
    return (
      <section className="py-20 bg-gradient-to-br from-green-600 to-green-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="text-8xl mb-6">✅</div>
            <h2 className="text-4xl font-black mb-6">Terima Kasih!</h2>
            <p className="text-xl mb-8">
              Data Anda telah kami terima. Agen terbaik kami akan segera menghubungi Anda 
              dalam 15 menit untuk konsultasi gratis!
            </p>
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 mb-8">
              <h3 className="text-2xl font-bold mb-4">Langkah Selanjutnya:</h3>
              <div className="space-y-3 text-left">
                <div className="flex items-center">
                  <span className="text-2xl mr-3">📞</span>
                  <span>Agen akan menghubungi dalam 15 menit</span>
                </div>
                <div className="flex items-center">
                  <span className="text-2xl mr-3">💬</span>
                  <span>Chat WhatsApp akan terbuka otomatis</span>
                </div>
                <div className="flex items-center">
                  <span className="text-2xl mr-3">📋</span>
                  <span>Konsultasi gratis & kalkulasi detail</span>
                </div>
                <div className="flex items-center">
                  <span className="text-2xl mr-3">🎁</span>
                  <span>Dapatkan ilustrasi khusus untuk Anda</span>
                </div>
              </div>
            </div>
            <p className="text-sm text-green-200">
              Jika dalam 30 menit belum dihubungi, silakan WhatsApp langsung ke 
              <strong> +62 812-3456-7890</strong>
            </p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            💬 Dapatkan <span className="text-yellow-400">Konsultasi Gratis</span>
          </h2>
          <p className="text-xl max-w-3xl mx-auto">
            Isi form di bawah ini dan agen terbaik kami akan menghubungi Anda dalam 15 menit!
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Form */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2">
                  Nama Lengkap *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full p-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300"
                  placeholder="Masukkan nama lengkap Anda"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold mb-2">
                  Nomor WhatsApp *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full p-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300"
                  placeholder="08123456789"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300"
                  placeholder="nama@email.com"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="age" className="block text-sm font-semibold mb-2">
                    Usia
                  </label>
                  <select
                    id="age"
                    name="age"
                    value={formData.age}
                    onChange={handleInputChange}
                    className="w-full p-3 rounded-lg bg-white/20 border border-white/30 text-white"
                  >
                    <option value="">Pilih usia</option>
                    <option value="20-25">20-25 tahun</option>
                    <option value="26-30">26-30 tahun</option>
                    <option value="31-35">31-35 tahun</option>
                    <option value="36-40">36-40 tahun</option>
                    <option value="41-45">41-45 tahun</option>
                    <option value="46-50">46-50 tahun</option>
                    <option value="50+">50+ tahun</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="income" className="block text-sm font-semibold mb-2">
                    Penghasilan Bulanan
                  </label>
                  <select
                    id="income"
                    name="income"
                    value={formData.income}
                    onChange={handleInputChange}
                    className="w-full p-3 rounded-lg bg-white/20 border border-white/30 text-white"
                  >
                    <option value="">Pilih range</option>
                    <option value="5-10">Rp 5-10 Juta</option>
                    <option value="10-20">Rp 10-20 Juta</option>
                    <option value="20-50">Rp 20-50 Juta</option>
                    <option value="50+">Rp 50+ Juta</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="interest" className="block text-sm font-semibold mb-2">
                  Yang Paling Menarik
                </label>
                <select
                  id="interest"
                  name="interest"
                  value={formData.interest}
                  onChange={handleInputChange}
                  className="w-full p-3 rounded-lg bg-white/20 border border-white/30 text-white"
                >
                  <option value="proteksi">Proteksi Critical Illness</option>
                  <option value="dana-kembali">Dana Kembali 100%</option>
                  <option value="santunan">Santunan Jiwa</option>
                  <option value="kombinasi">Kombinasi Semua</option>
                  <option value="agen">Peluang Menjadi Agen</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-2">
                  Pesan (Opsional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full p-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300"
                  placeholder="Ada pertanyaan khusus?"
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-yellow-500 text-black py-4 rounded-lg text-xl font-black hover:bg-yellow-400 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Mengirim Data...
                  </span>
                ) : (
                  '🚀 DAPATKAN KONSULTASI GRATIS'
                )}
              </button>
            </form>

            <div className="mt-6 text-center text-sm text-gray-300">
              <p>🔒 Data Anda 100% aman dan tidak akan disalahgunakan</p>
              <p>📞 Respon dalam 15 menit di jam kerja</p>
            </div>
          </div>

          {/* Benefits */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-yellow-400 mb-8">
              Apa yang Anda Dapatkan:
            </h3>

            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="text-3xl">🎯</div>
                <div>
                  <h4 className="font-bold text-lg">Konsultasi Personal</h4>
                  <p className="text-gray-300">Analisis kebutuhan proteksi sesuai profil Anda</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="text-3xl">📊</div>
                <div>
                  <h4 className="font-bold text-lg">Ilustrasi Khusus</h4>
                  <p className="text-gray-300">Kalkulasi detail manfaat berdasarkan kemampuan Anda</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="text-3xl">📋</div>
                <div>
                  <h4 className="font-bold text-lg">Materi Lengkap</h4>
                  <p className="text-gray-300">Brosur digital, video penjelasan, dan FAQ detail</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="text-3xl">🎁</div>
                <div>
                  <h4 className="font-bold text-lg">Bonus Eksklusif</h4>
                  <p className="text-gray-300">Promo khusus dan benefit tambahan untuk pendaftar awal</p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-500 text-black rounded-xl p-6 mt-8">
              <h4 className="font-bold text-lg mb-2">⏰ Promo Terbatas!</h4>
              <p className="text-sm">
                Daftar sekarang dan dapatkan <strong>diskon premi 20%</strong> untuk 
                100 pendaftar pertama bulan ini!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
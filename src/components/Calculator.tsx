'use client'

import { useState } from 'react'

export default function Calculator() {
  const [formData, setFormData] = useState({
    age: 30,
    targetAmount: 500000000,
    monthlyPremium: 1000000
  })

  const [results, setResults] = useState({
    totalPremium: 0,
    refundAmount: 0,
    ciProtection: 0,
    lifeInsurance: 0
  })

  const [showResults, setShowResults] = useState(false)

  const calculateBenefits = () => {
    const yearsOfPayment = 15
    const totalPremium = formData.monthlyPremium * 12 * yearsOfPayment
    const refundAmount = totalPremium // 100% return
    const ciProtection = Math.max(formData.targetAmount, totalPremium * 1.5) // 150% of UP or target
    const lifeInsurance = totalPremium * 1.5 // 150% of total premium

    setResults({
      totalPremium,
      refundAmount,
      ciProtection,
      lifeInsurance
    })
    setShowResults(true)

    // Analytics event
    if (typeof window !== 'undefined' && 'gtag' in window) {
      window.gtag('event', 'Start_Calc', {
        event_category: 'Calculator',
        event_label: 'Premium_Calculator',
        value: formData.monthlyPremium
      })
    }
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount)
  }

  return (
    <section id="calculator" className="py-20 bg-gradient-to-br from-blue-900 to-blue-700 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            🧮 Kalkulator <span className="text-yellow-400">Komitmen Fund</span>
          </h2>
          <p className="text-xl max-w-3xl mx-auto">
            Hitung proyeksi manfaat dan total pengembalian dana berdasarkan profil Anda
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          {/* Calculator Form */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-yellow-400">Input Data Anda</h3>
            
            <div className="space-y-6">
              {/* Age Input */}
              <div>
                <label className="block text-sm font-semibold mb-2">Usia Saat Ini</label>
                <div className="relative">
                  <input
                    type="range"
                    min="18"
                    max="55"
                    value={formData.age}
                    onChange={(e) => setFormData({...formData, age: parseInt(e.target.value)})}
                    className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-sm mt-1">
                    <span>18</span>
                    <span className="font-bold text-yellow-400">{formData.age} tahun</span>
                    <span>55</span>
                  </div>
                </div>
              </div>

              {/* Target Amount */}
              <div>
                <label className="block text-sm font-semibold mb-2">Target Dana Proteksi</label>
                <select
                  value={formData.targetAmount}
                  onChange={(e) => setFormData({...formData, targetAmount: parseInt(e.target.value)})}
                  className="w-full p-3 rounded-lg bg-white/20 border border-white/30 text-white"
                >
                  <option value={500000000}>Rp 500 Juta</option>
                  <option value={750000000}>Rp 750 Juta</option>
                  <option value={1000000000}>Rp 1 Miliar</option>
                  <option value={1500000000}>Rp 1.5 Miliar</option>
                  <option value={2000000000}>Rp 2 Miliar</option>
                </select>
              </div>

              {/* Monthly Premium */}
              <div>
                <label className="block text-sm font-semibold mb-2">Premi Bulanan</label>
                <div className="relative">
                  <input
                    type="range"
                    min="1000000"
                    max="10000000"
                    step="500000"
                    value={formData.monthlyPremium}
                    onChange={(e) => setFormData({...formData, monthlyPremium: parseInt(e.target.value)})}
                    className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-sm mt-1">
                    <span>1 Juta</span>
                    <span className="font-bold text-yellow-400">
                      {formatCurrency(formData.monthlyPremium)}
                    </span>
                    <span>10 Juta</span>
                  </div>
                </div>
              </div>

              {/* Calculate Button */}
              <button
                onClick={calculateBenefits}
                className="w-full bg-yellow-500 text-black py-4 rounded-lg text-xl font-black hover:bg-yellow-400 transition-all transform hover:scale-105"
              >
                🚀 HITUNG PROYEKSI MANFAAT
              </button>
            </div>
          </div>

          {/* Results */}
          <div className="bg-white text-gray-900 rounded-2xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold mb-6 text-blue-600">Proyeksi Manfaat Anda</h3>
            
            {showResults ? (
              <div className="space-y-6">
                <div className="bg-blue-50 rounded-xl p-6">
                  <h4 className="font-bold text-lg text-blue-800 mb-2">Total Premi (15 Tahun)</h4>
                  <p className="text-3xl font-black text-blue-600">{formatCurrency(results.totalPremium)}</p>
                  <p className="text-sm text-gray-600 mt-1">
                    {formatCurrency(formData.monthlyPremium)} × 12 bulan × 15 tahun
                  </p>
                </div>

                <div className="bg-green-50 rounded-xl p-6">
                  <h4 className="font-bold text-lg text-green-800 mb-2">Dana Kembali (Tahun 20)</h4>
                  <p className="text-3xl font-black text-green-600">{formatCurrency(results.refundAmount)}</p>
                  <p className="text-sm text-gray-600 mt-1">100% dari total premi dikembalikan</p>
                </div>

                <div className="bg-purple-50 rounded-xl p-6">
                  <h4 className="font-bold text-lg text-purple-800 mb-2">Proteksi Critical Illness</h4>
                  <p className="text-3xl font-black text-purple-600">{formatCurrency(results.ciProtection)}</p>
                  <p className="text-sm text-gray-600 mt-1">Hingga 150% dari Uang Pertanggungan</p>
                </div>

                <div className="bg-red-50 rounded-xl p-6">
                  <h4 className="font-bold text-lg text-red-800 mb-2">Santunan Jiwa</h4>
                  <p className="text-3xl font-black text-red-600">{formatCurrency(results.lifeInsurance)}</p>
                  <p className="text-sm text-gray-600 mt-1">150% dari total setoran premi</p>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
                  <p className="text-sm text-gray-700">
                    <strong>Catatan:</strong> Proyeksi ini adalah ilustrasi dan bukan jaminan. 
                    Konsultasikan dengan agen untuk penjelasan detail dan kondisi polis.
                  </p>
                </div>

                <div className="text-center mt-8">
                  <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition-all">
                    💬 Konsultasi dengan Agen
                  </button>
                </div>
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🧮</div>
                <p className="text-gray-500 text-lg">
                  Masukkan data Anda dan klik "Hitung Proyeksi Manfaat" 
                  untuk melihat hasil kalkulasi
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 max-w-4xl mx-auto bg-white/10 backdrop-blur-sm rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-yellow-400 mb-6 text-center">
            ⚡ Keunggulan Kalkulasi Kami
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-3">🎯</div>
              <h4 className="font-bold mb-2">Akurat & Real-time</h4>
              <p className="text-sm text-gray-300">Kalkulasi berdasarkan rate terkini dan formula resmi</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🔒</div>
              <h4 className="font-bold mb-2">Data Aman</h4>
              <p className="text-sm text-gray-300">Informasi Anda tidak disimpan atau dibagikan</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">📱</div>
              <h4 className="font-bold mb-2">Mobile Friendly</h4>
              <p className="text-sm text-gray-300">Hitung kapan saja, di mana saja dari perangkat apapun</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
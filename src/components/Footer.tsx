import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-black text-yellow-400">PO1 Flight Plan</h3>
            <p className="text-gray-300 leading-relaxed">
              Produk asuransi inovatif dengan dana kembali 100% dan proteksi maksimal 
              untuk masa depan yang lebih terjamin.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                <span className="sr-only">Facebook</span>
                📘
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                <span className="sr-only">Instagram</span>
                📷
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                <span className="sr-only">LinkedIn</span>
                💼
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                <span className="sr-only">YouTube</span>
                📺
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-yellow-400">Produk</h4>
            <ul className="space-y-2">
              <li><Link href="#benefits" className="text-gray-300 hover:text-white transition-colors">Manfaat Produk</Link></li>
              <li><Link href="#calculator" className="text-gray-300 hover:text-white transition-colors">Kalkulator Premi</Link></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Ilustrasi Detail</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Syarat & Ketentuan</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Klaim Asuransi</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-yellow-400">Dukungan</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Pusat Bantuan</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Live Chat</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Hubungi Kami</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Lokasi Kantor</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-yellow-400">Kontak</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <span className="text-yellow-400">📞</span>
                <div>
                  <p className="text-gray-300">Customer Service</p>
                  <p className="font-semibold">1500-123</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-yellow-400">💬</span>
                <div>
                  <p className="text-gray-300">WhatsApp</p>
                  <p className="font-semibold">+62 812-3456-7890</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-yellow-400">✉️</span>
                <div>
                  <p className="text-gray-300">Email</p>
                  <p className="font-semibold">info@po1flightplan.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-yellow-400">📍</span>
                <div>
                  <p className="text-gray-300">Kantor Pusat</p>
                  <p className="font-semibold text-sm">
                    Jl. Sudirman No. 123<br />
                    Jakarta Pusat 10110
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Business Executive Section */}
        <div className="border-t border-gray-700 pt-8 mb-8">
          <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">
              🚀 Bergabung Sebagai Business Executive
            </h3>
            <p className="text-lg mb-6">
              Raih penghasilan hingga Rp 50 juta per bulan! Dapatkan training gratis, 
              materi marketing, dan support penuh dari tim kami.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <button className="bg-black text-white px-6 py-3 rounded-lg font-bold hover:bg-gray-800 transition-all">
                💼 Info Karir
              </button>
              <button className="border-2 border-black text-black px-6 py-3 rounded-lg font-bold hover:bg-black hover:text-white transition-all">
                📞 Hubungi Rekruiter
              </button>
            </div>
          </div>
        </div>

        {/* Legal & Compliance */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-wrap gap-4 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Kebijakan Privasi</a>
              <a href="#" className="hover:text-white transition-colors">Syarat Layanan</a>
              <a href="#" className="hover:text-white transition-colors">Disclaimer</a>
              <a href="#" className="hover:text-white transition-colors">Sitemap</a>
            </div>
            <div className="text-sm text-gray-400">
              © 2024 PO1 Flight Plan. All rights reserved.
            </div>
          </div>
          
          <div className="mt-6 text-xs text-gray-500 leading-relaxed">
            <p className="mb-2">
              <strong>Disclaimer:</strong> Ilustrasi yang ditampilkan merupakan proyeksi dan bukan jaminan. 
              Hasil investasi dapat berbeda tergundand pada kondisi pasar dan kinerja investasi. 
              Pastikan untuk memahami semua ketentuan polis sebelum mengambil keputusan.
            </p>
            <p>
              PO1 Flight Plan adalah produk asuransi yang dikelola oleh perusahaan asuransi 
              terdaftar dan diawasi oleh Otoritas Jasa Keuangan (OJK). 
              Nomor Izin: XXX/POJK.05/2024
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Hero() {
  const [timeLeft, setTimeLeft] = useState({
    days: 7,
    hours: 23,
    minutes: 45,
    seconds: 30
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 }
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-bounce delay-100"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-white/5 rounded-full animate-pulse delay-200"></div>
        <div className="absolute bottom-20 left-1/3 w-24 h-24 bg-white/10 rounded-full animate-bounce delay-300"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16 text-center">
        {/* Limited Time Banner */}
        <div className="inline-block bg-red-600 text-white px-6 py-2 rounded-full text-sm font-bold mb-6 animate-pulse">
          🔥 PENAWARAN TERBATAS - SLOT TINGGAL 47 TEMPAT!
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
          <span className="block text-yellow-400">CAIRKAN PROTEKSI</span>
          <span className="block text-6xl md:text-8xl">≥ Rp 500 JUTA</span>
          <span className="block text-3xl md:text-5xl">+ Dana Kembali 100%!</span>
        </h1>

        {/* Subheadline */}
        <p className="text-2xl md:text-3xl mb-8 font-bold text-yellow-300">
          Bayar 15×, Uang Balik 100% + Proteksi 150%
        </p>

        <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto">
          Premi mulai <span className="text-yellow-400 font-bold">Rp 1 Juta/Bulan</span> - 
          Siap Terbang ke Masa Depan yang Terlindungi?
        </p>

        {/* Countdown Timer */}
        <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-6 mb-12 max-w-2xl mx-auto">
          <p className="text-red-400 font-bold mb-4 text-lg">⏰ PENAWARAN BERAKHIR DALAM:</p>
          <div className="grid grid-cols-4 gap-4 text-center">
            <div className="bg-white/20 rounded-lg p-4">
              <div className="text-3xl font-black text-yellow-400">{timeLeft.days}</div>
              <div className="text-sm">HARI</div>
            </div>
            <div className="bg-white/20 rounded-lg p-4">
              <div className="text-3xl font-black text-yellow-400">{timeLeft.hours}</div>
              <div className="text-sm">JAM</div>
            </div>
            <div className="bg-white/20 rounded-lg p-4">
              <div className="text-3xl font-black text-yellow-400">{timeLeft.minutes}</div>
              <div className="text-sm">MENIT</div>
            </div>
            <div className="bg-white/20 rounded-lg p-4">
              <div className="text-3xl font-black text-yellow-400">{timeLeft.seconds}</div>
              <div className="text-sm">DETIK</div>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <Link 
            href="#calculator"
            className="bg-yellow-500 text-black px-12 py-4 rounded-full text-xl font-black hover:bg-yellow-400 transition-all transform hover:scale-105 shadow-2xl"
          >
            🚀 HITUNG MANFAAT SEKARANG
          </Link>
          
          <Link 
            href="#benefits"
            className="border-2 border-white text-white px-12 py-4 rounded-full text-xl font-bold hover:bg-white hover:text-blue-900 transition-all"
          >
            📖 LIHAT DETAIL PRODUK
          </Link>
        </div>

        {/* Video Placeholder */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="relative bg-black/20 rounded-2xl p-8 border-2 border-white/20">
            <div className="aspect-video bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-6xl">
              ✈️
            </div>
            <p className="mt-4 text-lg">Video Animasi: Flight Take-off → Refund 100%</p>
            <div className="absolute -top-2 -right-2 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold animate-pulse">
              BARU!
            </div>
          </div>
        </div>

        {/* Social Proof */}
        <div className="mt-16 bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-3xl mx-auto">
          <p className="text-yellow-400 font-bold mb-2">⭐⭐⭐⭐⭐</p>
          <p className="text-lg">"5.247 nasabah sudah merasakan manfaatnya!"</p>
          <p className="text-sm text-gray-300 mt-2">*Data per November 2024</p>
        </div>
      </div>
    </section>
  )
}
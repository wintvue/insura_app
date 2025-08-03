'use client'

import { useState } from 'react'
import Link from 'next/link'

interface Lead {
  id: string
  name: string
  phone: string
  email: string
  age: string
  income: string
  interest: string
  status: 'new' | 'contacted' | 'follow-up' | 'converted' | 'lost'
  createdAt: string
  lastContact?: string
  notes?: string
}

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('leads')
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null)

  // Mock data - in real app this would come from API
  const [leads] = useState<Lead[]>([
    {
      id: '1',
      name: 'Budi Santoso',
      phone: '08123456789',
      email: 'budi@email.com',
      age: '31-35',
      income: '10-20',
      interest: 'proteksi',
      status: 'new',
      createdAt: '2024-01-15T10:30:00Z'
    },
    {
      id: '2',
      name: 'Siti Nurhaliza',
      phone: '08234567890',
      email: 'siti@email.com',
      age: '26-30',
      income: '20-50',
      interest: 'dana-kembali',
      status: 'contacted',
      createdAt: '2024-01-14T14:20:00Z',
      lastContact: '2024-01-15T09:15:00Z',
      notes: 'Tertarik dengan ilustrasi 20 tahun'
    },
    {
      id: '3',
      name: 'Ahmad Wijaya',
      phone: '08345678901',
      email: 'ahmad@email.com',
      age: '36-40',
      income: '50+',
      interest: 'kombinasi',
      status: 'follow-up',
      createdAt: '2024-01-13T16:45:00Z',
      lastContact: '2024-01-14T11:30:00Z',
      notes: 'Meminta waktu konsultasi tatap muka'
    }
  ])

  const stats = {
    totalLeads: leads.length,
    newLeads: leads.filter(l => l.status === 'new').length,
    converted: leads.filter(l => l.status === 'converted').length,
    conversionRate: leads.length > 0 ? Math.round((leads.filter(l => l.status === 'converted').length / leads.length) * 100) : 0
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new': return 'bg-blue-100 text-blue-800'
      case 'contacted': return 'bg-yellow-100 text-yellow-800'
      case 'follow-up': return 'bg-purple-100 text-purple-800'
      case 'converted': return 'bg-green-100 text-green-800'
      case 'lost': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('id-ID', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <Link href="/" className="text-2xl font-black text-blue-600">
                PO1 Flight Plan
              </Link>
              <span className="text-gray-400">|</span>
              <span className="text-lg font-semibold text-gray-700">Dashboard BE</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-sm text-gray-600">
                <span className="font-semibold">John Doe</span> - Senior BE
              </div>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700">
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-sm border">
            <div className="flex items-center">
              <div className="text-3xl text-blue-600 mr-4">👥</div>
              <div>
                <p className="text-sm font-medium text-gray-600">Total Leads</p>
                <p className="text-2xl font-bold text-gray-900">{stats.totalLeads}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-sm border">
            <div className="flex items-center">
              <div className="text-3xl text-yellow-600 mr-4">🆕</div>
              <div>
                <p className="text-sm font-medium text-gray-600">Leads Baru</p>
                <p className="text-2xl font-bold text-gray-900">{stats.newLeads}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-sm border">
            <div className="flex items-center">
              <div className="text-3xl text-green-600 mr-4">✅</div>
              <div>
                <p className="text-sm font-medium text-gray-600">Converted</p>
                <p className="text-2xl font-bold text-gray-900">{stats.converted}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-sm border">
            <div className="flex items-center">
              <div className="text-3xl text-purple-600 mr-4">📊</div>
              <div>
                <p className="text-sm font-medium text-gray-600">Conversion Rate</p>
                <p className="text-2xl font-bold text-gray-900">{stats.conversionRate}%</p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white rounded-xl shadow-sm border mb-6">
          <nav className="flex space-x-8 px-6" aria-label="Tabs">
            <button
              onClick={() => setActiveTab('leads')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'leads'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              📋 Kelola Leads
            </button>
            <button
              onClick={() => setActiveTab('materials')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'materials'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              📚 Materi Presentasi
            </button>
            <button
              onClick={() => setActiveTab('reports')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'reports'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              📈 Laporan
            </button>
          </nav>
        </div>

        {/* Tab Content */}
        {activeTab === 'leads' && (
          <div className="bg-white rounded-xl shadow-sm border">
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">Daftar Leads</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Prospek
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Kontak
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Minat
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Tanggal
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Aksi
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {leads.map((lead) => (
                    <tr key={lead.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div>
                          <div className="text-sm font-medium text-gray-900">{lead.name}</div>
                          <div className="text-sm text-gray-500">{lead.age} tahun</div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div>
                          <div className="text-sm text-gray-900">{lead.phone}</div>
                          <div className="text-sm text-gray-500">{lead.email}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900 capitalize">{lead.interest}</div>
                        <div className="text-sm text-gray-500">Income: Rp {lead.income} Juta</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(lead.status)}`}>
                          {lead.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {formatDate(lead.createdAt)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <button
                          onClick={() => setSelectedLead(lead)}
                          className="text-blue-600 hover:text-blue-900 mr-3"
                        >
                          Detail
                        </button>
                        <a
                          href={`https://wa.me/${lead.phone.replace(/^0/, '62')}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-green-600 hover:text-green-900"
                        >
                          WhatsApp
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'materials' && (
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-sm border">
                <div className="text-4xl mb-4">📄</div>
                <h3 className="text-lg font-semibold mb-2">Brosur PO1 Flight Plan</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Materi presentasi lengkap dengan ilustrasi dan benefit detail
                </p>
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
                  Download PDF
                </button>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-lg font-semibold mb-2">Pitch Deck Sales</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Slide presentasi untuk closing dengan prospek
                </p>
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
                  Download PPT
                </button>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-lg font-semibold mb-2">Kalkulator Premi</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Tool Excel untuk kalkulasi custom per prospek
                </p>
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
                  Download Excel
                </button>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border">
                <div className="text-4xl mb-4">🎥</div>
                <h3 className="text-lg font-semibold mb-2">Video Explainer</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Video penjelasan produk untuk share ke prospek
                </p>
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
                  Copy Link
                </button>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border">
                <div className="text-4xl mb-4">📱</div>
                <h3 className="text-lg font-semibold mb-2">Social Media Kit</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Template posting Instagram, Facebook, dan LinkedIn
                </p>
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
                  Download ZIP
                </button>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border">
                <div className="text-4xl mb-4">📚</div>
                <h3 className="text-lg font-semibold mb-2">Training Manual</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Panduan lengkap sales process dan objection handling
                </p>
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
                  Baca Online
                </button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'reports' && (
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <h3 className="text-lg font-semibold mb-6">Performa Bulanan</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-medium mb-4">Target vs Pencapaian</h4>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Leads Generation</span>
                        <span>75/100</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-600 h-2 rounded-full" style={{width: '75%'}}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Conversion Rate</span>
                        <span>12%/15%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-green-600 h-2 rounded-full" style={{width: '80%'}}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Revenue Target</span>
                        <span>Rp 42M/50M</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-purple-600 h-2 rounded-full" style={{width: '84%'}}></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium mb-4">Komisi Bulan Ini</h4>
                  <div className="text-3xl font-bold text-green-600 mb-2">Rp 47,250,000</div>
                  <p className="text-sm text-gray-600 mb-4">+18% dari bulan lalu</p>
                  <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
                    Detail Komisi
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Lead Detail Modal */}
      {selectedLead && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">Detail Lead: {selectedLead.name}</h3>
                <button
                  onClick={() => setSelectedLead(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ✕
                </button>
              </div>
            </div>
            <div className="p-6 space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-500">Nama</label>
                  <p className="font-semibold">{selectedLead.name}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">Telepon</label>
                  <p className="font-semibold">{selectedLead.phone}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">Email</label>
                  <p className="font-semibold">{selectedLead.email}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">Usia</label>
                  <p className="font-semibold">{selectedLead.age} tahun</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">Penghasilan</label>
                  <p className="font-semibold">Rp {selectedLead.income} Juta</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">Minat</label>
                  <p className="font-semibold capitalize">{selectedLead.interest}</p>
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium text-gray-500">Status</label>
                <select className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md">
                  <option value="new">New</option>
                  <option value="contacted">Contacted</option>
                  <option value="follow-up">Follow-up</option>
                  <option value="converted">Converted</option>
                  <option value="lost">Lost</option>
                </select>
              </div>
              
              <div>
                <label className="text-sm font-medium text-gray-500">Notes</label>
                <textarea
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                  rows={3}
                  placeholder="Tambahkan catatan follow-up..."
                  defaultValue={selectedLead.notes}
                />
              </div>
              
              <div className="flex space-x-3 pt-4">
                <button className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
                  Update Status
                </button>
                <a
                  href={`https://wa.me/${selectedLead.phone.replace(/^0/, '62')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 text-center"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
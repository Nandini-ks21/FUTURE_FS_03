'use client'

import React, { useState } from 'react'
import { X, Upload, Sparkles, Image, Palette, Wand2 } from 'lucide-react'

interface CreateModalProps {
  isOpen: boolean
  onClose: () => void
}

const AI_STYLES = [
  { id: 'minimalist', name: 'Minimalist', color: 'from-blue-500 to-blue-600' },
  { id: 'abstract', name: 'Abstract', color: 'from-purple-500 to-purple-600' },
  { id: 'realistic', name: 'Realistic', color: 'from-green-500 to-green-600' },
  { id: 'fantasy', name: 'Fantasy', color: 'from-pink-500 to-pink-600' },
  { id: 'cyberpunk', name: 'Cyberpunk', color: 'from-orange-500 to-orange-600' },
  { id: 'vintage', name: 'Vintage', color: 'from-amber-500 to-amber-600' },
]

export default function CreateModal({ isOpen, onClose }: CreateModalProps) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    aiStyle: '',
    image: null as File | null
  })
  const [isGenerating, setIsGenerating] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setFormData(prev => ({ ...prev, image: file }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsGenerating(true)
    
    // Simulate AI generation process
    setTimeout(() => {
      setIsGenerating(false)
      alert('AI Pin created successfully!')
      onClose()
      setFormData({ title: '', description: '', aiStyle: '', image: null })
    }, 2000)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="glass-effect w-full max-w-2xl rounded-3xl p-6 relative">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-pinterestRed to-purple-600 rounded-full flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-pinterestRed to-purple-600 bg-clip-text text-transparent">
              Create AI Pin
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-gray-500 hover:text-pinterestRed transition-colors duration-200"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Pin Title
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              placeholder="Enter a creative title..."
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pinterestRed focus:border-transparent transition-all duration-200"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Describe your AI-generated inspiration..."
              rows={3}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pinterestRed focus:border-transparent transition-all duration-200 resize-none"
              required
            />
          </div>

          {/* AI Style Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              AI Style
            </label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {AI_STYLES.map((style) => (
                <button
                  key={style.id}
                  type="button"
                  onClick={() => setFormData(prev => ({ ...prev, aiStyle: style.id }))}
                  className={`flex items-center space-x-2 p-3 rounded-xl border-2 transition-all duration-200 ${
                    formData.aiStyle === style.id
                      ? `border-pinterestRed bg-gradient-to-r ${style.color} text-white shadow-lg`
                      : 'border-gray-200 bg-white text-gray-700 hover:border-pinterestRed hover:shadow-md'
                  }`}
                >
                  <Palette className="w-4 h-4" />
                  <span className="text-sm font-medium">{style.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Image Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Upload Inspiration (Optional)
            </label>
            <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-xl cursor-pointer hover:border-pinterestRed transition-colors duration-200">
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <Upload className="w-8 h-8 text-gray-400 mb-2" />
                <p className="text-sm text-gray-500">
                  {formData.image ? formData.image.name : 'Click to upload or drag and drop'}
                </p>
              </div>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
            </label>
          </div>

          {/* Actions */}
          <div className="flex space-x-4 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-3 px-6 bg-gray-100 text-gray-700 font-semibold rounded-xl hover:bg-gray-200 transition-all duration-200"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isGenerating || !formData.title || !formData.description || !formData.aiStyle}
              className="flex-1 py-3 px-6 bg-gradient-to-r from-pinterestRed to-purple-600 text-white font-semibold rounded-xl hover:from-red-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center"
            >
              {isGenerating ? (
                <>
                  <Wand2 className="w-5 h-5 animate-spin mr-2" />
                  Generating...
                </>
              ) : (
                <>
                  <Sparkles className="w-5 h-5 mr-2" />
                  Create Pin
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

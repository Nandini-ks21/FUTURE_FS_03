'use client'

import React, { useState } from 'react'
import { Heart, Bookmark, Share, Sparkles } from 'lucide-react'

interface Pin {
  id: number
  title: string
  description: string
  image: string
  likes: number
  saves: number
  category: string
}

interface PinCardProps {
  pin: Pin
}

export default function PinCard({ pin }: PinCardProps) {
  const [isLiked, setIsLiked] = useState(false)
  const [isSaved, setIsSaved] = useState(false)
  const [showActions, setShowActions] = useState(false)

  const handleLike = () => {
    setIsLiked(!isLiked)
  }

  const handleSave = () => {
    setIsSaved(!isSaved)
  }

  return (
    <div 
      className="pin-card group"
      onMouseEnter={() => setShowActions(true)}
      onMouseLeave={() => setShowActions(false)}
    >
      {/* Image Container */}
      <div className="relative overflow-hidden rounded-t-2xl">
        <img
          src={pin.image}
          alt={pin.title}
          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        
        {/* AI Badge */}
        <div className="absolute top-4 left-4">
          <div className="flex items-center space-x-1 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
            <Sparkles className="w-3 h-3" />
            <span>AI</span>
          </div>
        </div>

        {/* Action Overlay */}
        {showActions && (
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center space-x-4 transition-opacity duration-300">
            <button
              onClick={handleLike}
              className={`p-3 rounded-full transition-all duration-300 transform hover:scale-110 ${
                isLiked ? 'bg-pinterestRed text-white' : 'bg-white text-gray-700'
              }`}
            >
              <Heart className="w-5 h-5" fill={isLiked ? 'currentColor' : 'none'} />
            </button>
            
            <button
              onClick={handleSave}
              className={`p-3 rounded-full transition-all duration-300 transform hover:scale-110 ${
                isSaved ? 'bg-blue-500 text-white' : 'bg-white text-gray-700'
              }`}
            >
              <Bookmark className="w-5 h-5" fill={isSaved ? 'currentColor' : 'none'} />
            </button>
            
            <button className="p-3 bg-white text-gray-700 rounded-full transition-all duration-300 transform hover:scale-110">
              <Share className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2 line-clamp-2 text-gray-900">
          {pin.title}
        </h3>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {pin.description}
        </p>

        {/* Stats */}
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center space-x-1">
            <Heart className="w-4 h-4" />
            <span>{isLiked ? pin.likes + 1 : pin.likes}</span>
          </div>
          
          <div className="flex items-center space-x-1">
            <Bookmark className="w-4 h-4" />
            <span>{isSaved ? pin.saves + 1 : pin.saves}</span>
          </div>
        </div>

        {/* Category Tag */}
        <div className="mt-3">
          <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
            #{pin.category}
          </span>
        </div>
      </div>
    </div>
  )
}

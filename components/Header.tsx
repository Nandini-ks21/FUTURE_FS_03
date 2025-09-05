'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Search, Bell, MessageCircle, User, Sparkles, LogIn } from 'lucide-react'
import CreateModal from './CreateModal'
import LoginModal from './LoginModal'

export default function Header() {
  const [searchQuery, setSearchQuery] = useState('')
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)

  return (
    <>
      <header className="glass-effect sticky top-0 z-50 backdrop-blur-lg border-b border-white/20">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo - AI Generated Design */}
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="w-8 h-8 bg-pinterestRed rounded-full flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-pinterestRed via-purple-600 to-blue-600 bg-clip-text text-transparent">
                Pinterest AI
              </span>
            </Link>

            {/* Search Bar with AI Suggestions */}
            <div className="flex-1 max-w-2xl mx-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for AI-generated inspiration..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-white/90 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-pinterestRed focus:border-transparent transition-all duration-200"
                />
                {searchQuery && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-2xl p-4">
                    <div className="text-sm text-gray-600 mb-2">AI Suggestions</div>
                    <div className="space-y-1">
                      <div className="flex items-center p-2 hover:bg-gray-50 rounded-lg cursor-pointer">
                        <Sparkles className="w-4 h-4 text-pinterestRed mr-2" />
                        <span>Modern interior design</span>
                      </div>
                      <div className="flex items-center p-2 hover:bg-gray-50 rounded-lg cursor-pointer">
                        <Sparkles className="w-4 h-4 text-pinterestRed mr-2" />
                        <span>AI art inspiration</span>
                      </div>
                      <div className="flex items-center p-2 hover:bg-gray-50 rounded-lg cursor-pointer">
                        <Sparkles className="w-4 h-4 text-pinterestRed mr-2" />
                        <span>Minimalist fashion</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Navigation Icons */}
            <nav className="flex items-center space-x-6">
              <button className="p-2 text-gray-600 hover:text-pinterestRed transition-all duration-300 hover:scale-110">
                <Bell className="w-6 h-6" />
              </button>
              
              <button className="p-2 text-gray-600 hover:text-pinterestRed transition-all duration-300 hover:scale-110">
                <MessageCircle className="w-6 h-6" />
              </button>
              
              <button className="p-2 text-gray-600 hover:text-pinterestRed transition-all duration-300 hover:scale-110">
                <User className="w-6 h-6" />
              </button>
              
              <button 
                className="btn-primary"
                onClick={() => {
                  console.log('Login button clicked - current state:', isLoginModalOpen);
                  setIsLoginModalOpen(true);
                }}
              >
                <LogIn className="w-5 h-5" />
                Login
              </button>
            </nav>
          </div>
        </div>
      </header>

      <CreateModal 
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
      />
      <LoginModal 
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
      />
    </>
  )
}

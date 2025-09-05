'use client'

import React, { useState } from 'react'
import Header from '@/components/Header'
import PinGrid from '@/components/PinGrid'
import CreateModal from '@/components/CreateModal'
import LoginModal from '@/components/LoginModal'
import { Sparkles, TrendingUp, Zap, Brain } from 'lucide-react'

export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)

  const categories = [
    { id: 'all', name: 'All', icon: Sparkles },
    { id: 'trending', name: 'Trending', icon: TrendingUp },
    { id: 'ai-art', name: 'AI Art', icon: Brain },
    { id: 'design', name: 'Design', icon: Zap },
    { id: 'fashion', name: 'Fashion', icon: Sparkles },
    { id: 'food', name: 'Food', icon: Sparkles },
    { id: 'travel', name: 'Travel', icon: Sparkles },
  ]

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="container mx-auto px-6 py-8">
        {/* Hero Section with AI Inspiration */}
        <section className="text-center py-16">
          <div className="max-w-4xl mx-auto">
            <div className="w-24 h-24 bg-gradient-to-r from-pinterestRed via-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-8 float-animation">
              <Sparkles className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-pinterestRed via-purple-600 to-blue-600 bg-clip-text text-transparent">
              Discover AI Inspiration
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-10 max-w-3xl mx-auto leading-relaxed">
              Explore millions of AI-generated ideas for every interest. Powered by cutting-edge machine learning and creative algorithms.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="btn-primary text-lg px-10 py-4">
                Start Exploring
              </button>
              <button 
                className="btn-secondary text-lg px-10 py-4"
                onClick={() => setIsCreateModalOpen(true)}
              >
                Create AI Pin
              </button>
            </div>
          </div>
        </section>

        {/* Category Navigation */}
        <section className="py-8">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => {
              const Icon = category.icon
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 ${
                    activeCategory === category.id
                      ? 'bg-pinterestRed text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{category.name}</span>
                </button>
              )
            })}
          </div>
        </section>

        {/* AI-Powered Features Section */}
        <section className="py-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-pinterestRed to-purple-600 bg-clip-text text-transparent">
              AI-Enhanced Discovery
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Experience the future of visual inspiration with our intelligent platform
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center glass-effect p-8 rounded-2xl hover:scale-105 transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Brain className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Smart Recommendations</h3>
              <p className="text-gray-700">AI-powered suggestions based on your interests and browsing patterns</p>
            </div>

            <div className="text-center glass-effect p-8 rounded-2xl hover:scale-105 transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Instant Generation</h3>
              <p className="text-gray-700">Create stunning visuals instantly with our AI image generation tools</p>
            </div>

            <div className="text-center glass-effect p-8 rounded-2xl hover:scale-105 transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-r from-pinterestRed to-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Trend Analysis</h3>
              <p className="text-gray-700">Discover emerging trends and patterns with our predictive analytics</p>
            </div>
          </div>
        </section>

        {/* Pin Grid Section */}
        <section className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Inspiration</h2>
            <p className="text-xl text-gray-700">AI-curated content just for you</p>
          </div>
          <PinGrid category={activeCategory} />
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-pinterestBlack text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="w-8 h-8 bg-pinterestRed rounded-full flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-2xl font-bold">Pinterest AI</span>
          </div>
          <p className="text-gray-400 mb-8">
            Powered by artificial intelligence and human creativity
          </p>
          <div className="flex justify-center space-x-8 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">About</a>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Help</a>
          </div>
        </div>
      </footer>

      <CreateModal 
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
      />
      <LoginModal 
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
      />
    </div>
  )
}

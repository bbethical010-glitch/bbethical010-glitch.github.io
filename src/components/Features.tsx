import React from 'react'
import { FEATURES } from '../constants/features'
import { Zap, Shuffle, Share2, Download, Heart } from 'lucide-react'

const iconMap: Record<string, React.ElementType> = {
  Zap,
  Shuffle,
  Share2,
  Download,
  Heart,
}

export function Features() {
  return (
    <section id="features" className="py-20 px-4 border-t-4 border-purple bg-bg">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-anton text-5xl text-text uppercase mb-12 text-center">Why Meme Capsule</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature, idx) => {
            const IconComponent = iconMap[feature.icon] || Zap
            
            return (
              <div key={idx} className="neo-card bg-surface p-6 flex flex-col items-start transition-transform hover:-translate-y-1 duration-300">
                <div className={`w-12 h-12 bg-surfaceHigh border-2 border-${feature.color} flex items-center justify-center mb-4`}>
                  <IconComponent size={24} className={`text-${feature.color}`} strokeWidth={2.5} />
                </div>
                <h3 className="font-anton text-2xl text-text uppercase mt-2 mb-2">{feature.title}</h3>
                <p className="font-oswald text-muted text-base leading-relaxed">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

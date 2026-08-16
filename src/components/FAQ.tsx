import { useState } from 'react'
import { FAQ as FAQ_DATA } from '../constants/faq'

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx)
  }

  return (
    <section id="faq" className="py-20 px-4 border-t-4 border-purple bg-bg">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-anton text-5xl text-text uppercase mb-12 text-center">Questions</h2>

        <div className="space-y-4">
          {FAQ_DATA.map((item, idx) => {
            const isOpen = openIndex === idx
            return (
              <div key={idx} className="border-2 border-purple bg-surface transition-colors duration-200">
                <div 
                  className="flex justify-between items-center p-4 cursor-pointer hover:bg-surfaceHigh"
                  onClick={() => toggle(idx)}
                >
                  <h3 className="font-oswald font-bold text-text text-lg pr-8">{item.q}</h3>
                  <span className="font-anton text-gold text-3xl select-none leading-none w-6 text-center">
                    {isOpen ? '−' : '+'}
                  </span>
                </div>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="p-4 pt-0 text-muted font-oswald text-base border-t border-purple/30 mx-4 mt-2">
                    {item.a}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

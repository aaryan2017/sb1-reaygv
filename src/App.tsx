import React, { useState } from 'react';
import { Moon, Sun, Stars, Clock, MapPin, Calendar, User2 } from 'lucide-react';
import BirthChart from './components/BirthChart';
import ZodiacCard from './components/ZodiacCard';
import { calculateMoonSign } from './utils/astrology';

function App() {
  const [birthData, setBirthData] = useState({
    name: '',
    date: '',
    time: '',
    place: ''
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-950 via-purple-900 to-indigo-950">
      <nav className="bg-opacity-30 bg-black backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Stars className="h-8 w-8 text-yellow-300" />
              <span className="text-2xl font-bold bg-gradient-to-r from-yellow-200 to-yellow-500 text-transparent bg-clip-text">
                Kundli Gyaan
              </span>
            </div>
            <div className="flex space-x-4">
              <Moon className="h-6 w-6 text-blue-200" />
              <Sun className="h-6 w-6 text-yellow-300" />
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
            <h2 className="text-2xl font-semibold text-white mb-6">Birth Details</h2>
            <div className="space-y-4">
              <div className="relative">
                <User2 className="absolute left-3 top-3 h-5 w-5 text-purple-300" />
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full pl-10 pr-4 py-2 bg-white/5 border border-purple-300/30 rounded-lg text-white placeholder-purple-300/50 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  value={birthData.name}
                  onChange={(e) => setBirthData({ ...birthData, name: e.target.value })}
                />
              </div>
              <div className="relative">
                <Calendar className="absolute left-3 top-3 h-5 w-5 text-purple-300" />
                <input
                  type="date"
                  className="w-full pl-10 pr-4 py-2 bg-white/5 border border-purple-300/30 rounded-lg text-white placeholder-purple-300/50 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  value={birthData.date}
                  onChange={(e) => setBirthData({ ...birthData, date: e.target.value })}
                />
              </div>
              <div className="relative">
                <Clock className="absolute left-3 top-3 h-5 w-5 text-purple-300" />
                <input
                  type="time"
                  className="w-full pl-10 pr-4 py-2 bg-white/5 border border-purple-300/30 rounded-lg text-white placeholder-purple-300/50 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  value={birthData.time}
                  onChange={(e) => setBirthData({ ...birthData, time: e.target.value })}
                />
              </div>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 h-5 w-5 text-purple-300" />
                <input
                  type="text"
                  placeholder="Birth Place"
                  className="w-full pl-10 pr-4 py-2 bg-white/5 border border-purple-300/30 rounded-lg text-white placeholder-purple-300/50 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  value={birthData.place}
                  onChange={(e) => setBirthData({ ...birthData, place: e.target.value })}
                />
              </div>
              <button className="w-full py-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-lg font-semibold hover:from-purple-600 hover:to-indigo-700 transition-all duration-300 shadow-lg">
                Generate Kundli
              </button>
            </div>
          </div>

          <div className="space-y-6">
            <BirthChart />
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              <ZodiacCard sign="Aries" element="Fire" />
              <ZodiacCard sign="Taurus" element="Earth" />
              <ZodiacCard sign="Gemini" element="Air" />
            </div>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
            <h3 className="text-xl font-semibold text-white mb-4">Daily Prediction</h3>
            <p className="text-purple-200">
              Today's planetary alignments suggest a favorable time for creative endeavors. 
              Trust your intuition and embrace new opportunities.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
            <h3 className="text-xl font-semibold text-white mb-4">Transit Impact</h3>
            <p className="text-purple-200">
              Jupiter's transit through your house of career indicates professional growth. 
              Stay focused on your goals.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
            <h3 className="text-xl font-semibold text-white mb-4">Remedies</h3>
            <p className="text-purple-200">
              Consider wearing yellow sapphire on Thursday. Chant Guru mantras for enhanced wisdom 
              and spiritual growth.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
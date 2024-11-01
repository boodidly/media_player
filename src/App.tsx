import React, { useState } from 'react';
import { Settings } from 'lucide-react';
import Sidebar from './components/Sidebar';
import MusicPlayer from './components/MusicPlayer';
import MainContent from './components/MainContent';
import ColorSettings from './components/ColorSettings';

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration] = useState(263);
  const [accentColor, setAccentColor] = useState('#22c55e'); // Default green
  const [showSettings, setShowSettings] = useState(false);

  return (
    <div className="h-screen bg-black text-white flex flex-col">
      <div className="flex-1 flex overflow-hidden relative">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <div className="flex justify-end p-4">
            <button
              onClick={() => setShowSettings(!showSettings)}
              className="p-2 rounded-full hover:bg-zinc-800 transition-colors"
            >
              <Settings className="w-5 h-5" />
            </button>
          </div>
          <MainContent accentColor={accentColor} />
        </div>
        {showSettings && (
          <ColorSettings
            accentColor={accentColor}
            setAccentColor={setAccentColor}
            onClose={() => setShowSettings(false)}
          />
        )}
      </div>
      <MusicPlayer 
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        currentTime={currentTime}
        setCurrentTime={setCurrentTime}
        duration={duration}
        accentColor={accentColor}
      />
    </div>
  );
}

export default App;
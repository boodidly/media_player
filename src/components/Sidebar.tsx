import React from 'react';
import { Home, Search, Library, Plus, Heart } from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="w-56 bg-black flex flex-col gap-2 p-2">
      <div className="bg-zinc-900/50 rounded-lg p-3 space-y-2">
        <button className="flex items-center gap-3 w-full p-2 text-sm text-gray-300 hover:text-white transition-colors rounded-md hover:bg-zinc-800/50">
          <Home className="w-5 h-5" />
          <span>Home</span>
        </button>
        <button className="flex items-center gap-3 w-full p-2 text-sm text-gray-300 hover:text-white transition-colors rounded-md hover:bg-zinc-800/50">
          <Search className="w-5 h-5" />
          <span>Search</span>
        </button>
      </div>
      
      <div className="flex-1 bg-zinc-900/50 rounded-lg p-3">
        <div className="flex items-center justify-between mb-4">
          <button className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors">
            <Library className="w-5 h-5" />
            <span>Library</span>
          </button>
          <button className="text-gray-300 hover:text-white transition-colors">
            <Plus className="w-4 h-4" />
          </button>
        </div>
        
        <div className="space-y-2">
          <div className="p-2 rounded-md hover:bg-zinc-800/50 transition-colors cursor-pointer">
            <div className="flex items-center gap-2 text-sm">
              <Heart className="w-4 h-4 text-purple-500" />
              <span>Liked Songs</span>
            </div>
            <span className="text-xs text-gray-500 mt-1">123 songs</span>
          </div>
          
          {['Workout Mix', 'Chill Vibes', 'Focus Time'].map((playlist) => (
            <div key={playlist} className="p-2 rounded-md hover:bg-zinc-800/50 transition-colors cursor-pointer">
              <div className="text-sm">{playlist}</div>
              <span className="text-xs text-gray-500">Playlist</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
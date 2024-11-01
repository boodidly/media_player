import React from 'react';
import { Play, Clock3, ChevronRight } from 'lucide-react';

interface MainContentProps {
  accentColor: string;
}

const MainContent = ({ accentColor }: MainContentProps) => {
  const recentlyPlayed = [
    {
      title: "Midnight Memories",
      artist: "Local Artist",
      duration: "3:45",
      coverUrl: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=200&h=200",
      path: "Albums > Local Artist > Midnight Memories"
    },
    {
      title: "Summer Breeze",
      artist: "The Locals",
      duration: "4:20",
      coverUrl: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&q=80&w=200&h=200",
      path: "Playlists > Summer Collection"
    },
    {
      title: "City Lights",
      artist: "Night Owls",
      duration: "3:55",
      coverUrl: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&q=80&w=200&h=200",
      path: "Albums > Night Owls > Urban Collection"
    }
  ];

  return (
    <main className="flex-1 overflow-auto p-8">
      <div className="space-y-6">
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <span>Home</span>
          <ChevronRight className="w-4 h-4" />
          <span>For You</span>
        </div>
        
        <h1 className="text-2xl font-bold">Recently Played</h1>
        
        <div className="grid grid-cols-3 gap-6">
          {recentlyPlayed.map((item, index) => (
            <div 
              key={index}
              className="bg-zinc-900/50 rounded-lg overflow-hidden group hover:bg-zinc-900 transition-colors"
            >
              <div className="relative aspect-square">
                <img 
                  src={item.coverUrl} 
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <button 
                  className="absolute bottom-4 right-4 w-10 h-10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg hover:scale-105 transform"
                  style={{ backgroundColor: accentColor }}
                >
                  <Play className="w-5 h-5 fill-current text-black" fill="currentColor" />
                </button>
              </div>
              <div className="p-4">
                <h3 className="font-medium mb-1">{item.title}</h3>
                <p className="text-sm text-gray-400">{item.artist}</p>
                <p className="text-xs text-gray-500 mt-2">{item.path}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-bold mb-4">Queue</h2>
          <div className="bg-zinc-900/30 rounded-lg overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-zinc-800/50">
                  <th className="px-4 py-2 text-left font-medium">#</th>
                  <th className="px-4 py-2 text-left font-medium">Title</th>
                  <th className="px-4 py-2 text-left font-medium">Path</th>
                  <th className="px-4 py-2 text-left font-medium">
                    <Clock3 className="w-4 h-4" />
                  </th>
                </tr>
              </thead>
              <tbody>
                {recentlyPlayed.map((track, index) => (
                  <tr 
                    key={index}
                    className="hover:bg-zinc-800/30 group/row"
                  >
                    <td className="px-4 py-3 text-sm">{index + 1}</td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-3">
                        <img 
                          src={track.coverUrl} 
                          alt={track.title}
                          className="w-10 h-10 rounded"
                        />
                        <div>
                          <div className="font-medium">{track.title}</div>
                          <div className="text-sm text-gray-400">{track.artist}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-400">{track.path}</td>
                    <td className="px-4 py-3 text-sm text-gray-400">{track.duration}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainContent;
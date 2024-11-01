import React from 'react';
import { X } from 'lucide-react';

interface ColorSettingsProps {
  accentColor: string;
  setAccentColor: (color: string) => void;
  onClose: () => void;
}

const ColorSettings = ({ accentColor, setAccentColor, onClose }: ColorSettingsProps) => {
  const colors = [
    { name: 'Green', value: '#22c55e' },
    { name: 'Blue', value: '#3b82f6' },
    { name: 'Purple', value: '#a855f7' },
    { name: 'Pink', value: '#ec4899' },
    { name: 'Orange', value: '#f97316' },
  ];

  return (
    <div className="absolute right-0 top-16 mr-4 w-64 bg-zinc-900 rounded-lg shadow-xl p-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold">Accent Color</h3>
        <button
          onClick={onClose}
          className="p-1 hover:bg-zinc-800 rounded-full transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
      <div className="space-y-2">
        {colors.map((color) => (
          <button
            key={color.value}
            onClick={() => setAccentColor(color.value)}
            className="flex items-center gap-3 w-full p-2 rounded-md hover:bg-zinc-800 transition-colors"
          >
            <div
              className="w-4 h-4 rounded-full"
              style={{ backgroundColor: color.value }}
            />
            <span>{color.name}</span>
            {accentColor === color.value && (
              <span className="ml-auto text-sm">✓</span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ColorSettings;
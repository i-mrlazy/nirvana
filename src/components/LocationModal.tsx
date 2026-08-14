import React, { useState } from 'react';
import { MapPin, X, Check, Navigation } from 'lucide-react';
import { LocationInfo } from '../types';
import { POPULAR_LOCATIONS } from '../data/calendar';

interface LocationModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedLocation: LocationInfo;
  onSelectLocation: (loc: LocationInfo) => void;
}

export const LocationModal: React.FC<LocationModalProps> = ({
  isOpen,
  onClose,
  selectedLocation,
  onSelectLocation
}) => {
  const [detecting, setDetecting] = useState(false);

  if (!isOpen) return null;

  const handleUseMyLocation = () => {
    setDetecting(true);
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setDetecting(false);
          const customLoc: LocationInfo = {
            city: 'Current Location',
            state: 'Detected',
            country: 'GPS',
            latitude: pos.coords.latitude,
            longitude: pos.coords.longitude,
            timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || 'Asia/Kolkata'
          };
          onSelectLocation(customLoc);
          onClose();
        },
        () => {
          setDetecting(false);
          alert('Could not access GPS location. Selected default city.');
        }
      );
    } else {
      setDetecting(false);
      alert('Geolocation is not supported by your browser.');
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="bg-[#FDFCFB] dark:bg-[#1A1A1A] w-full max-w-md rounded-xl shadow-2xl border border-[#E5E1DA] dark:border-[#2A2A2A] overflow-hidden">
        {/* Header */}
        <div className="p-4 border-b border-[#E5E1DA] dark:border-[#2A2A2A] flex items-center justify-between bg-[#FFFFFF] dark:bg-[#141414]">
          <div className="flex items-center gap-2">
            <MapPin className="size-5 text-[#FF9933]" />
            <h3 className="font-serif font-bold text-lg text-[#1A1A1A] dark:text-[#F5F2EF]">
              Location & Timings
            </h3>
          </div>
          <button onClick={onClose} className="p-1 text-[#6B7280] hover:text-[#1A1A1A] rounded-full">
            <X className="size-5" />
          </button>
        </div>

        <div className="p-5 space-y-4">
          <p className="text-xs text-[#6B7280] dark:text-[#9A8F85] leading-relaxed">
            Panchang calculations (Sunrise, Sunset, Tithi, Nakshatra, Rahukaal) align dynamically with local geographical coordinates.
          </p>

          {/* Detect Location Button */}
          <button
            onClick={handleUseMyLocation}
            disabled={detecting}
            className="w-full py-3 px-4 rounded-lg bg-[#FF9933] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm hover:bg-[#E08520] transition-colors"
          >
            <Navigation className={`size-4 ${detecting ? 'animate-spin' : ''}`} />
            <span>{detecting ? 'Detecting coordinates...' : 'Use My Current GPS Location'}</span>
          </button>

          <div className="relative flex py-1 items-center">
            <div className="flex-grow border-t border-[#E5E1DA] dark:border-[#2A2A2A]"></div>
            <span className="flex-shrink mx-3 text-[10px] uppercase tracking-[0.2em] font-bold text-[#8B4513] dark:text-[#FF9933]">
              Or Select City
            </span>
            <div className="flex-grow border-t border-[#E5E1DA] dark:border-[#2A2A2A]"></div>
          </div>

          {/* Cities List */}
          <div className="space-y-1.5 max-h-60 overflow-y-auto">
            {POPULAR_LOCATIONS.map((loc) => {
              const isSelected = selectedLocation.city === loc.city;
              return (
                <button
                  key={loc.city}
                  onClick={() => {
                    onSelectLocation(loc);
                    onClose();
                  }}
                  className={`w-full p-3 rounded-lg text-left flex items-center justify-between text-xs font-semibold border transition-colors ${
                    isSelected
                      ? 'bg-[#FF9933]/10 border-[#FF9933] text-[#8B4513] dark:text-[#FF9933]'
                      : 'bg-[#F5F2EF] dark:bg-[#222222] border-[#E5E1DA] dark:border-[#333333] text-[#1A1A1A] dark:text-[#F5F2EF] hover:border-[#FF9933]'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <MapPin className="size-3.5 text-[#FF9933]" />
                    <span>{loc.city}, {loc.state} ({loc.country})</span>
                  </div>
                  {isSelected && <Check className="size-4 text-[#FF9933]" />}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};


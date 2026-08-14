import React from 'react';

interface AdContainerProps {
  slotId?: string;
  format?: 'auto' | 'rectangle' | 'horizontal';
  className?: string;
}

/**
 * Structural container for future Google AdSense / display ad placements.
 * Returns null when no live ad client configuration is active to keep UI clean and clutter-free.
 */
export const AdContainer: React.FC<AdContainerProps> = ({
  slotId,
  format = 'auto',
  className = ''
}) => {
  // Check if live ad client is configured via environment variables
  const isAdEnabled = typeof window !== 'undefined' && Boolean((window as any).ADSENSE_CLIENT_ID);

  if (!isAdEnabled || !slotId) {
    return null;
  }

  return (
    <div className={`my-6 flex justify-center items-center overflow-hidden min-h-[90px] ${className}`}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block', width: '100%' }}
        data-ad-client={(window as any).ADSENSE_CLIENT_ID}
        data-ad-slot={slotId}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </div>
  );
};

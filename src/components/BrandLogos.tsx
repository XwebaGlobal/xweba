import React from 'react';

interface XwebaLogoProps {
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
  className?: string;
}

export const XwebaLogo: React.FC<XwebaLogoProps> = ({
  size = 'md',
  showTagline = true,
  className = ''
}) => {
  const textSize = size === 'sm' ? 'text-lg' : size === 'lg' ? 'text-3xl' : 'text-2xl';
  const taglineSize = size === 'sm' ? 'text-[8px]' : size === 'lg' ? 'text-[11px]' : 'text-[9px]';

  return (
    <div className={`inline-flex flex-col leading-none select-none ${className}`}>
      <div className={`font-display font-extrabold tracking-tight ${textSize} flex items-baseline`}>
        {/* 'xwe' in signature electric cyan */}
        <span className="text-[#009fe3]">xwe</span>
        
        {/* '/oA' / 'bA' in signature energetic orange */}
        <span className="text-[#FF5E14] inline-flex items-center ml-0.5">
          <span className="font-light mx-0.5 transform -skew-x-12 opacity-80">/</span>
          <span className="tracking-tighter">oA</span>
        </span>
      </div>

      {showTagline && (
        <span
          className={`font-mono uppercase tracking-widest text-neutral-400 mt-0.5 ${taglineSize} block`}
        >
          digital growth partner
        </span>
      )}
    </div>
  );
};

export const HostingerBadge: React.FC<{ className?: string; compact?: boolean }> = ({
  className = '',
  compact = false
}) => {
  return (
    <div
      className={`inline-flex items-center gap-2 rounded-lg bg-[#673de6] text-white shadow-sm font-sans transition-transform hover:scale-102 ${
        compact ? 'px-2.5 py-1 text-[11px]' : 'px-3 py-1.5 text-xs'
      } ${className}`}
    >
      {/* Hostinger White Geometric Cut "H" */}
      <svg
        className={compact ? 'h-3.5 w-3.5' : 'h-4 w-4'}
        viewBox="0 0 100 100"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M15 15h22v26l26-26h22v70H63V59L37 85H15V15z" />
      </svg>
      
      <div className="flex items-center gap-1.5 font-bold tracking-wide">
        <span className="uppercase tracking-wider">Hostinger</span>
        <span className="font-normal opacity-90 text-[10px] tracking-normal">Partner</span>
      </div>
    </div>
  );
};

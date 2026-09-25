import React from 'react';
import logo1Img from '../assets/images/Logo-1.png';
import logo2Img from '../assets/images/Logo-2.png';
import { useTheme } from '../context/ThemeContext';

interface XwebaLogoProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'auto' | 'white' | 'dark' | 'monochrome-white';
  showTagline?: boolean;
  className?: string;
}

export const XwebaLogo: React.FC<XwebaLogoProps> = ({
  size = 'md',
  variant = 'auto',
  showTagline = true,
  className = ''
}) => {
  const { isDark } = useTheme();

  // Dimensions proportional to 1600x514 (~3.11 : 1 ratio)
  const heightClass = size === 'sm' ? 'h-6 sm:h-7' : size === 'lg' ? 'h-10 sm:h-12' : 'h-8 sm:h-9';

  // Determine whether to show the white logo:
  // - In dark mode, or when explicitly requested variant='white' or 'monochrome-white', use the white logo
  // - In light mode, use the dark navy logo (Logo-2)
  const isWhiteLogo = variant === 'white' || variant === 'monochrome-white' || (variant === 'auto' && isDark);

  const logoSrc = isWhiteLogo ? logo1Img : logo2Img;
  const isMonochrome = variant === 'monochrome-white';

  return (
    <div
      className={`inline-flex items-center transition-all duration-300 hover:opacity-95 ${className}`}
      title="XwebA - digital growth partner"
    >
      <img
        src={logoSrc}
        alt="XwebA - digital growth partner"
        className={`${heightClass} w-auto object-contain select-none transition-all duration-300 ${
          isMonochrome ? 'brightness-0 invert' : ''
        }`}
        loading="eager"
      />
    </div>
  );
};

export const HostingerBadge: React.FC<{
  className?: string;
  compact?: boolean;
  href?: string;
}> = ({
  className = '',
  compact = false,
  href = 'https://www.hostinger.com?REFERRALCODE=1JOHN0542'
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      title="Hostinger Official Partner - Get 20% Off Cloud Edge Hosting"
      className={`inline-flex items-center gap-2 rounded-lg bg-[#673de6] text-white shadow-sm font-sans transition-all hover:bg-[#5832c7] hover:scale-102 hover:shadow-md active:scale-98 cursor-pointer select-none ${
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
    </a>
  );
};

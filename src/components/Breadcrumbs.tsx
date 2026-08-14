import React from 'react';
import { ChevronRight } from 'lucide-react';
import { ScreenType } from '../types';
import { getURLForRoute, parseURLToRoute } from '../utils/router';

export interface BreadcrumbItem {
  label: string;
  screen?: ScreenType;
  targetId?: string;
  url?: string;
}

interface BreadcrumbsProps {
  items?: BreadcrumbItem[];
  onNavigate?: (screen: ScreenType, targetId?: string) => void;
  className?: string;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, onNavigate, className = '' }) => {
  if (!items || items.length <= 1) return null;

  const handleClick = (e: React.MouseEvent, item: BreadcrumbItem) => {
    e.preventDefault();
    if (onNavigate) {
      if (item.screen) {
        onNavigate(item.screen, item.targetId);
      } else if (item.url) {
        const parsed = parseURLToRoute(item.url);
        onNavigate(parsed.screen, parsed.targetId);
      }
    }
  };

  return (
    <nav
      aria-label="Breadcrumb"
      className={`flex items-center text-xs text-[#6B7280] dark:text-[#9A8F85] overflow-x-auto py-1.5 no-scrollbar ${className}`}
    >
      <ol className="flex items-center gap-1.5 whitespace-nowrap">
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          const href = item.url || (item.screen ? getURLForRoute(item.screen, item.targetId) : '#');

          return (
            <li key={idx} className="flex items-center gap-1.5">
              {idx > 0 && (
                <ChevronRight className="size-3 shrink-0 text-[#9A8F85] aria-hidden:true" />
              )}
              {isLast ? (
                <span
                  className="font-bold text-[#8B4513] dark:text-[#FF9933] truncate max-w-[200px] sm:max-w-[320px]"
                  aria-current="page"
                >
                  {item.label}
                </span>
              ) : (
                <a
                  href={href}
                  onClick={(e) => handleClick(e, item)}
                  className="hover:text-[#FF9933] transition-colors focus:outline-hidden focus:ring-1 focus:ring-[#FF9933] rounded px-0.5"
                >
                  {item.label}
                </a>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

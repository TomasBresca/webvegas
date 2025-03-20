import React from 'react';
import type { IconProps } from 'phosphor-react';
import { House, GameController, Trophy, ChatCircleDots, ShareNetwork, Cardholder } from 'phosphor-react';

const icons = {
  hero: House,
  juegos: GameController,
  ganadores: Trophy,
  soporte: ChatCircleDots,
  'como-cargar': Cardholder
};

interface NavItemProps {
  id: keyof typeof icons;
  label: string;
}

export default function NavItem({ id, label }: NavItemProps) {
  const Icon = icons[id];
  
  return (
    <div className="flex flex-col items-center justify-center w-16 h-16 rounded-lg hover:bg-[#e6c656]/10 transition-all group">
      <div className="w-6 h-6 flex items-center justify-center">
        <Icon
          weight="fill"
          size={24}
          className="text-gray-400 group-hover:text-[#e6c656] transition-colors"
        />
      </div>
      <span className="text-[10px] mt-1 text-gray-400 group-hover:text-[#e6c656] transition-colors uppercase font-heading tracking-wider">
        {label}
      </span>
    </div>
  );
} 
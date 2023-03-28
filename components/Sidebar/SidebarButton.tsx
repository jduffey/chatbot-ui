import { FC } from 'react';

interface Props {
  text: string;
  icon: JSX.Element;
  onClick: () => void;
  extraClassName?: string;
}

export const SidebarButton: FC<Props> = ({ text, icon, onClick, extraClassName = '' }) => {
  return (
    <button
      className={`flex w-full cursor-pointer select-none items-center gap-3 rounded-md py-3 px-3 text-[14px] leading-3 text-white transition-colors duration-200 hover:bg-gray-500/10 ${extraClassName}`}
      onClick={onClick}
    >
      <div>{icon}</div>
      <span>{text}</span>
    </button>
  );
};

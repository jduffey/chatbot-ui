import { SupportedExportFormats } from '@/types/export';
import { IconChartBar, IconFileExport, IconMoon, IconSun } from '@tabler/icons-react';
import { useTranslation } from 'next-i18next';
import { FC, useState } from 'react';
import { Import } from '../Settings/Import';
import { Key } from '../Settings/Key';
import { SidebarButton } from '../Sidebar/SidebarButton';
import { ClearConversations } from './ClearConversations';

interface Props {
  lightMode: 'light' | 'dark';
  apiKey: string;
  conversationsCount: number;
  onToggleLightMode: (mode: 'light' | 'dark') => void;
  onApiKeyChange: (apiKey: string) => void;
  onClearConversations: () => void;
  onExportConversations: () => void;
  onImportConversations: (data: SupportedExportFormats) => void;
}

export const ChatbarSettings: FC<Props> = ({
  lightMode,
  apiKey,
  conversationsCount,
  onToggleLightMode,
  onApiKeyChange,
  onClearConversations,
  onExportConversations,
  onImportConversations,
}) => {
  const { t } = useTranslation('sidebar');
  const [myUsageExpanded, setMyUsageExpanded] = useState(false);

  const myUsageContent = (
    <div className="p-2 bg-white/10 rounded">
      <p>Dummy text goes here</p>
    </div>
  );
  return (
    <div className="flex flex-col items-center space-y-1 border-t border-white/20 pt-1 text-sm">
      {conversationsCount > 0 ? (
        <ClearConversations onClearConversations={onClearConversations} />
      ) : null}

      <Import onImport={onImportConversations} />

      <SidebarButton
        text={t('Export conversations')}
        icon={<IconFileExport size={18} />}
        onClick={() => onExportConversations()}
      />

      <SidebarButton
        text={lightMode === 'light' ? t('Dark mode') : t('Light mode')}
        icon={
          lightMode === 'light' ? <IconMoon size={18} /> : <IconSun size={18} />
        }
        onClick={() =>
          onToggleLightMode(lightMode === 'light' ? 'dark' : 'light')
        }
      />

      <SidebarButton
        text={t('My usage')}
        icon={<IconChartBar size={18} />}
        onClick={() => setMyUsageExpanded(!myUsageExpanded)}
        extraClassName={`${myUsageExpanded ? 'h-32' : 'h-auto'
          } transition-all duration-200 ease-in-out`}
      />
      {myUsageExpanded && myUsageContent}

      <Key apiKey={apiKey} onApiKeyChange={onApiKeyChange} />
    </div>
  );
};

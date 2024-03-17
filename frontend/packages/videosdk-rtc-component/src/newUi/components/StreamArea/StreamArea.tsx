import { Flex } from '@local/shared-components';
import { Layout } from 'antd';
import { SideContent } from './SideContent';
import { StreamLayout } from './Streaming';
import styled from 'styled-components';
import { Messanger } from './Messanger';
import { MedicalNote } from './MedicalNote';
import { SectionsType } from './MedicalNote/useMedicalNoteSections';
import { NoteType } from './MedicalNote/types';

export type StreamAreaProps = {
  sideView?: 'chats' | 'participants' | 'menu';
  onClose: () => void;
  activeNoteSection: NoteType;
  medicalNoteSections: SectionsType;
  setActiveNoteSection: React.Dispatch<React.SetStateAction<NoteType>>;
};

export function StreamArea({
  sideView,
  onClose,
  activeNoteSection,
  medicalNoteSections,
  setActiveNoteSection,
}: StreamAreaProps) {
  const titles = {
    chats: 'Messages',
    participants: 'Participants',
    menu: 'Medication & Review',
  };

  return (
    <Flex flex={1} justify="center" fullHeight>
      <StyledRootLayout collapsed={!sideView}>
        <Layout style={{ background: 'transparent' }}>
          <Flex
            fullHeight
            fullWidth
            justify="center"
            gap="md"
            direction="column"
          >
            <StreamLayout />
          </Flex>
        </Layout>
        <Layout.Sider
          collapsible
          collapsed={!sideView}
          onCollapse={(value) => onClose()}
          width={400}
          collapsedWidth={0}
          style={{ background: 'transparent', overflow: 'hidden' }}
          trigger={null}
        >
          <SideContent
            title={sideView ? titles[sideView] : ''}
            onClose={() => onClose()}
          >
            {sideView === 'chats' ? <Messanger /> : null}
            {sideView === 'participants' ? (
              <MedicalNote
                section={activeNoteSection}
                setSection={setActiveNoteSection}
                sections={medicalNoteSections}
              />
            ) : null}
          </SideContent>
        </Layout.Sider>
      </StyledRootLayout>
    </Flex>
  );
}

const StyledRootLayout = styled(Layout)<{
  collapsed: boolean;
}>`
  min-height: 100%;
  background: transparent;
  gap: ${({ theme, collapsed }) =>
    collapsed ? theme.spacing.none : theme.spacing.md};
`;

import { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  HomeFilled,
} from '@ant-design/icons';
import { Layout, Menu, Button } from 'antd';
import styled, { useTheme } from 'styled-components';
import { Flex, LogoutIcon, Theme, Typography } from '@local/shared-components';
import { UserAvatar } from './UserAvatar';
import { IncomingCall } from '../IncomingCall';
import { Outlet } from 'react-router-dom';

const { Header, Sider, Footer } = Layout;

export function PageLayout() {
  const [collapsed, setCollapsed] = useState(false);
  const theme = useTheme() as Theme;

  return (
    <StyledRoot>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        width={270}
        style={{
          background: theme.palette.primary2.main,
          padding: theme.spacing.sm,
          position: 'fixed',
          top: 0,
          bottom: 0,
          left: 0,
        }}
      >
        <Flex gap="md" direction="column" align="center" fullHeight>
          <Flex gap="md" direction="column" align="center" fullHeight fullWidth>
            <StyledLogoPlaceholder collapsed={collapsed} />
            {!collapsed && (
              <Typography variant="h3" align="center" weight="bold">
                Anambra State Doctor Connect System
              </Typography>
            )}
            <Menu
              theme="dark"
              mode="inline"
              defaultSelectedKeys={['1']}
              items={[
                {
                  key: '1',
                  icon: <HomeFilled />,
                  label: collapsed ? null : 'Dashboard',
                  style: { height: 45 },
                },
              ]}
              style={{
                width: collapsed ? 50 : undefined,
                borderRadius: 10,
                fontWeight: 'bold',
                backgroundColor: 'transparent',
              }}
            />
          </Flex>
          {collapsed ? (
            <UserAvatar />
          ) : (
            <StyledAccountUser
              padding="sm"
              gap="xs"
              fullWidth
              justify="space-between"
            >
              <UserAvatar />
              <Flex direction="column" gap="none">
                <Typography weight="bold" color="common.white" noWrap>
                  Tobi Shodimu
                </Typography>
                <Typography variant="bodyXs" color="common.white">
                  Doctor #123
                </Typography>
              </Flex>
              <StyledLogoutIconButton>
                <LogoutIcon color="primary1.light" />
              </StyledLogoutIconButton>
            </StyledAccountUser>
          )}
        </Flex>
      </Sider>
      <Layout
        style={{
          position: 'fixed',
          width: `calc(100% - ${collapsed ? 80 : 270}px)`,
          left: collapsed ? 80 : 270,
          overflowY: 'scroll',
        }}
      >
        <Header
          style={{
            paddingLeft: theme.spacing.sm,
            background: theme.palette.common.white,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: theme.typography.bodySm.fontSize,
              width: 40,
              height: 40,
            }}
          />
        </Header>
        <StyledContainer fullHeight fullWidth padding="md" direction="column">
          <Outlet />
          <Footer style={{ textAlign: 'center' }}>
            Anambra State Doctor Connect ©{new Date().getFullYear()} Created by
            The Boolean Tech
          </Footer>
        </StyledContainer>
      </Layout>
      <IncomingCall />
    </StyledRoot>
  );
}

const StyledRoot = styled(Layout)`
  height: 100vh;
`;

// TODO: Remove this and replace it usage with the actual logo component when it's been merged.
const StyledLogoPlaceholder = styled.div<{ collapsed?: boolean }>`
  width: ${({ collapsed }) => (collapsed ? '50px' : '100px')};
  height: ${({ collapsed }) => (collapsed ? '50px' : '100px')};
  min-height: ${({ collapsed }) => (collapsed ? '50px' : '100px')};
  border-radius: 100%;
  background: rgba(0, 0, 0, 0.1);
  margin: 1em;
`;

const StyledAccountUser = styled(Flex)`
  background: ${({ theme }) => theme.palette.primary1.main};
  border-radius: 8px;
  overflow: hidden;
`;

const StyledLogoutIconButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
`;


const StyledContainer = styled(Flex)`
  max-height: calc(100vh - 64px);
  overflow: scroll;
`;
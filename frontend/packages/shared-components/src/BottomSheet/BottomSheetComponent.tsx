import styled, { css } from 'styled-components';
import { BottomSheetCancel } from '../Icon';
import { Button } from '../Button';

export interface BottomSheetComponentProps {
  children?: React.ReactNode;
  title?: string;
  onClickCancel: () => void;
}

export function BottomSheetComponent({
  onClickCancel,
  children,
  title
}: BottomSheetComponentProps) {
  return (
    <Container>
      <LabelAndCancelContainer>
        <Content>
          {title && <Title>{title}</Title>}
          <CancelIconContainer onClick={onClickCancel}>
            <BottomSheetCancel />
          </CancelIconContainer>
          {children}
        </Content>
      </LabelAndCancelContainer>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  width: 100%;
  box-shadow: ${({ theme }) => theme.shadows.md};
  padding: ${({ theme }) => theme.spacing.xl};
  box-sizing: border-box;
  border-radius: ${({ theme }) => theme.radius.card};
  border: ${({ theme }) => theme.border.primary.light};
  background-color: ${({ theme }) => theme.palette.common.white};
  
`;

const Content = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  margin-top: ${({ theme }) => theme.spacing.lg};
`;

const LabelAndCancelContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Title  = styled.div`
  font-size: ${({ theme }) => theme.typography.bodyLg.fontSize};
  color: ${({ theme }) => theme.palette.primary1.main};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  position: absolute;
  top: ${({ theme }) => theme.spacing.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};  
  
`;

const CancelIconContainer = styled.div`
  position: absolute;
  right: ${({ theme }) => theme.spacing.sm};
  top: ${({ theme }) => theme.spacing.sm};
  cursor: pointer;
  
`;

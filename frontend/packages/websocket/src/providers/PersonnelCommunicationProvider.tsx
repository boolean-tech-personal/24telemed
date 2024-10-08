import { ReactNode, createContext, useContext, useMemo } from 'react';
import {
  PersonnelCallEventType,
  CallMessage,
  usePersonnelWebSocket,
  WebSocketMessage,
} from '../hooks';

export interface PersonnelWebSocketContextType {
  isOpen: boolean;
  isOngoingCall: boolean;
  callStatus: PersonnelCallEventType | undefined;
  callDoctor: (callData: CallMessage) => void;
  endCall: (send?: boolean) => void;
  message: WebSocketMessage<PersonnelCallEventType> | null;
  availableDoctors: string[];
}

const PersonnelWebSocketContext = createContext<PersonnelWebSocketContextType>({
  isOpen: false,
  isOngoingCall: false,
  callStatus: undefined,
  callDoctor: (callData: CallMessage) => {},
  endCall: () => {},
  message: null,
  availableDoctors: [],
});

export const usePersonnelCommunication = () =>
  useContext(PersonnelWebSocketContext);

interface PersonnelWebSocketProviderProps {
  children: ReactNode;
  userId: string;
}

export function PersonnelCommunicationProvider({
  children,
  userId,
}: PersonnelWebSocketProviderProps) {
  const value = usePersonnelWebSocket(userId, "health-care-assistant");
  const memoisedValue = useMemo(() => value, [value]);
  return (
    <PersonnelWebSocketContext.Provider value={memoisedValue}>
      {children}
    </PersonnelWebSocketContext.Provider>
  );
}

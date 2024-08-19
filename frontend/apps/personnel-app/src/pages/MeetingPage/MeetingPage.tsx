import { useCurrentUser } from '@local/api-generated';
import { PageLoading } from '@local/shared-components';
import { VideoCall } from '@local/videosdk-rtc-component';
import { useGetCallLog } from '../../api/callLogs';
import { useParams } from 'react-router-dom';

export function MeetingPage() {
  const { meetingId } = useParams();
  const { data: userData } = useCurrentUser();
  const { data: callLog } = useGetCallLog(meetingId);

  const fullName = [userData?.first_name, userData?.last_name]
    .filter(Boolean)
    .join(' ');

    if (!userData || !callLog?.meeting_id || !callLog?.patient) {
      return <PageLoading />;
    }

  return (
    <VideoCall
      participantName={fullName || 'Unknown'}
      meetingId={callLog.meeting_id}
      userId={userData.id as string}
      patientId={callLog.patient}
      userType="personnel"
    />
  );
}

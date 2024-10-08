import {
  Navigate,
  type RouteObject,
  createBrowserRouter,
} from 'react-router-dom';
import { PageLayout } from './components/PageLayout';
import { Path } from './constants';
import { creatRoutes } from '@local/shared-components';
import { MeetingPage } from './pages/MeetingPage';
import { CommsLayout } from './components/CommsLayout';
import { LoginPage } from './pages/LoginPage';
import { CallHistoryPage } from './pages/CallHistoryPage';
import { ProfilePage } from './pages/ProfilePage';
import { AccountPatientProfileSetupPage, RegistrationPageLayout } from './pages/PatientRegistionPage';
import { PatientProfilePage } from './pages/PatientProfilePage';
import { EditPatientPage } from './pages/EditPatientInformation';
import { ForgotPaswordPage } from './pages/ResetPasword';
import { HomePage } from './pages/HomePage';
import { FundWalletModal, WalletPage } from './pages/WalletPage';



const routes: RouteObject[] = [
  {
    path: '/',
    element: <CommsLayout />,
    children: [
      {
        path: '/',
        element: <PageLayout />,
        children: [
          {
            index: true,
            element: <Navigate to={Path.home} replace />,
          },
          {
            path: Path.home,
            element: <HomePage />,
          },
          {
            path: Path.wallet,
            element: <WalletPage />,
            children: [
              {
                path: "fund",
                element: <FundWalletModal />
              }
            ]
          },
          {
            path: Path.history,
            element: <CallHistoryPage />,
          },
          {
            path: Path.profile,
            element: <ProfilePage />,
          },
        ],
      },
      {
        path: Path.patient + '/:patientId',
        element: <PatientProfilePage />,
      },
      {
        path: Path.registerPatient,
        element: <RegistrationPageLayout title='New patient' />,
      },
      {
        path: Path.setupAccount,
        element: <AccountPatientProfileSetupPage />,
      },
      {
        path: Path.patient + '/:patientId' + '/edit',
        element: <EditPatientPage />,
      },
      {
        path: Path.meeting + '/:meetingId',
        element: <MeetingPage />,
      },
    ],
  },
];

export const router = createBrowserRouter(creatRoutes(routes, <LoginPage />, <ForgotPaswordPage />));

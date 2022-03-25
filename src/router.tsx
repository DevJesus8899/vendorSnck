import { Suspense, lazy } from 'react';
import { Navigate } from 'react-router-dom';
import { RouteObject } from 'react-router';

import SidebarLayout from 'src/layouts/SidebarLayout';
import BaseLayout from 'src/layouts/BaseLayout';

import SuspenseLoader from 'src/components/SuspenseLoader';
import OnboardingPhone from './content/onboarding/phone';
import OnboardingVerification from './content/onboarding/verification';
import OnboardingPin from './content/onboarding/pin';
import TermsAndPolicy from './content/pages/Docs/TermsAndPolicy';
import OnboardingOrderType from './content/onboarding/ordertype';
import OnboardingQueue from './content/onboarding/queue';
import OnboardingAcceptOrder from './content/onboarding/acceptorder';
import FAQ from './content/pages/Docs/FAQ';
import Logout from './content/login/logout';

const Loader = (Component) => (props) => (
  <Suspense fallback={<SuspenseLoader />}>
    <Component {...props} />
  </Suspense>
);

// Pages


// Dashboards
const Dashboard = Loader(lazy(() => import('src/content/dashboards')));

// Settings

const UserProfile = Loader(lazy(() => import('src/content/pages/UserProfile')));
const UserSettings = Loader(lazy(() => import('src/content/pages/settings/Users')));
const MenuSettings = Loader(lazy(() => import('src/content/pages/settings/Menus')));
const OrderSettings = Loader(lazy(() => import('src/content/pages/settings/Orders')));
const PrinterSettings = Loader(lazy(() => import('src/content/pages/settings/Printers')));

//Applications
//const Messenger = Loader(lazy(() => import('src/content/applications/Messenger')));

// Components
const Buttons = Loader(lazy(() => import('src/content/pages/Components/Buttons')));
const Modals = Loader(lazy(() => import('src/content/pages/Components/Modals')));
const Accordions = Loader(lazy(() => import('src/content/pages/Components/Accordions')));
const Tabs = Loader(lazy(() => import('src/content/pages/Components/Tabs')));
const Badges = Loader(lazy(() => import('src/content/pages/Components/Badges')));
const Tooltips = Loader(lazy(() => import('src/content/pages/Components/Tooltips')));
const Avatars = Loader(lazy(() => import('src/content/pages/Components/Avatars')));
const Cards = Loader(lazy(() => import('src/content/pages/Components/Cards')));
const Forms = Loader(lazy(() => import('src/content/pages/Components/Forms')));

// Status
const Status404 = Loader(lazy(() => import('src/content/pages/Status/Status404')));
const Status500 = Loader(lazy(() => import('src/content/pages/Status/Status500')));
const StatusComingSoon = Loader(lazy(() => import('src/content/pages/Status/ComingSoon')));
const StatusMaintenance = Loader(lazy(() => import('src/content/pages/Status/Maintenance')));

const LoginPage = Loader(lazy(() => import('src/content/login')));

//Orders
const OrdersPage = Loader(lazy(() => import('src/content/orders')));

const routes: RouteObject[] = [
  {
    path: '*',
    element: <BaseLayout />,
    children: [
      {
        path: '',
        element: (
          <Navigate
            to="login"
            replace
          />
        )
      },
      {
        path: 'login',
        element: <LoginPage />
      },
      {
        path: 'logout',
        element: (
          <Logout />
        )
      },
      {
        path: 'terms_policy',
        element: <TermsAndPolicy />
      },
      {
        path: 'status',
        children: [
          {
            path: '',
            element: (
              <Navigate
                to="404"
                replace
              />
            )
          },
          {
            path: '404',
            element: <Status404 />
          },
          {
            path: '500',
            element: <Status500 />
          },
          {
            path: 'maintenance',
            element: <StatusMaintenance />
          },
          {
            path: 'coming-soon',
            element: <StatusComingSoon />
          },
        ]
      },
      {
        path: '*',
        element: <Status404 />
      },
    ]
  },
  {
    path: 'onboarding',
    element: <BaseLayout />,
    children: [
      {
        path: '',
        element: <Navigate
          to="phone"
          replace
        />
      },
      {
        path: 'phone',
        element: <OnboardingPhone />
      },
      {
        path: 'verification',
        element: <OnboardingVerification />
      },
      {
        path: 'pin',
        element: <OnboardingPin />
      },
      {
        path: 'ordertype',
        element: <OnboardingOrderType />
      },
      {
        path: 'queue',
        element: <OnboardingQueue />
      },
      {
        path: 'acceptorder',
        element: <OnboardingAcceptOrder />
      },
    ]
  },
  {
    path: 'help',
    element: (
      <SidebarLayout />
    ),
    children: [
      {
        path: '',
        element: (
          <FAQ />
        )
      }
    ]
  },
  {
    path: 'dashboards',
    element: (
      <SidebarLayout />
    ),
    children: [
      {
        path: '',
        element: <Dashboard />
      }
    ]
  },
  {
    path: 'profile',
    element: (
      <SidebarLayout />
    ),
    children: [
      {
        path: '',
        element: <UserProfile />
      }
    ]
  },
  {
    path: 'settings',
    element: (
      <SidebarLayout />
    ),
    children: [
      {
        path: '',
        element: (
          <Navigate
            to="/settings/users"
            replace
          />
        )
      },
      {
        path: 'users',
        element: <UserSettings />
      },
      {
        path: 'menus',
        element: <MenuSettings />
      },
      {
        path: 'orders',
        element: <OrderSettings />
      },
      {
        path: 'printers',
        element: <PrinterSettings />
      }
    ]
  },
  {
    path: 'orders',
    element: (
      <SidebarLayout />
    ),
    children: [
      {
        path: '',
        element: (
          <Navigate
            to="/orders/new"
            replace
          />
        )
      },
      {
        path: 'new',
        element: <OrdersPage type='New' />
      },
      {
        path: 'preparing',
        element: <OrdersPage type='Preparing' />
      },
      {
        path: 'delivery',
        element: <OrdersPage type='Delivery' />
      },
      {
        path: 'pickup',
        element: <OrdersPage type='Pickup' />
      },
      {
        path: 'all',
        element: <OrdersPage type='All' />
      }
    ]
  },
  {
    path: 'components',
    element: (
      <SidebarLayout />
    ),
    children: [
      {
        path: '',
        element: (
          <Navigate
            to="/components/buttons"
            replace
          />
        )
      },
      {
        path: 'buttons',
        element: <Buttons />
      },
      {
        path: 'modals',
        element: <Modals />
      },
      {
        path: 'accordions',
        element: <Accordions />
      },
      {
        path: 'tabs',
        element: <Tabs />
      },
      {
        path: 'badges',
        element: <Badges />
      },
      {
        path: 'tooltips',
        element: <Tooltips />
      },
      {
        path: 'avatars',
        element: <Avatars />
      },
      {
        path: 'cards',
        element: <Cards />
      },
      {
        path: 'forms',
        element: <Forms />
      },
    ]
  }
];

export default routes;

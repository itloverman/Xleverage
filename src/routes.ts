import { dAppName } from 'config';
import { Trade } from 'pages/Trade';
import { Swap } from 'pages/Swap';
import { Lending } from 'pages/Lending';
import { Activity } from 'pages/Activity';
import { RouteType } from 'types';
import { withPageTitle } from './components/PageTitle';
import { Home } from './pages';

export const routeNames = {
  home: '/',
  trade:'/trade',
  unlock: '/unlock',
  swap:'/swap',
  lending: '/lending',
  activity: '/activity',
};

interface RouteWithTitleType extends RouteType {
  title: string;
}

export const routes: RouteWithTitleType[] = [
  {
    path: routeNames.home,
    title: 'Home',
    component: Home
  },
  {
    path: routeNames.trade,
    title: 'Trade',
    component: Trade
  },
  {
    path: routeNames.swap,
    title: 'Swap',
    component: Swap
  },
  {
    path: routeNames.lending,
    title: 'Lending',
    component: Lending
  },
  {
    path: routeNames.activity,
    title: 'Activity',
    component: Activity
  },
];

export const mappedRoutes = routes.map((route) => {
  const title = dAppName;

  const requiresAuth = Boolean(route.authenticatedRoute);
  const wrappedComponent = withPageTitle(title, route.component);

  return {
    path: route.path,
    component: wrappedComponent,
    authenticatedRoute: requiresAuth
  };
});

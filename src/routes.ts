import { dAppName } from 'config';
import { Leaderboard } from 'pages/Leaderboard';
import { Rule } from 'pages/Rule';
import { Disclaimer } from 'pages/Disclaimer';
import { RouteType } from 'types';
import { withPageTitle } from './components/PageTitle';
import { Home } from './pages';

export const routeNames = {
  home: '/',
  unlock: '/unlock',
  disclaimer: '/disclaimer',
  leaderboard: '/leaderboard',
  rule: '/rule',
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
    path: routeNames.leaderboard,
    title: 'Leaderboard',
    component: Leaderboard
  },
  {
    path: routeNames.rule,
    title: 'rule',
    component: Rule
  },
  {
    path: routeNames.disclaimer,
    title: 'disclaimer',
    component: Disclaimer
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

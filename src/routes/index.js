//Layouts
import { HeaderOnly } from '~/components/Layout';

import HomePage from '~/pages/Home';
import FollowingPage from '~/pages/Following';
import ProfilePage from '~/pages/Profile';
import UploadPage from '~/pages/Upload';
import SearchingPage from '~/pages/Searching';

// Public Routes
const publicRoutes = [
    { path: '/', component: HomePage },
    { path: '/following', component: FollowingPage },
    { path: '/profile', component: ProfilePage },
    { path: '/upload', component: UploadPage, layout: HeaderOnly },
    { path: '/searching', component: SearchingPage, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };

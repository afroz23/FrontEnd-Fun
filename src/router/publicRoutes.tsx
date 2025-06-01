import Login from '@/tabs/auth/Login';
import SignUp from '@/tabs/auth/SignUp';
const publicRoutes = [
	{
		path: '',
		element: <Login />
	},
	{
		path: 'login',
		element: <Login />
	},
	{
		path: 'signup',
		element: <SignUp />
	}
];

export { publicRoutes };

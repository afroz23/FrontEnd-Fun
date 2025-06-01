import Overview from '@/tabs/overview';
import ProtectedRoute from './ProtectedRoute';

const privateRoutes = [
	{
		path: 'overview',
		element: <ProtectedRoute element={<Overview />} />
	}
];

export { privateRoutes };

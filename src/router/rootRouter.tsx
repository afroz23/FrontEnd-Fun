import App from '@/App';
import { createBrowserRouter } from 'react-router-dom';
import { publicRoutes } from '@/router/publicRoutes.tsx';
import { privateRoutes } from '@/router/privateRoutes.tsx';

const rootRouter = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <h1>Not found</h1>,
		children: [
			...publicRoutes,
			{
				path: '',
				children: privateRoutes
			}
		]
	}
]);

export { rootRouter };
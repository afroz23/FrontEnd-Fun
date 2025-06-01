import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

import { store } from '@/store/rootStore';
import { rootRouter } from '@/router/rootRouter';
import '@/index.scss';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={rootRouter} />
		</Provider>
	</React.StrictMode>
);

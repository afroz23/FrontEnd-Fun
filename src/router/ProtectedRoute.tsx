import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/rootStore';

type ProtectedRouteProps = {
	element: React.ReactElement;
};

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element }) => {
	const location = useLocation();
	const { isAuthenticated } = useSelector((state: RootState) => state.user);

	if (!isAuthenticated) {
		return <Navigate to='/login' state={{ from: location }} replace />;
	}
	return element;
};

export default ProtectedRoute;

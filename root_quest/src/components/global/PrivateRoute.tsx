import React, { ReactElement } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Cookie from 'js-cookie';

// Função para verificar se o usuário está autenticado
const isAuthenticated = (): boolean => {
  return !!Cookie.get('token');
};

interface PrivateRouteProps {
  element: ReactElement;
}

// Componente PrivateRoute
const PrivateRoute: React.FC<PrivateRouteProps> = ({ element }) => {
  const location = useLocation();

  return isAuthenticated() ? (
    element
  ) : (
    <Navigate to="/login" state={{ from: location }} replace={true} />
  );
};

export default PrivateRoute;

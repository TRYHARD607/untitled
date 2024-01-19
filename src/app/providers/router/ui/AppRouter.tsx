import { getUserAuthData } from 'entities/User';
import { memo, Suspense, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader';

const AppRouter = () => {
  const isAuth = useSelector(getUserAuthData);

  const routes = useMemo(
    () =>
      Object.values(routeConfig).filter((route) => {
        if (!isAuth && route.authOnly) {
          return false;
        }
        return true;
      }),
    [isAuth]
  );

  return (
    <Routes>
      {routes.map(({ path, element }) => (
        <Route
          key={path}
          element={
            <Suspense fallback={<PageLoader />}>
              <div className='page-wrapper'>{element}</div>{' '}
            </Suspense>
          }
          path={path}
        />
      ))}
    </Routes>
  );
};

export default memo(AppRouter);

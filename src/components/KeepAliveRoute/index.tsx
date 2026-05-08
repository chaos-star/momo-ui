import React from 'react';
import KeepAlive from 'react-activation';
import { Route, RouteProps } from 'react-router-dom';
import { TabIdentity, getTabCacheKey } from '@/utils/tabStorage';

type KeepAliveRouteProps = RouteProps & {
  identity: TabIdentity;
};

function KeepAliveRoute({
  identity,
  component,
  render,
  children,
  ...rest
}: KeepAliveRouteProps) {
  return (
    <Route
      {...rest}
      render={(routeProps) => {
        const fullPath = `${routeProps.location.pathname}${
          routeProps.location.search || ''
        }`;
        const cacheKey = getTabCacheKey(identity, fullPath);
        const Component = component as
          | React.ComponentType<typeof routeProps>
          | undefined;

        return (
          <KeepAlive id={cacheKey} name={cacheKey} saveScrollPosition="screen">
            {Component ? (
              <Component {...routeProps} />
            ) : render ? (
              render(routeProps)
            ) : (
              children
            )}
          </KeepAlive>
        );
      }}
    />
  );
}

export default KeepAliveRoute;

export const privateRoutes = ['/account', '/collection'];

export const isPrivateRoute = (pathname: string) =>
  privateRoutes.some(
    (route) => pathname === route || pathname.startsWith(`${route}/`),
  );

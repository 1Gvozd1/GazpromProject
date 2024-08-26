// конфиг для наших путей, чтобы мы вручную не прописывали Rout'ы
import { RouteProps } from 'react-router-dom';
import { MainPage } from '../../../pages/MainPage';
import { TablePage } from '../../../pages/TablePage';
import { NotFoundPage } from '../../../pages/NotFoundPage';

export enum AppRoutes {
    MAIN = 'main',
    TABLE = 'table',
    NOT_FOUND = 'not_found'

}

export const RoutePath: Record<AppRoutes, string> = { // для каждого маршрута из enum AppRoutes укажем путь до компонента
    [AppRoutes.MAIN]: '/',
    [AppRoutes.TABLE]: '/table',
    [AppRoutes.NOT_FOUND]: '*', // все маршруты, если ни один ранее не отработал
};

export const routeConfig: Record<AppRoutes, RouteProps> = { // определяем маршруты и компоненты которые мы должны отрисовать
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />,
    },
    [AppRoutes.TABLE]: {
        path: RoutePath.table,
        element: <TablePage />,
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />,
    },
};

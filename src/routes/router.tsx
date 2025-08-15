import rootRoute from './__root.tsx'
import Routes from './routes'

export const routeTree = rootRoute.addChildren(Routes)

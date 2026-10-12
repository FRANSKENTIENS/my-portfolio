import { createBrowserRouter, Navigate, type RouteObject } from 'react-router'
import { pages, type PageRoute } from './routes'
import { AppShell } from './AppShell'

function RouteStage({ page }: { page: PageRoute }) {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">{page.label}</h1>
        <p className="text-gray-500">{page.description}</p>
      </div>
    </div>
  )
}

function elementFor(page: PageRoute) {
  return <RouteStage page={page} />
}

function routeFor(page: PageRoute): RouteObject {
  if (page.path === '/') {
    return { element: elementFor(page), children: [{ index: true }] }
  }
  return { path: page.path.slice(1), element: elementFor(page) }
}

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppShell />,
    children: [...pages.map(routeFor), { path: '*', element: <RouteStage page={{ kind: 'page', id: '404', path: '/404', label: '404', title: 'Not Found', description: 'Page not found', icon: () => null }} /> }],
  },
])

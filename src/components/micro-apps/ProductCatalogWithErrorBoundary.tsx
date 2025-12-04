import { ErrorBoundary } from "../ErrorBoundary";
import { lazy, Suspense } from "react";

// Import the remote product catalog with error handling
const RemoteProductCatalog = lazy(() => 
  import('productCatalog/ProductCatalog').catch(() => 
    import('./ProductCatalog').then(module => ({ default: module.ProductCatalog }))
  )
);

// Loading component
const ModuleLoader = ({ children }: { children: React.ReactNode }) => (
  <Suspense fallback={
    <div className="flex items-center justify-center min-h-[400px]">
      <div className="text-center space-y-4">
        <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto"></div>
        <p className="text-muted-foreground">Loading product catalog...</p>
      </div>
    </div>
  }>
    {children}
  </Suspense>
);

export const ProductCatalogWithErrorBoundary = () => {
  return (
    <ErrorBoundary moduleName="Product Catalog">
      <ModuleLoader>
        <RemoteProductCatalog />
      </ModuleLoader>
    </ErrorBoundary>
  );
};

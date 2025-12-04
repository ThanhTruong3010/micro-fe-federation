import { useState, Suspense, lazy } from "react";
import { ErrorBoundary } from "./ErrorBoundary";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProductCatalog } from "./micro-apps/ProductCatalog";
import { UserProfile } from "./micro-apps/UserProfile";
import { Analytics } from "./micro-apps/Analytics";
import {
  Package,
  User,
  BarChart3,
  Zap,
  Cpu,
  Network,
  ArrowRight,
  Github,
  AlertCircle,
} from "lucide-react";

// Flag to enable/disable remote federation
const USE_REMOTE_FEDERATION = true; // Set to true when remotes are running

// Dynamic imports for remote modules with fallbacks
const RemoteProductCatalog = lazy(() => {
  if (USE_REMOTE_FEDERATION) {
    return import("productCatalog/ProductCatalog").catch((e) => {
      console.log("Product Catalog error", e);
      return import("./micro-apps/ProductCatalog").then((module) => ({
        default: module.ProductCatalog,
      }));
    });
  }
  return import("./micro-apps/ProductCatalog").then((module) => ({
    default: module.ProductCatalog,
  }));
});

const RemoteUserProfile = lazy(() => {
  if (USE_REMOTE_FEDERATION) {
    return import("userProfile/UserProfile").catch((e) => {
      console.log("User Profile error", e);
      return import("./micro-apps/UserProfile").then((module) => ({
        default: module.UserProfile,
      }));
    });
  }
  return import("./micro-apps/UserProfile").then((module) => ({
    default: module.UserProfile,
  }));
});

const RemoteAnalytics = lazy(() => {
  if (USE_REMOTE_FEDERATION) {
    return import("analytics/Analytics").catch((e) => {
      console.log("Analytics error", e);
      return import("./micro-apps/Analytics").then((module) => ({
        default: module.Analytics,
      }));
    });
  }
  return import("./micro-apps/Analytics").then((module) => ({
    default: module.Analytics,
  }));
});

// Loading component
const ModuleLoader = ({ children }: { children: React.ReactNode }) => (
  <Suspense
    fallback={
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center space-y-4">
          <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="text-muted-foreground">Loading micro-app...</p>
        </div>
      </div>
    }
  >
    {children}
  </Suspense>
);

// Error boundary component
export const ErrorFallback = ({
  error,
  moduleName,
}: {
  error?: Error;
  moduleName: string;
}) => (
  <div className="flex items-center justify-center min-h-[400px]">
    <div className="text-center space-y-4 p-8 border border-destructive/20 rounded-lg bg-destructive/5">
      <AlertCircle className="w-12 h-12 text-destructive mx-auto" />
      <h3 className="text-lg font-semibold text-foreground">
        Failed to load {moduleName}
      </h3>
      <p className="text-sm text-muted-foreground max-w-md">
        The remote module couldn't be loaded. Using local fallback instead.
      </p>
      <Badge variant="secondary" className="bg-yellow-500/20 text-yellow-600">
        Fallback Mode
      </Badge>
    </div>
  </div>
);

export const FederationHost = () => {
  const [activeModule, setActiveModule] = useState("overview");

  const modules = [
    {
      id: "products",
      name: "Product Catalog",
      icon: Package,
      description: "Independent e-commerce module (Port 8081)",
      status: "remote",
      component: () => (
        <ErrorBoundary moduleName="Product Catalog">
          <ModuleLoader>
            <RemoteProductCatalog />
          </ModuleLoader>
        </ErrorBoundary>
      ),
      fallback: ProductCatalog,
    },
    {
      id: "profile",
      name: "User Profile",
      icon: User,
      description: "Standalone user management (Port 8082)",
      status: "remote",
      component: () => (
        <ErrorBoundary moduleName="User Profile">
          <ModuleLoader>
            <RemoteUserProfile />
          </ModuleLoader>
        </ErrorBoundary>
      ),
      fallback: UserProfile,
    },
    {
      id: "analytics",
      name: "Analytics",
      icon: BarChart3,
      description: "Real-time analytics dashboard (Port 8083)",
      status: "remote",
      component: () => (
        <ErrorBoundary moduleName="Analytics">
          <ModuleLoader>
            <RemoteAnalytics />
          </ModuleLoader>
        </ErrorBoundary>
      ),
      fallback: Analytics,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Header */}
      <div className="relative overflow-hidden bg-gradient-primary">
        <div className="absolute inset-0 bg-gradient-glass backdrop-blur-glass" />
        <div className="relative container mx-auto px-6 py-16">
          <div className="text-center space-y-6">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Network className="w-8 h-8 text-primary-foreground" />
              <Badge
                variant="secondary"
                className="bg-white/20 text-white border-white/30"
              >
                Module Federation Demo
              </Badge>
            </div>

            <h1 className="text-5xl font-bold text-primary-foreground mb-4">
              Micro React.js
              <span className="block text-3xl mt-2 opacity-90">
                with Module Federation
              </span>
            </h1>

            <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
              Experience the power of microfrontend architecture with
              independently deployable, loosely coupled React applications that
              work seamlessly together.
            </p>

            <div className="flex items-center justify-center gap-4 pt-4">
              <Button
                variant="secondary"
                className="bg-white/20 text-white border-white/30 hover:bg-white/30"
                onClick={() => setActiveModule("products")}
              >
                <Zap className="w-4 h-4 mr-2" />
                Explore Modules
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10"
              >
                <Github className="w-4 h-4 mr-2" />
                View Code
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12">
        <Tabs
          value={activeModule}
          onValueChange={setActiveModule}
          className="space-y-8"
        >
          <TabsList className="grid w-full grid-cols-4 bg-muted/20 p-1">
            <TabsTrigger value="overview" className="flex items-center gap-2">
              <Cpu className="w-4 h-4" />
              Overview
            </TabsTrigger>
            {modules.map((module) => {
              const IconComponent = module.icon;
              return (
                <TabsTrigger
                  key={module.id}
                  value={module.id}
                  className="flex items-center gap-2"
                >
                  <IconComponent className="w-4 h-4" />
                  {module.name}
                </TabsTrigger>
              );
            })}
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {modules.map((module, index) => {
                const IconComponent = module.icon;
                return (
                  <Card
                    key={module.id}
                    className="group relative overflow-hidden bg-gradient-glass backdrop-blur-glass border-border/20 hover:shadow-glow transition-all duration-300 cursor-pointer"
                    onClick={() => setActiveModule(module.id)}
                  >
                    <div className="p-6 space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="p-3 rounded-lg bg-primary/10">
                          <IconComponent className="w-6 h-6 text-primary" />
                        </div>
                        <Badge
                          variant="secondary"
                          className={
                            module.status === "remote"
                              ? "bg-blue-500/20 text-blue-400"
                              : "bg-red-500/20 text-red-400"
                          }
                        >
                          {module.status}
                        </Badge>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">
                          {module.name}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {module.description}
                        </p>
                      </div>

                      <Button
                        className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300 group-hover:scale-105"
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveModule(module.id);
                        }}
                      >
                        Load Module
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </Card>
                );
              })}
            </div>

            {/* Architecture Info */}
            <Card className="bg-gradient-glass backdrop-blur-glass border-border/20">
              <div className="p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                  <Network className="w-6 h-6 text-primary" />
                  Module Federation Architecture
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-foreground">
                      Key Benefits
                    </h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        Independent deployment of micro-apps
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-accent rounded-full" />
                        Shared dependencies and runtime optimization
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        Team autonomy and technology flexibility
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-accent rounded-full" />
                        Scalable microfrontend architecture
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-foreground">
                      Tech Stack
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "React 18",
                        "TypeScript",
                        "Vite",
                        "Module Federation",
                        "Tailwind CSS",
                      ].map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="border-border/20"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Module Tabs */}
          {modules.map((module) => (
            <TabsContent key={module.id} value={module.id} className="mt-0">
              <module.component />
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

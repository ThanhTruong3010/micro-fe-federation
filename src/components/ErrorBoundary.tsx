import { Component, ErrorInfo, ReactNode } from "react";
import { ErrorFallback } from "./FederationHost";

interface ErrorBoundaryProps {
  children: ReactNode;
  moduleName: string;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    // Update state so the next render will show the fallback UI
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // You can also log the error to an error reporting service
    console.error(`Error in ${this.props.moduleName}:`, error, errorInfo);
  }

  render(): ReactNode {
    if (this.state.hasError) {
      // Render the ErrorFallback component when an error occurs
      return <ErrorFallback error={this.state.error} moduleName={this.props.moduleName} />;
    }

    return this.props.children;
  }
}

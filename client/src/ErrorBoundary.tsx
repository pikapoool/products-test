import React, { ErrorInfo } from 'react';

interface IState {
  hasError: boolean;
}
interface IProps {
  children?: JSX.Element;
}

export class ErrorBoundary extends React.Component<IProps, IState> {
  state: IState = { hasError: false };

  static getDerivedStateFromError(_: Error) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

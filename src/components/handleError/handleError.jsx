import React from 'react';

class HandleError extends React.Component {
  constructor() {
    super();
    this.state = {
      hasError: false
    }
  }

  componentDidCatch(error, info){
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError){
      return (
        <div>
          <h1>Oops! Something went wrong.</h1>
        </div>
      );
    }

    return (this.props.children);
  }
}

export default HandleError;

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
          <p>Oops! Something went wrong.</p>
        </div>
      );
    }

    return (this.props.children);
  }
}

export default HandleError;


export const setInternalState = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value}, () => console.log(this.state));
};
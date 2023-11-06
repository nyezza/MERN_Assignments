const App = () => <h1>Our First React page has rendered</h1>;
// Notice The difference in syntax. Here we've created a React Functional Component, named App which looks 
// like regular HTML syntax
ReactDOM.render(<App></App>, document.getElementById("root"));
// Instead of the traditional way we are familiar with firing a function - App() -
// we wrap our function name in an HTML tag instead - <App /> -


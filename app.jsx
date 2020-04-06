import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './Menu.jsx';



class Title extends React.Component {
  render() {
    return (<h1 className="h2">{this.props.label}</h1>)
  }
}

class Paragraph extends React.Component {
  render() {
    return (
      <p className="lead">
      {this.props.text}
      </p>
    )
  }
}

class Footer extends React.Component {
  render() {
    return (
      <p className="footer"> Copyright by Diki </p>
      )
  }
}

class Main extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  render() {
    return  (
      <div className="container text-center">
      <Menu />
        <Title label={this.props.title} />
          <Paragraph text={this.props.text} />
          <Footer />
      </div>
    )
  }
}


ReactDOM.render(
  <Main title="React + Bootstrap" text="The person who knows how to laugh at himself will never cease to be amused"></Main>,
  document.getElementById('react-app')
);

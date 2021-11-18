import React from 'react';
import Robot from './components/Robot';
import RobotDiscount from './components/RobotDiscount';
import ShoppingCart from './components/ShoppingCart';
import styles from './App.module.css';
import logo from './logo.svg';

interface Props {}

interface State {
  robotGallery: any[];
  count: number;
}

class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      robotGallery: [],
      count: 0,
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => this.setState({ robotGallery: data }));
  }

  render() {
    return (
      <div className={styles.app}>
        <div className={styles.appHeader}>
          <img src={logo} alt="logo" className={styles.appLogo} />
          <h1>Robot Online</h1>
        </div>
        <ShoppingCart />
        <div className={styles.robotList}>
          {this.state.robotGallery.map((r, index) => {
            return index % 2 === 0 ? (
              <RobotDiscount
                key={r.id}
                id={r.id}
                name={r.name}
                email={r.email}
              />
            ) : (
              <Robot key={r.id} id={r.id} name={r.name} email={r.email} />
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;

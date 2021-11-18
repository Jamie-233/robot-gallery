import React, { useEffect, useState } from 'react';
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

const App: React.FC = (props) => {
  const [count, setCount] = useState<number>(0);
  const [robotGallery, setRobotGallery] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => {
        console.log('data', data);

        setRobotGallery(data);
      });
  }, []);

  return (
    <div className={styles.app}>
      <div className={styles.appHeader}>
        <img src={logo} alt="logo" className={styles.appLogo} />
        <h1>Robot Online</h1>
      </div>
      <ShoppingCart />
      {(!error || error !== '') && <div>Oops</div>}
      {!loading ? (
        <div className={styles.robotList}>
          {robotGallery.map((r, index) =>
            index % 2 === 0 ? (
              <RobotDiscount
                key={r.id}
                id={r.id}
                name={r.name}
                email={r.email}
              />
            ) : (
              <Robot key={r.id} id={r.id} name={r.name} email={r.email} />
            ),
          )}
        </div>
      ) : (
        <div>加载中</div>
      )}
    </div>
  );
};

export default App;

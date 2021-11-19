import React, { useEffect, useState } from 'react';
import Robot from './components/Robot';
import RobotDiscount from './components/RobotDiscount';
import ShoppingCart from './components/ShoppingCart';
import styles from './App.module.css';
import logo from './logo.svg';

const App: React.FC = () => {
  const [robotGallery, setRobotGallery] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<unknown>(null);

  useEffect(() => {
    const featchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/users',
        );
        const data = response.json();
        setRobotGallery(data);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };

    featchData();
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

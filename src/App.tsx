import robots from './mockdata/robots.json';
import Robot from './components/Robot';
import ShoppingCard from './components/ShoppingCart';
import styles from './App.module.css';
import logo from './logo.svg';

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.appHeader}>
        <img src={logo} alt="logo" className={styles.appLogo} />
        <h1>Robot Online</h1>
      </div>
      <ShoppingCard />
      <div className={styles.robotList}>
        {robots.map((r) => (
          <Robot key={r.id} id={r.id} name={r.name} email={r.email} />
        ))}
      </div>
    </div>
  );
}

export default App;

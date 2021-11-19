import React, { useContext } from 'react';
import styles from './Robot.module.css';
import { appContext } from '../AppState';
import { useAddToCart } from './AddToCart';

export interface RobotProps {
  id: number;
  name: string;
  email: string;
  addToCart?: (id, name) => void;
}

const Robot: React.FC<RobotProps> = ({ id, name, email }) => {
  const value = useContext(appContext);
  const addToCart = useAddToCart();

  return (
    <div className={styles.cardContainer}>
      <img alt="robot" src={`https://robohash.org/${id}`} />
      <h2>打折商品</h2>
      <h2>{name}</h2>
      <p>{email}</p>
      <p>author: {value.username}</p>
      <button onClick={() => addToCart(id, name)}>加入购物车</button>
    </div>
  );
};

export default Robot;

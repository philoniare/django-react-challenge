import avatarImage from 'images/avatar.png';

import styles from './Entity.module.css';

interface IEntityProps {
  name: string;
  children?: any;
}

const Entity = ({ name = '', children }: IEntityProps) => {
  return (
    <div className={styles.container}>
      <img src={avatarImage} alt="avatar" className={styles.image} />
      <div className={styles.textContainer}>
        <div className={styles.name}>{name}</div>
        <div className={styles.subtitle}>{children}</div>
      </div>
    </div>
  );
};

export default Entity;

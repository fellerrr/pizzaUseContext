
import styles from './NotFoundBlock.module.scss';

// export const NotFoundBlock: React.FC = () => {
const NotFoundBlock = ()=> {
  return (
     <div className={styles.root}>

          <h1>
            <span>😕</span>
            <br />
              Ничего <span className={styles.red}>не</span> найдено
          </h1>
          <p className={styles.description}>

            К сожалени данная страница отсутствует в нашем интернет-магазине
          </p>
      </div>
  );
};

export default NotFoundBlock

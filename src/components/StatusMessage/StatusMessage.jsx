import styles from './StatusMessage.module.css';

function StatusMessage({ loading, error }) {
  return (
    <>
      {loading && <p className={styles.loading}>Cargando...</p>}
      {error && <p className={styles.error}>{error}</p>}
    </>
  );
}

export default StatusMessage;

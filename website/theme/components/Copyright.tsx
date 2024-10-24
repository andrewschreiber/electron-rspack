import styles from './Copyright.module.scss';

export const CopyRight = () => {
  return (
    <footer className={styles.copyRight}>
      <div className={styles.copyRightInner}>
        <div className={styles.copyRightText}>
          <div>
            Built by{' '}
            <a
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: 'underline' }}
              href="https://x.com/andrewschrbr"
            >
              @andrewschreiber
            </a>{' '}
            with{' '}
            <a
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: 'underline' }}
              href="https://github.com/web-infra-dev/rspress"
            >
              Rspress
            </a>
            .
          </div>
        </div>
      </div>
    </footer>
  );
};

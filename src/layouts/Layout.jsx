import styles from "./Layout.module.css"
function Layout({children}) {
  return (
    <>
      <header className={styles.header}>
        <h1>Book App</h1>
        <p>Sina Abedi | The second project</p>
      </header>
      {children}
      <footer className={styles.footer}>
        <p>Developed by Sina with ❤️</p>
      </footer>
    </>
  );
}

export default Layout
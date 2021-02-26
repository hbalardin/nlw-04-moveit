import styles from '../styles/components/Profile.module.css'

export function Profile() {
  return ( 
    <div className={styles.profileContainer}>
      <img src="http://github.com/hbalardin.png" alt="Henrique Balardin"/>
      <div>
        <strong>Henrique Balardin</strong>
        <p>
          <img src="icons/level.svg" alt="Level"/>
          Level 1
        </p>
      </div>
    </div>)
}
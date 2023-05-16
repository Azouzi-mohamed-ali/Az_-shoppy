'use client' ;
import styles from '../page.module.css';
function ProductLayout({ children }) {
 return (
 <div className={styles.main}>

 <div className={styles.grid}>
 {children}
 </div>
 </div>

 );
}
export default ProductLayout;
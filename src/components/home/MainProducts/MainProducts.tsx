import { getProducts } from "@/src/services";
import styles from './MainProducts.module.sass'
import { Image } from "../../shared/Image";

export async function MainProducts() {
  const products = await getProducts();

  return (
    <section className={styles.mainProducts}>
      <div className={styles['mainProducts--title-container']}>
        <h3>New products released!</h3>
      </div>

      <div className={styles['mainProducts--grid']}>
        {
          products?.map(product => (
            <article key={product.id} className={styles['mainProducts--card']}>
              <header className={styles['mainProducts--card-header']}>
                <h4>{product.title}</h4>
              </header>
              <figure>
                <Image src={product.image.src} alt={product.image.alt} width={300} height={250} />
              </figure>
            </article>
          ))
        }
      </div>
    </section>
  )
}
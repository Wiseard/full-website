import { Filter, PageHero, Products, Sort } from '../../components'
import './products_layout.css'

const ProductsLayout = () => {
  return (
    <section className="products-layout-container box-container box-section">
      <PageHero title="shop" />
      <div className="products-layout-grid">
        <Filter />
        <div className="products-grid">
          <Sort />
          <Products />
        </div>
      </div>
    </section>
  )
}
export default ProductsLayout

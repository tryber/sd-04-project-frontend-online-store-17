import React from 'react';
import SideBar from '../pages/SideBar';
import * as api from '../services/api';
import ProductCard from './ProductCard';

export default class ProductList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: '',
      products: '',
      loading: false,
      inputText: '',
    };
  }

  inputQuery(event) {
    // Função para receber o INPUT
  }

  componentDidMount() {
    console.log(this.state.inputText);
    api
      .getProductsFromCategoryAndQuery(this.state.inputText)
      .then((data) => this.setState({ products: data.results, loading: true }));
  }

  render() {
    const { products } = this.state;
    if (this.state.loading === false || this.state.products === '')
      return (
        <div className="sidebar-categories">
          <SideBar />
          <div>
            <p>Nenhum produto encontrado!</p>
          </div>
        </div>
      );
    return (
      <div>
        <div className="sidebar-categories">
          <SideBar />
        </div>
        <div>Products</div>
        {products.map((e) => (
          <ProductCard key={e.id} product={e} />
        ))}
      </div>
    );
  }
}

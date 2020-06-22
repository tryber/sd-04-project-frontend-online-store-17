import React from 'react';
import * as api from '../services/api';
import SearchInput from '../components/SearchInput';

export default class Home extends React.Component {
  constructor(props) {
    super(props);

    this.getInput = this.getInput.bind(this);
    this.getProductsFromApi = this.getProductsFromApi.bind(this);
    this.state = {
      product: '',
      category: '',
      inputText: '',
    };
  }

  componentDidMount() {
    api.getCategories().then((data) => this.setState({ category: data }));
  }

  async getInput(event) {
    this.setState({ inputText: event.target.value });
  }

  async getProductsFromApi() {
    const { inputText, selectedCategory } = this.state;
    if (selectedCategory === '') {
      await api
        .getProductFromQuery(inputText)
        .then((data) => this.setState({ product: data.results }));
    }
    await api
      .getProductsFromCategoryAndQuery(selectedCategory, inputText)
      .then((data) => this.setState({ product: data.results }));
  }

  selectedCategory(event) {
    this.setState({ selectedCategory: event.target.value });
  }

  render() {
    const { category, inputText } = this.state;
    console.log(this.state);
    return (
      <SearchInput
        getInput={this.getInput}
        inputText={inputText}
        selectedCategory={this.selectedCategory}
        getProductsFromApi={this.getProductsFromApi}
        category={category}
      />
    );
  }
}

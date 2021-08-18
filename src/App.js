import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCats } from './actions/catActions';
import CatList from './CatList';

class App extends Component {   
  componentDidMount() {
    console.log(this.props);
    this.props.fetchCats();
  }

  render() {
    console.log(this.props.cats); // fires every time App renders
    return (
      <div className="App">
        <h1>CatBook</h1>
        {/* add CatList component here */}
        <CatList catPics={this.props.cats} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cats: state.cats,
    loading: state.loading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCats: () => dispatch(fetchCats())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);


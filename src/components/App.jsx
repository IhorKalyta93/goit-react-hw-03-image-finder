import { SearchBar } from './Searchbar/Searchbar';
import { fetchPictureByHits } from '../api';
import { Component } from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Spinner } from './Loader/Loader';

export class App extends Component {
  state = {
    images: [],
    query: '',
    isLoading: false,
    error: null,
    page: 1,
  };

  render() {
    return (
      <div>
        
      </div>
    );
  }
}
import PropTypes from 'prop-types';
import style from './ImageGalleryItem.module.css';
import { Modal } from 'components/Modal/Modal';
import { Component } from 'react';



export class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  static propTypes = {
    id: PropTypes.number,
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { id, webformatURL, largeImageURL, tags } = this.props;
    const { showModal } = this.state;

    return (
      <>
        <li
          key={id}
          className={style.ImageGalleryItem}
          onClick={this.toggleModal}
        >
          <img
            className={style.ImageGalleryItemImage}
            src={webformatURL}
            width="400"
            alt={tags}
          />
        </li>

        {showModal && (
          <Modal
            largeImageURL={largeImageURL}
            tags={tags}
            onClose={this.toggleModal}
          />
        )}
      </>
    );
  }
}
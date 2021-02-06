import React from 'react';
import { connect } from 'react-redux';
import PhotoCard from '../components/PhotoCard';
import {
  GET_PHOTOS, SEARCH_BY_CATEGORY, SORT_BY_MOST_LIKED, SORT_BY_MOST_COMMENTED,
} from '../redux/action/photosAction';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      searchField: '',
    };
  }

  componentDidMount() {
    window.document.title = 'Photos';
    this.props.getPhotos();
  }

  handleSearch=(e) => {
    this.setState({
      searchField: e.target.value,
    }, () => {
      this.props.setSearch(this.state.searchField);
    });
  }

  getMostLiked=() => {
    this.props.getMostLikedPhoto();
  }

  getMostCommented=() => {
    this.props.getMostCommentedPhoto();
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="imaginary-heading">
            <h2>Imaginary</h2>
          </div>
          <div className="search-wrapper">
            <button type="button" onClick={this.getMostLiked}>Most Liked</button>
            <span>|</span>
            <button type="button" onClick={this.getMostCommented}>Most Comment</button>
            <div className="search-filter">
              <input placeholder="search" type="text" onChange={this.handleSearch} value={this.state.searchField} />
            </div>
          </div>
          <div className="photo-list">
            {(this.props.photoList || []).map((item) => (
              <PhotoCard
                image={item.url}
                category={item.category}
                comments={item.comments}
                likes={item.likes}
                id={item.id}
                key={item.id}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  photoData: state.PhotoReducer,
  photoList: state.PhotoReducer.photoList,
});

const mapDispatchToProps = (dispatch) => ({
  getPhotos: (data) => dispatch(GET_PHOTOS(data)),
  setSearch: (data) => dispatch(SEARCH_BY_CATEGORY(data)),
  getMostLikedPhoto: (data) => dispatch(SORT_BY_MOST_LIKED(data)),
  getMostCommentedPhoto: (data) => dispatch(SORT_BY_MOST_COMMENTED(data)),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);

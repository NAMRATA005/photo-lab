import React from 'react';
import { connect } from 'react-redux';
import { POST_COMMNENT, POST_LIKE, DELETE_COMMENT } from '../redux/action/photosAction';

class PhotoCard extends React.Component {
  constructor() {
    super();
    this.state = {
      initialLikeState: true,
      comment: '',
    };
  }

  handleLike=(e, id) => {
    console.log(e);
    const currentState = this.state.initialLikeState;
    this.setState({
      initialLikeState: !currentState,
    }, () => {
      this.props.postLike({ id, likeState: this.state.initialLikeState });
    });
  }

  handleChange=(e) => {
    this.setState({
      comment: e.target.value,
    });
  }

  handleSubmitPost=(e, id) => {
    this.props.postComment({ id, comments: this.state.comment });
  }

  handleDeleteComment=(e, index, id) => {
    this.props.deleteComment({ index, id });
  }

  render() {
    const { initialLikeState } = this.state;
    const {
      image, category, likes, comments, id,
    } = this.props;
    return (
      <div className="photo-list-wrap">
        <div className="photo-list-inner">
          <div className="block" style={{ backgroundImage: `url(${image})` }} />
          <div className="photo-category">
            <p className="like-count-wrap">
              <span className="like-count">{likes}</span>
              {' '}
              <button type="button" className="like" onClick={(e) => this.handleLike(e, id)}>{initialLikeState ? 'Like' : 'Unlike'}</button>
            </p>
            <p className="photo-cat">
              {' '}
              {category}
            </p>
          </div>
          <div className="comment-section">
            <input type="text" placeholder="Type your comment here.." onChange={this.handleChange} value={this.state.comment} />
            <button type="button" onClick={(e) => this.handleSubmitPost(e, id)} className="post-button" disabled={this.state.comment}>POST</button>
          </div>
          <div className="photo-comment">
            <ul className="comment-list">
              {
                // eslint-disable-next-line react/no-array-index-key
                (comments || []).map((item, index) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <li className="comment-item" key={index}>
                    {item}
                    <button type="button" className="delete-comment" onClick={(e) => this.handleDeleteComment(e, index, id)}>X</button>
                  </li>
                ))
            }
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  photoList: state.PhotoReducer.photoList,
});

const mapDispatchToProps = (dispatch) => ({
  postComment: (data) => dispatch(POST_COMMNENT(data)),
  postLike: (data) => dispatch(POST_LIKE(data)),
  deleteComment: (data) => dispatch(DELETE_COMMENT(data)),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PhotoCard);

import React from 'react';
import PropTypes from 'prop-types';

class Rating extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...props.product };
    this.handleComment = this.handleComment.bind(this);
  }

  handleComment(field, value) {
    this.setState({ [field]: value });
  }

  initialState(field1, field2) {
    this.setState({ [field1]: '', [field2]: '' });
  }

  render() {
    const { comment, rate } = this.state;
    console.log(this.state);

    return (
      <div>
        <form>
          <label htmlFor="comentario">Comente:</label>
          <textarea
            id="comentario"
            type="submit"
            onChange={(event) => this.handleComment('comment', event.target.value)}
            value={comment}
          >
            {comment}
          </textarea>
          <label htmlFor="rating">Avaliação</label>

          <input
            id="rating"
            placeholder="Avalie"
            type="number"
            step={0.5}
            min={0}
            max={5}
            value={rate}
            onChange={(event) => this.handleComment('rate', event.target.value)}
          />
          <div>
            <button type="button" onClick={() => this.initialState('comment', 'rate')}>
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

Rating.propTypes = {
  location: PropTypes.shape({ rate: PropTypes.number }),
};

export default Rating;

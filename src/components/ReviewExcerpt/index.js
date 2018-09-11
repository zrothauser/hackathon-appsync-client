import React from 'react';
import PropTypes from 'prop-types';
import { Item } from 'semantic-ui-react';

const ReviewExcerpt = ({
  title,
  url,
  year,
  genre,
  score,
  imageURL,
}) => (
  <React.Fragment>
    <Item
      key={url}
      as="a"
      href={`http://ign.com${url}`} // this isn't a real URL from the dataset
      target="_blank"
      style={{
        margin: '0 0 4em',
        textAlign: 'center',
        flex: '0 1 220px',
      }}
    >
      <Item.Content>
        <Item.Image
          src={imageURL}
          size="small"
          width="640"
          height="480"
          style={{
            display: 'block',
            margin: '0 auto 1em',
            maxWidth: '100%',
            width: '100%',
          }}
        />
        <Item.Header as="h3">
          {`${title} (${year})`}
        </Item.Header>
        <Item.Meta>
          <span>☺︎ {genre}</span><br />
          <span className={`score ${(score >= 8) ? 'score--good' : 'score--bad'}`}>
            {score}
          </span>
        </Item.Meta>
      </Item.Content>
    </Item>

    <style jsx>{`
      .score {
        display: inline-block;
        color: #ffffff;
        background: #000000;
        margin: 0.75em 0;
        padding: 0.5em;
        border-radius: 2px;
      }

      .score--good {
        background: green;
      }

      .score--bad {
        background: #f75151;
      }
    `}
    </style>
  </React.Fragment>
);

ReviewExcerpt.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  imageURL: PropTypes.string.isRequired,
};

export default ReviewExcerpt;

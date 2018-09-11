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
  <Item
    key={url}
    as="a"
    href={`http://ign.com${url}`} // this isn't a real URL from the dataset
    target="_blank"
  >
    <Item.Image
      src={imageURL}
      size="small"
    />
    <Item.Content>
      <Item.Header as="h3">
        {title}
      </Item.Header>
      <Item.Meta>
        <span>{year}</span>
        <span>{genre}</span>
        <span>{score}</span>
      </Item.Meta>
    </Item.Content>
  </Item>
);

ReviewExcerpt.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  score: PropTypes.string.isRequired,
  imageURL: PropTypes.string.isRequired,
};

export default ReviewExcerpt;

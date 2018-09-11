import React from 'react';
import PropTypes from 'prop-types';
import { Item } from 'semantic-ui-react';

const PostExcerpt = ({
  title,
  url,
  imageURL,
}) => (
  <Item
    key={url}
    as="a"
    href={url}
  >
    <Item.Image
      src={imageURL}
      size="small"
    />
    <Item.Content>
      <Item.Header as="h3">
        {title}
      </Item.Header>
    </Item.Content>
  </Item>
);

PostExcerpt.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  imageURL: PropTypes.string.isRequired,
};

export default PostExcerpt;

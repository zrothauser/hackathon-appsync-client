import React from 'react';
import PropTypes from 'prop-types';
import { Item } from 'semantic-ui-react';

const PostExcerpt = ({
  title,
  url,
  imageURL,
  index,
}) => {
  if (index === 0) {
    return (
      <Item
        key={url}
        as="a"
        href={url}
        style={{
          backgroundImage: `url(${imageURL})`,
          backgroundColor: '#000000',
          backgroundSize: 'cover',
          padding: '0',
        }}
      >
        <Item.Content>
          <Item.Header
            as="h3"
            style={{
              color: '#ffffff',
              margin: '12em 0 0',
              padding: '2em 2em',
              width: '100%',
              background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 30%, rgba(0, 0, 0, 0.8) 100%)',
            }}
          >
            {title}
          </Item.Header>
        </Item.Content>
      </Item>
    );
  }

  return (
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
};

PostExcerpt.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  imageURL: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default PostExcerpt;

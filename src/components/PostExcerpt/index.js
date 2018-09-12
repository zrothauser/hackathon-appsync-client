import React from 'react';
import PropTypes from 'prop-types';
import { Item } from 'semantic-ui-react';
import moment from 'moment';

export const formatTimestamp = (timestamp) => {
  const timeObject = moment(timestamp);
  return timeObject.format('dddd, MMMM Do YYYY');
};

const PostExcerpt = ({
  title,
  url,
  imageURL,
  index,
  excerpt,
  date,
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
          marginBottom: '4em',
        }}
      >
        <Item.Content
          style={{
            color: '#ffffff',
            margin: '16em 0 0',
            padding: '2em 2em',
            width: '100%',
            background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 30%, rgba(0, 0, 0, 0.8) 100%)',
          }}
        >
          <Item.Header as="h3" style={{ color: '#ffffff' }}>
            {title}
          </Item.Header>
          <div style={{ color: '#ffffff' }}>
            {formatTimestamp(date)}
          </div>
          <div
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: excerpt }}
            style={{ color: '#ffffff' }}
          />
        </Item.Content>
      </Item>
    );
  }

  return (
    <React.Fragment>
      <Item
        key={url}
        as="a"
        href={url}
        style={{
          marginBottom: '4em',
        }}
      >
        <Item.Image
          src={imageURL}
          size="large"
          className="post-excerpt-image"
        />
        <Item.Content>
          <Item.Header as="h3">
            {title}
          </Item.Header>
          <div style={{ color: 'grey' }}>
            {formatTimestamp(date)}
          </div>
          <div
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: excerpt }}
            style={{ color: '#000000' }}
          />
        </Item.Content>
      </Item>

      <style jsx global>{`
        /* 😢 */
        @media only screen and (min-width: 768px) {
          .post-excerpt-image.post-excerpt-image {
            height: auto !important;
            position: relative !important;
            overflow: hidden !important;
            padding: 32% 0 0 0 !important;
          }

          .post-excerpt-image.post-excerpt-image > img {
            display: block !important;
            max-width: 100% !important;
            max-height: 100% !important;
            position: absolute !important;
            top: 0 !important;
            bottom: 0 !important;
            left: 0 !important;
            right: 0 !important;
          }
        }
      `}
      </style>
    </React.Fragment>
  );
};

PostExcerpt.defaultProps = {
  excerpt: '',
};

PostExcerpt.propTypes = {
  title: PropTypes.string.isRequired,
  excerpt: PropTypes.string,
  date: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  imageURL: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default PostExcerpt;

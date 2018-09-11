import React from 'react';
import PropTypes from 'prop-types';
import { FacebookSelector } from 'react-reactions';
import posed, { PoseGroup } from 'react-pose';
import icons from 'react-reactions/src/helpers/icons';

const Item = posed.li({
  enter: {
    y: -500,
    left: 5,
    scale: 0.0,
    transition: { duration: 5000 },
  },
});

let lastId = 0;

const makeId = (prefix = 'id') => {
  lastId += 1;
  return `${prefix}${lastId}`;
};

const ItemList = ({ items }) => (
  <ul className="list">
    <PoseGroup>
      {items.map(item =>
        (
          <Item
            className="reaction"
            // onPoseComplete={() => remove(item.id)}
            key={item.id}
          >
            <img alt="" src={icons.find('facebook', item.text)} />
          </Item>
        ))}
    </PoseGroup>
    <style jsx>{`
    img {
      width: 50px;
    }
  `}
    </style>
  </ul>
);

ItemList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    text: PropTypes.string,
  })).isRequired,
  // remove: PropTypes.func.isRequired,
};

class Reactions extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
    };

    this.addReaction = this.addReaction.bind(this);
  }

  componentDidMount() {
    this.props.setAddReaction(this.addReaction);
  }

  addReaction(label) {
    this.setState({
      items: this.state.items.concat([{ id: makeId(), text: label }]),
    });
  }

  render() {
    return (
      <div>
        <ItemList
          items={this.state.items}
          // remove={id =>
          // this.setState({
          //   items: this.state.items.filter(obj => obj.id !== id),
          // })}
        />
        <FacebookSelector
          onSelect={(label) => {
            // this.addReaction(label);
            this.props.onSelect(label);
          }}
        />
        <style jsx>{`
         div :global(.reaction) {
           position: fixed;
         }

         div :global(.list) {
            list-style: none;
         }
       `}
        </style>
      </div>
    );
  }
}

Reactions.propTypes = {
  onSelect: PropTypes.func.isRequired,
  setAddReaction: PropTypes.func.isRequired,
};

export default Reactions;

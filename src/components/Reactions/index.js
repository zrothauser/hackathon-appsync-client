import React from 'react';
import PropTypes from 'prop-types';
import { FacebookSelector } from 'react-reactions';
import posed, { PoseGroup } from 'react-pose';
import icons from 'react-reactions/src/helpers/icons';

const Item = posed.li({
  enter: {
    y: -1000,
    transition: { duration: 2000 },
  },
});

let lastId = 0;

const makeId = (prefix = 'id') => {
  lastId += 1;
  return `${prefix}${lastId}`;
};

const ItemList = ({ items, remove }) => (
  <ul className="list">
    <PoseGroup>
      {items.map(item =>
        (
          <Item className="reaction" onPoseComplete={() => remove(item.id)} key={item.id}>
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
  items: PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string,
  }).isRequired,
  remove: PropTypes.func.isRequired,
};

class Reactions extends React.PureComponent {
  constructor() {
    super();

    this.state = {
      isVisible: true,
      items: [],
    };

    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    setInterval(() => this.setState({ isVisible: !this.state.isVisible }), 1000);
  }

  render() {
    return (
      <div>
        <ItemList
          items={this.state.items}
          remove={id =>
          this.setState({
            items: this.state.items.filter(obj => obj.id !== id),
          })}
        />
        <FacebookSelector onSelect={label => this.setState({
          items: this.state.items.concat([{ id: makeId(), text: label }]),
        })}
        />
        <style jsx>{`
         div {
           margin-top: 500px;
           color: red;
         }

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

export default Reactions;

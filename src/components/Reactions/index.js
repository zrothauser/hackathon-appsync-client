import React from 'react';
import PropTypes from 'prop-types';
import { FacebookSelector } from 'react-reactions';
import icons from 'react-reactions/src/helpers/icons';

function ReactionImage(src, x) {
  this.image = new Image();
  this.image.src = src;
  this.x = x;
  this.y = 500;
  this.vx = 5;
  this.vy = 10;
  this.width = 50;
  this.height = 50;
  this.draw = function (ctx) {
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  };
}

class Reactions extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      images: [],
    };

    this.addReaction = this.addReaction.bind(this);
    this.updateCanvas = this.updateCanvas.bind(this);
  }

  componentDidMount() {
    this.props.setAddReaction(this.addReaction);
    this.updateCanvas();
  }

  addReaction(label) {
    const newImages = this.state.images.slice(0);
    newImages.push(new ReactionImage(icons.find('facebook', label), Math.floor(Math.random() * 300) + 1));

    this.setState({ images: newImages });
  }

  updateCanvas() {
    if (!this.canvas) {
      window.requestAnimationFrame(this.updateCanvas);
      return;
    }

    const ctx = this.canvas.getContext('2d');
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.state.images.forEach((image) => {
      image.draw(ctx);
      // eslint-disable-next-line no-param-reassign
      image.y -= image.vy;
      // eslint-disable-next-line no-param-reassign
      image.width -= 1;
      // eslint-disable-next-line no-param-reassign
      image.height -= 1;
    });

    window.requestAnimationFrame(this.updateCanvas);
  }

  render() {
    return (
      <div>
        <canvas ref={(c) => { this.canvas = c; }} width={600} height={500} />
        <FacebookSelector
          onSelect={(label) => {
            // this.addReaction(label);
            this.props.onSelect(label);
          }}
        />
        <style jsx>{`
         div :global(.reaction) {
           position: absolute;
         }
         canvas {
           margin-top: -500px;
           pointer-events:none;
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

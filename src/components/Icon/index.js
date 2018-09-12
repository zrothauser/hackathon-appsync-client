import React from 'react';
import PropTypes from 'prop-types';

import AdventureSVG from '../../assets/svg/adventure.svg';
import PuzzleSVG from '../../assets/svg/puzzle.svg';
import RacingSVG from '../../assets/svg/racing.svg';
import RPGSVG from '../../assets/svg/rpg.svg';
import ShooterSVG from '../../assets/svg/shooter.svg';
import SportsSVG from '../../assets/svg/sports.svg';
import StrategySVG from '../../assets/svg/strategy.svg';

const findIcon = (iconName) => {
  switch (iconName) {
    case 'Action':
    case 'Adventure':
      return AdventureSVG;
    case 'Puzzle':
      return PuzzleSVG;
    case 'Racing':
      return RacingSVG;
    case 'RPG':
      return RPGSVG;
    case 'Shooter':
      return ShooterSVG;
    case 'Sports':
      return SportsSVG;
    case 'Strategy':
      return StrategySVG;
    default:
      return ''; // TODO fix the remaining ones
  }
};

const Icon = ({ iconName }) => (
  <img
    src={findIcon(iconName)}
    alt={iconName}
    style={{ width: '2em' }}
  />
);

Icon.propTypes = {
  iconName: PropTypes.string.isRequired,
};

export default Icon;

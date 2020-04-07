import React from 'react';
import PropTypes from 'prop-types';
import { IconFacebook, IconFork, IconGitHub, IconStar } from '@icons';

export const IconNames = {
  FACEBOOK: 'Facebook',
  FORK: 'Fork',
  GITHUB: 'GitHub',
  STAR: 'Star',
};

const Icon = ({ name }) => {
  switch (name) {
    case IconNames.FACEBOOK:
      return <IconFacebook />;
    case IconNames.FORK:
      return <IconFork />;
    case IconNames.GITHUB:
      return <IconGitHub />;
    case IconNames.STAR:
      return <IconStar />;
    default:
      return null;
  }
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Icon;

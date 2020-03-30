import React from 'react';
import PropTypes from 'prop-types';
import {
  IconExternal,
  IconFacebook,
  IconFolder,
  IconFork,
  IconGitHub,
  IconLoader,
  IconStar,
} from '@icons';

export const IconNames = {
  EXTERNAL: 'External',
  FACEBOOK: 'Facebook',
  FOLDER: 'Folder',
  FORK: 'Fork',
  GITHUB: 'GitHub',
  LOADER: 'Loader',
  STAR: 'Star',
};

const Icon = ({ name }) => {
  switch (name) {
    case IconNames.EXTERNAL:
      return <IconExternal />;
    case IconNames.FACEBOOK:
      return <IconFacebook />;
    case IconNames.FOLDER:
      return <IconFolder />;
    case IconNames.FORK:
      return <IconFork />;
    case IconNames.GITHUB:
      return <IconGitHub />;
    case IconNames.LOADER:
      return <IconLoader />;
    case IconNames.STAR:
      return <IconStar />;
    default:
      return <IconExternal />;
  }
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Icon;

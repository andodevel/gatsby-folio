import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Icon, { IconNames } from './icon';
import styled from 'styled-components';
import { Theme, Mixins, Footer as StyledFooter } from '@styles';
const { colors } = Theme;

const StyledContainer = styled(StyledFooter)``;

const StyledSocial = styled.div`
  color: ${colors.lightSlate};
  width: 100%;
  max-width: 27rem;
`;

const StyledSocialList = styled.ul`
  ${Mixins.flexStart};
  padding: 0;
  margin: 0;
  list-style: none;
`;

const StyledSocialLink = styled.a`
  padding: 0 1rem;
  svg {
    width: 1.6rem;
    height: 1.6rem;
  }
`;

const StyledGitHubLink = styled.a`
  color: ${colors.slate};
  padding: 0;
`;

const StyledGitHubInfo = styled.div`
  margin-top: 0;

  & > span {
    display: inline-flex;
    align-items: center;
    margin: 0 0.7rem;
  }
  svg {
    display: inline-block;
    height: 1.5rem;
    width: auto;
    margin-right: 0.5rem;
  }
`;

const socialMedia = [
  {
    name: 'GitHub',
    url: 'https://github.com/andodevel',
  },
  {
    name: 'Facebook',
    url: 'https://facebook.com/andodevel',
  },
];

const Footer = () => {
  const [githubInfo, setGitHubInfo] = useState({
    stars: null,
    forks: null,
  });

  useEffect(() => {
    fetch('https://api.github.com/repos/andodevel/gatsby-folio')
      .then(response => response.json())
      .then(json => {
        const { stargazers_count, forks_count } = json;
        setGitHubInfo({
          stars: stargazers_count,
          forks: forks_count,
        });
      })
      .catch(e => console.error(e));
  }, []);

  return (
    <StyledContainer>
      <StyledSocial>
        <StyledSocialList>
          {socialMedia &&
            socialMedia.map(({ name, url }, i) => (
              <li key={i}>
                <StyledSocialLink
                  href={url}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  aria-label={name}>
                  <Icon name={name} />
                </StyledSocialLink>
              </li>
            ))}
        </StyledSocialList>
      </StyledSocial>
      <div tabIndex="-1">
        <StyledGitHubLink
          href="https://github.com/andodevel/gatsby-folio"
          target="_blank"
          rel="nofollow noopener noreferrer">
          <StyledGitHubInfo>
            <span>
              <Icon name={IconNames.STAR} />
              <span>{githubInfo.stars}</span>
            </span>
            <span>
              <Icon name={IconNames.FORK} />
              <span>{githubInfo.forks}</span>
            </span>
          </StyledGitHubInfo>
        </StyledGitHubLink>
      </div>
    </StyledContainer>
  );
};

Footer.propTypes = {
  githubInfo: PropTypes.object,
};

export default Footer;

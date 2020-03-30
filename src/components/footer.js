import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Icon, IconNames } from '@components';
import styled from 'styled-components';
import { Theme, Mixins, Footer as StyledFooter } from '@styles';
const { colors, fontSizes, fonts } = Theme;

const StyledContainer = styled(StyledFooter)`
  ${Mixins.flexBetween};
  flex-direction: row;
  padding: 0px 20px;
  background-color: ${colors.darkNavy};
  color: ${colors.slate};
  text-align: center;
  height: auto;
  min-height: 40px;
`;
const StyledSocial = styled.div`
  color: ${colors.lightSlate};
  width: 100%;
  max-width: 270px;
`;
const StyledSocialList = styled.ul`
  ${Mixins.flexStart};
  padding: 0;
  margin: 0;
  list-style: none;
`;
const StyledSocialLink = styled.a`
  padding: 0px 10px;
  svg {
    width: 16px;
    height: 16px;
  }
`;
const StyledMetadata = styled.div`
  font-family: ${fonts.secondary};
  font-size: ${fontSizes.s};
  line-height: 1;
`;
const StyledGitHubLink = styled.a`
  color: ${colors.slate};
  padding: 0px;
`;
const StyledGitHubInfo = styled.div`
  margin-top: 0px;

  & > span {
    display: inline-flex;
    align-items: center;
    margin: 0 7px;
  }
  svg {
    display: inline-block;
    height: 15px;
    width: auto;
    margin-right: 5px;
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
      <StyledMetadata tabindex="-1">
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
      </StyledMetadata>
    </StyledContainer>
  );
};

Footer.propTypes = {
  githubInfo: PropTypes.object,
};

export default Footer;

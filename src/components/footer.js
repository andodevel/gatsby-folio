import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Icon } from '@components';
import styled from 'styled-components';
import { Theme, Mixins } from '@styles';
const { colors, fontSizes, fonts } = Theme;

const StyledContainer = styled.footer`
  ${Mixins.flexCenter};
  flex-direction: column;
  padding: 15px;
  background-color: ${colors.darkNavy};
  color: ${colors.slate};
  text-align: center;
  height: auto;
  min-height: 70px;
`;
const StyledSocial = styled.div`
  color: ${colors.lightSlate};
  width: 100%;
  max-width: 270px;
  margin: 0 auto 10px;
  display: none;
`;
const StyledSocialList = styled.ul`
  ${Mixins.flexBetween};
  padding: 0;
  margin: 0;
  list-style: none;
`;
const StyledSocialLink = styled.a`
  padding: 10px;
  svg {
    width: 20px;
    height: 20px;
  }
`;
const StyledMetadata = styled.div`
  font-family: ${fonts.SFMono};
  font-size: ${fontSizes.xs};
  line-height: 1;
`;
const StyledGitHubLink = styled.a`
  color: ${colors.slate};
  padding: 10px;
`;
const StyledGitHubInfo = styled.div`
  margin-top: 10px;

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
    if (process.env.NODE_ENV !== 'production') {
      return;
    }
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
          href="https://github.com/gatsby-folio"
          target="_blank"
          rel="nofollow noopener noreferrer">
          {githubInfo.stars && githubInfo.forks && (
            <StyledGitHubInfo>
              <span>
                <Icon name="Star" />
                <span>{githubInfo.stars}</span>
              </span>
              <span>
                <Icon name="Fork" />
                <span>{githubInfo.forks}</span>
              </span>
            </StyledGitHubInfo>
          )}
        </StyledGitHubLink>
      </StyledMetadata>
    </StyledContainer>
  );
};

Footer.propTypes = {
  githubInfo: PropTypes.object,
};

export default Footer;

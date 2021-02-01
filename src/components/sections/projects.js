import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import Icon from '../icon';
import styled from 'styled-components';
import { Theme, Mixins, Section, Media } from '@styles';

const { colors, fonts } = Theme;

const StyledContainer = styled(Section)`
  ${Mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
`;

const StyledContent = styled.div`
  position: relative;
  grid-column: 1 / 8;
  ${Media.phone`grid-column: 1 / 12;`}
  grid-row: 1 / -1;
`;

const StyledProjectName = styled.h6`
  margin: 0 0 2rem;
  color: ${colors.primaryComponentActive};
`;

const StyledDescription = styled.div`
  ${Mixins.boxShadow};
  position: relative;
  z-index: 2;
  padding: 2.5rem;
  background-color: ${colors.secondaryBackground};
  border-radius: ${Theme.borderRadius};
  p {
    margin: 0;
  }
  a {
    ${Mixins.link};
  }
`;

const StyledTechList = styled.ul`
  position: relative;
  z-index: 2;
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 2.5rem 0 1rem;
  list-style: none;

  li {
    font-family: ${fonts.secondary};
    color: ${colors.primaryComponent};
    font-style: italic;
    margin-right: 2rem;
    margin-bottom: 0.7rem;
    white-space: nowrap;
    &:last-of-type {
      margin-right: 0;
    }
  }
`;

const StyledLinkWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin-top: 1rem;
  margin-left: -1rem;

  a {
    padding: 1rem;
    svg {
      width: 2.2rem;
      height: 2.2rem;
    }
  }
  &:hover,
  &:focus {
    color: ${colors.primaryComponenActive};
  }
`;

const StyledProjectsImg = styled(Img)`
  width: 100%;
  max-width: 100%;
  vertical-align: middle;
  border-radius: ${Theme.borderRadius};
  position: relative;
  mix-blend-mode: multiply;
  filter: grayscale(100%) contrast(1) brightness(80%);
  ${Media.phone`filter: none;`}
`;

const StyledImgContainer = styled.a`
  ${Mixins.boxShadow};
  grid-column: 6 / -1;
  grid-row: 1 / -1;
  ${Media.phone`grid-row: 1 / -2;`}
  position: relative;
  z-index: 1;
  border-radius: ${Theme.borderRadius};
  transition: ${Theme.transition};
  transition-delay: ${Theme.transitionDelay};
  &:hover,
  &:focus {
    background: transparent;
    &:before,
    ${StyledProjectsImg} {
      background: transparent;
      filter: none;
    }
  }
  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 3;
    transition: ${Theme.transition};
    transition-delay: ${Theme.transitionDelay};
    mix-blend-mode: screen;
  }
`;

const StyledProject = styled.div`
  display: grid;
  grid-gap: 1rem;
  ${Media.phone`grid-gap: 0;`}
  grid-template-columns: repeat(12, 1fr);
  align-items: center;
  margin-bottom: 10rem;
  &:last-of-type {
    margin-bottom: 0;
  }
  &:nth-of-type(odd) {
    ${StyledContent} {
      grid-column: 6 / -1;
      ${Media.phone`grid-column: 2 / -1;`}
      text-align: right;
    }
    ${StyledTechList} {
      justify-content: flex-end;
      li {
        margin-left: 2rem;
        margin-right: 0;
      }
    }
    ${StyledLinkWrapper} {
      justify-content: flex-end;
      margin-left: 0;
      margin-right: -1rem;
    }
    ${StyledImgContainer} {
      grid-column: 1 / 8;
    }
  }
`;

const Projects = ({ data }) => {
  const featuredProjects = data.filter(({ node }) => node);

  return (
    <StyledContainer id="projects">
      <h4 className="heading">My projects</h4>

      <div>
        {featuredProjects &&
          featuredProjects.map(({ node }, i) => {
            const { frontmatter, html } = node;
            const { external, title, techs, github, cover } = frontmatter;

            return (
              <StyledProject key={i}>
                <StyledContent>
                  <StyledProjectName>{title}</StyledProjectName>
                  <StyledDescription dangerouslySetInnerHTML={{ __html: html }} />
                  {techs && (
                    <StyledTechList>
                      {techs.map((tech, i) => (
                        <li key={i}>{tech}</li>
                      ))}
                    </StyledTechList>
                  )}
                  <StyledLinkWrapper>
                    {github && (
                      <a
                        href={github}
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                        aria-label="GitHub Link">
                        <Icon name="GitHub" />
                      </a>
                    )}
                  </StyledLinkWrapper>
                </StyledContent>

                <StyledImgContainer
                  href={external ? external : github ? github : '#'}
                  target="_blank"
                  rel="nofollow noopener noreferrer">
                  <StyledProjectsImg fluid={cover.childImageSharp.fluid} alt={title} />
                </StyledImgContainer>
              </StyledProject>
            );
          })}
      </div>
    </StyledContainer>
  );
};

Projects.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Projects;

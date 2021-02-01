import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { Theme, Mixins, Section, Media } from '@styles';
const { colors, fonts } = Theme;

const StyledContainer = styled(Section)`
  position: relative;
`;
const StyledFlexContainer = styled.div`
  ${Mixins.flexBetween};
  align-items: flex-start;
  ${Media.phone`flex-direction: column;`}
`;
const StyledContent = styled.div`
  width: 67%;
  ${Media.phone`width: 100%;`}
  a {
    ${Mixins.link};
  }
`;
const SkillsContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, minmax(14rem, 20rem));
  overflow: hidden;
  padding: 0;
  margin: 2rem 0 0 0;
  list-style: none;
`;
const Skill = styled.li`
  position: relative;
  margin-bottom: 1rem;
  padding-left: 2rem;
  font-family: ${fonts.secondary};
  color: ${colors.slate};
  &:before {
    content: '⟢';
    position: absolute;
    top: 0.5rem;
    left: 0;
    color: ${colors.indicator};
    line-height: ${Theme.headerLineHeight};
  }
`;
const StyledPic = styled.div`
  position: relative;
  width: 30%;
  ${Media.phone`width: 60%;`}

  margin-right: 0;
  ${Media.phone`margin-top: 2rem;`}
  a {
    &:focus {
      outline: 0;
    }
  }
`;
const StyledAvatar = styled(Img)`
  position: relative;
  border-radius: ${Theme.borderRadius};
  border: 1px solid ${colors.primaryComponent};
  transition: ${Theme.transition};
  transition-delay: ${Theme.transitionDelay};
`;
const StyledAvatarLink = styled.div`
  ${Mixins.boxShadow};
  width: 100%;
  position: relative;
`;

const About = ({ data }) => {
  const { frontmatter, html } = data[0].node;
  const { title, skills, avatar } = frontmatter;
  const revealContainer = useRef(null);

  return (
    <StyledContainer id="about" ref={revealContainer}>
      <h4 className="heading">{title}</h4>

      <StyledFlexContainer>
        <StyledContent>
          <div dangerouslySetInnerHTML={{ __html: html }} />
          <SkillsContainer>
            {skills && skills.map((skill, i) => <Skill key={i}>{skill}</Skill>)}
          </SkillsContainer>
        </StyledContent>
        <StyledPic>
          <StyledAvatarLink>
            <StyledAvatar fluid={avatar.childImageSharp.fluid} alt="Avatar" />
          </StyledAvatarLink>
        </StyledPic>
      </StyledFlexContainer>
    </StyledContainer>
  );
};

About.propTypes = {
  data: PropTypes.array.isRequired,
};

export default About;

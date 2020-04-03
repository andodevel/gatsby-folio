import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { Theme, Mixins, Section, Heading } from '@styles';
const { colors, fonts } = Theme;

const StyledContainer = styled(Section)`
  position: relative;
`;
const StyledFlexContainer = styled.div`
  ${Mixins.flexBetween};
  align-items: flex-start;
`;
const StyledContent = styled.div`
  width: 60%;
  max-width: 60rem;
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
    content: '▹';
    position: absolute;
    left: 0;
    color: ${colors.green};
    line-height: 1.2rem;
  }
`;
const StyledPic = styled.div`
  position: relative;
  width: 40%;
  max-width: 30rem;
  margin-left: 6rem;
  a {
    &:focus {
      outline: 0;
    }
  }
`;
const StyledAvatar = styled(Img)`
  position: relative;
  border-radius: ${Theme.borderRadius};
  border: 1px solid ${colors.component};
  transition: ${Theme.transition};
`;
const StyledAvatarLink = styled.a`
  ${Mixins.boxShadow};
  width: 100%;
  position: relative;
  margin-left: -2rem;
`;

const About = ({ data }) => {
  const { frontmatter, html } = data[0].node;
  const { title, skills, avatar } = frontmatter;
  const revealContainer = useRef(null);

  return (
    <StyledContainer id="about" ref={revealContainer}>
      <Heading>{title}</Heading>
      <StyledFlexContainer>
        <StyledContent>
          <div dangerouslySetInnerHTML={{ __html: html }} />
          <SkillsContainer>
            {skills && skills.map((skill, i) => <Skill key={i}>{skill}</Skill>)}
          </SkillsContainer>
        </StyledContent>
        <StyledPic>
          <StyledAvatarLink href="">
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

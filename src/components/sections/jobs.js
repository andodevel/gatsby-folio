import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Theme, Mixins, Section, Media } from '@styles';
const { colors, fontSizes, fonts } = Theme;

const StyledContainer = styled(Section)`
  position: relative;
`;

const StyledTabs = styled.div`
  position: relative;
  display: flex;
  ${Media.phone`flex-direction: column;`}
  align-items: flex-start;
  width: 100%;
  min-height: 30vh;
  height: 40vh;
  max-height: 50vh;
  ${Media.phone`min-height: 50vh;`}
  ${Media.phone`height: 70vh;`}
  ${Media.phone`max-height: 80vh;`}
`;

const StyledTabListContainer = styled.div`
  position: relative;
  min-width: 12rem;
  width: 12rem;
  max-width: 12rem;
  ${Media.phone`min-width: 100%;`}
  ${Media.phone`width: 100%;`}
  ${Media.phone`max-width: 100%;`}
  height: 100%;
  ${Media.phone`height: auto;`}
  overflow: hidden auto;
  ${Media.phone`margin-bottom: 2rem;`}
  ${Media.phone`overflow: auto hidden;`}
`;

const StyledTabList = styled.ul`
  position: relative;
  margin: 0;
  padding: 0;
  list-style: none;
  ${Media.phone`display: flex;`}
`;

const StyledTabButton = styled.button`
  ${Mixins.tabButton};
  color: ${props => (props.isActive ? colors.primaryComponentActive : colors.primaryComponent)};
  padding-left: ${props => (props.isActive ? '1.8rem' : '2rem')};
  font-weight: ${props => (props.isActive ? 600 : 500)};
  ${Media.phone`padding-left: 1rem;`}
  ${Media.phone`padding-top: ${props => (props.isActive ? '1.8rem' : '2rem')};`}
  ${Media.phone`min-width: 9rem;`}
  ${Media.phone`width: 9rem;`}
  ${Media.phone`max-width: 9rem;`}
`;

const StyledHighlight = styled.span`
  ${Mixins.tabButtonHighlight};
  transform: translateY(
    ${props => (props.activeTabId > 0 ? props.activeTabId * Theme.tabHeight : 0)}rem
  );
  ${Media.phone`top: 0.3rem;`}
  ${Media.phone`left: 2rem;`}
  ${Media.phone`transform:  rotate(-90deg) translateY(
    ${props => (props.activeTabId > 0 ? props.activeTabId * 9 : 0)}rem
  );`}
`;

const StyledTabContentsContainer = styled.div`
  padding: 0.2rem 0 0 1rem;
  position: relative;
  flex: 1 1 80%;
  ${Media.phone`flex-basis: 100%;`}
  height: 100%;
  overflow: hidden auto;
`;

const StyledTabContent = styled.div`
  position: relative;
  outline: 0;
  a {
    ${Mixins.link};
  }
`;

const StyledMainList = styled.div`
  display: block;
  ul {
    ${Mixins.ul};
  }
`;

const StyledJobTitle = styled.span`
  color: ${colors.primaryComponentActive};
  font-size: ${fontSizes.lg};
  font-weight: 500;
  margin-bottom: 0.5rem;
`;

const StyledCompany = styled.span`
  font-family: ${fonts.secondary};
  font-size: ${fontSizes.sm};
  color: ${colors.primaryComponent};
  padding-left: 0.5rem;
`;

const StyledJobDetails = styled.div`
  font-family: ${fonts.secondary};
  font-size: ${fontSizes.sm};
  font-weight: normal;
  letter-spacing: 0.05em;
  color: ${colors.primaryComponent};
  margin-bottom: 3rem;
  svg {
    width: 1.5rem;
  }
`;

const StyledTechList = styled.ul`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;
  list-style: none;

  li {
    font-family: ${fonts.secondary};
    color: ${colors.primaryComponent};
    font-style: italic;
    margin-right: 1rem;
    white-space: nowrap;
    &:last-of-type {
      margin-right: 0;
    }
  }
`;

const Jobs = ({ data }) => {
  const [activeTabId, setActiveTabId] = useState(0);

  return (
    <StyledContainer id="jobs">
      <h4 className="heading">Working history</h4>

      <StyledTabs>
        <StyledTabListContainer>
          <StyledTabList role="tablist" aria-label="Job tabs">
            {data &&
              data.map(({ node }, i) => {
                const { company } = node.frontmatter;
                return (
                  <li key={i}>
                    <StyledTabButton
                      isActive={activeTabId === i}
                      onClick={() => setActiveTabId(i)}
                      id={`tab-${i}`}
                      role="tab"
                      aria-selected={activeTabId === i ? true : false}
                      aria-controls={`panel-${i}`}
                      tabIndex={activeTabId === i ? '0' : '-1'}>
                      <span>{company}</span>
                    </StyledTabButton>
                  </li>
                );
              })}
            <StyledHighlight activeTabId={activeTabId} />
          </StyledTabList>
        </StyledTabListContainer>

        <StyledTabContentsContainer>
          {data &&
            data.map(({ node }, i) => {
              const { frontmatter, html } = node;
              const { title, url, company, range, techs } = frontmatter;
              return (
                <StyledTabContent
                  key={i}
                  isActive={activeTabId === i}
                  id={`panel-${i}`}
                  role="tabpanel"
                  aria-labelledby={`tab-${i}`}
                  tabIndex={activeTabId === i ? '0' : '-1'}
                  style={{ display: activeTabId !== i ? 'none' : 'block' }}>
                  <StyledJobTitle>
                    <span>{title}</span>
                  </StyledJobTitle>
                  <StyledJobDetails>
                    <span>{range}</span>
                    <StyledCompany>
                      <a href={url} target="_blank" rel="nofollow noopener noreferrer">
                        &nbsp;{company}
                      </a>
                    </StyledCompany>
                    {techs && (
                      <StyledTechList>
                        {techs.map((tech, i) => (
                          <li key={i}>{tech}</li>
                        ))}
                      </StyledTechList>
                    )}
                  </StyledJobDetails>
                  <StyledMainList>
                    <div dangerouslySetInnerHTML={{ __html: html }} />
                  </StyledMainList>
                </StyledTabContent>
              );
            })}
        </StyledTabContentsContainer>
      </StyledTabs>
    </StyledContainer>
  );
};

Jobs.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Jobs;

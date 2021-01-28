import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Theme, Mixins, Section } from '@styles';
const { colors, fontSizes, fonts } = Theme;

const StyledContainer = styled(Section)`
  position: relative;
`;

const StyledTabs = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  width: 100%;
  min-height: 30vh;
  height: 40vh;
  max-height: 60vh;
`;

const StyledTabListContainer = styled.div`
  position: relative;
  min-width: 12rem;
  width: 12rem;
  max-width: 12rem;
  height: 100%;
  overflow: hidden auto;
`;

const StyledTabList = styled.ul`
  position: relative;
  margin: 0;
  padding: 0;
  list-style: none;
`;

const StyledTabButton = styled.button`
  ${Mixins.tabButton};
  color: ${props => (props.isActive ? colors.primaryComponentActive : colors.primaryComponent)};
  font-weight: ${props => (props.isActive ? 600 : 500)};
`;

const StyledHighlight = styled.span`
  ${Mixins.tabButtonHighlight};
  transform: translateY(
    ${props => (props.activeTabId > 0 ? props.activeTabId * Theme.tabHeight : 0)}rem
  );
`;

const StyledTabContentsContainer = styled.div`
  padding: 0.2rem 0 0 1rem;
  position: relative;
  flex: 1 1 80%;
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
    &:before {
      content: '#';
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
                        &nbsp;@{company}
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

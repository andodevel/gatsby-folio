import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Theme, Mixins, Section } from '@styles';
const { colors, fontSizes, fonts } = Theme;

const StyledContainer = styled(Section)`
  position: relative;
`;

const StyledTabs = styled.div`
  display: flex;
  align-items: flex-start;
  position: relative;
`;

const StyledTabList = styled.ul`
  display: block;
  position: relative;
  width: max-content;
  padding: 0;
  margin: 0;
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

const StyledTabContent = styled.div`
  overflow: hidden;
  position: relative;
  width: 100%;
  min-height: 20rem;
  height: 30rem;
  padding-top: 1.2rem;
  padding-left: 3rem;
  outline: 0;
  a {
    ${Mixins.link};
  }
`;

const StyledMainList = styled.div`
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
                hidden={activeTabId !== i}>
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
      </StyledTabs>
    </StyledContainer>
  );
};

Jobs.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Jobs;

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
  display: flex;
  align-items: center;
  width: 100%;
  background-color: transparent;
  height: ${Theme.tabHeight}rem;
  padding: 0 2rem 0.2rem;
  transition: ${Theme.transition};
  text-align: left;
  white-space: nowrap;
  font-family: ${fonts.secondary};
  font-size: ${fontSizes.xl};
  color: ${props => (props.isActive ? colors.primaryComponentActive : colors.primaryComponent)};
  font-weight: ${props => (props.isActive ? 550 : 500)};
`;
const StyledHighlight = styled.span`
  display: block;
  background: ${colors.indicator};
  width: 0.2rem;
  height: ${Theme.tabHeight - 2.4}rem;
  border-radius: ${Theme.borderRadius};
  position: absolute;
  top: 1.1rem;
  left: 0;
  transition: transform 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition-delay: 0.1s;
  z-index: 5;
  transform: translateY(
    ${props => (props.activeTabId > 0 ? props.activeTabId * Theme.tabHeight : 0)}rem
  );
`;
const StyledTabContent = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  padding-top: 1.2rem;
  padding-left: 3rem;
  outline: 0;

  ul {
    ${Mixins.ul};
  }
  a {
    ${Mixins.link};
  }
`;
const StyledJobTitle = styled.span`
  color: ${colors.primaryComponent};
  font-size: ${fontSizes.xxl};
  font-weight: 500;
  margin-bottom: 0.5rem;
`;
const StyledCompany = styled.span`
  color: ${colors.primaryComponent};
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
            const { title, url, company, range } = frontmatter;
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
                  <StyledCompany>
                    <a href={url} target="_blank" rel="nofollow noopener noreferrer">
                      &nbsp;@{company}
                    </a>
                  </StyledCompany>
                </StyledJobTitle>
                <StyledJobDetails>
                  <span>{range}</span>
                </StyledJobDetails>
                <div dangerouslySetInnerHTML={{ __html: html }} />
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

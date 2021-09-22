import { createGlobalStyle } from 'styled-components';
import { getPrimaryColor, getRGBA } from './utils/style';

export const PRIMARY_COLOR = '#4285F4';

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    overflow: hidden;
    div {
        ::-webkit-scrollbar {
          width: 10px;
          height: 10px;
          }
        ::-webkit-scrollbar-track {
              height: 10px;
              background: #f0efef;
          }
        ::-webkit-scrollbar-thumb {
                  border-radius: 5px;
                  background: #C1D1EB;
              }
    }
  }

  #root {
    background-color: #f7faff;
    width: 100%;
    height: 100%;
    .app {
      min-width: 1280px;
      min-height: 578px;
      width: 100vw;
      height: 100vh;
      margin: 0 auto;
    }
  }

  .bp3-dark .bp3-button:not([class*="bp3-intent-"]) .bp3-icon, .bp3-dark .bp3-button:not([class*="bp3-intent-"]) .bp3-icon-standard, .bp3-dark .bp3-button:not([class*="bp3-intent-"]) .bp3-icon-large {
    color: #fff;
  }
  .bp3-button {
    outline: none;
  }
  .bp3-input {
    border-radius: 6px !important;
  }  
  .bp3-input:disabled,
  .bp3-input.bp3-disabled {
    box-shadow: none;
    background: #eeeeee;
    color: #999999;
    cursor: not-allowed;
  }
  .bp3-overlay-backdrop {
    background:#31439633;
  }
  
  .bp3-control.bp3-switch.bp3-align-right .bp3-control-indicator {
    outline: none!important;
  }
  .bp3-control .bp3-control-indicator{
    outline: none!important;
  }
  .bp3-tag {
    outline: none!important;
  }
  iframe {
    border-width: 0;
  }
  
  // blueprint popover
 .bp3-popover {
     box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1) !important;
 } 
 
 .bp3-menu-item {
  align-items: center;
  :hover {
    background: ${(props) =>
      getRGBA(getPrimaryColor(props.theme.PRIMARY_COLOR), 0.1)};
      color: ${(props) => getPrimaryColor(props.theme.PRIMARY_COLOR)};
      svg {
        fill:${(props) => getPrimaryColor(props.theme.PRIMARY_COLOR)}
      }
  }
 }
`;

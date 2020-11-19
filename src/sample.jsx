import React from "react";
import ReactDOM from "react-dom";
import createClass from "create-react-class";

window.React = React;
window.ReactDOM = ReactDOM;
window.createReactClass = createClass;

require("syncfusion-javascript/Scripts/ej/web/ej.web.all.min");
require("syncfusion-javascript/Content/ej/web/default-theme/ej.web.all.min.css");
require("syncfusion-javascript/Scripts/ej/common/ej.web.react.min");

const EJ = window.EJ;

function App() {
  var disableIndex = [2];
  return (
    <div className="App">
      <EJ.Ribbon
        width="40%"
        applicationTab-type="menu"
        disabledItemIndex={disableIndex}
        applicationTab-menuItemID="ribbonmenu1"
        applicationTab-menuSettings-openOnClick={false}
      >
        <tabs>
          <tab id="home" text="HOME">
            <groups>
              <group text="Clipboard" alignType="rows">
                <content>
                  <content
                    defaults-type="button"
                    defaults-width={60}
                    defaults-height={70}
                  >
                    <groups>
                      <group
                        id="cut"
                        text="Cut"
                        toolTip="Remove the selection and put it on clipboard"
                        buttonSettings-contentType="textandimage"
                        buttonSettings-prefixIcon="e-icon e-ribbon e-ribboncut"
                        buttonSettings-click={executeAction}
                      />
                      <group
                        id="copy"
                        text="Copy"
                        toolTip="Put a copy of selection on clipboard"
                        buttonSettings-contentType="textandimage"
                        buttonSettings-prefixIcon="e-icon e-ribbon e-ribboncopy"
                        buttonSettings-click={executeAction}
                      />
                    </groups>
                  </content>
                </content>
              </group>
            </groups>
          </tab>
          <tab id="insert" text="INSERT">
            <groups>
              <group text="Tables" alignType="columns">
                <content>
                  <content
                    defaults-type="button"
                    defaults-width={50}
                    defaults-height={70}
                  >
                    <groups>
                      <group
                        id="tables"
                        text="Tables"
                        buttonSettings-contentType="textandimage"
                        buttonSettings-imagePosition="imagetop"
                        buttonSettings-prefixIcon="e-icon e-ribbon e-table"
                        buttonSettings-click="executeAction"
                      />
                    </groups>
                  </content>
                </content>
              </group>
              <group text="Illustrations" alignType="rows">
                <content>
                  <content
                    defaults-type="button"
                    defaults-width={56}
                    defaults-height={70}
                  >
                    <groups>
                      <group
                        id="pictures"
                        text="Pictures"
                        buttonSettings-contentType="textandimage"
                        buttonSettings-imagePosition="imagetop"
                        buttonSettings-prefixIcon="e-icon e-ribbon e-picture"
                        buttonSettings-click="executeAction"
                      />
                      <group
                        id="videos"
                        text="Videos"
                        buttonSettings-contentType="textandimage"
                        buttonSettings-imagePosition="imagetop"
                        buttonSettings-prefixIcon="e-icon e-ribbon e-video"
                        buttonSettings-click="executeAction"
                      />
                      <group
                        id="shapes"
                        text="Shapes"
                        buttonSettings-contentType="textandimage"
                        buttonSettings-imagePosition="imagetop"
                        buttonSettings-prefixIcon="e-icon e-ribbon e-shape"
                        buttonSettings-click="executeAction"
                      />
                      <group
                        id="charts"
                        text="Charts"
                        buttonSettings-contentType="textandimage"
                        buttonSettings-imagePosition="imagetop"
                        buttonSettings-prefixIcon="e-icon e-ribbon e-chart"
                        buttonSettings-click="executeAction"
                      />
                    </groups>
                  </content>
                </content>
              </group>
              <group text="Comments" alignType="rows">
                <content>
                  <content
                    defaults-type="button"
                    defaults-width={70}
                    defaults-height={70}
                  >
                    <groups>
                      <group
                        id="comments"
                        text="Comments"
                        buttonSettings-contentType="textandimage"
                        buttonSettings-imagePosition="imagetop"
                        buttonSettings-prefixIcon="e-icon e-ribbon e-comment"
                        buttonSettings-click="executeAction"
                      />
                    </groups>
                  </content>
                </content>
              </group>
            </groups>
          </tab>
        </tabs>
      </EJ.Ribbon>

      <ul id="ribbonmenu1">
        <li>
          <a>FILE</a>
          <ul>
            <li>
              <a>New</a>
            </li>
            <li>
              <a>Open</a>
            </li>
            <li>
              <a>Save</a>
            </li>
            <li>
              <a>Save As</a>
            </li>
            <li>
              <a>Print</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
  function executeAction(args) {
    if (args.target.textContent == "Copy") console.log("Copy is clicked");
    else if (args.target.textContent == "Cut") console.log("Cut is clicked");
  }
}

export default App;

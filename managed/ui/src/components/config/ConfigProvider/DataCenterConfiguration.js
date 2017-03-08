// Copyright (c) YugaByte, Inc.

import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { GCPProviderConfigurationContainer, AzureProviderConfigurationContainer,
         DockerProviderConfigurationContainer, AWSProviderConfigurationContainer}
         from '../../config';
import {OnPremConfiguration} from '../../config';
import {Tab} from 'react-bootstrap';
import { YBTabsPanel } from '../../panels';
import './providerConfig.scss';
import awsLogo from './images/aws.png';
import azureLogo from './images/azure.png';
import dockerLogo from './images/docker.png';
import gcpLogo from './images/gcp.png';

class DataCenterConfiguration extends Component {
  constructor(props) {
    super(props);
    this.configProviderSelect = this.configProviderSelect.bind(this);
  }

  configProviderSelect(item) {
    let currentLocation = this.props.location;
    currentLocation.query = { provider: item }
    this.props.router.push(currentLocation);
  }

  render() {
    const onPremiseTabContent =
      <div className="on-premise">
        <i className="fa fa-server" />
        On-Premises<br/>Datacenter
      </div>;
    return (
      <div>
        <h2>Configuration</h2>
        <YBTabsPanel activeTab={"gcp"} id={"config-tab-panel"} className="config-tabs">
          <Tab eventKey={"aws"} title={<img src={awsLogo} alt="AWS" className="aws-logo" />} key="aws-tab">
            <AWSProviderConfigurationContainer />
          </Tab>
          <Tab eventKey={"gcp"} title={<img src={gcpLogo} alt="GCP" className="gcp-logo" />} key="gcp-tab">
            <GCPProviderConfigurationContainer />
          </Tab>
          <Tab eventKey={"azure"} title={<img src={azureLogo} alt="Azure" className="azure-logo" />} key="azure-tab">
            <AzureProviderConfigurationContainer />
          </Tab>
          <Tab eventKey={"docker"} title={<img src={dockerLogo} alt="Docker" className="docker-logo" />} key="docker-tab">
            <DockerProviderConfigurationContainer />
          </Tab>
          <Tab eventKey={"onprem"} title={onPremiseTabContent} key="onprem-tab">
            <OnPremConfiguration/>
          </Tab>
        </YBTabsPanel>
      </div>
    )
  }
}
export default withRouter(DataCenterConfiguration);
/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "./models";
import * as Mappers from "./models/mappers";
import * as operations from "./operations";
import { OperationalInsightsManagementClientContext } from "./operationalInsightsManagementClientContext";


class OperationalInsightsManagementClient extends OperationalInsightsManagementClientContext {
  // Operation groups
  dataExports: operations.DataExports;
  dataSources: operations.DataSources;
  intelligencePacks: operations.IntelligencePacks;
  linkedServices: operations.LinkedServices;
  linkedStorageAccounts: operations.LinkedStorageAccounts;
  managementGroups: operations.ManagementGroups;
  operations: operations.Operations;
  operationStatuses: operations.OperationStatuses;
  sharedKeys: operations.SharedKeysOperations;
  usages: operations.Usages;
  workspaces: operations.Workspaces;
  deletedWorkspaces: operations.DeletedWorkspaces;
  clusters: operations.Clusters;
  storageInsightConfigs: operations.StorageInsightConfigs;
  savedSearches: operations.SavedSearches;
  availableServiceTiers: operations.AvailableServiceTiers;
  gateways: operations.Gateways;
  schema: operations.Schema;
  workspacePurge: operations.WorkspacePurge;
  tables: operations.Tables;

  /**
   * Initializes a new instance of the OperationalInsightsManagementClient class.
   * @param credentials Credentials needed for the client to connect to Azure.
   * @param subscriptionId The ID of the target subscription.
   * @param [options] The parameter options
   */
  constructor(credentials: msRest.ServiceClientCredentials, subscriptionId: string, options?: Models.OperationalInsightsManagementClientOptions) {
    super(credentials, subscriptionId, options);
    this.dataExports = new operations.DataExports(this);
    this.dataSources = new operations.DataSources(this);
    this.intelligencePacks = new operations.IntelligencePacks(this);
    this.linkedServices = new operations.LinkedServices(this);
    this.linkedStorageAccounts = new operations.LinkedStorageAccounts(this);
    this.managementGroups = new operations.ManagementGroups(this);
    this.operations = new operations.Operations(this);
    this.operationStatuses = new operations.OperationStatuses(this);
    this.sharedKeys = new operations.SharedKeysOperations(this);
    this.usages = new operations.Usages(this);
    this.workspaces = new operations.Workspaces(this);
    this.deletedWorkspaces = new operations.DeletedWorkspaces(this);
    this.clusters = new operations.Clusters(this);
    this.storageInsightConfigs = new operations.StorageInsightConfigs(this);
    this.savedSearches = new operations.SavedSearches(this);
    this.availableServiceTiers = new operations.AvailableServiceTiers(this);
    this.gateways = new operations.Gateways(this);
    this.schema = new operations.Schema(this);
    this.workspacePurge = new operations.WorkspacePurge(this);
    this.tables = new operations.Tables(this);
  }
}

// Operation Specifications

export {
  OperationalInsightsManagementClient,
  OperationalInsightsManagementClientContext,
  Models as OperationalInsightsManagementModels,
  Mappers as OperationalInsightsManagementMappers
};
export * from "./operations";
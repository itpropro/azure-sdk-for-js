/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";
import { SchemaRegistryClientOptionalParams } from "./models";

const packageName = "@azure/schema-registry";
const packageVersion = "1.0.0-preview.1";

export class SchemaRegistryClientContext extends coreHttp.ServiceClient {
  endpoint: string;

  /**
   * Initializes a new instance of the SchemaRegistryClientContext class.
   * @param credentials Subscription credentials which uniquely identify client subscription.
   * @param endpoint The Schema Registry service endpoint, for example
   *                 https://mynamespace.servicebus.windows.net.
   * @param options The parameter options
   */
  constructor(
    credentials: coreHttp.TokenCredential | coreHttp.ServiceClientCredentials,
    endpoint: string,
    options?: SchemaRegistryClientOptionalParams
  ) {
    if (credentials === undefined) {
      throw new Error("'credentials' cannot be null");
    }
    if (endpoint === undefined) {
      throw new Error("'endpoint' cannot be null");
    }

    // Initializing default values for options
    if (!options) {
      options = {};
    }

    if (!options.userAgent) {
      const defaultUserAgent = coreHttp.getDefaultUserAgentValue();
      options.userAgent = `${packageName}/${packageVersion} ${defaultUserAgent}`;
    }

    super(credentials, options);

    this.requestContentType = "application/json; charset=utf-8";

    this.baseUri = options.endpoint || "{endpoint}/$schemagroups";

    // Parameter assignments
    this.endpoint = endpoint;
  }
}

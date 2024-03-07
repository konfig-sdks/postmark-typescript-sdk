/*
Postmark API

Postmark makes sending and receiving email
incredibly easy.


The version of the OpenAPI document: 1.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/

import { AxiosRequestConfig } from "axios";
import {
  BouncesApiApi,
  InboundRulesApiApi,
  MessagesApiApi,
  SendingApiApi,
  ServerConfigurationApiApi,
  StatsApiApi,
  TemplatesApiApi,
} from "./api";
import { Configuration, ConfigurationParameters } from "./configuration";
import { PostmarkCustom } from "./client-custom";

export class Postmark extends PostmarkCustom {
  readonly bouncesApi: BouncesApiApi;
  readonly inboundRulesApi: InboundRulesApiApi;
  readonly messagesApi: MessagesApiApi;
  readonly sendingApi: SendingApiApi;
  readonly serverConfigurationApi: ServerConfigurationApiApi;
  readonly statsApi: StatsApiApi;
  readonly templatesApi: TemplatesApiApi;

  constructor(configurationParameters: ConfigurationParameters) {
    super(configurationParameters);
    const configuration = new Configuration(configurationParameters);
    this.bouncesApi = new BouncesApiApi(configuration);
    this.inboundRulesApi = new InboundRulesApiApi(configuration);
    this.messagesApi = new MessagesApiApi(configuration);
    this.sendingApi = new SendingApiApi(configuration);
    this.serverConfigurationApi = new ServerConfigurationApiApi(configuration);
    this.statsApi = new StatsApiApi(configuration);
    this.templatesApi = new TemplatesApiApi(configuration);
  }

}

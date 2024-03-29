/* tslint:disable */
/* eslint-disable */
/*
Postmark API

Postmark makes sending and receiving email
incredibly easy.


The version of the OpenAPI document: 1.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/

import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction, isBrowser } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { EditServerConfigurationRequest } from '../models';
// @ts-ignore
import { StandardPostmarkResponse } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * ServerConfigurationApiApi - axios parameter creator
 * @export
 */
export const ServerConfigurationApiApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Get Server Configuration
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getConfiguration: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/server`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication serverToken required
            await setApiKeyToObject({ object: localVarHeaderParameter, key: "X-Postmark-Server-Token", keyParamName: "serverToken", configuration })

    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/server',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Edit Server Configuration
         * @param {EditServerConfigurationRequest} [editServerConfigurationRequest] The settings that should be modified for the current server.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateConfiguration: async (editServerConfigurationRequest?: EditServerConfigurationRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/server`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication serverToken required
            await setApiKeyToObject({ object: localVarHeaderParameter, key: "X-Postmark-Server-Token", keyParamName: "serverToken", configuration })

    
            localVarHeaderParameter['Content-Type'] = 'application/json';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: editServerConfigurationRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/server',
                httpMethod: 'PUT'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(editServerConfigurationRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ServerConfigurationApiApi - functional programming interface
 * @export
 */
export const ServerConfigurationApiApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ServerConfigurationApiApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Get Server Configuration
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getConfiguration(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getConfiguration(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Edit Server Configuration
         * @param {ServerConfigurationApiApiUpdateConfigurationRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateConfiguration(requestParameters: ServerConfigurationApiApiUpdateConfigurationRequest = {}, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
            const editServerConfigurationRequest: EditServerConfigurationRequest = {
                BounceHookUrl: requestParameters.BounceHookUrl,
                ClickHookUrl: requestParameters.ClickHookUrl,
                Color: requestParameters.Color,
                DeliveryHookUrl: requestParameters.DeliveryHookUrl,
                InboundDomain: requestParameters.InboundDomain,
                InboundHookUrl: requestParameters.InboundHookUrl,
                InboundSpamThreshold: requestParameters.InboundSpamThreshold,
                Name: requestParameters.Name,
                OpenHookUrl: requestParameters.OpenHookUrl,
                PostFirstOpenOnly: requestParameters.PostFirstOpenOnly,
                RawEmailEnabled: requestParameters.RawEmailEnabled,
                SmtpApiActivated: requestParameters.SmtpApiActivated,
                TrackLinks: requestParameters.TrackLinks,
                TrackOpens: requestParameters.TrackOpens
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateConfiguration(editServerConfigurationRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * ServerConfigurationApiApi - factory interface
 * @export
 */
export const ServerConfigurationApiApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ServerConfigurationApiApiFp(configuration)
    return {
        /**
         * 
         * @summary Get Server Configuration
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getConfiguration(options?: AxiosRequestConfig): AxiosPromise<object> {
            return localVarFp.getConfiguration(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Edit Server Configuration
         * @param {ServerConfigurationApiApiUpdateConfigurationRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateConfiguration(requestParameters: ServerConfigurationApiApiUpdateConfigurationRequest = {}, options?: AxiosRequestConfig): AxiosPromise<object> {
            return localVarFp.updateConfiguration(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for updateConfiguration operation in ServerConfigurationApiApi.
 * @export
 * @interface ServerConfigurationApiApiUpdateConfigurationRequest
 */
export type ServerConfigurationApiApiUpdateConfigurationRequest = {
    
} & EditServerConfigurationRequest

/**
 * ServerConfigurationApiApiGenerated - object-oriented interface
 * @export
 * @class ServerConfigurationApiApiGenerated
 * @extends {BaseAPI}
 */
export class ServerConfigurationApiApiGenerated extends BaseAPI {
    /**
     * 
     * @summary Get Server Configuration
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ServerConfigurationApiApiGenerated
     */
    public getConfiguration(options?: AxiosRequestConfig) {
        return ServerConfigurationApiApiFp(this.configuration).getConfiguration(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Edit Server Configuration
     * @param {ServerConfigurationApiApiUpdateConfigurationRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ServerConfigurationApiApiGenerated
     */
    public updateConfiguration(requestParameters: ServerConfigurationApiApiUpdateConfigurationRequest = {}, options?: AxiosRequestConfig) {
        return ServerConfigurationApiApiFp(this.configuration).updateConfiguration(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}

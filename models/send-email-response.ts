/*
Postmark API

Postmark makes sending and receiving email
incredibly easy.


The version of the OpenAPI document: 1.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * The standard response when a postmark message is sent
 * @export
 * @interface SendEmailResponse
 */
export interface SendEmailResponse {
    /**
     * 
     * @type {number}
     * @memberof SendEmailResponse
     */
    'ErrorCode'?: number;
    /**
     * 
     * @type {string}
     * @memberof SendEmailResponse
     */
    'Message'?: string;
    /**
     * 
     * @type {string}
     * @memberof SendEmailResponse
     */
    'MessageID'?: string;
    /**
     * 
     * @type {string}
     * @memberof SendEmailResponse
     */
    'SubmittedAt'?: string;
    /**
     * 
     * @type {string}
     * @memberof SendEmailResponse
     */
    'To'?: string;
}


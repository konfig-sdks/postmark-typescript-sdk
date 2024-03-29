/*
Postmark API

Postmark makes sending and receiving email
incredibly easy.


The version of the OpenAPI document: 1.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ExtendedMessageOpenEventInformation } from './extended-message-open-event-information';

/**
 * 
 * @export
 * @interface MessageOpenSearchResponse
 */
export interface MessageOpenSearchResponse {
    /**
     * 
     * @type {Array<ExtendedMessageOpenEventInformation>}
     * @memberof MessageOpenSearchResponse
     */
    'Opens'?: Array<ExtendedMessageOpenEventInformation>;
    /**
     * 
     * @type {number}
     * @memberof MessageOpenSearchResponse
     */
    'TotalCount'?: number;
}


/*
Postmark API

Postmark makes sending and receiving email
incredibly easy.


The version of the OpenAPI document: 1.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { MessageEventDetailsDetails } from './message-event-details-details';

/**
 * 
 * @export
 * @interface MessageEventDetails
 */
export interface MessageEventDetails {
    /**
     * 
     * @type {MessageEventDetailsDetails}
     * @memberof MessageEventDetails
     */
    'Details'?: MessageEventDetailsDetails;
    /**
     * 
     * @type {string}
     * @memberof MessageEventDetails
     */
    'ReceivedAt'?: string;
    /**
     * 
     * @type {string}
     * @memberof MessageEventDetails
     */
    'Recipient'?: string;
    /**
     * 
     * @type {string}
     * @memberof MessageEventDetails
     */
    'Type'?: string;
}

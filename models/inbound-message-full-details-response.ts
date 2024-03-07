/*
Postmark API

Postmark makes sending and receiving email
incredibly easy.


The version of the OpenAPI document: 1.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { Attachment } from './attachment';
import { EmailNameAddressPair } from './email-name-address-pair';
import { InboundMessageDetailFromFull } from './inbound-message-detail-from-full';
import { MessageHeader } from './message-header';

/**
 * 
 * @export
 * @interface InboundMessageFullDetailsResponse
 */
export interface InboundMessageFullDetailsResponse {
    /**
     * 
     * @type {Array<Attachment>}
     * @memberof InboundMessageFullDetailsResponse
     */
    'Attachments'?: Array<Attachment>;
    /**
     * 
     * @type {string}
     * @memberof InboundMessageFullDetailsResponse
     */
    'BlockedReason'?: string;
    /**
     * 
     * @type {string}
     * @memberof InboundMessageFullDetailsResponse
     */
    'Cc'?: string;
    /**
     * 
     * @type {Array<EmailNameAddressPair>}
     * @memberof InboundMessageFullDetailsResponse
     */
    'CcFull'?: Array<EmailNameAddressPair>;
    /**
     * 
     * @type {string}
     * @memberof InboundMessageFullDetailsResponse
     */
    'Date'?: string;
    /**
     * 
     * @type {string}
     * @memberof InboundMessageFullDetailsResponse
     */
    'From'?: string;
    /**
     * 
     * @type {InboundMessageDetailFromFull}
     * @memberof InboundMessageFullDetailsResponse
     */
    'FromFull'?: InboundMessageDetailFromFull;
    /**
     * 
     * @type {string}
     * @memberof InboundMessageFullDetailsResponse
     */
    'FromName'?: string;
    /**
     * 
     * @type {Array<MessageHeader>}
     * @memberof InboundMessageFullDetailsResponse
     */
    'Headers'?: Array<MessageHeader>;
    /**
     * 
     * @type {string}
     * @memberof InboundMessageFullDetailsResponse
     */
    'HtmlBody'?: string;
    /**
     * 
     * @type {string}
     * @memberof InboundMessageFullDetailsResponse
     */
    'MailboxHash'?: string;
    /**
     * 
     * @type {string}
     * @memberof InboundMessageFullDetailsResponse
     */
    'MessageID'?: string;
    /**
     * 
     * @type {string}
     * @memberof InboundMessageFullDetailsResponse
     */
    'OriginalRecipient'?: string;
    /**
     * 
     * @type {string}
     * @memberof InboundMessageFullDetailsResponse
     */
    'ReplyTo'?: string;
    /**
     * 
     * @type {string}
     * @memberof InboundMessageFullDetailsResponse
     */
    'Status'?: string;
    /**
     * 
     * @type {string}
     * @memberof InboundMessageFullDetailsResponse
     */
    'Subject'?: string;
    /**
     * 
     * @type {string}
     * @memberof InboundMessageFullDetailsResponse
     */
    'Tag'?: string;
    /**
     * 
     * @type {string}
     * @memberof InboundMessageFullDetailsResponse
     */
    'TextBody'?: string;
    /**
     * 
     * @type {string}
     * @memberof InboundMessageFullDetailsResponse
     */
    'To'?: string;
    /**
     * 
     * @type {Array<EmailNameAddressPair>}
     * @memberof InboundMessageFullDetailsResponse
     */
    'ToFull'?: Array<EmailNameAddressPair>;
}

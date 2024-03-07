/*
Postmark API

Postmark makes sending and receiving email
incredibly easy.


The version of the OpenAPI document: 1.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * 
 * @export
 * @interface TemplateDetailResponse
 */
export interface TemplateDetailResponse {
    /**
     * Indicates that this template may be used for sending email.
     * @type {boolean}
     * @memberof TemplateDetailResponse
     */
    'Active'?: boolean;
    /**
     * The user-supplied alias for this template.
     * @type {string}
     * @memberof TemplateDetailResponse
     */
    'Alias'?: string;
    /**
     * The ID of the Server with which this template is associated.
     * @type {number}
     * @memberof TemplateDetailResponse
     */
    'AssociatedServerId'?: number;
    /**
     * The content to use for the HtmlBody when this template is used to send email.
     * @type {string}
     * @memberof TemplateDetailResponse
     */
    'HtmlBody'?: string;
    /**
     * The display name for the template.
     * @type {string}
     * @memberof TemplateDetailResponse
     */
    'Name'?: string;
    /**
     * The content to use for the Subject when this template is used to send email.
     * @type {string}
     * @memberof TemplateDetailResponse
     */
    'Subject'?: string;
    /**
     * The ID associated with the template.
     * @type {number}
     * @memberof TemplateDetailResponse
     */
    'TemplateID'?: number;
    /**
     * The content to use for the TextBody when this template is used to send email.
     * @type {string}
     * @memberof TemplateDetailResponse
     */
    'TextBody'?: string;
}


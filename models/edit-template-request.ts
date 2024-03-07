/*
Postmark API

Postmark makes sending and receiving email
incredibly easy.


The version of the OpenAPI document: 1.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * The contents required for creating a new template.
 * @export
 * @interface EditTemplateRequest
 */
export interface EditTemplateRequest {
    /**
     * The optional string identifier for referring to this Template (numbers, letters, and \'.\', \'-\', \'_\' characters, starts with a letter).
     * @type {string}
     * @memberof EditTemplateRequest
     */
    'Alias'?: string;
    /**
     * The HTML template definition for this Template.
     * @type {string}
     * @memberof EditTemplateRequest
     */
    'HtmlBody'?: string;
    /**
     * The friendly display name for the template.
     * @type {string}
     * @memberof EditTemplateRequest
     */
    'Name'?: string;
    /**
     * The Subject template definition for this Template.
     * @type {string}
     * @memberof EditTemplateRequest
     */
    'Subject'?: string;
    /**
     * The Text template definition for this Template.
     * @type {string}
     * @memberof EditTemplateRequest
     */
    'TextBody'?: string;
}


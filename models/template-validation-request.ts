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
 * @interface TemplateValidationRequest
 */
export interface TemplateValidationRequest {
    /**
     * The html body content to validate. Must be specified if Subject or TextBody are not. See our template language documentation for more information on the syntax for this field. 
     * @type {string}
     * @memberof TemplateValidationRequest
     */
    'HtmlBody'?: string;
    /**
     * When HtmlBody is specified, the test render will have style blocks inlined as style attributes on matching html elements. You may disable the css inlining behavior by passing false for this parameter. 
     * @type {boolean}
     * @memberof TemplateValidationRequest
     */
    'InlineCssForHtmlTestRender'?: boolean;
    /**
     * The subject content to validate. Must be specified if HtmlBody or TextBody are not. See our template language documentation for more information on the syntax for this field. 
     * @type {string}
     * @memberof TemplateValidationRequest
     */
    'Subject'?: string;
    /**
     * The model to be used when rendering test content.
     * @type {object}
     * @memberof TemplateValidationRequest
     */
    'TestRenderModel'?: object;
    /**
     * The text body content to validate. Must be specified if HtmlBody or Subject are not. See our template language documentation for more information on the syntax for this field. 
     * @type {string}
     * @memberof TemplateValidationRequest
     */
    'TextBody'?: string;
}


/*
Postmark API

Postmark makes sending and receiving email
incredibly easy.


The version of the OpenAPI document: 1.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { TemplateValidationResult } from './template-validation-result';

/**
 * 
 * @export
 * @interface TemplateValidationResponse
 */
export interface TemplateValidationResponse {
    /**
     * 
     * @type {boolean}
     * @memberof TemplateValidationResponse
     */
    'AllContentIsValid'?: boolean;
    /**
     * 
     * @type {TemplateValidationResult}
     * @memberof TemplateValidationResponse
     */
    'HtmlBody'?: TemplateValidationResult;
    /**
     * 
     * @type {TemplateValidationResult}
     * @memberof TemplateValidationResponse
     */
    'Subject'?: TemplateValidationResult;
    /**
     * 
     * @type {object}
     * @memberof TemplateValidationResponse
     */
    'SuggestedTemplateModel'?: object;
    /**
     * 
     * @type {TemplateValidationResult}
     * @memberof TemplateValidationResponse
     */
    'TextBody'?: TemplateValidationResult;
}

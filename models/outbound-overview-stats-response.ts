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
 * @interface OutboundOverviewStatsResponse
 */
export interface OutboundOverviewStatsResponse {
    /**
     * 
     * @type {number}
     * @memberof OutboundOverviewStatsResponse
     */
    'BounceRate'?: number;
    /**
     * 
     * @type {number}
     * @memberof OutboundOverviewStatsResponse
     */
    'Bounced'?: number;
    /**
     * 
     * @type {number}
     * @memberof OutboundOverviewStatsResponse
     */
    'Opens'?: number;
    /**
     * 
     * @type {number}
     * @memberof OutboundOverviewStatsResponse
     */
    'SMTPAPIErrors'?: number;
    /**
     * 
     * @type {number}
     * @memberof OutboundOverviewStatsResponse
     */
    'Sent'?: number;
    /**
     * 
     * @type {number}
     * @memberof OutboundOverviewStatsResponse
     */
    'SpamComplaints'?: number;
    /**
     * 
     * @type {number}
     * @memberof OutboundOverviewStatsResponse
     */
    'SpamComplaintsRate'?: number;
    /**
     * 
     * @type {number}
     * @memberof OutboundOverviewStatsResponse
     */
    'TotalClicks'?: number;
    /**
     * 
     * @type {number}
     * @memberof OutboundOverviewStatsResponse
     */
    'TotalTrackedLinksSent'?: number;
    /**
     * 
     * @type {number}
     * @memberof OutboundOverviewStatsResponse
     */
    'Tracked'?: number;
    /**
     * 
     * @type {number}
     * @memberof OutboundOverviewStatsResponse
     */
    'UniqueLinksClicked'?: number;
    /**
     * 
     * @type {number}
     * @memberof OutboundOverviewStatsResponse
     */
    'UniqueOpens'?: number;
    /**
     * 
     * @type {number}
     * @memberof OutboundOverviewStatsResponse
     */
    'WithClientRecorded'?: number;
    /**
     * 
     * @type {number}
     * @memberof OutboundOverviewStatsResponse
     */
    'WithLinkTracking'?: number;
    /**
     * 
     * @type {number}
     * @memberof OutboundOverviewStatsResponse
     */
    'WithOpenTracking'?: number;
    /**
     * 
     * @type {number}
     * @memberof OutboundOverviewStatsResponse
     */
    'WithPlatformRecorded'?: number;
}


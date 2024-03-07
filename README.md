<div align="left">

[![Visit Postmark](./header.png)](https://postmarkapp.com)

# [Postmark](https://postmarkapp.com)<a id="postmark"></a>

Postmark makes sending and receiving email
incredibly easy.


</div>

## Table of Contents<a id="table-of-contents"></a>

<!-- toc -->

- [Installation](#installation)
- [Getting Started](#getting-started)
- [Reference](#reference)
  * [`postmark.bouncesApi.activateBounce`](#postmarkbouncesapiactivatebounce)
  * [`postmark.bouncesApi.getBounce`](#postmarkbouncesapigetbounce)
  * [`postmark.bouncesApi.getDeliveryStats`](#postmarkbouncesapigetdeliverystats)
  * [`postmark.bouncesApi.getDump`](#postmarkbouncesapigetdump)
  * [`postmark.bouncesApi.listBounces`](#postmarkbouncesapilistbounces)
  * [`postmark.inboundRulesApi.createTrigger`](#postmarkinboundrulesapicreatetrigger)
  * [`postmark.inboundRulesApi.deleteSingleTrigger`](#postmarkinboundrulesapideletesingletrigger)
  * [`postmark.inboundRulesApi.listTriggers`](#postmarkinboundrulesapilisttriggers)
  * [`postmark.messagesApi.getAllClicks`](#postmarkmessagesapigetallclicks)
  * [`postmark.messagesApi.getInboundMessageDetails`](#postmarkmessagesapigetinboundmessagedetails)
  * [`postmark.messagesApi.getMessageClicks`](#postmarkmessagesapigetmessageclicks)
  * [`postmark.messagesApi.getMessageDump`](#postmarkmessagesapigetmessagedump)
  * [`postmark.messagesApi.getMessageOpens`](#postmarkmessagesapigetmessageopens)
  * [`postmark.messagesApi.getOutboundMessageDetails`](#postmarkmessagesapigetoutboundmessagedetails)
  * [`postmark.messagesApi.listOpensForOutbound`](#postmarkmessagesapilistopensforoutbound)
  * [`postmark.messagesApi.retryInboundMessage`](#postmarkmessagesapiretryinboundmessage)
  * [`postmark.messagesApi.searchInboundMessages`](#postmarkmessagesapisearchinboundmessages)
  * [`postmark.messagesApi.searchOutboundMessages`](#postmarkmessagesapisearchoutboundmessages)
  * [`postmark.messagesApi.updateBypassRulesForInboundMessage`](#postmarkmessagesapiupdatebypassrulesforinboundmessage)
  * [`postmark.sendingApi.sendBatchEmails`](#postmarksendingapisendbatchemails)
  * [`postmark.sendingApi.sendBatchWithTemplates`](#postmarksendingapisendbatchwithtemplates)
  * [`postmark.sendingApi.sendEmailTemplate`](#postmarksendingapisendemailtemplate)
  * [`postmark.sendingApi.sendSingleEmail`](#postmarksendingapisendsingleemail)
  * [`postmark.serverConfigurationApi.getConfiguration`](#postmarkserverconfigurationapigetconfiguration)
  * [`postmark.serverConfigurationApi.updateConfiguration`](#postmarkserverconfigurationapiupdateconfiguration)
  * [`postmark.statsApi.getBounceCounts`](#postmarkstatsapigetbouncecounts)
  * [`postmark.statsApi.getBrowserPlatformUsage`](#postmarkstatsapigetbrowserplatformusage)
  * [`postmark.statsApi.getEmailClientUsage`](#postmarkstatsapigetemailclientusage)
  * [`postmark.statsApi.getEmailOpenCounts`](#postmarkstatsapigetemailopencounts)
  * [`postmark.statsApi.getEmailPlatformUsage`](#postmarkstatsapigetemailplatformusage)
  * [`postmark.statsApi.getOutboundClickCounts`](#postmarkstatsapigetoutboundclickcounts)
  * [`postmark.statsApi.getOutboundClicksBrowserFamilies`](#postmarkstatsapigetoutboundclicksbrowserfamilies)
  * [`postmark.statsApi.getOutboundClicksLocation`](#postmarkstatsapigetoutboundclickslocation)
  * [`postmark.statsApi.getOutboundOverview`](#postmarkstatsapigetoutboundoverview)
  * [`postmark.statsApi.getSentCounts`](#postmarkstatsapigetsentcounts)
  * [`postmark.statsApi.getSpamComplaints`](#postmarkstatsapigetspamcomplaints)
  * [`postmark.statsApi.getTrackedEmailCounts`](#postmarkstatsapigettrackedemailcounts)
  * [`postmark.templatesApi.createTemplate`](#postmarktemplatesapicreatetemplate)
  * [`postmark.templatesApi.deleteTemplate`](#postmarktemplatesapideletetemplate)
  * [`postmark.templatesApi.getTemplateById`](#postmarktemplatesapigettemplatebyid)
  * [`postmark.templatesApi.listTemplates`](#postmarktemplatesapilisttemplates)
  * [`postmark.templatesApi.sendBatchWithTemplates`](#postmarktemplatesapisendbatchwithtemplates)
  * [`postmark.templatesApi.sendEmailTemplate`](#postmarktemplatesapisendemailtemplate)
  * [`postmark.templatesApi.updateTemplate`](#postmarktemplatesapiupdatetemplate)
  * [`postmark.templatesApi.validateTemplateContent`](#postmarktemplatesapivalidatetemplatecontent)

<!-- tocstop -->

## Installation<a id="installation"></a>
<div align="center">
  <a href="https://konfigthis.com/sdk-sign-up?company=Postmark&language=TypeScript">
    <img src="https://raw.githubusercontent.com/konfig-dev/brand-assets/HEAD/cta-images/typescript-cta.png" width="70%">
  </a>
</div>

## Getting Started<a id="getting-started"></a>

```typescript
import { Postmark } from "postmark-typescript-sdk";

const postmark = new Postmark({
  // Defining the base path is optional and defaults to http://api.postmarkapp.com
  // basePath: "http://api.postmarkapp.com",
  apiKey: "API_KEY",
});

const activateBounceResponse = await postmark.bouncesApi.activateBounce({
  bounceid: 1,
});

console.log(activateBounceResponse);
```

## Reference<a id="reference"></a>


### `postmark.bouncesApi.activateBounce`<a id="postmarkbouncesapiactivatebounce"></a>

Activate a bounce

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const activateBounceResponse = await postmark.bouncesApi.activateBounce({
  bounceid: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### bounceid: `number`<a id="bounceid-number"></a>

The ID of the Bounce to activate.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/bounces/{bounceid}/activate` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `postmark.bouncesApi.getBounce`<a id="postmarkbouncesapigetbounce"></a>

Get a single bounce

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getBounceResponse = await postmark.bouncesApi.getBounce({
  bounceid: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### bounceid: `number`<a id="bounceid-number"></a>

The ID of the bounce to retrieve.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/bounces/{bounceid}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `postmark.bouncesApi.getDeliveryStats`<a id="postmarkbouncesapigetdeliverystats"></a>

Get delivery stats

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getDeliveryStatsResponse = await postmark.bouncesApi.getDeliveryStats();
```

#### 🔄 Return<a id="🔄-return"></a>

[DeliveryStatsResponse](./models/delivery-stats-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/deliverystats` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `postmark.bouncesApi.getDump`<a id="postmarkbouncesapigetdump"></a>

Get bounce dump

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getDumpResponse = await postmark.bouncesApi.getDump({
  bounceid: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### bounceid: `number`<a id="bounceid-number"></a>

The ID for the bounce dump to retrieve.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/bounces/{bounceid}/dump` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `postmark.bouncesApi.listBounces`<a id="postmarkbouncesapilistbounces"></a>

Get bounces

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listBouncesResponse = await postmark.bouncesApi.listBounces({
  count: 1,
  offset: 1,
  type: "HardBounce",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### count: `number`<a id="count-number"></a>

Number of bounces to return per request. Max 500.

##### offset: `number`<a id="offset-number"></a>

Number of bounces to skip.

##### type: `'HardBounce' | 'Transient' | 'Unsubscribe' | 'Subscribe' | 'AutoResponder' | 'AddressChange' | 'DnsError' | 'SpamNotification' | 'OpenRelayTest' | 'Unknown' | 'SoftBounce' | 'VirusNotification' | 'MailFrontier Matador.' | 'BadEmailAddress' | 'SpamComplaint' | 'ManuallyDeactivated' | 'Unconfirmed' | 'Blocked' | 'SMTPApiError' | 'InboundError' | 'DMARCPolicy' | 'TemplateRenderingFailed'`<a id="type-hardbounce--transient--unsubscribe--subscribe--autoresponder--addresschange--dnserror--spamnotification--openrelaytest--unknown--softbounce--virusnotification--mailfrontier-matador--bademailaddress--spamcomplaint--manuallydeactivated--unconfirmed--blocked--smtpapierror--inbounderror--dmarcpolicy--templaterenderingfailed"></a>

Filter by type of bounce

##### inactive: `boolean`<a id="inactive-boolean"></a>

Filter by emails that were deactivated by Postmark due to the bounce. Set to true or false. If this isn\'t specified it will return both active and inactive.

##### emailFilter: `string`<a id="emailfilter-string"></a>

Filter by email address

##### messageID: `string`<a id="messageid-string"></a>

Filter by messageID

##### tag: `string`<a id="tag-string"></a>

Filter by tag

##### todate: `string | Date`<a id="todate-string--date"></a>

Filter messages up to the date specified. e.g. `2014-02-01`

##### fromdate: `string | Date`<a id="fromdate-string--date"></a>

Filter messages starting from the date specified. e.g. `2014-02-01`

#### 🔄 Return<a id="🔄-return"></a>

[BounceSearchResponse](./models/bounce-search-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/bounces` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `postmark.inboundRulesApi.createTrigger`<a id="postmarkinboundrulesapicreatetrigger"></a>

Create an inbound rule trigger

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createTriggerResponse = await postmark.inboundRulesApi.createTrigger({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### Rule: `string`<a id="rule-string"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/triggers/inboundrules` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `postmark.inboundRulesApi.deleteSingleTrigger`<a id="postmarkinboundrulesapideletesingletrigger"></a>

Delete a single trigger

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteSingleTriggerResponse =
  await postmark.inboundRulesApi.deleteSingleTrigger({
    triggerid: 1,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### triggerid: `number`<a id="triggerid-number"></a>

The ID of the Inbound Rule that should be deleted.

#### 🔄 Return<a id="🔄-return"></a>

[StandardPostmarkResponse](./models/standard-postmark-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/triggers/inboundrules/{triggerid}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `postmark.inboundRulesApi.listTriggers`<a id="postmarkinboundrulesapilisttriggers"></a>

List inbound rule triggers

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listTriggersResponse = await postmark.inboundRulesApi.listTriggers({
  count: 1,
  offset: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### count: `number`<a id="count-number"></a>

Number of records to return per request.

##### offset: `number`<a id="offset-number"></a>

Number of records to skip.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/triggers/inboundrules` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `postmark.messagesApi.getAllClicks`<a id="postmarkmessagesapigetallclicks"></a>

Clicks for a all messages

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAllClicksResponse = await postmark.messagesApi.getAllClicks({
  count: 1,
  offset: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### count: `number`<a id="count-number"></a>

Number of message clicks to return per request. Max 500.

##### offset: `number`<a id="offset-number"></a>

Number of messages to skip

##### recipient: `string`<a id="recipient-string"></a>

Filter by To, Cc, Bcc

##### tag: `string`<a id="tag-string"></a>

Filter by tag

##### clientName: `string`<a id="clientname-string"></a>

Filter by client name, i.e. Outlook, Gmail

##### clientCompany: `string`<a id="clientcompany-string"></a>

Filter by company, i.e. Microsoft, Apple, Google

##### clientFamily: `string`<a id="clientfamily-string"></a>

Filter by client family, i.e. OS X, Chrome

##### osName: `string`<a id="osname-string"></a>

Filter by full OS name and specific version, i.e. OS X 10.9 Mavericks, Windows 7

##### osFamily: `string`<a id="osfamily-string"></a>

Filter by kind of OS used without specific version, i.e. OS X, Windows

##### osCompany: `string`<a id="oscompany-string"></a>

Filter by company which produced the OS, i.e. Apple Computer, Inc., Microsoft Corporation

##### platform: `string`<a id="platform-string"></a>

Filter by platform, i.e. webmail, desktop, mobile

##### country: `string`<a id="country-string"></a>

Filter by country messages were opened in, i.e. Denmark, Russia

##### region: `string`<a id="region-string"></a>

Filter by full name of region messages were opened in, i.e. Moscow, New York

##### city: `string`<a id="city-string"></a>

Filter by full name of region messages were opened in, i.e. Moscow, New York

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/messages/outbound/clicks` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `postmark.messagesApi.getInboundMessageDetails`<a id="postmarkmessagesapigetinboundmessagedetails"></a>

Inbound message details

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getInboundMessageDetailsResponse =
  await postmark.messagesApi.getInboundMessageDetails({
    messageid: "messageid_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### messageid: `string`<a id="messageid-string"></a>

The ID of the message for which to details will be retrieved.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/messages/inbound/{messageid}/details` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `postmark.messagesApi.getMessageClicks`<a id="postmarkmessagesapigetmessageclicks"></a>

Retrieve Message Clicks

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getMessageClicksResponse = await postmark.messagesApi.getMessageClicks({
  messageid: "messageid_example",
  count: 1,
  offset: 0,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### messageid: `string`<a id="messageid-string"></a>

The ID of the Outbound Message for which click statistics should be retrieved.

##### count: `number`<a id="count-number"></a>

Number of message clicks to return per request. Max 500.

##### offset: `number`<a id="offset-number"></a>

Number of messages to skip.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/messages/outbound/clicks/{messageid}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `postmark.messagesApi.getMessageDump`<a id="postmarkmessagesapigetmessagedump"></a>

Outbound message dump

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getMessageDumpResponse = await postmark.messagesApi.getMessageDump({
  messageid: "messageid_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### messageid: `string`<a id="messageid-string"></a>

The ID of the message for which to retrieve a dump.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/messages/outbound/{messageid}/dump` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `postmark.messagesApi.getMessageOpens`<a id="postmarkmessagesapigetmessageopens"></a>

Retrieve Message Opens

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getMessageOpensResponse = await postmark.messagesApi.getMessageOpens({
  messageid: "messageid_example",
  count: 1,
  offset: 0,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### messageid: `string`<a id="messageid-string"></a>

The ID of the Outbound Message for which open statistics should be retrieved.

##### count: `number`<a id="count-number"></a>

Number of message opens to return per request. Max 500.

##### offset: `number`<a id="offset-number"></a>

Number of messages to skip.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/messages/outbound/opens/{messageid}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `postmark.messagesApi.getOutboundMessageDetails`<a id="postmarkmessagesapigetoutboundmessagedetails"></a>

Outbound message details

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getOutboundMessageDetailsResponse =
  await postmark.messagesApi.getOutboundMessageDetails({
    messageid: "messageid_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### messageid: `string`<a id="messageid-string"></a>

The ID of the message for which to retrieve details.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/messages/outbound/{messageid}/details` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `postmark.messagesApi.listOpensForOutbound`<a id="postmarkmessagesapilistopensforoutbound"></a>

Opens for all messages

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listOpensForOutboundResponse =
  await postmark.messagesApi.listOpensForOutbound({
    count: 1,
    offset: 1,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### count: `number`<a id="count-number"></a>

Number of message opens to return per request. Max 500.

##### offset: `number`<a id="offset-number"></a>

Number of messages to skip

##### recipient: `string`<a id="recipient-string"></a>

Filter by To, Cc, Bcc

##### tag: `string`<a id="tag-string"></a>

Filter by tag

##### clientName: `string`<a id="clientname-string"></a>

Filter by client name, i.e. Outlook, Gmail

##### clientCompany: `string`<a id="clientcompany-string"></a>

Filter by company, i.e. Microsoft, Apple, Google

##### clientFamily: `string`<a id="clientfamily-string"></a>

Filter by client family, i.e. OS X, Chrome

##### osName: `string`<a id="osname-string"></a>

Filter by full OS name and specific version, i.e. OS X 10.9 Mavericks, Windows 7

##### osFamily: `string`<a id="osfamily-string"></a>

Filter by kind of OS used without specific version, i.e. OS X, Windows

##### osCompany: `string`<a id="oscompany-string"></a>

Filter by company which produced the OS, i.e. Apple Computer, Inc., Microsoft Corporation

##### platform: `string`<a id="platform-string"></a>

Filter by platform, i.e. webmail, desktop, mobile

##### country: `string`<a id="country-string"></a>

Filter by country messages were opened in, i.e. Denmark, Russia

##### region: `string`<a id="region-string"></a>

Filter by full name of region messages were opened in, i.e. Moscow, New York

##### city: `string`<a id="city-string"></a>

Filter by full name of region messages were opened in, i.e. Moscow, New York

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/messages/outbound/opens` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `postmark.messagesApi.retryInboundMessage`<a id="postmarkmessagesapiretryinboundmessage"></a>

Retry a failed inbound message for processing

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const retryInboundMessageResponse =
  await postmark.messagesApi.retryInboundMessage({
    messageid: "messageid_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### messageid: `string`<a id="messageid-string"></a>

The ID of the inbound message on which we should retry processing.

#### 🔄 Return<a id="🔄-return"></a>

[StandardPostmarkResponse](./models/standard-postmark-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/messages/inbound/{messageid}/retry` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `postmark.messagesApi.searchInboundMessages`<a id="postmarkmessagesapisearchinboundmessages"></a>

Inbound message search

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const searchInboundMessagesResponse =
  await postmark.messagesApi.searchInboundMessages({
    count: 1,
    offset: 1,
    status: "blocked",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### count: `number`<a id="count-number"></a>

Number of messages to return per request. Max 500.

##### offset: `number`<a id="offset-number"></a>

Number of messages to skip

##### recipient: `string`<a id="recipient-string"></a>

Filter by the user who was receiving the email

##### fromemail: `string`<a id="fromemail-string"></a>

Filter by the sender email address

##### subject: `string`<a id="subject-string"></a>

Filter by email subject

##### mailboxhash: `string`<a id="mailboxhash-string"></a>

Filter by mailboxhash

##### tag: `string`<a id="tag-string"></a>

Filter by tag

##### status: `'blocked' | 'processed' | 'queued' | 'failed' | 'scheduled'`<a id="status-blocked--processed--queued--failed--scheduled"></a>

Filter by status (`blocked`, `processed`, `queued`, `failed`, `scheduled`)

##### todate: `string | Date`<a id="todate-string--date"></a>

Filter messages up to the date specified. e.g. `2014-02-01`

##### fromdate: `string | Date`<a id="fromdate-string--date"></a>

Filter messages starting from the date specified. e.g. `2014-02-01`

#### 🔄 Return<a id="🔄-return"></a>

[InboundSearchResponse](./models/inbound-search-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/messages/inbound` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `postmark.messagesApi.searchOutboundMessages`<a id="postmarkmessagesapisearchoutboundmessages"></a>

Outbound message search

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const searchOutboundMessagesResponse =
  await postmark.messagesApi.searchOutboundMessages({
    count: 1,
    offset: 1,
    status: "queued",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### count: `number`<a id="count-number"></a>

Number of messages to return per request. Max 500.

##### offset: `number`<a id="offset-number"></a>

Number of messages to skip

##### recipient: `string`<a id="recipient-string"></a>

Filter by the user who was receiving the email

##### fromemail: `string`<a id="fromemail-string"></a>

Filter by the sender email address

##### tag: `string`<a id="tag-string"></a>

Filter by tag

##### status: `'queued' | 'sent'`<a id="status-queued--sent"></a>

Filter by status (`queued` or `sent`)

##### todate: `string | Date`<a id="todate-string--date"></a>

Filter messages up to the date specified. e.g. `2014-02-01`

##### fromdate: `string | Date`<a id="fromdate-string--date"></a>

Filter messages starting from the date specified. e.g. `2014-02-01`

#### 🔄 Return<a id="🔄-return"></a>

[OutboundSearchResponse](./models/outbound-search-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/messages/outbound` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `postmark.messagesApi.updateBypassRulesForInboundMessage`<a id="postmarkmessagesapiupdatebypassrulesforinboundmessage"></a>

Bypass rules for a blocked inbound message

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateBypassRulesForInboundMessageResponse =
  await postmark.messagesApi.updateBypassRulesForInboundMessage({
    messageid: "messageid_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### messageid: `string`<a id="messageid-string"></a>

The ID of the message which should bypass inbound rules.

#### 🔄 Return<a id="🔄-return"></a>

[StandardPostmarkResponse](./models/standard-postmark-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/messages/inbound/{messageid}/bypass` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `postmark.sendingApi.sendBatchEmails`<a id="postmarksendingapisendbatchemails"></a>

Send a batch of emails

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const sendBatchEmailsResponse = await postmark.sendingApi.sendBatchEmails([
  null,
]);
```

#### ⚙️ Request Body<a id="⚙️-request-body"></a>

[`SendEmailRequest`](./models/send-email-request.ts)[]

#### 🔄 Return<a id="🔄-return"></a>

[SendEmailResponse](./models/send-email-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/email/batch` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `postmark.sendingApi.sendBatchWithTemplates`<a id="postmarksendingapisendbatchwithtemplates"></a>

Send a batch of email using templates.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const sendBatchWithTemplatesResponse =
  await postmark.sendingApi.sendBatchWithTemplates({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### Messages: [`EmailWithTemplateRequest`](./models/email-with-template-request.ts)[]<a id="messages-emailwithtemplaterequestmodelsemail-with-template-requestts"></a>

#### 🔄 Return<a id="🔄-return"></a>

[SendEmailResponse](./models/send-email-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/email/batchWithTemplates` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `postmark.sendingApi.sendEmailTemplate`<a id="postmarksendingapisendemailtemplate"></a>

Send an email using a Template

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const sendEmailTemplateResponse = await postmark.sendingApi.sendEmailTemplate({
  From: "From_example",
  InlineCss: true,
  TemplateAlias: "TemplateAlias_example",
  TemplateId: 1,
  TemplateModel: {},
  To: "To_example",
  TrackLinks: "None",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### From: `string`<a id="from-string"></a>

##### TemplateAlias: `string`<a id="templatealias-string"></a>

Required if \\\'TemplateId\\\' is not specified.

##### TemplateId: `number`<a id="templateid-number"></a>

Required if \\\'TemplateAlias\\\' is not specified.

##### TemplateModel: `object`<a id="templatemodel-object"></a>

##### To: `string`<a id="to-string"></a>

##### Attachments: [`Attachment`](./models/attachment.ts)[]<a id="attachments-attachmentmodelsattachmentts"></a>

##### Bcc: `string`<a id="bcc-string"></a>

##### Cc: `string`<a id="cc-string"></a>

##### Headers: [`MessageHeader`](./models/message-header.ts)[]<a id="headers-messageheadermodelsmessage-headerts"></a>

##### InlineCss: `boolean`<a id="inlinecss-boolean"></a>

##### ReplyTo: `string`<a id="replyto-string"></a>

##### Tag: `string`<a id="tag-string"></a>

##### TrackLinks: `string`<a id="tracklinks-string"></a>

Replace links in content to enable \\\"click tracking\\\" stats. Default is \\\'null\\\', which uses the server\\\'s LinkTracking setting\\\'.

##### TrackOpens: `boolean`<a id="trackopens-boolean"></a>

Activate open tracking for this email.

#### 🔄 Return<a id="🔄-return"></a>

[SendEmailResponse](./models/send-email-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/email/withTemplate` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `postmark.sendingApi.sendSingleEmail`<a id="postmarksendingapisendsingleemail"></a>

Send a single email

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const sendSingleEmailResponse = await postmark.sendingApi.sendSingleEmail({
  TrackLinks: "None",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### Attachments: [`Attachment`](./models/attachment.ts)[]<a id="attachments-attachmentmodelsattachmentts"></a>

##### Bcc: `string`<a id="bcc-string"></a>

Bcc recipient email address. Multiple addresses are comma seperated. Max 50.

##### Cc: `string`<a id="cc-string"></a>

Recipient email address. Multiple addresses are comma seperated. Max 50.

##### From: `string`<a id="from-string"></a>

The sender email address. Must have a registered and confirmed Sender Signature.

##### Headers: [`MessageHeader`](./models/message-header.ts)[]<a id="headers-messageheadermodelsmessage-headerts"></a>

##### HtmlBody: `string`<a id="htmlbody-string"></a>

If no TextBody specified HTML email message

##### ReplyTo: `string`<a id="replyto-string"></a>

Reply To override email address. Defaults to the Reply To set in the sender signature.

##### Subject: `string`<a id="subject-string"></a>

Email Subject

##### Tag: `string`<a id="tag-string"></a>

Email tag that allows you to categorize outgoing emails and get detailed statistics.

##### TextBody: `string`<a id="textbody-string"></a>

If no HtmlBody specified Plain text email message

##### To: `string`<a id="to-string"></a>

Recipient email address. Multiple addresses are comma seperated. Max 50.

##### TrackLinks: `string`<a id="tracklinks-string"></a>

Replace links in content to enable \\\"click tracking\\\" stats. Default is \\\'null\\\', which uses the server\\\'s LinkTracking setting\\\'.

##### TrackOpens: `boolean`<a id="trackopens-boolean"></a>

Activate open tracking for this email.

#### 🔄 Return<a id="🔄-return"></a>

[SendEmailResponse](./models/send-email-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/email` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `postmark.serverConfigurationApi.getConfiguration`<a id="postmarkserverconfigurationapigetconfiguration"></a>

Get Server Configuration

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getConfigurationResponse =
  await postmark.serverConfigurationApi.getConfiguration();
```

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/server` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `postmark.serverConfigurationApi.updateConfiguration`<a id="postmarkserverconfigurationapiupdateconfiguration"></a>

Edit Server Configuration

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateConfigurationResponse =
  await postmark.serverConfigurationApi.updateConfiguration({
    Color: "purple",
    TrackLinks: "None",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### BounceHookUrl: `string`<a id="bouncehookurl-string"></a>

##### ClickHookUrl: `string`<a id="clickhookurl-string"></a>

Webhook url allowing real-time notification when tracked links are clicked.

##### Color: `string`<a id="color-string"></a>

##### DeliveryHookUrl: `string`<a id="deliveryhookurl-string"></a>

##### InboundDomain: `string`<a id="inbounddomain-string"></a>

##### InboundHookUrl: `string`<a id="inboundhookurl-string"></a>

##### InboundSpamThreshold: `number`<a id="inboundspamthreshold-number"></a>

##### Name: `string`<a id="name-string"></a>

##### OpenHookUrl: `string`<a id="openhookurl-string"></a>

##### PostFirstOpenOnly: `boolean`<a id="postfirstopenonly-boolean"></a>

##### RawEmailEnabled: `boolean`<a id="rawemailenabled-boolean"></a>

##### SmtpApiActivated: `boolean`<a id="smtpapiactivated-boolean"></a>

##### TrackLinks: `string`<a id="tracklinks-string"></a>

##### TrackOpens: `boolean`<a id="trackopens-boolean"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/server` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `postmark.statsApi.getBounceCounts`<a id="postmarkstatsapigetbouncecounts"></a>

Get bounce counts

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getBounceCountsResponse = await postmark.statsApi.getBounceCounts({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### tag: `string`<a id="tag-string"></a>

Filter by tag

##### fromdate: `string | Date`<a id="fromdate-string--date"></a>

Filter stats starting from the date specified. e.g. `2014-01-01`

##### todate: `string | Date`<a id="todate-string--date"></a>

Filter stats up to the date specified. e.g. `2014-02-01`

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/stats/outbound/bounces` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `postmark.statsApi.getBrowserPlatformUsage`<a id="postmarkstatsapigetbrowserplatformusage"></a>

Get browser plaform usage

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getBrowserPlatformUsageResponse =
  await postmark.statsApi.getBrowserPlatformUsage({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### tag: `string`<a id="tag-string"></a>

Filter by tag

##### fromdate: `string | Date`<a id="fromdate-string--date"></a>

Filter stats starting from the date specified. e.g. `2014-01-01`

##### todate: `string | Date`<a id="todate-string--date"></a>

Filter stats up to the date specified. e.g. `2014-02-01`

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/stats/outbound/clicks/platforms` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `postmark.statsApi.getEmailClientUsage`<a id="postmarkstatsapigetemailclientusage"></a>

Get email client usage

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getEmailClientUsageResponse = await postmark.statsApi.getEmailClientUsage(
  {}
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### tag: `string`<a id="tag-string"></a>

Filter by tag

##### fromdate: `string | Date`<a id="fromdate-string--date"></a>

Filter stats starting from the date specified. e.g. `2014-01-01`

##### todate: `string | Date`<a id="todate-string--date"></a>

Filter stats up to the date specified. e.g. `2014-02-01`

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/stats/outbound/opens/emailclients` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `postmark.statsApi.getEmailOpenCounts`<a id="postmarkstatsapigetemailopencounts"></a>

Get email open counts

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getEmailOpenCountsResponse = await postmark.statsApi.getEmailOpenCounts(
  {}
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### tag: `string`<a id="tag-string"></a>

Filter by tag

##### fromdate: `string | Date`<a id="fromdate-string--date"></a>

Filter stats starting from the date specified. e.g. `2014-01-01`

##### todate: `string | Date`<a id="todate-string--date"></a>

Filter stats up to the date specified. e.g. `2014-02-01`

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/stats/outbound/opens` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `postmark.statsApi.getEmailPlatformUsage`<a id="postmarkstatsapigetemailplatformusage"></a>

Get email platform usage

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getEmailPlatformUsageResponse =
  await postmark.statsApi.getEmailPlatformUsage({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### tag: `string`<a id="tag-string"></a>

Filter by tag

##### fromdate: `string | Date`<a id="fromdate-string--date"></a>

Filter stats starting from the date specified. e.g. `2014-01-01`

##### todate: `string | Date`<a id="todate-string--date"></a>

Filter stats up to the date specified. e.g. `2014-02-01`

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/stats/outbound/opens/platforms` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `postmark.statsApi.getOutboundClickCounts`<a id="postmarkstatsapigetoutboundclickcounts"></a>

Get click counts

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getOutboundClickCountsResponse =
  await postmark.statsApi.getOutboundClickCounts({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### tag: `string`<a id="tag-string"></a>

Filter by tag

##### fromdate: `string | Date`<a id="fromdate-string--date"></a>

Filter stats starting from the date specified. e.g. `2014-01-01`

##### todate: `string | Date`<a id="todate-string--date"></a>

Filter stats up to the date specified. e.g. `2014-02-01`

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/stats/outbound/clicks` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `postmark.statsApi.getOutboundClicksBrowserFamilies`<a id="postmarkstatsapigetoutboundclicksbrowserfamilies"></a>

Get browser usage by family

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getOutboundClicksBrowserFamiliesResponse =
  await postmark.statsApi.getOutboundClicksBrowserFamilies({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### tag: `string`<a id="tag-string"></a>

Filter by tag

##### fromdate: `string | Date`<a id="fromdate-string--date"></a>

Filter stats starting from the date specified. e.g. `2014-01-01`

##### todate: `string | Date`<a id="todate-string--date"></a>

Filter stats up to the date specified. e.g. `2014-02-01`

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/stats/outbound/clicks/browserfamilies` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `postmark.statsApi.getOutboundClicksLocation`<a id="postmarkstatsapigetoutboundclickslocation"></a>

Get clicks by body location

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getOutboundClicksLocationResponse =
  await postmark.statsApi.getOutboundClicksLocation({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### tag: `string`<a id="tag-string"></a>

Filter by tag

##### fromdate: `string | Date`<a id="fromdate-string--date"></a>

Filter stats starting from the date specified. e.g. `2014-01-01`

##### todate: `string | Date`<a id="todate-string--date"></a>

Filter stats up to the date specified. e.g. `2014-02-01`

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/stats/outbound/clicks/location` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `postmark.statsApi.getOutboundOverview`<a id="postmarkstatsapigetoutboundoverview"></a>

Get outbound overview

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getOutboundOverviewResponse = await postmark.statsApi.getOutboundOverview(
  {}
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### tag: `string`<a id="tag-string"></a>

Filter by tag

##### fromdate: `string | Date`<a id="fromdate-string--date"></a>

Filter stats starting from the date specified. e.g. `2014-01-01`

##### todate: `string | Date`<a id="todate-string--date"></a>

Filter stats up to the date specified. e.g. `2014-02-01`

#### 🔄 Return<a id="🔄-return"></a>

[OutboundOverviewStatsResponse](./models/outbound-overview-stats-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/stats/outbound` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `postmark.statsApi.getSentCounts`<a id="postmarkstatsapigetsentcounts"></a>

Get sent counts

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getSentCountsResponse = await postmark.statsApi.getSentCounts({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### tag: `string`<a id="tag-string"></a>

Filter by tag

##### fromdate: `string | Date`<a id="fromdate-string--date"></a>

Filter stats starting from the date specified. e.g. `2014-01-01`

##### todate: `string | Date`<a id="todate-string--date"></a>

Filter stats up to the date specified. e.g. `2014-02-01`

#### 🔄 Return<a id="🔄-return"></a>

[SentCountsResponse](./models/sent-counts-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/stats/outbound/sends` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `postmark.statsApi.getSpamComplaints`<a id="postmarkstatsapigetspamcomplaints"></a>

Get spam complaints

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getSpamComplaintsResponse = await postmark.statsApi.getSpamComplaints({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### tag: `string`<a id="tag-string"></a>

Filter by tag

##### fromdate: `string | Date`<a id="fromdate-string--date"></a>

Filter stats starting from the date specified. e.g. `2014-01-01`

##### todate: `string | Date`<a id="todate-string--date"></a>

Filter stats up to the date specified. e.g. `2014-02-01`

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/stats/outbound/spam` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `postmark.statsApi.getTrackedEmailCounts`<a id="postmarkstatsapigettrackedemailcounts"></a>

Get tracked email counts

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getTrackedEmailCountsResponse =
  await postmark.statsApi.getTrackedEmailCounts({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### tag: `string`<a id="tag-string"></a>

Filter by tag

##### fromdate: `string | Date`<a id="fromdate-string--date"></a>

Filter stats starting from the date specified. e.g. `2014-01-01`

##### todate: `string | Date`<a id="todate-string--date"></a>

Filter stats starting from the date specified. e.g. `2014-01-01`

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/stats/outbound/tracked` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `postmark.templatesApi.createTemplate`<a id="postmarktemplatesapicreatetemplate"></a>

Create a Template

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createTemplateResponse = await postmark.templatesApi.createTemplate({
  Name: "Name_example",
  Subject: "Subject_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### Name: `string`<a id="name-string"></a>

The friendly display name for the template.

##### Subject: `string`<a id="subject-string"></a>

The Subject template definition for this Template.

##### Alias: `string`<a id="alias-string"></a>

The optional string identifier for referring to this Template (numbers, letters, and \\\'.\\\', \\\'-\\\', \\\'_\\\' characters, starts with a letter).

##### HtmlBody: `string`<a id="htmlbody-string"></a>

The HTML template definition for this Template.

##### TextBody: `string`<a id="textbody-string"></a>

The Text template definition for this Template.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/templates` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `postmark.templatesApi.deleteTemplate`<a id="postmarktemplatesapideletetemplate"></a>

Delete a Template

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteTemplateResponse = await postmark.templatesApi.deleteTemplate({
  templateIdOrAlias: "templateIdOrAlias_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### templateIdOrAlias: `string`<a id="templateidoralias-string"></a>

The \'TemplateID\' or \'Alias\' value for the Template you wish to delete.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/templates/{templateIdOrAlias}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `postmark.templatesApi.getTemplateById`<a id="postmarktemplatesapigettemplatebyid"></a>

Get a Template

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getTemplateByIdResponse = await postmark.templatesApi.getTemplateById({
  templateIdOrAlias: "templateIdOrAlias_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### templateIdOrAlias: `string`<a id="templateidoralias-string"></a>

The \'TemplateID\' or \'Alias\' value for the Template you wish to retrieve.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/templates/{templateIdOrAlias}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `postmark.templatesApi.listTemplates`<a id="postmarktemplatesapilisttemplates"></a>

Get the Templates associated with this Server

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listTemplatesResponse = await postmark.templatesApi.listTemplates({
  count: 3.14,
  offset: 3.14,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### count: `number`<a id="count-number"></a>

The number of Templates to return

##### offset: `number`<a id="offset-number"></a>

The number of Templates to \"skip\" before returning results.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/templates` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `postmark.templatesApi.sendBatchWithTemplates`<a id="postmarktemplatesapisendbatchwithtemplates"></a>

Send a batch of email using templates.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const sendBatchWithTemplatesResponse =
  await postmark.templatesApi.sendBatchWithTemplates({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### Messages: [`EmailWithTemplateRequest`](./models/email-with-template-request.ts)[]<a id="messages-emailwithtemplaterequestmodelsemail-with-template-requestts"></a>

#### 🔄 Return<a id="🔄-return"></a>

[SendEmailResponse](./models/send-email-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/email/batchWithTemplates` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `postmark.templatesApi.sendEmailTemplate`<a id="postmarktemplatesapisendemailtemplate"></a>

Send an email using a Template

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const sendEmailTemplateResponse = await postmark.templatesApi.sendEmailTemplate(
  {
    From: "From_example",
    InlineCss: true,
    TemplateAlias: "TemplateAlias_example",
    TemplateId: 1,
    TemplateModel: {},
    To: "To_example",
    TrackLinks: "None",
  }
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### From: `string`<a id="from-string"></a>

##### TemplateAlias: `string`<a id="templatealias-string"></a>

Required if \\\'TemplateId\\\' is not specified.

##### TemplateId: `number`<a id="templateid-number"></a>

Required if \\\'TemplateAlias\\\' is not specified.

##### TemplateModel: `object`<a id="templatemodel-object"></a>

##### To: `string`<a id="to-string"></a>

##### Attachments: [`Attachment`](./models/attachment.ts)[]<a id="attachments-attachmentmodelsattachmentts"></a>

##### Bcc: `string`<a id="bcc-string"></a>

##### Cc: `string`<a id="cc-string"></a>

##### Headers: [`MessageHeader`](./models/message-header.ts)[]<a id="headers-messageheadermodelsmessage-headerts"></a>

##### InlineCss: `boolean`<a id="inlinecss-boolean"></a>

##### ReplyTo: `string`<a id="replyto-string"></a>

##### Tag: `string`<a id="tag-string"></a>

##### TrackLinks: `string`<a id="tracklinks-string"></a>

Replace links in content to enable \\\"click tracking\\\" stats. Default is \\\'null\\\', which uses the server\\\'s LinkTracking setting\\\'.

##### TrackOpens: `boolean`<a id="trackopens-boolean"></a>

Activate open tracking for this email.

#### 🔄 Return<a id="🔄-return"></a>

[SendEmailResponse](./models/send-email-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/email/withTemplate` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `postmark.templatesApi.updateTemplate`<a id="postmarktemplatesapiupdatetemplate"></a>

Update a Template

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateTemplateResponse = await postmark.templatesApi.updateTemplate({
  templateIdOrAlias: "templateIdOrAlias_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### templateIdOrAlias: `string`<a id="templateidoralias-string"></a>

The \'TemplateID\' or \'Alias\' value for the Template you wish to update.

##### Alias: `string`<a id="alias-string"></a>

The optional string identifier for referring to this Template (numbers, letters, and \\\'.\\\', \\\'-\\\', \\\'_\\\' characters, starts with a letter).

##### HtmlBody: `string`<a id="htmlbody-string"></a>

The HTML template definition for this Template.

##### Name: `string`<a id="name-string"></a>

The friendly display name for the template.

##### Subject: `string`<a id="subject-string"></a>

The Subject template definition for this Template.

##### TextBody: `string`<a id="textbody-string"></a>

The Text template definition for this Template.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/templates/{templateIdOrAlias}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `postmark.templatesApi.validateTemplateContent`<a id="postmarktemplatesapivalidatetemplatecontent"></a>

Test Template Content

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const validateTemplateContentResponse =
  await postmark.templatesApi.validateTemplateContent({
    InlineCssForHtmlTestRender: true,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### HtmlBody: `string`<a id="htmlbody-string"></a>

The html body content to validate. Must be specified if Subject or TextBody are not. See our template language documentation for more information on the syntax for this field. 

##### InlineCssForHtmlTestRender: `boolean`<a id="inlinecssforhtmltestrender-boolean"></a>

When HtmlBody is specified, the test render will have style blocks inlined as style attributes on matching html elements. You may disable the css inlining behavior by passing false for this parameter. 

##### Subject: `string`<a id="subject-string"></a>

The subject content to validate. Must be specified if HtmlBody or TextBody are not. See our template language documentation for more information on the syntax for this field. 

##### TestRenderModel: `object`<a id="testrendermodel-object"></a>

The model to be used when rendering test content.

##### TextBody: `string`<a id="textbody-string"></a>

The text body content to validate. Must be specified if HtmlBody or Subject are not. See our template language documentation for more information on the syntax for this field. 

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/templates/validate` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


## Author<a id="author"></a>
This TypeScript package is automatically generated by [Konfig](https://konfigthis.com)

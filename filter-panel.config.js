/* @flow */

export const FILTER_TYPE: Object = {
  TEXT: 'text',
  SELECTIZE_SINGLE: 'selectize-single',
  SELECT_SINGLE: 'select-single',
  RADIO_GROUP: 'radio-group',
  NUMBER_RANGE: 'number-range',
  DATE_RANGE: 'date-range'
};

export const FILTER: Object = {
  APPROVAL_STATUS: {
    property: 'approvalStatus',
    values: 'approvalStatuses',
    title: 'filters.approvalStatus',
    type: FILTER_TYPE.RADIO_GROUP
  },
  UPLOAD_STATUS: {
    property: 'uploadStatus',
    values: 'statuses',
    title: 'filters.uploadStatus',
    type: FILTER_TYPE.RADIO_GROUP
  },
  STATUS: {
    property: 'status',
    values: 'statuses',
    title: 'filters.filterByStatus',
    type: FILTER_TYPE.RADIO_GROUP
  },
  DATE: {
    property: 'dateRange',
    title: 'filters.date',
    type: FILTER_TYPE.DATE_RANGE
  },
  UPLOAD_DATE: {
    property: 'dateRange',
    title: 'filters.uploadDate',
    type: FILTER_TYPE.DATE_RANGE
  },
  PAYMENT: {
    property: 'payment',
    title: 'filters.payment',
    values: 'payment',
    type: FILTER_TYPE.RADIO_GROUP
  },
  SUPPLIER: {
    property: 'supplierId',
    values: 'suppliers',
    title: 'filters.supplier',
    type: FILTER_TYPE.SELECTIZE_SINGLE,
    config: {
      maxItems: 1,
      valueField: 'id',
      labelField: 'name',
      sortField: 'name',
      searchField: ['name', 'code'],
      hideSelected: true,
      closeAfterSelect: true
    }
  },
  BUYER: {
    property: 'buyerId',
    values: 'buyers',
    title: 'filters.buyer',
    type: FILTER_TYPE.SELECTIZE_SINGLE,
    config: {
      maxItems: 1,
      valueField: 'id',
      labelField: 'name',
      sortField: 'name',
      searchField: ['name', 'code'],
      hideSelected: true,
      closeAfterSelect: true
    }
  },
  SUPPLIER_CREDIT_NOTE_NUMBER: {
    property: 'supplierCreditNoteNumber',
    title: 'filters.supplierCreditNoteNumber',
    type: FILTER_TYPE.TEXT
  },
  BUYER_CREDIT_NOTE_NUMBER: {
    property: 'buyerCreditNoteNumber',
    title: 'filters.buyerCreditNoteNumber',
    type: FILTER_TYPE.TEXT
  },
  CURRENCY: {
    property: 'currency',
    title: 'filters.currency',
    values: 'currencies',
    type: FILTER_TYPE.SELECT_SINGLE
  },
  INVOICE_NUMBER: {
    property: 'invoiceNumber',
    title: 'filters.invoiceNumber',
    type: FILTER_TYPE.TEXT
  },
  CERTIFIED_AMOUNT: {
    property: 'certifiedAmountRange',
    values: 'certifiedAmountRange',
    title: 'filters.certifiedAmount',
    config: {
      min: 0, // these are always positive amounts. Change to -9999999999999 otherwise
      max: 9999999999999.00
    },
    type: FILTER_TYPE.NUMBER_RANGE
  },
  ORIGINAL_AMOUNT: {
    property: 'originalAmountRange',
    title: 'filters.originalAmount',
    values: 'originalAmountRange',
    config: {
      min: 0, // these are always positive amounts. Change to -9999999999999 otherwise
      max: 9999999999999.00
    },
    type: FILTER_TYPE.NUMBER_RANGE
  },
  CREDIT_NOTE_ORIGINAL_AMOUNT: {
    property: 'originalAmountRange',
    title: 'filters.amount',
    values: 'originalAmountRange',
    config: {
      min: -9999999999999.00,
      max: 9999999999999.00
    },
    type: FILTER_TYPE.NUMBER_RANGE
  },
  DISCOUNT_AMOUNT: {
    property: 'discountAmountRange',
    values: 'discountAmountRange',
    title: 'filters.discountAmount',
    config: {
      min: 0, // these are always positive amounts. Change to -9999999999999 otherwise
      max: 9999999999999.00
    },
    type: FILTER_TYPE.NUMBER_RANGE
  },
  PAYABLE_NUMBER: {
    property: 'payableNumber',
    title: 'filters.payableNumber',
    type: FILTER_TYPE.TEXT
  },
  INVOICE_DATE: {
    property: 'invoiceDateRange',
    title: 'filters.invoiceDate',
    values: 'invoiceDateRange',
    type: FILTER_TYPE.DATE_RANGE
  },
  ISSUE_DATE: {
    property: 'issueDateRange',
    title: 'filters.issueDate',
    values: 'issueDateRange',
    type: FILTER_TYPE.DATE_RANGE
  },
  PAYMENT_DATE: {
    property: 'paymentDateRange',
    title: 'filters.paymentDate',
    values: 'paymentDateRange',
    type: FILTER_TYPE.DATE_RANGE
  },
  POSTING_DATE: {
    property: 'postingDateRange',
    title: 'filters.postingDate',
    values: 'postingDateRange',
    type: FILTER_TYPE.DATE_RANGE
  },
  TRANSFER_DATE: {
    property: 'transferDateRange',
    title: 'filters.transferDate',
    values: 'transferDateRange',
    type: FILTER_TYPE.DATE_RANGE
  },
  DUE_DATE: {
    property: 'dueDateRange',
    title: 'filters.dueDate',
    values: 'dueDateRange',
    type: FILTER_TYPE.DATE_RANGE
  },
  REPORT_TYPE: {
    property: 'reportType',
    values: 'reportTypes',
    title: 'filters.reportType',
    type: FILTER_TYPE.SELECT_SINGLE
  },
  REPORT_DATE: {
    property: 'reportDateRange',
    title: 'filters.reportDate',
    type: FILTER_TYPE.DATE_RANGE
  },
  LIMIT_CURRENCY: {
    property: 'currencyCode',
    title: 'filters.limitCurrency',
    values: 'currencies',
    type: FILTER_TYPE.SELECT_SINGLE
  }
};

// TODO: this will most likely need updating
export type FilterConfig = {
  property: string;
  values?: string;
  title: string;
  type: string; // defined in FILTER_TYPE constant
  hide?: boolean;
};

export type Filters = {
  default: FilterConfig[];
  advanced?: FilterConfig[];
};

export type FilterDefinition = {[key: string]: Filters};

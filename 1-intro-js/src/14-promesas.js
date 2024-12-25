
import { findInvoiceById } from './data/invoices';

findInvoiceById(3)
    .then(console.log)
    .catch(console.error);

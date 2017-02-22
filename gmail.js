'use strict';

var MailSearch = require('./mailsearch.js');

var imapConfig = {
  user: 'blahblah@gmail.com',
  password: 'blahblah',
  host: 'imap.gmail.com',
  port: 993,
  tls: true
}
console.log("executing....");
var ms = new MailSearch(imapConfig);

ms.search('INBOX', ['UNSEEN']).then(function(mails) {
  console.log('Total Inbox Count: :', mails.length);
});

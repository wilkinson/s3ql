# S3QL [![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/wilkinson/s3ql/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

This project will implement the
[S3QL](http://www.biomedcentral.com/1471-2105/12/285/) API for the
[Node.js](http://nodejs.org/) platform. The prototype will use
[PostgreSQL](http://www.postgresql.org/) for data storage initially, although
[SQLite](http://www.sqlite.org/) will also be targeted in the future. All
program logic for the governance model will be written in pure JavaScript. The
implementation will be embeddable into existing applications either as a
[Node.js module](https://npmjs.org/package/s3ql) or as a standalone program
completely accessible over HTTP via the S3QL API.

Please note that the project, in its current state, is a work-in-progress port
from a [PHP](http://www.php.net/) project called [S3DB](http://s3db.org), and
we do not yet recommend this port for use in production systems. This project's
goal is to "gut" S3DB and keep only its core model as a means to add a
governance layer to any arbitrary database. A number of wonderful database
projects have emerged in the last few years, but this project is not a database
-- it is an implementation of an API which seamlessly abstracts database calls
as governed by a formal mathematical model.

Get in touch if you're interesting in helping -- I have a wishlist with tasks
suitable for all skill levels :-)


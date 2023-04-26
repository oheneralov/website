# Bootstrap template for Next.js

## Run

```
npm run dev
```

Open http://localhost:3000/

## Code Structure Understanding
https://www.gyanblog.com/javascript/next-js-bootstrap-template-navbar-header/

## Screenshots
### Screenshots Home Page (/)

![Screenshot Index Page](./screenshot-index.png)

### Screenshots Articles Page (/articles)

![Screenshot Articles Page](./screenshot-articles.png)

### Screenshots Write Page (/write)

![Screenshot Write Page](./screenshot-write.png)

### nginx
/etc/nginx/sites-available

### clean journal
journalctl --disk-usage
If you decide to clear the logs, run command to rotate the journal files. All currently active journal files will be marked as archived, so that they are never written to in future.

sudo journalctl --rotate
 Now clear the journal logs by choosing one of following commands:

    Delete journal logs older than X days:

    sudo journalctl --vacuum-time=2days

    Delete log files until the disk space taken falls below the specified size:

    sudo journalctl --vacuum-size=100M

    Delete old logs and limit file number to X:

    sudo journalctl --vacuum-files=5



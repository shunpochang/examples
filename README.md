## Tutorial on using Django with React
#### We used Django to serve data through REST api, while using webpack-loader to bundle and expose React scripts.
*simple-demo: Basic tutorial of serving the initial server using Django and React.
*comment-demo: Tutorial covering linking Django data model to respond to server requests from React front-end with commenting.

###### Some basic set-up to run each tutorial after git cloning.

Setup virtualenv (optional)
```bash
virtualenv ve
. ve/bin/activate
```

Install dependencies for Javascript (using npm) and Python (using pip) modules.
```bash
npm install
pip install -r requirements.txt
```

Run webpack compiler to bundle and serve static files (add --watch flag to continuously track change).
```bash
./node_modules/.bin/webpack --config webpack.config.js
```

Run django server (add 0.0.0.0:{port_number} if you want to share server access)
```bash
./manage.py runserver
```

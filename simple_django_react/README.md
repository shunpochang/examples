## Usage
### Part I building a simple demo with Django and React using webpack, mainly leveraging example from https://github.com/owais/django-webpack-loader/tree/master/examples.
### Also included a simple inline integration of CSS.

Setup virtualenv (optional)
```bash
virtualenv ve
. ve/bin/activate
```

Install dependencies
```bash
npm install
pip install -r requirements.txt
```

Run continuous webpack compiler to get main.js with inline CSS.
```bash
./node_modules/.bin/webpack --config webpack.config.js --watch
```

Run django server
```bash
./manage.py runserver
```

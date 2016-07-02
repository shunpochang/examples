## Usage
### Part II of using Django and React, to show how to implement comment tutorial from React https://facebook.github.io/react/docs/tutorial.html. 
### Also included a simple link to CSS.

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

Run continuous webpack compiler to get static files.
```bash
./node_modules/.bin/webpack --config webpack.config.js --watch
```

Create django db table.
```bash
./manage.py makemigrations comment
./manage.py migrate
```

Run django server
```bash
./manage.py runserver
```

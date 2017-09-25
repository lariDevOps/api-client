# Lari Api Client

Install
```javascript
npm install lari-api-client
```


Create routes config file:
```javascript
// routes.js
export default {
    options: {
        prefix: '/api/'
    },
    GET: {
        search: 'search'
    },
    POST: {
        test: 'test/route'
    },
    UPDATE: {},
    DELETE: {},
    RESOURCE: {
        products: 'products'
    }
}
```

Initialize api

```javascript
import Api from 'lari-api-client';
import axios from 'axios';
import routes from './routes';

export default new Api(
    axios, routes
);

```

Example use:

```javascript
api.get('test', parameters)
api.post('test', payload, parameters)
api.delete('test', parameters)
api.update('test', payload, parameters)
```

```javascript
api.resource('products').index(parameters)
api.resource('products').store(payload, parameters)
api.resource('products').show(id, parameters)
api.resource('products').update(id, payload, parameters)
api.resource('products').delete(id, parameters)
```

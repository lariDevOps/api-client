import Resource from './Resource'

export default class Api {
    /**
     * @param client
     */
    constructor(client) {
        this.client = client
    }

    /**
     * @param $name
     * @param $parameters
     */
    get($name, $parameters = '') {
        $name = this.findUrl('GET', $name)

        return this.client.get(
            this.url($name, $parameters)
        )
    }

    /**
     * @param $name
     * @param $payload
     * @param $parameters
     * @returns {*|AxiosPromise}
     */
    post($name, $payload, $parameters = '') {
        $name = this.findUrl('POST', $name)

        return this.client.post(
            this.url($name, $parameters), $payload
        )
    }

    /**
     * @param $name
     * @param $parameters
     */
    delete($name, $parameters = '') {
        $name = this.findUrl('DELETE', $name)

        return this.client.delete(
            this.url($name, $parameters)
        )
    }

    /**
     * @param $name
     * @param $payload
     * @param $parameters
     * @returns {AxiosPromise}
     */
    update($name, $payload, $parameters = '') {
        $name = this.findUrl('UPDATE', $name)

        return this.client.patch(
            this.url($name, $parameters), $payload
        )
    }

    /**
     * @param $name
     * @returns {ApiResource}
     */
    resource($name) {
        return new Resource(this, $name, routes)
    }

    /**
     * @param method
     * @param name
     * @returns {*}
     */
    findUrl(method, name) {
        try {
            if (routes[method][name]) {
                return routes[method][name]
            }
        } catch(error) {
            return name
        }


        return name
    }

    /**
     * @param $uri
     * @param $parameters
     * @returns {string}
     */
    url($uri, $parameters) {
        let $suffix;
        if (Object.prototype.toString.call($parameters) === '[object Object]') {
            $suffix = '?';

            Object.keys($parameters).forEach((key) => {
                $suffix += `${key}=${$parameters[key]}`
        })

            $parameters = $suffix
        }

        return routes.options.prefix + $uri + $parameters;
    }
}
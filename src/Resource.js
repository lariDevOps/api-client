export default class Resource {
    /**
     * @param $api
     * @param $name
     */
    constructor($api, $name, routes) {
        this.routes = routes
        this.api = $api
        this.resource = this.find($name)
    }

    /**
     * @param $name
     * @returns {*}
     */
    find($name){
        if(this.routes.RESOURCE[$name]){
            return this.routes.RESOURCE[$name]
        }

        console.error(`Resource "${$name}" was not found`)
    }

    /**
     * @param $parameters
     */
    index($parameters = ''){
        return this.api.get(this.resource, $parameters)
    }

    /**
     * @param $payload
     * @param $parameters
     * @returns {*|AxiosPromise}
     */
    store($payload, $parameters = ''){
        return this.api.post(this.resource, $payload, $parameters)
    }

    /**
     * @param $id
     * @param $parameters
     */
    show($id, $parameters = ''){
        return this.api.get(this.resource, '/'+$id)
    }

    /**
     * @param $id
     * @param $parameters
     */
    delete($id, $parameters = ''){
        return this.api.delete(this.resource+'/'+$id, $parameters)
    }

    /**
     * @param $id
     * @param $payload
     * @param $parameters
     */
    update($id, $payload, $parameters = ''){
        return this.api.update(this.resource+'/'+$id, $payload, $parameters)
    }
}
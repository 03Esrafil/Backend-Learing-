class APIRESPONCEHandler{
    constructor(statusCode, data,message="Success"){
        this.statusCode=statusCode
        this.data=data
        this.message=message
        this.Success=statusCode<400

    }
}
class APIERRHandler extends Error{
    constructor(
        statusCode,
        message="Somthing went wrong",
        errors=[],
        statck=""

    ){
        super(message)
        this.message=message
        this.statusCode=statusCode
        this.data=null
        this.errors=errors
        this.Success=false

        if(statck){
            this.stack=statck
        }else{
            Error.captureStackTrace(this,this.constructor)
        }



    }
}

export {APIERRHandler}
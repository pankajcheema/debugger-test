import * as express from 'express';
class TestController {
    constructer(){
        console.log("test controller constructer called");
    }
    public TestFunction(request: express.Request, response: express.Response){
        console.log("Controller function called");
    }
}
export  {TestController};
import express from 'express'

const logger = (req: express.Request, res: express.Response, next: Function):void => {
    let url = req.url;
    console.log(`the url ${url} was visited`);
    next();
}

export default logger;
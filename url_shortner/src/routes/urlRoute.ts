//import { Router } from 'express';
import { Router,Request, Response } from 'express';
import UrlController from '../controllers/urlController';

const router = Router();
const urlController = new UrlController();

router.get("/", (req:Request,res:Response)=>{
    res.status(200).send("App is currectly running")

})
router.get('/:shortId', urlController.getOriginalUrlHandler);
router.get('/get/urls', urlController.getAllUrlsHandler);
router.post('/shorten', urlController.createShortUrlHandler);


export default router;
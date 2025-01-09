import { Request, Response, NextFunction } from 'express';
import catchAsync from '../common/error-handler/catchAsyncError';
import * as urlModel from '../models/urlModel';

class UrlController {
  
  createShortUrlHandler = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { url: longUrl } = req.body;
      if (!longUrl) {
        return res.status(400).json({ error: 'URL is required' });
      }


      let shortId = urlModel.findLongUrl(longUrl);
      if (shortId) {
        return res.status(400).json({ error: 'This URL has already been shortened.' });
      }
      if (!shortId) {
        shortId = urlModel.generateShortId();
        while (urlModel.findShortId(shortId)) {
          shortId = urlModel.generateShortId();
        }
        urlModel.addUrlMapping(shortId, longUrl);
      }

      const baseUrl = 'http://localhost:5000/'; 
      const shortUrl = `${baseUrl}${shortId}.com`;

      res.status(201).send({
        message: "Short Url Id Created Successfully",
        status: true,
        shortId: shortId,
        shortUrl: shortUrl
    });

    } catch (err) {
      res.status(500).json({
        error: 'Could not create a short URL',
        err,
        route: '/shorten'
      });
    }
  });

  
  getOriginalUrlHandler = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { shortId } = req.params;
      const longUrl = urlModel.findShortId(shortId);

      if (!longUrl) {
        return res.status(404).json({ error: 'URL not found' });
      }

      res.status(201).send({
        message: "Longurl retrieved Successfully,click on the longUrl link to teleport to the initial web page",
        status: true,
        longUrl: longUrl
    });

    } catch (err) {
      res.status(500).json({
        error: 'Could not retrieve the original URL',
        err,
        route: `/${req.params.shortId}`
      });
    }
  });

  getAllUrlsHandler = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    try {
      const allUrls = urlModel.getAllUrls();
      res.status(200).json({ urls: allUrls });
    } catch (err) {
      res.status(500).json({
        error: 'Could not retrieve URLs',
        err,
        route: '/urls'
      });
    }
  });

 
}

export default UrlController;
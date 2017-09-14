import express from 'express';
import ENV from './../../config/environment';

const router = express.Router();

export default () => {

  // Wildcard Route Handler //
  // This should go last
  router.get('*', (req, res)=>{
    res.sendFile(`${ENV.ROOT_PATH}/dist/index.html`);
  });
  return router;
}

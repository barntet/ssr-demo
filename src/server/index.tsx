import express from 'express';
import childProcess from 'child_process';
import { renderToString } from 'react-dom/server';
import path from 'path';
import router from '@/router';
import { Route, Routes } from 'react-router-dom';
import { StaticRouter } from 'react-router-dom/server'; // 无状态路由， 因为服务端不同于客户端，浏览器历史记录会改变状态，同时将屏幕更新，但是服务端是不能改动到应用状态的，所以使用无状态路由
import { Helmet } from 'react-helmet';

const app = express();

app.use(express.static(path.resolve(process.cwd(), 'client_build')));

app.get('*', (req, res) => {
  const content = renderToString(
    <StaticRouter location={req.path}>
      <Routes>
        {router?.map((item, index) => {
          return <Route {...item} key={index} />;
        })}
      </Routes>
    </StaticRouter>
  );

  const helmet = Helmet.renderStatic();

  res.send(`
  <html>
        <head>
          ${helmet.title.toString()}
          ${helmet.meta.toString()}
        </head>
        <body>
          <div id="root">${content}</div>
          <script src="/index.js"></script>
        </body>
  </html>
  `);
});

app.listen(3000, () => {
  console.log('ssr-server listen on 3000');
});

childProcess.exec('start http://127.0.0.1:3000');

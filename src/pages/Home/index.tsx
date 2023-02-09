import { useNavigate } from 'react-router-dom';
// 因为存在客户端路由和服务端路由，所以服务端路由渲染通过不同的方式跳转也会采用不同的渲染方式，
// 当使用React内置的路由跳转的时候，会进行客户端路由的跳转，采用客户端渲染；
// 而通过a标签，或者原生方式打开一个新页面时候，才会进行服务端路由的跳转，使用服务器端渲染

import { Fragment } from 'react';
import { Helmet } from 'react-helmet';

const Home = () => {
  const navigate = useNavigate();

  return (
    <Fragment>
      <Helmet>
        <title>简易的服务端渲染 HOME</title>
        <meta name="description" content="服务端渲染"></meta>
      </Helmet>
      <div>
        <h1>hello-ssr</h1>
        <button
          onClick={(): void => {
            alert('hello');
          }}
        >
          alert
        </button>
        <a href="http://127.0.0.1:3000/demo">链接跳转</a>
        <span
          onClick={(): void => {
            navigate('/demo');
          }}
        >
          路由跳转
        </span>
      </div>
    </Fragment>
  );
};

export default Home;

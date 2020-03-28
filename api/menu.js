export default function (req, res, next) {
  const menu = [
    {
      label: 'Home',
      link: '/'
    },
    {
      label: 'asyncData simple',
      link: '/asyncData-basic'
    },
    {
      label: 'asyncData context',
      link: '/asyncData-context'
    },
    {
      label: 'blog (asyncData)',
      link: '/asyncData-blog'
    },
    {
      label: 'fetch basic',
      link: '/fetch-basic'
    },
    {
      label: 'blog (fetch)',
      link: '/fetch-blog'
    }
  ]
  // res is the Node.js http response object
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(menu));
}

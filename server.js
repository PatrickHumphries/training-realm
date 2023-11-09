const Hapi = require('@hapi/hapi');
const axios = require('axios');

const init = async () => {
  const server = Hapi.server({
    port: 3001,
    host: 'localhost',
  });

  server.route({
    method: 'GET',
    path: '/',
    handler: (request, h) => {
      return 'Hello, Hapi!';
    },
  });

  server.route({
    method: 'GET',
    path: '/random-cat',
    handler: async (request, h) => {
      try {
        const response = await axios.get('https://api.thecatapi.com/v1/images/search');
        const catImageUrl = response.data[0].url;
        return `<img src="${catImageUrl}" alt="Random Cat"/>`;
      } catch (error) {
        console.error(error);
        return 'Error fetching cat image';
      }
    },
  });

  await server.start();
  console.log('Server running on', server.info.uri);
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();

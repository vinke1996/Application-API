const HapiSwagger = require('hapi-swagger');
const Pack = require('../../package');

const options = {
  info: {
    'title': 'Weather Measure API. by Niels Vinke',
    'version': Pack.version,
  }
};

export default {
  plugin: HapiSwagger,
  options: options
}
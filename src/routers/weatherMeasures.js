import Models from '../models';
import Joi from 'joi'
import * as R from 'ramda'

const WeatherMeasure = Models.WeatherMeasure;
const path = '/weather_measures';

const columns = ['id', 'temperature', 'humidity', 'light', 'raining', 'moisture', 'created_at']

async function getWeatherMeasures (request, h) {
  try {
    const weatherMeasures = await WeatherMeasure
      .query()
      .select(columns)
      .orderBy('created_at', 'desc')
      .modify((queryBuilder) => {
        if(R.has('start_date', request.query) && R.has('end_date', request.query)) {
          queryBuilder.whereBetween('created_at', [request.query.start_date, request.query.end_date])
        }
      })

    return weatherMeasures;
  } catch (error) {
    console.error(error);
  }
}

async function postWeatherMeasures (request, h) {
  try {
    const weatherMeasures = await WeatherMeasure
      .query()
      .insert({
        temperature: request.payload.temperature,
        humidity: request.payload.humidity,
        light: request.payload.light,
        raining: request.payload.raining,
        moisture: request.payload.moisture
      });

    return weatherMeasures;
  } catch (error) {
    console.error(error);
  }
}

export default [

  {
    path: path ,
    method: 'GET',
    handler: getWeatherMeasures,
    options: {
      description: 'Get all weather measures',
      notes: 'Returns all weather measures',
      validate: {
        query: {
            start_date: Joi.date(),
            end_date: Joi.date()
        }
      },
      auth: false,
      tags: ['api']
    }
  },

  {
    path: path,
    method: 'POST',
    handler: postWeatherMeasures,
    config: {
      description: 'Create a new weather measures',
      notes: 'Create a new weather measures',
      validate: {
        payload: Joi.object({
            temperature: Joi.number().precision(2).required(),
            humidity: Joi.number().precision(2).required(),
            light: Joi.number().precision(0).required(),
            raining: Joi.string().required(),
            moisture: Joi.number().precision(0).required()
        })
      },
      auth: false,
      tags: ['api'],
      plugins: {
        'hapi-swagger': {
          payloadType: 'form'
        }
      }
    }
  }

];
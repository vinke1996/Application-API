import { Model } from 'objection';

export default class WeatherMeasure extends Model {
  
  static get tableName() {
    return 'weather_measures';
  }

  $beforeInsert () {
    this.created_at = new Date().toISOString();
  };
}
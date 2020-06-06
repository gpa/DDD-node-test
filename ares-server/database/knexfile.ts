import { join } from 'path';
process.env.NODE_CONFIG_DIR= join(__dirname, '/../config');
import * as config from 'config';
module.exports = config.get('database');

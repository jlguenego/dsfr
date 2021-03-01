/* eslint-disable no-new */
import api from '../../api.js';
import { build } from './table/build.js';
import { TABLE_SELECTOR } from './table/constants';

new api.Initializer(TABLE_SELECTOR, [build]);

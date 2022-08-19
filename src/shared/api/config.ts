import axios from 'axios';

import { createHttp } from 'effector-http-api';

const instance = axios.create();

const http = createHttp(instance);

export { http };

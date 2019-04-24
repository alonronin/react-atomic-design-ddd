import './style';
import { Router } from './router';
import routes from './routes';

Router(routes).catch(console.error);

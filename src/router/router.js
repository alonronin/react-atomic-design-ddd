import UniversalRouter from 'universal-router';
import { render } from 'react-dom';

import history from './history';

const Router = async routes => {
  const router = new UniversalRouter(routes);

  const route = async location => {
    const Page = await router.resolve(location.pathname);
    render(Page, document.body);
  };

  await route(history.location);
  history.listen(route);
};

export default Router;

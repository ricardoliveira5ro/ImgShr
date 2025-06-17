import { protectedRoutes } from "./middlewares/protectedRoutes";
import { stackMiddlewares } from "./middlewares/stackHandler";

const middlewares = [protectedRoutes];

export default stackMiddlewares(middlewares);
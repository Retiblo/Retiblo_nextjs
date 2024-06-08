import { NextResponse } from "next/server";

function middlewareFactory(
  middlewares: {
    matcher: string;
    handler: (request: NextResponse) => NextResponse;
  }[],
) {
  return function (request: NextResponse) {
    return (
      middlewares
        .find((middleware) => request.url.startsWith(middleware.matcher))
        ?.handler(request) || NextResponse.next()
    );
  };
}

/*
 *[
 * {matcher:"path",handler:function(request)}
 *]
 */
export default middlewareFactory([]);

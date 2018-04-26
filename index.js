'use strict';
module.exports = () => {
	return ctx => {
		if (!ctx.path && ctx.req.triggerSource === 'DefineAuthChallenge_Authentication') {
			const body = {
				req: ctx.req
			};

			ctx.request.body = body;

			Object.defineProperty(ctx, 'path', {enumerable: true, value: 'idp:DefineAuthChallenge'});
			Object.defineProperty(ctx, 'method', {enumerable: true, value: 'post'});
		}

		if (!ctx.path && ctx.req.triggerSource === 'CreateAuthChallenge_Authentication') {
			const body = {
				req: ctx.req
			};

			ctx.request.body = body;

			Object.defineProperty(ctx, 'path', {enumerable: true, value: 'idp:CreateAuthChallenge'});
			Object.defineProperty(ctx, 'method', {enumerable: true, value: 'post'});
		}

		if (!ctx.path && ctx.req.triggerSource === 'VerifyAuthChallengeResponse_Authentication') {
			const body = {
				req: ctx.req
			};

			ctx.request.body = body;

			Object.defineProperty(ctx, 'path', {enumerable: true, value: 'idp:VerifyAuthChallengeResponse'});
			Object.defineProperty(ctx, 'method', {enumerable: true, value: 'post'});
		}
	};
};

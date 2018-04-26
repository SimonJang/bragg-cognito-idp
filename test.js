import test from 'ava';
import m from '.';

const userAttributes = {
	sub: 'foo',
	name: 'Mr.'
};

let req;

const trigger = type => {
	const ctx = {
		request: {},
		req: {}
	};

	switch (type) {
		case 'define':
			req = {
				triggerSource: 'DefineAuthChallenge_Authentication',
				request: {
					userAttributes,
					session: []
				}
			};

			m()(Object.assign(ctx, {req}));

			return ctx;
		case 'create':
			req = {
				triggerSource: 'CreateAuthChallenge_Authentication',
				request: {
					userAttributes,
					challengeName: 'secureChallenge',
					session: []
				}
			};

			m()(Object.assign(ctx, {req}));

			return ctx;
		case 'validate':
			req = {
				triggerSource: 'VerifyAuthChallengeResponse_Authentication',
				request: {
					userAttributes,
					privateChallengeParameters: {
						1: 'foo',
						2: 'bar'
					}
				}
			};

			m()(Object.assign(ctx, {req}));

			return ctx;
		default:
			m()(ctx);

			return ctx;
	}
};

test('unknown trigger should not trigger middleware', t => {
	const context = trigger();
	t.falsy(context.request.body);
	t.falsy(context.path);
	t.falsy(context.method);
});

test('`Define Auth Challenge` should trigger middleware', t => {
	const context = trigger('define');
	t.truthy(context.request);
	t.truthy(context.request.body);
	t.truthy(context.request.body.req);
	t.truthy(context.request.body.req.request);
	t.is(context.method, 'post');
	t.is(context.path, 'idp:DefineAuthChallenge');
});

test('`Create Auth Challenge` should trigger middleware', t => {
	const context = trigger('create');
	t.truthy(context.request);
	t.truthy(context.request.body);
	t.truthy(context.request.body.req);
	t.truthy(context.request.body.req.request);
	t.is(context.method, 'post');
	t.is(context.path, 'idp:CreateAuthChallenge');
});

test('`Verify Auth Challenge` should trigger middleware', t => {
	const context = trigger('validate');
	t.truthy(context.request);
	t.truthy(context.request.body);
	t.truthy(context.request.body.req);
	t.truthy(context.request.body.req.request);
	t.is(context.method, 'post');
	t.is(context.path, 'idp:VerifyAuthChallengeResponse');
});

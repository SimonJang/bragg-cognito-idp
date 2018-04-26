# bragg-cognito-idp [![Build Status](https://travis-ci.org/SimonJang/bragg-cognito-idp.svg?branch=master)](https://travis-ci.org/SimonJang/bragg-cognito-idp)

> Bragg middleware for AWS Cognito Userpool triggers

## About

AWS [Cognito Userpools](https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools.html) uses different triggers to customize the authentication flow. The `bragg-cognito-idp` middleware for [bragg](https://github.com/SamVerschueren/bragg) provides 3 [triggers](https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-working-with-aws-lambda-triggers.html?icmpid=docs_cognito_console) that are essential for a custom implementation of the authentication flow.

- [Define Auth Challenge](https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-lambda-trigger-syntax-define-auth-challenge.html) trigger
- [Create Auth Challenge](https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-lambda-trigger-syntax-create-auth-challenge.html) trigger
- [Verify Auth Challenge](https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-lambda-trigger-syntax-verify-auth-challenge.html) trigger

## Install

```
$ npm install bragg-cognito-idp
```


## Usage

```js
const app = require('bragg');
const router = require('bragg-router');
const cognito = require('bragg-cognito-idp');

router.post('idp:DefineAuthChallenge', ctx => {
	ctx.body = ctx.request.body
});

router.post('idp:CreateAuthChallenge', ctx => {
	ctx.body = ctx.request.body
});

router.post('idp:VerifyAuthChallengeResponse', ctx => {
	ctx.body = ctx.request.body
});

app.use(cognito());
app.use(router.routes());

exports.handler = app.listen();
```


## API

### cognito()

Install the `cognito` middleware.

## License

MIT © [Simon Jang](https://github.com/SimonJang)

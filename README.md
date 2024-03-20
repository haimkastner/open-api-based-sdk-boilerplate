# OpenAPI based SDK boilerplate

[![open-api-based-sdk-boilerplate](https://github.com/haimkastner/open-api-based-sdk-boilerplate/actions/workflows/release.yml/badge.svg?branch=main)](https://github.com/haimkastner/open-api-based-sdk-boilerplate/actions/workflows/release.yml)

Produce an SDK from API Server OpenAPI spec, easily.


API Spec fetched from the [node-api-spec-boilerplate](https://github.com/haimkastner/node-api-spec-boilerplate) artifactory.

SDK built by [openapi-generator-cli](https://github.com/OpenAPITools/openapi-generator-cli) tool with custom [api.mustache](./resources/openapi/templates/typescript-axios/api.mustache) template based on [typescript-fetch](https://github.com/swagger-api/swagger-codegen/blob/master/modules/swagger-codegen/src/main/resources/typescript-fetch/api.mustache) template.



📦 Example SDK package at NPM [open-api-based-sdk-boilerplate](https://www.npmjs.com/package/@haimkastner/open-api-based-sdk-boilerplate) 


---
📙 For all info of how to create and build it, see [Perfect API Server - Generating SDK](https://blog.castnet.club/en/blog/perfect-api-server-part-d) article in [my blog](https://blog.castnet.club/en) 📙

---

Explorer the API Spec on [SwaggerHub](https://app.swaggerhub.com/apis/haimkastner/node-api-spec-boilerplate)

---
`Goal`

This boilerplate project used to demonstrate how easy and powerfull generating SDK can be.
Show how once a new API operation added to the server, a new version of SDK with the new operation generated and published without any manual actions. 

---
`Includes`

This project used to be a boilerplate for building an SDK following parts:
* Generating interfaces & SDK class object using [openapi-generator-cli](https://github.com/OpenAPITools/openapi-generator-cli)
* Build SDK, generate and publish OpenAPI spec using [GitHub Actions](https://github.com/haimkastner/open-api-based-sdk-boilerplate/actions) CI/CD pipes
* Host SDK package on the [NPM regitery](https://www.npmjs.com/package/@haimkastner/open-api-based-sdk-boilerplate).


### `Configuration`

All config by env vars, see for all options in [./env.example](./.env.example):
* `API_SERVER_URL`: The API Server URL, as default it's `http://127.0.0.1:8080`   
* `API_SERVER_SPEC_PATH`: As default Api spec will be fetched from [SwaggerHub](https://app.swaggerhub.com/apis/haimkastner/node-api-spec-boilerplate), set this env var to copy from machine file-system instead, used for local debug and build.


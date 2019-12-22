build:
	ng build --prod \

gen_openapi_srv:
	docker run --rm \
	-v ${PWD}:/local openapitools/openapi-generator-cli generate \
	-i /local/blg-openapi.yml \
	-g php-slim4 \
	-o /local/dist/www

gen_openapi_cli:
	npm run api
gen_openapi_doc:
	docker run --rm \
		-v ${PWD}:/local openapitools/openapi-generator-cli generate \
		-i /local/blg-openapi.yml \
		-g markdown \
		-o /local/dist/doc/api

userId = $(id -u ${USER})
groupId = $(id -g ${USER})

build:
	npm run ng -- build --prod

api_gen_srv:
	docker run --rm \
	-v ${PWD}:/local openapitools/openapi-generator-cli generate \
	-i /local/blg-openapi.yml \
	-g php-slim4 \
	-o /local/dist/www

api_gen_cli:
	npm run api

api_gen_doc:
	docker run --rm \
		-v ${PWD}:/local openapitools/openapi-generator-cli generate \
		-i /local/blg-openapi.yml \
		-g markdown \
		-o /local/dist/doc/api

api:
	make api_gen_cli
	make api_gen_doc
	make api_gen_srv

test_e2e:
	npm run e2e

test_unit:
	npm run jest -- --collectCoverage
serve:
	ng serve --hmr


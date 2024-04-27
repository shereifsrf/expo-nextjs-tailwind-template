.PHONY: init

init:
	yarn init -y
clean:
	find . -name "node_modules" -type d | tee /dev/stderr | xargs rm -rf
install:
	yarn install


create-expo:
	mkdir native || true
	cd native && yarn create expo --template
create-next:
	mkdir web || true
	cd web && npx create-next-app
create-packages:
	mkdir packages || true
	cd packages && mkdir components || true
	cd packages/components && yarn init -y
	yarn add -D typescript @types/react-native
	cd packages/components && tsc --init

web-run:
	rm -rf web/.next
	yarn workspace web dev

native-run:
	yarn workspace native start
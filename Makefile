.PHONY: init

clean:
	find . -name "node_modules" -type d | tee /dev/stderr | xargs rm -rf
install:
	yarn install


web-run:
	rm -rf web/.next
	yarn workspace web dev

native-run:
	yarn workspace native start
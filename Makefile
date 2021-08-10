src_files = src
output_files = dist/popup.html dist/popup.js dist/background.js dist/manifest.json
zip = switcher.zip

webpack: $(src_files) ./node_modules/.bin/webpack
	./node_modules/.bin/webpack

release: $(zip)

debug: debug.zip

# For making the source zip that needs to be uploaded for version submit
source_zip: clean
	./scripts/make_source_zip.sh

$(zip): $(src_files) dist
	cp icons/icon_white.png dist/icon_dark.png
	cp icons/icon_black.png dist/icon_light.png
	cd dist && zip -r ../$(zip) .

debug.zip: $(src_files) dist
	cp icons/icon_debug_green.png dist/icon_dark.png
	cp icons/icon_debug_pink.png dist/icon_light.png
	cd dist && zip -r ../debug.zip .

dist: webpack
	cp src/popup.html dist/
	cp src/manifest.json dist/

./node_modules/.bin/webpack:
	npm install

clean:
	rm -rf \
		dist/* \
		*.zip

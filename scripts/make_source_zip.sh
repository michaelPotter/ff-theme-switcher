#!/usr/bin/env bash
#
# make_source_zip.sh
#
# Builds the ff-theme-switcher-source.zip file needed to submit a new version to MDN

dirname=$(basename $(pwd))
cd ..
files() {
	find $dirname -type f | grep -v node_modules | grep -v .git
}
# files
zip -r $dirname/ff-theme-switcher-source.zip $(files)

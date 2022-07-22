
set -eux

cp -r import_venues/* /asset-output
pip install -r requirements.txt --target /asset-output

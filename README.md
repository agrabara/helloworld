# helloworld
mkdir helloworld
cd helloworld
gsutil rsync -r gs://sample-code-repo/helloworld .


cd helloworld
gcloud app deploy

gcloud app browse

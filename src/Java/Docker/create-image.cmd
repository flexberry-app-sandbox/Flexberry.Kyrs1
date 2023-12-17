docker build --no-cache -f SQL\Dockerfile.PostgreSql -t kyrs1-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t kyrs1-java/app ../../..

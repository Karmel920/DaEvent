FROM python:3.10-alpine

ENV PYTHONUNBUFFERED 1

RUN apk update \
    && apk add postgresql-dev gcc python3-dev musl-dev
RUN pip install --upgrade pip pipenv

WORKDIR /api
COPY ./Pipfile* ./
RUN pipenv sync

COPY . .

RUN mkdir -p /backend/static && chmod -R 755 /backend/static
RUN mkdir -p /backend/media && chmod -R 755 /backend/media

COPY ./entrypoint.sh /entrypoint.sh
RUN chmod o+x /entrypoint.sh

ENTRYPOINT ["sh", "-c", "/entrypoint.sh"]
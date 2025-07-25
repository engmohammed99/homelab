FROM alpine:latest

RUN apk add --no-cache cmatrix

ENTRYPOINT [ "cmatrix" ]

CMD [ "-abs", "-C", "red" ] 
#Be careful : json format doesn't support spaces, so use array format
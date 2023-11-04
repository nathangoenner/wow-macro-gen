# wow-macro-gen
Macro generation tool for World of Warcraft

This is a simple project intended to reduce the effort necessary to write a mouseover macro in World of Warcraft.

Click the toggles to add modifiers/nomod, help/harm, and add ability text to generate the macro.


## Docker Instructions

The below Docker container is based on nginx:latest and will spin up a webserver hosting the files on TCP port 8777 of the host.

```
$ docker-compose up -d
```

The following commands will rebuild the container after making changes:

```
$ docker-compose down
$ docker-compose up -d --build
```



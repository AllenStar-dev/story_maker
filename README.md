# AI Story Maker
This is a generative AI web app where if a user writes a line, a story will be generated according to it.

![alt text](https://github.com/AllenStar-dev/story_maker/blob/main/src/static/web-app-preview.png)

# Run the App
To build docker, use this cmd
```
docker build -t <your-image-name> . 
```

To run the docker instance
```
docker run -d -p <port-for-local-docker-instance>:<port-for-webapp> <your-image-name>
// Eg: docker run -d -p 8000:5000 <your-image-name> | default port for web app is 5000
```

Check the web app locally
`http://localhost:<port-for-local-docker-instance>`

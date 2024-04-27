# AI Story Maker
This AI story maker leverages [distilgpt-2](https://huggingface.co/distilbert/distilgpt2) model.

This is the [URL](http://provider.provider-02.sandbox-01.aksh.pw:32418/) of my Chatbot running on Akash Network.

This is a generative AI web app where if a user writes a line, a story will be generated according to it.

![alt text](https://github.com/AllenStar-dev/story_maker/blob/main/src/static/web-app-preview.png)

# Host on Akash 
* Follow the [Akash docs](https://akash.network/docs/deployments/cloudmos-deploy/) to get started with deployments.
* When ready, use the [deploy.yaml](https://github.com/AllenStar-dev/story_maker/blob/main/deploy.yaml) to the Akash SDL prompt and deploy.

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

# Video Demo 
Link to the video demo https://youtu.be/MeCJ6vDNzQg 

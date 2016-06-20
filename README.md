# LMSVideoWallReceiver

This REST Service is used to reproduce content in Raspberry PI with a modified [OMXPlayer](https://github.com/ua-i2cat/omxplayer). 
Works with [liveMediaStreamer framework](https://github.com/ua-i2cat/liveMediaStreamer). 


##Requeriments

- [liveMediaStreamer framework](https://github.com/ua-i2cat/liveMediaStreamer).
- [LMStoREST](https://github.com/ua-i2cat/LMStoREST).
- [LMSappVideoWall](https://github.com/ua-i2cat/LMSappVideoWall).
- [OMXPlayer](https://github.com/ua-i2cat/omxplayer)

##Install

Clone the git repository
```
git clone https://github.com/ua-i2cat/

```

Install dependencies
```
apt-get install npm nodejs
npm install

```

Run the application
```
npm service

```
You can choose use of "forever" to run the application in background.
```
forever start service.js
```


##API REST methods

It implements only a single method, "Play", which is the responsible to start OMXPlayer application.

###Play

Send a rtsp link to reproduce this link in a raspberry
```
POST http://raspberryIP:8080/
JSON	{
		"link": rtspUri
	}
```




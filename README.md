# BotDetection

Simple bot detection project using custom packages.

NOTE: IT GIVES ACCESS TO A PAGE IF ITS BOT AND DENIES IF HUMAN (UNLIKE OTHERWISE)

In windows run these cmds to check:
FOR BOT:
Invoke-WebRequest http://localhost:8000 -Headers @{"user-agent"="bot"}

FOR HUMAN:
Invoke-WebRequest http://localhost:8000 -Headers @{"user-agent"="A-browser"}

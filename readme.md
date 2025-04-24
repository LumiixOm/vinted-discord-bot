# Vinted Monitor - No Delay (Fyndit Old Public Bot)

Vinted Monitor is a bot that monitors the Vinted items route for new items and notifies users in real-time. It is designed to work with minimal delay, ensuring that users are always up-to-date with the latest items.

<p align="center">
  <img src="./doc/bot.gif" alt="Example" style="max-height: 400px; width: auto;">
</p>

## Table of Contents
1. [Features](#features)
2. [Requirements](#requirements)
3. [Setup](#setup)
4. [Commands](#commands)
5. [Showcase](#showcase)


> [!WARNING]
> This bot no longer performs well with Vinted's new security measures. Running this codebase effectively would require an absurd amount of money to achieve close to 100% item detection rates. Consider using the hosted service mentioned below for a more cost-effective solution which is a free service, to not ruin yourself if you just want to use a Vinted bot for yourself and snipe deals easily.

## No cost Hosted Service

I offer a hosted version of this bot that you can use without the hassle of setup and maintenance and potential cost rabbit hole as mentionned above. Join our [Discord](https://discord.gg/ay8gX6jvm9) to get started!

**Note: The hosted service is a complete private rework of this bot that's even better, with improved performance and reliability.**

### Free Tier
Use the basic bot features for monitoring Vinted items.

<p align="center">
  <img src="./doc/premium.png" alt="Example" style="max-height: 400px; width: auto;">
</p>

### Gold Tier Premium Features (14.90$/month)
You can later upgrade to Gold tier to enjoy insane features such as:
- **Autobuy/Autocop**: Automatically purchase items that match your criteria
- **FastBuy**: Quick checkout process for securing items before others
- **Smart Offer**: Intelligent offering system based on item data
- **Price Trends**: Track price changes over time for items
- **Item Sold History**: View sold items history similar to eBay
- **Sales Profits Stats**: Track your profits from sales
- **Schedule Retry**: Automatically retry on items with active transactions
- **+50 Links Monitoring**: Monitor more search URLs

--------

## Only continue futher if you know what you are doing and understand that the bot might not work.

### Features

- **Real-time Monitoring**: Vinted Monitor fetches the latest items from the Vinted items route in real-time. 
- **Monitoring all countries at once**: Lets you see all items from all country.
- **Discord Integration**: The bot integrates with Discord and can send notifications to specific channels.
- **Commands**: The bot supports a variety of commands that allow users to interact with it.
- **Database Channel/User Management**: The bot can manage channels and users in a database, allowing for easy management of notifications.
- **Language Support**: The bot will communicate with users in their set Discord language. (If available, you can add your own translations in the `locales` folder.)

### Requirements

- VPS running on a Linux kernel or you own computer (avoid Windows if possible)
- Rotating proxy
> [!NOTE]
> You can buy rotating proxies here: [WebShare](https://www.webshare.io/?referral_code=eh8mkj0b6ral) (I get a small cut from that link so please use it if you want to support my work). I would advice you to get the "Verified Proxy" Plan and to take 100 proxy server with 1000 GB/month Bandwidth which is 7.07$/month, but i would highly suggest you take the 250 proxy server and 5000GB plan ($25.73 per month) if you want to have a good speed and avoid skipping items the most you can.
- Docker installed (https://docs.docker.com/engine/install/)
- Some knowledge with Docker, JS and MongoDB
- Git installed (optional)

### Setup

1. Clone the repository from terminal or download through Github.

```bash
git clone https://github.com/teddy-vltn/vinted-updated-discord-bot.git
cd vinted-updated-monitor
```

2. Create a Discord bot in Discord's Developer Portal and invite it to your server:

- Go to the [Discord Developer Portal](https://discord.com/developers/applications).
- Click on "New Application" and give your bot a name.
- Go to the "Bot" tab and click on "Add Bot".
- Copy the "Client ID" and "Token" and paste them into the `.env` file.
- Give intent permissions to the bot by going to the "Bot" tab and enabling the "Presence Intent", "Server Members Intent" and "Content Message Intent".
- Invite the bot with admin permissions to your server by going to the "OAuth2" tab and selecting the "bot" and "application.commands" scope and the "Administrator" permission.
- Copy the generated URL and paste it into your browser to invite the bot to your server.

3. Modify the configuration file `.env` to match your setup by modifying the remaining fields.

4. Make sure you have docker installed on your machine or [Install Docker](https://docs.docker.com/engine/install/) and run the following command:

> [!IMPORTANT]
> If you are on Windows, make sure you have WSL2 alongside Docker Desktop to run the following command. You will also certainly need to activate virtualization in your BIOS.

Make sure the start.sh has permission to execute.
```bash
chmod +x start.sh
```

```bash
./start.sh
```

5. The bot should now be running and ready to use. And enjoy! (if it ain't working you can come to the discord server for help https://discord.gg/BGbDvpQzKK)

?. If you want to stop the bot, you can run the following command:

Make sure the stop.sh has permission to execute.

```bash
chmod +x stop.sh
```

```bash
./stop.sh
```

> [!IMPORTANT]
> If along the way you happen to modify the `.env` file or files in the other folders, you will need to rebuild the docker image by stopping the containers and to start them again.

### Commands

The bot supports a variety of commands that allow users to interact with the bot. Here are some of the available commands:
- `/link_public_channel`: Creates a public channel for the bot to send notifications.
- `/unlink_public_channel`: Unlinks a public channel url.
- `/create_private_channel`: Creates a private channel.
- `/delete_private_channel`: Deletes a private channel.
- `/start_monitoring`: Starts monitoring the Vinted items route.
- `/stop_monitoring`: Stops monitoring the Vinted items route.
- `/set_mentions`: Sets the preferences for mentions in notifications.countries.
- `/info`: Displays information about Channel/User.
- `/set_max_channels`: Sets the maximum number of private channels a user can create.

### Showcase 

#### How to create a private channel and manage it
Click on the image below to look at the tutorial

<div align="center">
  <a href="https://www.youtube.com/watch?v=5yllNcaQEcU"><img src="https://img.youtube.com/vi/5yllNcaQEcU/0.jpg" alt="IMAGE ALT TEXT"></a>
</div>
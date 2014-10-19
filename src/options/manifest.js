// SAMPLE
this.manifest = {
	"name": "Anime Release Notifier settings",
	"icon": "/icons/icon32.png",
	"settings": [
		{
			"tab": i18n.get("Basic"),
			"group": "Account",
			"name": "userName",
			"id": "userName",
			"type": "text",
			"label": "Username:",
			"text": "Your MAL username or anilist.co display name"
		},
		{
			"tab": i18n.get("Basic"),
			"group": "Account",
			"name": "animeListProvider",
			"id": "animeListProvider",
			"type": "popupButton",
			"label": "Anime list:",
			"options": [
				{
					"value": "anilist.co",
					"text": "anilist.co"
				},
				{
					"value": "hummingbird.me",
					"text": "hummingbird.me"
				},
				{
					"value": "myanimelist.net",
					"text" : "myanimelist.net"
				}
			]
		},
		/*{
			"tab": i18n.get("information"),
			"group": "Filters",
			"name": "animeListBox",
			"type": "listBox",
			"label": "Anime-specific filters:",
			"options": [
				{
					"value": "test",
					"text": "Test"
				}
			]
		},*/
		{
			"tab": i18n.get("Basic"),
			"group": "URL",
			"name": "previewURL",
			"type": "description",
			"text": ""
		},
		/*{
			"tab": i18n.get("Advanced"),
			"group": "Filters",
			"name": "filterDescription",
			"type": "description",
			"text": "Setting advanced filter options is not recommended unless you fully understand that <strong>all of your search results and notifications</strong> will be filtered by those."
		},
		{
			"tab": i18n.get("Advanced"),
			"group": "Filters",
			"name": "quality",
			"type": "text",
			"label": "Quality:",
			"text": "480p, 720p and 1080p are valid quality settings"
		},
		{
			"tab": i18n.get("Advanced"),
			"group": "Filters",
			"name": "subs",
			"type": "text",
			"label": "Subtitle provider:",
			"text": "Example: Horrible Subs"
		},
		{
			"tab": i18n.get("Advanced"),
			"group": "Filters",
			"name": "otherSearch",
			"type": "text",
			"label": "Other search terms:",
			"text": "Filter the results by something else...?"
		},*/
		{
			"tab": i18n.get("Advanced"),
			"group": "Notifier",
			"name": "updateInterval",
			"type": "slider",
			"label": "Update interval:",
			"max": 60,
			"min": 1,
			"step": 1,
			"display": true,
			"displayModifier": function(value) {
				return value + " minutes";
			}
		},
		{
			"tab": i18n.get("Advanced"),
			"group": "Notifier",
			"name": "maxEpisodeDifference",
			"type": "slider",
			"label": "Max episode difference:",
			"max": 30,
			"min": 1,
			"step": 1,
			"display": true,
			"displayModifier": function(value) {
				return value + " episodes";
			}
		},
		{
			"tab": i18n.get("Advanced"),
			"group": "Notifier",
			"name": "maxEpisodeDifferenceDescription",
			"type": "description",
			"text": "The <strong>update interval</strong> indicates how often the updater will check for new releases. The <strong>max episode difference</strong> will tell the updater to only notify you when you're this many or less episodes behind the latest."
		},
		{
			"tab": i18n.get("Advanced"),
			"group": "Backend",
			"name": "animeProvider",
			"type": "popupButton",
			"label": "Anime provider:",
			"options": [
				{
					"value": "nyaa.se",
					"text": "Nyaa (nyaa.se)"
				},
				{
					"value": "kissanime.com",
					"text": "KissAnime (kissanime.com) ALPHA"
				},
				{
					"value": "shanaproject.com",
					"text": "Shana Project (shanaproject.com) ALPHA"
				}
			]
		},
		/*{
			"tab": "Anime",
			"group": "Specific filters",
			"name": "filterDescription",
			"type": "description",
			"text": "Here you can set up quality and subtitle provider on a per-anime basis."
		},*/
		{
			"tab": i18n.get("Donations"),
			"group": "PayPal",
			"name": "donate",
			"type": "description",
			"text": "<a href='http://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=DADU374FK8X2J' target='_blank'><img src='https://battleofmages.com/images/donate-paypal.png' alt='Donate'/></a> <br/><br/><p>Like this extension? It's 100% free but donations will help me keep this project alive and up to date. <br/>I appreciate every little donation. Please include your nickname in the instructions.</p>"
		},
		{
			"tab": i18n.get("Donations"),
			"group": "Top donators",
			"name": "donatorList",
			"type": "description",
			"text": "You'll be mentioned here if you support this project.<br/><br/><ul class='donators'>" + 
					"<li><div class='donation-amount'>10,00 €</div> <a href='http://anilist.co/user/drill' target='_blank'>drill</a> (Anilist)</li>" + 
					"<li><div class='donation-amount'>7,35 €</div> <a href='http://anilist.co/user/Izzy' target='_blank'>Izzy</a> (Anilist)</li>" + 
					"<li><div class='donation-amount'>5,00 €</div> <a href='http://anilist.co/user/Josh' target='_blank'>Josh Star</a> (Anilist Admin)</li>" +
					"<li><div class='donation-amount'>1,00 €</div> <a href='http://myanimelist.net/profile/Mr_SkiZZeX' target='_blank'>Mr_SkiZZeX</a> (MAL)</li>" +
					"</ul>"
		}
	],
	"alignment": [
		[
			"userName",
			"animeListProvider"
		],
		[
			"updateInterval",
			"maxEpisodeDifference",
			"animeProvider"
		]
	]
};

var obj = {
    "user": {
        "created_date": 1606068146,
        "email": "5udnpnznn5@privaterelay.appleid.com",
        "display_name": null,
        "is_temporary": false,
        "uid": "VTo1NjQ1MzgyODYwODAwMDAw",
        "user_id": "ahFtZGxhYnMtc2xlZXBjeWNsZXIRCxIEVXNlchiAgKiAos6DCgw"
    },
    "subscription": {
        "product_id": null,
        "transaction_id": null,
        "campaign": "permanent-smart-alarm",
        "features_rich": [{
                "source": "subscription",
                "name": "online-backup",
                "source_value": "premium",
                "expire_date": null
            }, {
                "source": "campaign",
                "name": "smart-alarm",
                "source_value": "permanent-smart-alarm",
                "expire_date": null
            }
        ],
        "campaigns": [
            "permanent-smart-alarm"
        ],
        "package_id": "premium",
        "features": [
            "online-backup",
            "smart-alarm",
            "sleep-aid",
            "analysis",
            "snore",
            "sleep-notes",
            "premium-sounds",
            "user-sounds",
            "wake-up-mood",
            "heart-rate",
            "weather",
            "health-kit",
            "google-fit",
            "statistics",
            "philips-hue",
            "home-kit",
            "weekly-report",
            "auto-sleep-tracking"
        ],
        "trial": null,
        "expire_date": null
    }
}
$done({
    body: JSON.stringify(obj)
});

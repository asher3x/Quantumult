var obj = {
    "subscription": {
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

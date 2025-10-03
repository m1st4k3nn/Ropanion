export default function handler(req, res) {
  res.status(200).json({
    latestVersion: "1.0.0",
    Announcement: "Bugs, issues, feature requests? Please send us a message by going to the settings menu and clicking on 'Contact us'",
    changelog: {
      "1.0.0": {
        UpdateName: "Initial (kinda stable) Release",
        Changes: [
          "Core intended functionality",
          "Basic user customization features",
          "AI responses do not stream anymore, they show when they are ready, roblox limitations really, but that should be better for user experience and it doesnt affect response quality",
        ],
        Notes: [
          "If you had used the plugin before, chat data has been deleted (new datastore structure)",
        ]
      }
    }
  });
}
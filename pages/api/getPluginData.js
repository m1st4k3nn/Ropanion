export default function handler(req, res) {
  res.status(200).json({
    latestVersion: "1.0.0",
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
          "Any issues or things don't work as intended? Please contact us by going to the settings menu and clicking on 'Contact us'",
        ]
      }
    }
  });
}
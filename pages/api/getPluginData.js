export default function handler(req, res) {
  res.status(200).json({
    latestVersion: "1.4.2",
    changelog: []
  });
}
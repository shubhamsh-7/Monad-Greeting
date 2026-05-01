export default function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");
  res.setHeader("Content-Type", "application/json");

  const greetings = [
    "Hey there 👋",
    "Good day 🌞",
    "What’s up 😎",
    "Howdy 🤠",
    "Hello friend 🫂",
    "Greetings, traveler 🧙‍♂️",
    "Yo! 🙌"
  ];

  const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];

  const proto = req.headers["x-forwarded-proto"] || "https";
  const host = req.headers.host || "localhost:3000";
  const baseUrl = `${proto}://${host}`;

  res.status(200).json({
    frame: {
      version: "vNext",
      title: "Monad Greetings",
      image: "https://placekitten.com/800/418",
      buttons: [
        { label: randomGreeting, action: { type: "post", url: `${baseUrl}/api` } }
      ]
    }
  });
}


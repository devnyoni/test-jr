 import makeWASocket from "@whiskeysockets/baileys"

const session = process.env.SESSION_ID
if (!session) {
  console.log("❌ No session found")
  process.exit(1)
}

const sock = makeWASocket({
  auth: {
    creds: JSON.parse(
      Buffer.from(session, "base64").toString()
    )
  },
  printQRInTerminal: false
})

sock.ev.on("connection.update", ({ connection }) => {
  if (connection === "open") {
    console.log("🤖 RAHEEM-XMD bot online")
  }
})

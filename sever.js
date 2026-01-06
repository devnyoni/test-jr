 import express from "express"
import { spawn } from "child_process"

const app = express()
app.use(express.json())
app.use(express.static("public"))

app.post("/deploy", (req, res) => {
  const { session } = req.body

  if (!session || !session.startsWith("RAHEEM-XMD~")) {
    return res.json({
      ok: false,
      msg: "Invalid Session ID"
    })
  }

  spawn("node", ["bot.js"], {
    env: {
      SESSION_ID: session.replace("RAHEEM-XMD~", "")
    }
  })

  res.json({
    ok: true,
    msg: "✅ Bot deployed successfully"
  })
})

app.listen(3000, () =>
  console.log("🌐 Deploy server running")
)

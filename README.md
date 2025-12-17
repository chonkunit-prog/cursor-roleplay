# Sales Interview Prep Platform

Practice adversarial sales roleplays with AI buyers for top B2B tech companies. Master discovery, objection handling, and closing under pressure.

## 🎯 What This Does

This platform simulates realistic, challenging sales calls where AI plays skeptical buyers who won't make it easy for you. Each scenario is based on real interview roleplays used by top sales organizations.

## 📋 Available Scenarios

### Cursor @ Figma (Hard)
- **Your Role**: Account Executive at Cursor
- **Challenge**: Navigate hostile security concerns to discover an engineering reorg
- **Success**: Position Cursor as the solution for velocity during organizational change

### Anthropic @ Fortune 500 FinServ (Hard)
- **Your Role**: Enterprise AE at Anthropic  
- **Challenge**: Convince a skeptical CTO who thinks AI is overhyped
- **Success**: Discover governance mandate and position Claude's safety approach

### Baseten @ Series B Startup (Medium)
- **Your Role**: Account Executive at Baseten
- **Challenge**: Help a frustrated VP Eng who's drowning in ML infrastructure
- **Success**: Discover delayed feature launch and secure technical evaluation

## 🚀 How It Works

1. **Select a scenario** from the home screen
2. **Review the briefing** - understand your role and the challenge
3. **Jump into the live roleplay** - AI buyers will challenge you realistically
4. **Get detailed feedback** - learn what worked and what you missed

## 🛠️ Built With

- React (via CDN)
- Anthropic Claude API for text-based roleplays
- Vapi.ai Voice SDK for realistic voice conversations
- Pure HTML/CSS/JavaScript (no build process needed)

## 💡 Why I Built This

As an AE going through multiple interview processes, I noticed companies use adversarial roleplays to test discovery skills and ability to navigate difficult conversations. This platform lets you practice these scenarios as many times as you need.

## 🔧 How to Use Locally

1. Download `index.html`
2. Open it in your browser
3. Start practicing

The Anthropic API is handled through the claude.ai environment - no API key setup needed for basic use.

## 📈 Roadmap

- [ ] Add more scenarios (Opal, OpenAI, etc.)
- [x] Voice mode for realistic conversation practice
- [ ] Session recording and performance analytics
- [ ] Custom scenario builder
- [ ] Scoring system for discovery quality

## 🎙️ Voice Mode

The platform now supports realistic voice conversations powered by Vapi.ai! You can:

- Switch between **Text Chat** and **Voice Call** modes before starting any scenario
- Practice with natural voice interactions using AI-powered speech
- See real-time transcripts of your voice conversations
- Get the same detailed feedback after voice sessions

**To use Voice Mode:**
1. Select any scenario from the home screen
2. Review the briefing
3. Toggle to "🎙️ Voice Call" mode
4. Click "Start Voice Call" and speak naturally
5. End the call when ready and get your feedback

Voice mode uses your Vapi public API key (configured in the code) and provides a more realistic interview practice experience.

## 🤝 Contributing

This is a learning project, but if you have scenario suggestions or improvements, feel free to open an issue or submit a PR.

## 📝 License

MIT License - feel free to use and modify

---

**Note**: This is a portfolio project for learning React and working with AI APIs. Built by an AE who wanted better interview prep tools.

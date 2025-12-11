# Welcome to SwiftBridge

Welcome to the SwiftBridge documentation! SwiftBridge is a comprehensive crypto bridge solution built on Base network, enabling seamless offramp/onramp, token swaps, and P2P transfers.

## What is SwiftBridge?

SwiftBridge provides three main ways to interact with crypto on Base:

### 🤖 Telegram Bot
Easy-to-use bot with simple commands for buying, selling, swapping, and sending crypto directly in Telegram.

### 🎨 Web Mini App
Beautiful web interface with wallet connection for advanced features and better user experience.

### 🔗 Smart Contracts
Open-source, auditable smart contracts deployed on Base network that power all functionality.

## Quick Links

- **Try the Bot**: [@swiftbridgebot](https://t.me/swiftbridgebot)
- **Launch Mini App**: [app.swiftbridge.app](https://app.swiftbridge.app)
- **View Contracts**: [BaseScan](https://sepolia.basescan.org/address/0xFaaE04873914c0102B3c1aA5BCE05C51d0BD3667)
- **GitHub**: [SwiftBridge](https://github.com/SwiftBridge)

## Core Features

### 💱 Offramp/Onramp
Buy and sell crypto using Nigerian Naira with secure escrow system.

### 🔄 Token Swaps
Exchange tokens via Uniswap V3 with best rates and low fees.

### 📤 P2P Transfers
Send crypto to friends using their Telegram username - no wallet address needed!

### 👤 Username System
Register your Telegram username once and receive transfers seamlessly.

## Network Information

- **Network**: Base Sepolia (Testnet)
- **Chain ID**: 84532
- **RPC**: https://sepolia.base.org
- **Explorer**: https://sepolia.basescan.org

:::warning Testnet Only
This is currently deployed on Base Sepolia testnet for testing purposes. Do not use with real funds. Mainnet version coming soon!
:::

## Supported Tokens

- **USDC** - USD Coin
- **WETH** - Wrapped Ether
- More tokens coming soon...

## Getting Started

Choose your path:

<div className="row">
  <div className="col col--6">
    <div className="card">
      <div className="card__header">
        <h3>👤 I'm a User</h3>
      </div>
      <div className="card__body">
        <p>Learn how to use SwiftBridge to buy, sell, swap, and send crypto.</p>
      </div>
      <div className="card__footer">
        <a href="/docs/getting-started/for-users" className="button button--primary button--block">
          User Guide →
        </a>
      </div>
    </div>
  </div>
  <div className="col col--6">
    <div className="card">
      <div className="card__header">
        <h3>👨‍💻 I'm a Developer</h3>
      </div>
      <div className="card__body">
        <p>Integrate SwiftBridge or build on top of our smart contracts.</p>
      </div>
      <div className="card__footer">
        <a href="/docs/getting-started/for-developers" className="button button--primary button--block">
          Developer Guide →
        </a>
      </div>
    </div>
  </div>
</div>

## Architecture

SwiftBridge consists of three main components:

```mermaid
graph TD
    A[Users] --> B[Telegram Bot]
    A --> C[Mini App]
    B --> D[Smart Contracts]
    C --> D
    D --> E[Base Network]
```

## Support

Need help? We're here for you:

- **Telegram Support**: [@SwiftBridgeSupport](https://t.me/SwiftBridgeSupport)
- **GitHub Issues**: [Report a bug](https://github.com/SwiftBridge/swiftbridge-docs/issues)
- **Email**: support@swiftbridge.app

## Stay Updated

- Follow us on [Twitter](https://twitter.com/swiftbridge)
- Join our [Telegram Community](https://t.me/swiftbridgecommunity)

## Roadmap

### ✅ Phase 1 - Testnet Launch (COMPLETED)
- Smart contract development
- Telegram bot
- Web mini app
- Base Sepolia deployment

### 🚧 Phase 2 - Mainnet Preparation
- Professional security audit
- Real payment processor integration
- Enhanced UI/UX
- Comprehensive testing

### 🔮 Phase 3 - Mainnet & Growth
- Deploy to Base mainnet
- Marketing campaign
- Partnerships
- User acquisition

### 💫 Phase 4 - Expansion
- Multi-chain support
- More tokens
- Advanced features
- Mobile apps

## Security

### Current (Testnet)
- OpenZeppelin battle-tested contracts
- ReentrancyGuard on state-changing functions
- Access control and pausability
- ⚠️ **Not audited - testnet only**

### Future (Mainnet)
- Professional security audit
- Bug bounty program
- Comprehensive testing
- Insurance coverage

---

Ready to get started? Check out the [Quick Start Guide](/docs/getting-started/overview)!
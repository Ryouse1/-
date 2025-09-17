module.exports = {
  async rewrites() {
    return [
      {
        source: '/room/:id',
        has: [
          {
            type: 'host',
            value: 'game.example.com',
          },
        ],
        destination: '/game/room/:id',
      },
      {
        source: '/room/:id',
        has: [
          {
            type: 'host',
            value: 'radio.example.com',
          },
        ],
        destination: '/radio/room/:id',
      },
      {
        source: '/room/:id',
        has: [
          {
            type: 'host',
            value: 'trial.example.com',
          },
        ],
        destination: '/trial/room/:id',
      }
    ]
  },
}
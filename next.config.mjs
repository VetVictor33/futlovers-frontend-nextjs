/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
          { source: '/jogadores/novo', destination: '/players/new' },
          { source: '/jogadores/:id', destination: '/players/:id' },
          { source: '/times/novo', destination: '/teams/new' },
        ];
      },
};

export default nextConfig;

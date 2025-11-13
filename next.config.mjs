import nextra from 'nextra'
 
// Set up Nextra with its configuration
const withNextra = nextra({
  // ... Add Nextra-specific options here
})
 
// Export the final Next.js config with Nextra included
export default withNextra({
  async redirects() {
    return [
      {
        source: '/who-is-fabric',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/contribution-tokens',
        destination: '/posts/contribution-tokens',
        permanent: true,
      },
      {
        source: '/what-is-crowdfinancing',
        destination: '/posts/what-is-crowdfinancing',
        permanent: true,
      },
      {
        source: '/announcing-fabric',
        destination: '/posts/announcing-crowdfi',
        permanent: true,
      },
      {
        source: '/what-is-a-dataquilt',
        destination: '/posts/what-is-a-dataquilt',
        permanent: true,
      },
      {
        source: '/stp',
        destination: '/posts/stp',
        permanent: true,
      },
      {
        source: '/stpv2',
        destination: '/posts/stpv2',
        permanent: true,
      },
    ]
  },
})
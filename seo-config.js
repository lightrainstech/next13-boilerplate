export const site_name = 'Next 13 Boilerplate'
export const site_lead = 'This is the subtitle when sharing on social media'
export const site_url = 'https://lightrains.com/'
export const site_preview_image = '/images/limo-og-graph-preview.jpg'
export const site_description =
  'This is the description that shows when sharing on social media. Use this to explain briefely what the app is about.'

const MetaTags = () => (
  <>
    <meta property="og:url" content={site_url} />
    <meta property="og:type" content="website" />
    <meta property="og:title" content={site_name} />
    <meta property="og:description" content={site_description} />
    <meta property="og:image" content={site_preview_image} />
    <meta property="og:image:alt" content={site_lead} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={site_lead} />
    <meta name="twitter:image" content={site_preview_image} />
    <meta name="twitter:dnt" content="on" />
  </>
)

export default MetaTags

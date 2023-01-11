import { site_description, site_name, site_url } from './seo-config'

export default {
  title: site_name,
  titleTemplate: `%s | ${site_name}`,
  description: site_description,
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: site_url,
    site_name: site_name
  }
}

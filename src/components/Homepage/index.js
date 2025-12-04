import Layout from '@theme/Layout'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Personal from '../Personal'

export default function Home({ homePageBlogMetadata, recentPosts }) {
  const { siteConfig } = useDocusaurusContext()

  return (
    <Layout
      title='Prathamesh Jakkula'
      description='Serves as Both a Portfolio website & Documentation for starting point'
    >
      <Personal/>
    </Layout>
  )
}

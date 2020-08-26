import Link from 'next/link'
import Layout from '../components/Layout'

import {css, jsx} from '@emotion/core'

const color = 'white'

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Hello Next.js 👋</h1>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
    <div
    css={css`
    padding: 32px;
    background-color: hotpink;
    font-size: 24px;
    border-radius: 4px;
    &:hover {
      color: ${color};
    }
    `}
    >Hover will change color</div>
  </Layout>
)

export default IndexPage

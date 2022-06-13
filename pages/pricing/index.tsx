import Head from 'next/head'
import Link from 'next/link'
import { MainLayout } from '../../components/layouts/MainLayout'
import { Navbar } from '../../components/Navbar'

export default function PricingPage() {
  return (
    <MainLayout>
        <h1>pricing Page</h1>
       
        <h1 className={'title'}>
          Ir a <Link href="/">Home</Link>
        </h1>

        <p className={'description'}>
          Get started by editing{' '}
          <code className={'code'}>pages/pricing.jsx</code>
        </p>
    </MainLayout>
  )
}
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Category'
}

interface Props {
  children: React.ReactNode
}

export default function Layout({ children }: Props) {
  return <>{children}</>
}
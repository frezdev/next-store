import { Description } from "app/components/home/Description"
import { Hero } from "app/components/home/Hero"
import { MainProducts } from "app/components/home/MainProducts"

export default function Home(): JSX.Element {
  return (
    <main>
      <Hero />
      <Description />
      <MainProducts />
    </main>
  )
}

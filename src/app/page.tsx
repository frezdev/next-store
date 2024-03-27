import { Description } from "@/src/components/home/Description"
import { Hero } from "@/src/components/home/Hero"
import { MainProducts } from "@/src/components/home/MainProducts"

export default function Home(): JSX.Element {
  return (
    <>
      <Hero />
      <Description />
      <MainProducts />
    </>
  )
}

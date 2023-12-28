interface CategoryProps {
  params: { category: string[] }
  searchParams?: Record<string, string>
}

export default function Category ({ params, searchParams }: CategoryProps) {
  searchParams?.q
  console.log({params, searchParams: searchParams?.id})
  return <h1>Categoria {params.category}</h1>
}
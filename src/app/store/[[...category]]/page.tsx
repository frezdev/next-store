interface CategoryProps {
  params: { category: string[] }
  searchParams?: Record<string, string>
}

export default function Category ({ params, searchParams }: CategoryProps): JSX.Element {
  return <h1>Categoria {params.category}</h1>
}
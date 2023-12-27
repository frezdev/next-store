interface CategoryProps {
  params: { category: string }
}

export default function Category ({ params }: CategoryProps) {
  return <h1>Categoria {params.category.replaceAll('-', ' ').toUpperCase()}</h1>
}
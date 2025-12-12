import Card from './Card'
import Container from '../Shared/Container'
import Reveal from '../Animation/Reveal'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import LoadingSpinner from '../Shared/LoadingSpinner'

const Plants = ({ limit , searchText, categoryFilter, budget }) => {
   const { data: services = [], isLoading } = useQuery({
    queryKey: ['services'],
    queryFn: async () => {
      const result = await axios(`${import.meta.env.VITE_API_URL}/services`)
      return result.data
    },
  })

  if (isLoading) return <LoadingSpinner />

  // ---------- Filter Logic ----------
  let filtered = services

  // 1️⃣ Search filter
  if (searchText) {
    filtered = filtered.filter((s) =>
      s.name.toLowerCase().includes(searchText.toLowerCase())
    )
  }

  // 2️⃣ Category filter
  if (categoryFilter) {
    filtered = filtered.filter((s) => s.category === categoryFilter)
  }

  // 3️⃣ Budget filter
  if (budget) {
    filtered = filtered.filter((s) => Number(s.price) <= Number(budget))
  }

  // 4️⃣ Limit for Home page
  if (limit) {
    filtered = filtered.slice(0, limit)
  }
  return (
    <Container>

        {filtered.length > 0 ? (
        <div className="pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filtered.map((service) => (
            <Card key={service._id} service={service} />
          ))}
        </div>
      ) : (
        <p className="text-center py-12 text-gray-500">No services found</p>
      )}
    </Container>
  )
}

export default Plants

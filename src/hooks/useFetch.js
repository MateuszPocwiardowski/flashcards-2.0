import { useEffect, useState } from 'react'

const useFetch = url => {
	const [data, setData] = useState(null)
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(null)

	useEffect(() => {
		const fetchData = async () => {
			try {
				setLoading(true)
				const response = await fetch(url)

				if (!response.ok) {
					throw new Error('Niewłaściwy url')
				}

				const json = await response.json()
				setData(json)
				setError(false)
				setLoading(false)
			} catch (error) {
				setError(error.message)
				setData(null)
				setLoading(false)
			}
		}

		fetchData()
	}, [url])

	return { data, error, loading }
}

export default useFetch

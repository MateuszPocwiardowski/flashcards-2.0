import { useEffect, useState } from 'react'
// eslint-disable-next-line
import useFetch from './hooks/useFetch'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Card from '@mui/material/Card'
import Check from '@mui/icons-material/Check'
import RefreshIcon from '@mui/icons-material/Refresh'
import CloseIcon from '@mui/icons-material/Close'
import { CircularProgress } from '@mui/material'
import Text from './components/Text/Text'
import PrimaryButton from './components/Buttons/PrimaryButton'
import './App.css'

const App = () => {
	const [cards, setCards] = useState([])
	const [turnedCard, setTurnedCard] = useState(false)
	const [displayedCard, setDisplayedCard] = useState(1)

	const { data, loading, error } = useFetch('http://localhost:1337/api/flashcards/')

	useEffect(() => {
		if (data != null) {
			console.log(data, loading, error)
			setCards(data.data)
		}
	}, [loading])

	const addToKnownHandler = (id, status) => {
		setCards(prevState => {
			const updatedTask = prevState.map(card => ({
				id: card.id,
				engWord: card.engWord,
				plWord: card.plWord,
				engSentence: card.engSentence,
				plSentence: card.plSentence,
				status: card.id === id ? 'known' : card.status,
			}))
			return updatedTask
		})
		setTurnedCard(false)
		setDisplayedCard(prevState => (prevState += 1))
	}

	const addToUnknownHandler = (id, status) => {
		setCards(prevState => {
			const updatedTask = prevState.map(card => ({
				id: card.id,
				engWord: card.engWord,
				plWord: card.plWord,
				engSentence: card.engSentence,
				plSentence: card.plSentence,
				status: card.id === id ? 'unknown' : card.status,
			}))
			return updatedTask
		})
		setTurnedCard(false)
	}

	if (loading) {
		return (
			<div className='App'>
				<Navbar />
				<CircularProgress
					sx={{
						position: 'absolute',
						top: '50%',
						left: '50%',
						transform: 'translate(-50%, -50%)',
					}}
				/>
				<Footer />
			</div>
		)
	}

	return (
		<div className='App'>
			<Navbar />
			{cards
				.filter(card => displayedCard === card.id)
				.map(({ id, attributes }) => (
					<Card
						key={id}
						sx={{
							position: 'absolute',
							top: '50%',
							left: '50%',
							width: '90%',
							minWidth: '360px',
							maxWidth: '400px',
							textAlign: 'center',
							padding: 2,
							transform: 'translate(-50%, -50%)',
						}}>
						<Text
							sx={{
								position: 'absolute',
								top: 0,
								right: 0,
							}}>
							{id}
						</Text>
						{turnedCard && (
							<>
								<Text sx={{ fontWeight: 700 }}>{attributes.wordENG}</Text>
								<Text sx={{ mb: 2 }}>{attributes.sentenceENG}</Text>
								<PrimaryButton
									variant='contained'
									color='success'
									endIcon={<Check />}
									sx={{ m: 1 }}
									id={id}
									status='known'
									onClick={addToKnownHandler}>
									I know
								</PrimaryButton>
								<PrimaryButton
									variant='contained'
									color='error'
									endIcon={<CloseIcon />}
									sx={{ m: 1 }}
									id={id}
									status='unknown'
									onClick={addToUnknownHandler}>
									I don't know
								</PrimaryButton>
							</>
						)}

						{!turnedCard && (
							<>
								<Text sx={{ fontWeight: 700 }}>{attributes.wordPL}</Text>
								<Text sx={{ mb: 2 }}>{attributes.sentencePL}</Text>
								<PrimaryButton
									variant='contained'
									color='primary'
									endIcon={<RefreshIcon />}
									sx={{ m: 1 }}
									onClick={() => {
										setTurnedCard(true)
									}}>
									Return
								</PrimaryButton>
							</>
						)}
					</Card>
				))}
			<Footer />
		</div>
	)
}

export default App

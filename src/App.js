import { useState } from 'react'
import useFetch from './hooks/useFetch'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Card from '@mui/material/Card'
import Check from '@mui/icons-material/Check'
import RefreshIcon from '@mui/icons-material/Refresh'
import CloseIcon from '@mui/icons-material/Close'
import Text from './components/Text/Text'
import PrimaryButton from './components/Buttons/PrimaryButton'
import './App.css'

const CARDS = [
	{
		id: 1,
		engWord: `married`,
		plWord: `w związku małżeńskim`,
		engSentence: `Recruiters should not ask cadidates if they are merried.`,
		plSentence: 'Rekruterzy nie powinni pytać kandydatów o to, czy są w związku małżeńskim.',
		status: 'unknown',
	},
	{
		id: 2,
		engWord: `single`,
		plWord: `stanu wolnego`,
		engSentence: `We are looking to hire a single girl as an au pair.`,
		plSentence: 'Chcemy zatrudzić dziewczynę stanu wolnego jako opiekunkę dla dzieci.',
		status: 'unknown',
	},
	{
		id: 3,
		engWord: `single`,
		plWord: `stanu wolnego`,
		engSentence: `We are looking to hire a single girl as an au pair.`,
		plSentence: 'Chcemy zatrudzić dziewczynę stanu wolnego jako opiekunkę dla dzieci.',
		status: 'unknown',
	},
	{
		id: 4,
		engWord: `single`,
		plWord: `stanu wolnego`,
		engSentence: `We are looking to hire a single girl as an au pair.`,
		plSentence: 'Chcemy zatrudzić dziewczynę stanu wolnego jako opiekunkę dla dzieci.',
		status: 'unknown',
	},
]

const App = () => {
	const [cards, setCards] = useState(CARDS)
	const [turnedCard, setTurnedCard] = useState(false)
	const [displayedCard, setDisplayedCard] = useState(1)

	const [dummyCard, setDummyCard] = useFetch('https://swapi.dev/api/people/1/?format=json')

	// const addToKnownHandler = (id, status) => {
	// 	setCards(prevState => {
	// 		const updatedTask = prevState.map(card => ({
	// 			id: card.id,
	// 			engWord: card.engWord,
	// 			plWord: card.plWord,
	// 			engSentence: card.engSentence,
	// 			plSentence: card.plSentence,
	// 			status: card.id === id ? 'known' : card.status,
	// 		}))
	// 		return updatedTask
	// 	})
	// 	setTurnedCard(false)
	// 	setDisplayedCard(prevState => (prevState += 1))
	// }

	const addToKnownHandler = () => {
		setDummyCard('https://swapi.dev/api/people/1/?format=json')
		console.log(dummyCard)
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

	return (
		<div className='App'>
			<Navbar />
			{cards
				.filter(card => displayedCard === card.id)
				.map(({ id, engWord, engSentence, plWord, plSentence }) => (
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
								<Text sx={{ fontWeight: 700 }}>{engWord}</Text>
								<Text sx={{ mb: 2 }}>{engSentence}</Text>
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
								<Text sx={{ fontWeight: 700 }}>{plWord}</Text>
								<Text sx={{ mb: 2 }}>{plSentence}</Text>
								<PrimaryButton
									variant='contained'
									color='primary'
									endIcon={<RefreshIcon />}
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

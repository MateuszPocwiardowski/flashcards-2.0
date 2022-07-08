import { useState } from 'react'
import Card from '@mui/material/Card'
import Check from '@mui/icons-material/Check'
import RefreshIcon from '@mui/icons-material/Refresh'
import CloseIcon from '@mui/icons-material/Close'
import Text from './components/Text/Text'
import PrimaryButton from './components/Buttons/PrimaryButton'
import './App.css'

const CARDS = [
	{
		id: 31,
		engWord: `married`,
		plWord: `w związku małżeńskim`,
		engSentence: `Recruiters should not ask cadidates if they are merried.`,
		plSentence: 'Rekruterzy nie powinni pytać kandydatów o to, czy są w związku małżeńskim.',
		status: 'unknown',
	},
	{
		id: 32,
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

	const addToKnowHandler = (id, status) => {
		setCards(prevState => {
			const updatedTask = prevState.map(card => ({
				id: card.id,
				engWord: card.engWord,
				plWord: card.plWord,
				engSentence: card.engSentence,
				plSentence: card.plSentence,
				status: card.id === id ? card.status : status,
			}))
			return updatedTask
		})
	}

	return (
		<div className='App'>
			{cards.map(({ id, engWord, engSentence, plWord, plSentence, status }) => (
				<Card key={id} sx={{ margin: 2, padding: 2, maxWidth: '400px', position: 'relative' }}>
					<Text sx={{ position: 'absolute', top: 0, right: 0 }}>{id}</Text>
					{turnedCard && (
						<>
							<Text sx={{ fontWeight: 700 }}>{engWord}</Text>
							<Text>{engSentence}</Text>
							<Text>{status}</Text>
							<PrimaryButton
								variant='contained'
								color='success'
								endIcon={<Check />}
								sx={{ m: 1 }}
								onClick={addToKnowHandler(id, status)}>
								I know
							</PrimaryButton>
							<PrimaryButton
								variant='contained'
								color='error'
								endIcon={<CloseIcon />}
								sx={{ m: 1 }}
								onClick={addToKnowHandler(id, status)}>
								I don't know
							</PrimaryButton>
						</>
					)}

					{!turnedCard && (
						<>
							<Text sx={{ fontWeight: 700 }}>{plWord}</Text>
							<Text>{plSentence}</Text>
							<PrimaryButton
								variant='contained'
								color='primary'
								endIcon={<RefreshIcon />}
								onClick={() => {
									setTurnedCard(prevState => !prevState)
								}}>
								Return
							</PrimaryButton>
						</>
					)}
				</Card>
			))}
		</div>
	)
}

export default App

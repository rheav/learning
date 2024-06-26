import { HandPalm, Play } from "phosphor-react";

import * as zod from "zod";
import { differenceInSeconds } from "date-fns";

import { HomeContainer, FormContainer, CountdownContainer, Separator, StartCountDownButton, TaskInput, MinutesAmountInput, StopCountDownButton } from "./styles";
import { useEffect, useState } from "react";
import { NewCycleForm } from "./components/NewCycleForm";
import { Countdown } from "./components/Countdown";

interface Cycle {
	id: string;
	task: string;
	minutesAmount: number;
	startDate: Date;
	interruptedDate?: Date;
	finishedDate?: Date;
}

const Home = () => {
	const [cycles, setCycles] = useState<Cycle[]>([]);
	const [activeCycleId, setActiveCycleId] = useState<string | null>(null);

	const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId);

	function handleCreateNewCycle(data: NewCycleFormData) {
		const id = String(new Date().getTime());

		const newCycle: Cycle = {
			id,
			task: data.task,
			minutesAmount: data.minutesAmount,
			startDate: new Date(),
		};

		setCycles((state) => [...state, newCycle]);
		setActiveCycleId(id);
		setAmountSecondsPassed(0);

		reset();
	}

	function handleInterruptCycle() {
		setCycles((state) =>
			state.map((cycle) => {
				if (cycle.id === activeCycleId) {
					return { ...cycle, interruptedDate: new Date() };
				} else {
					return cycle;
				}
			})
		);

		setActiveCycleId(null);
	}

	const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0;

	const minutesAmount = Math.floor(currentSeconds / 60);
	const secondsAmount = currentSeconds % 60;

	const minutes = String(minutesAmount).padStart(2, "0");
	const seconds = String(secondsAmount).padStart(2, "0");

	useEffect(() => {
		if (activeCycle) {
			document.title = `${activeCycle.task} - ${minutes}:${seconds}`;
		}
	}, [minutes, seconds, activeCycle]);

	const task = watch("task");
	const isSubmitDisabled = !task; // variável auxiliar

	return (
		<HomeContainer>
			<form
				onSubmit={handleSubmit(handleCreateNewCycle)}
				action=""
			>
				<NewCycleForm />
				<Countdown
					activeCycle={activeCycle}
					setCycles={setCycles}
					activeCycleId={activeCycleId}
				/>

				{activeCycle ? (
					<StopCountDownButton
						type="button"
						onClick={handleInterruptCycle}
					>
						<HandPalm size={24} />
						Interromper
					</StopCountDownButton>
				) : (
					<StartCountDownButton
						disabled={isSubmitDisabled}
						type="submit"
					>
						<Play size={24} />
						Começar
					</StartCountDownButton>
				)}
			</form>
		</HomeContainer>
	);
};

export default Home;

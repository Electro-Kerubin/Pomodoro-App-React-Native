import { useEffect, useState } from 'react';
import { Button, Text, View } from 'react-native';
import { CuentaAtras } from './Components/CuentaAtras';
import { TemporizadorToggleButton } from './Components/TemporizadorToggleButton';


export const Contador = () => {

    const TIEMPO_POMODORO = 0.2 * 60 * 1000;
    const TIEMPO_DESCANSO = 0.1 * 60 * 1000;

    const [temporizador, setTermporizador] = useState<number>(TIEMPO_POMODORO);
    const [intervaloTiempo, setIntervaloTiempo] = useState<NodeJS.Timer | null>(null);
    const [temporizadorEncendido, setTermporizadorEncendido] = useState<boolean>(false)
    const [pomodoroMode, setPomodoroMode] = useState<"Concentracion" | "Descanso">("Concentracion");

    // Verifica si el contador llego a cero
    useEffect(() => {
        if (temporizador === 0) {
            stopTimer();

            setPomodoroMode("Descanso");
            setTermporizador(TIEMPO_DESCANSO);
        }

    }, [temporizador]);

    const startTimer = () => {
        setTermporizadorEncendido(true);
        const runTime = setInterval(() => setTermporizador(prev => prev - 1000), 1000);
        setIntervaloTiempo(runTime);
    };

    const stopTimer = () => {
        if (intervaloTiempo != null) {
            clearInterval(intervaloTiempo);
        }
        setTermporizadorEncendido(false);
    };

    const timerDate = new Date(temporizador);

    return (
        <>
            <TemporizadorToggleButton temporizadorEncendido={temporizadorEncendido} startTimer={startTimer} stopTimer={stopTimer} />
            <CuentaAtras timerDate={timerDate} />
        </>
    );
}
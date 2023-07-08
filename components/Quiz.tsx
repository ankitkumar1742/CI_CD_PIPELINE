import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Button, Provider as PaperProvider} from 'react-native-paper';

function Quiz() {
  const [timeLimit, setTimeLimit] = useState<number>(3600);
  const [isQuizOver, setIsQuizOver] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLimit(prevTime => prevTime - 1);
    }, 1000);

    if (timeLimit <= 0) {
      clearInterval(timer);
      setIsQuizOver(true);
    }

    return () => clearInterval(timer);
  }, [timeLimit]);

  const formatTime = (timeInSeconds: number) => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;

    return `${hours.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleFinishQuiz = () => {
    // Handle quiz completion, e.g., show results or navigate to a new screen
  };

  return (
    <PaperProvider>
      <View style={styles.container}>
        <Text style={styles.timerText}>{formatTime(timeLimit)}</Text>
        {isQuizOver ? (
          <Button mode="contained" onPress={handleFinishQuiz}>
            Finish Quiz
          </Button>
        ) : (
          <Text>Quiz Questions...</Text>
        )}
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timerText: {
    fontSize: 24,
    marginBottom: 16,
  },
});

export default Quiz;

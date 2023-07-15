import React, {useState} from 'react';
import {View, TouchableOpacity, Image, StyleSheet} from 'react-native';
import StarIcon from './resource/FilledStar';
import StarFilledIcon from './resource';

type StarRatingProps = {
  defaultRating: number;
  totalStars: number;
  onRate: (rating: number) => void;
};

const StarRatingItem: React.FC<StarRatingProps> = ({
  defaultRating,
  totalStars,
  onRate,
}) => {
  const [rating, setRating] = useState<number>(defaultRating);

  const handleRate = (newRating: number) => {
    setRating(newRating);
    onRate(newRating);
  };

  return (
    <View style={styles.container}>
      {Array.from({length: totalStars}, (_, index) => (
        <TouchableOpacity onPress={() => handleRate(index + 1)} key={index}>
          {index < rating ? (
            <StarFilledIcon width="32" height="32" />
          ) : (
            <StarIcon width="32" height="32" />
          )}
        </TouchableOpacity>
      ))}
    </View>
  );
};

const StarRating: React.FC = () => {
  const handleRate = (rating: number) => {
    console.log(`Selected rating: ${rating}`);
  };

  return (
    <View style={styles.appContainer}>
      <StarRatingItem defaultRating={0} totalStars={5} onRate={handleRate} />
    </View>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'grey',
  },
  container: {
    flexDirection: 'row',
  },
  starImage: {
    width: 30,
    height: 30,
    marginHorizontal: 2,
  },
});

export default StarRating;
